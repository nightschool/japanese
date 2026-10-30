document.addEventListener('DOMContentLoaded', () => {
  
  // --- Voice Initialization ---
  // Best native Japanese voices, in order of preference (Chrome, then macOS/iOS).
  const VOICE_PREFERENCES = ['Google 日本語', 'Kyoko', 'O-ren', 'Otoya', 'Hattori'];
  let preferredVoice = null;

  const loadVoices = () => {
    const jpVoices = speechSynthesis.getVoices()
      .filter(v => v.lang.toLowerCase().replace('_', '-').startsWith('ja'));
    if (jpVoices.length === 0) return;

    for (const name of VOICE_PREFERENCES) {
      const match = jpVoices.find(v => v.name.includes(name));
      if (match) {
        preferredVoice = match;
        return;
      }
    }
    preferredVoice = jpVoices[0];
  };
  speechSynthesis.onvoiceschanged = loadVoices;
  loadVoices(); // Initial call

  // --- Audio Playback ---
  // On their own, these hiragana are read as the particles "wa", "e" and "o".
  // Their katakana twins are never particles, so they get the plain syllable reading.
  const PARTICLE_KANA = { 'は': 'ハ', 'へ': 'ヘ', 'を': 'ヲ' };

  const AUDIO_CACHE_LIMIT = 200;
  const audioCache = new Map();
  let currentAudio = null;
  let playbackToken = 0;
  let slowSpeech = false;

  const cacheAudio = (key, audio) => {
    if (audioCache.size >= AUDIO_CACHE_LIMIT) {
      audioCache.delete(audioCache.keys().next().value); // Evict least recently added
    }
    audioCache.set(key, audio);
  };

  const speakNatively = (text) => {
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = 'ja-JP';
    utterance.rate = slowSpeech ? 0.5 : 0.85;
    if (preferredVoice) {
      utterance.voice = preferredVoice;
    }
    speechSynthesis.speak(utterance);
  };

  const playAudio = (text) => {
    if (!text) return;

    const phrase = PARTICLE_KANA[text] || text;
    const attempt = ++playbackToken;

    // Never let two clips overlap
    if (currentAudio) {
      currentAudio.pause();
      currentAudio.currentTime = 0;
    }
    speechSynthesis.cancel();

    let fallbackFired = false;
    const fallback = (reason) => {
      // Ignore failures from a clip the user has already moved past
      if (attempt !== playbackToken || fallbackFired) return;
      fallbackFired = true;
      console.warn('Cloud TTS failed, falling back to native TTS', reason);
      speakNatively(phrase);
    };

    const key = `${slowSpeech ? 'slow' : 'normal'}:${phrase}`;
    let audio = audioCache.get(key);

    if (!audio) {
      const params = new URLSearchParams({ client: 'gtx', ie: 'UTF-8', tl: 'ja', q: phrase });
      if (slowSpeech) params.set('ttsspeed', '0.24'); // The only slow value the endpoint honours
      audio = new Audio(`https://translate.googleapis.com/translate_tts?${params}`);
      cacheAudio(key, audio);
    }

    // Covers HTTP errors (the endpoint rate-limits) and decode failures,
    // which never reach the play() promise.
    audio.onerror = () => {
      audioCache.delete(key); // A failed clip must not be served from cache
      fallback(audio.error);
    };

    currentAudio = audio;
    audio.currentTime = 0;
    audio.play().catch(fallback);
  };

  // --- Navigation Logic ---
  const navItems = document.querySelectorAll('.nav-item');
  const views = document.querySelectorAll('.view');
  
  navItems.forEach(item => {
    item.addEventListener('click', () => {
      navItems.forEach(n => n.classList.remove('active'));
      views.forEach(v => v.classList.remove('active'));
      
      item.classList.add('active');
      const targetView = document.getElementById(`view-${item.dataset.view}`);
      targetView.classList.add('active');
      if (item.dataset.view === 'lookup') lookupInput.focus();
    });
  });



  // --- Kana Trainer Logic ---
  const kanaGrid = document.getElementById('kana-grid-container');
  const kanaTitle = document.getElementById('kana-title');
  const btnHiragana = document.getElementById('btn-hiragana');
  const btnKatakana = document.getElementById('btn-katakana');
  
  let selectedKanaIndex = 0;

  const updateKanaFocus = (newIndex) => {
    const cards = kanaGrid.querySelectorAll('.kana-card');
    if (cards.length === 0) return;
    
    if (newIndex < 0) newIndex = 0;
    if (newIndex >= cards.length) newIndex = cards.length - 1;

    cards.forEach(c => c.classList.remove('focused'));
    
    selectedKanaIndex = newIndex;
    const targetCard = cards[selectedKanaIndex];
    if (targetCard && !targetCard.classList.contains('empty')) {
      targetCard.classList.add('focused');
      // Scroll into view if it's out of viewport bounds
      targetCard.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    }
  };

  const moveFocus = (step) => {
    const cards = kanaGrid.querySelectorAll('.kana-card');
    if (cards.length === 0) return;
    
    let nextIndex = selectedKanaIndex + step;
    
    // Skip empty cells
    while (nextIndex >= 0 && nextIndex < cards.length && cards[nextIndex].classList.contains('empty')) {
      nextIndex += step;
    }

    if (nextIndex >= 0 && nextIndex < cards.length && !cards[nextIndex].classList.contains('empty')) {
      if (selectedKanaIndex !== nextIndex) {
        updateKanaFocus(nextIndex);
        
        // Auto-play audio when navigating to a new card
        const kanaText = cards[nextIndex].querySelector('.kana-char').textContent;
        playAudio(kanaText);
      }
    }
  };

  // Keyboard Event Listener
  document.addEventListener('keydown', (e) => {
    const kanaViewActive = document.getElementById('view-kana').classList.contains('active');
    if (!kanaViewActive) return;

    if (e.key === 'ArrowRight') {
      e.preventDefault();
      moveFocus(1);
    } else if (e.key === 'ArrowLeft') {
      e.preventDefault();
      moveFocus(-1);
    } else if (e.key === 'ArrowDown') {
      e.preventDefault();
      moveFocus(5);
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      moveFocus(-5);
    } else if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      const cards = kanaGrid.querySelectorAll('.kana-card');
      const targetCard = cards[selectedKanaIndex];
      if (targetCard && !targetCard.classList.contains('empty')) {
        targetCard.click();
        targetCard.classList.add('active-press');
        setTimeout(() => targetCard.classList.remove('active-press'), 150);
      }
    }
  });

  const renderKana = (data) => {
    kanaGrid.innerHTML = ''; // clear grid
    data.forEach((item, index) => {
      const card = document.createElement('div');
      if (item.kana === '') {
        card.className = 'kana-card empty';
      } else {
        card.className = 'kana-card';
        card.innerHTML = `
          <div class="kana-char">${item.kana}</div>
          <div class="kana-romaji">${item.romaji}</div>
        `;
        card.addEventListener('click', () => {
          updateKanaFocus(index);
          playAudio(item.kana);
        });
      }
      kanaGrid.appendChild(card);
    });

    // Reset focus to the first valid card
    selectedKanaIndex = 0;
    while(selectedKanaIndex < data.length && data[selectedKanaIndex].kana === '') {
      selectedKanaIndex++;
    }
    setTimeout(() => updateKanaFocus(selectedKanaIndex), 50);
  };

  // Initial render (Hiragana)
  renderKana(hiraganaData);

  // Toggles
  btnHiragana.addEventListener('click', () => {
    btnHiragana.classList.add('btn-primary');
    btnHiragana.classList.remove('btn-secondary');
    btnKatakana.classList.remove('btn-primary');
    btnKatakana.classList.add('btn-secondary');
    kanaTitle.textContent = 'Hiragana Chart (ひらがな)';
    renderKana(hiraganaData);
  });

  btnKatakana.addEventListener('click', () => {
    btnKatakana.classList.add('btn-primary');
    btnKatakana.classList.remove('btn-secondary');
    btnHiragana.classList.remove('btn-primary');
    btnHiragana.classList.add('btn-secondary');
    kanaTitle.textContent = 'Katakana Chart (カタカナ)';
    renderKana(katakanaData);
  });

  // --- Flashcard Logic ---
  let currentCardIndex = 0;
  const flashcardElement = document.getElementById('flashcard');
  const jpText = document.getElementById('fc-jp');
  const enText = document.getElementById('fc-en');
  const romajiText = document.getElementById('fc-romaji');
  const btnPlayVocab = document.getElementById('btn-play-vocab');
  
  const updateCard = () => {
    flashcardElement.classList.remove('flipped');
    setTimeout(() => {
      const cardData = vocabData[currentCardIndex];
      jpText.textContent = cardData.japanese;
      enText.textContent = cardData.english;
      romajiText.textContent = cardData.romaji;
    }, 150);
  };
  
  let cardHistory = [];
  let historyIndex = -1;

  const getRandomIndex = () => Math.floor(Math.random() * vocabData.length);

  const loadRandomCard = () => {
    const nextIndex = getRandomIndex();
    cardHistory.push(nextIndex);
    historyIndex = cardHistory.length - 1;
    currentCardIndex = nextIndex;
    updateCard();
  };

  const loadPrevCard = () => {
    if (historyIndex > 0) {
      historyIndex--;
      currentCardIndex = cardHistory[historyIndex];
      updateCard();
    }
  };

  const loadNextCard = () => {
    if (historyIndex < cardHistory.length - 1) {
      historyIndex++;
      currentCardIndex = cardHistory[historyIndex];
      updateCard();
    } else {
      loadRandomCard();
    }
  };

  // Initialize first card
  loadRandomCard();
  
  flashcardElement.addEventListener('click', (e) => {
    if (e.target.closest('#btn-play-vocab')) return;
    flashcardElement.classList.toggle('flipped');
  });

  btnPlayVocab.addEventListener('click', (e) => {
    e.stopPropagation();
    playAudio(vocabData[currentCardIndex].japanese);
  });
  
  document.getElementById('btn-next').addEventListener('click', loadNextCard);
  document.getElementById('btn-prev').addEventListener('click', loadPrevCard);

  // --- Popular Sentences Logic ---
  const sentenceContainer = document.getElementById('sentence-container');
  const renderSentences = () => {
    sentenceContainer.innerHTML = '';

    // Preserve the order categories first appear in the data
    const categories = [];
    sentenceData.forEach(item => {
      if (!categories.includes(item.category)) categories.push(item.category);
    });

    categories.forEach(category => {
      const groupDiv = document.createElement('div');
      groupDiv.className = 'sentence-group';

      const header = document.createElement('div');
      header.className = 'sentence-group-header';
      header.textContent = category;
      groupDiv.appendChild(header);

      sentenceData.filter(item => item.category === category).forEach(item => {
        const row = document.createElement('div');
        row.className = 'sentence-row';
        row.innerHTML = `
          <div class="sentence-content">
            <div class="sentence-jp">${item.japanese}</div>
            <div class="sentence-romaji">${item.romaji}</div>
            <div class="sentence-en">${item.english}</div>
          </div>
          <button class="btn-icon sentence-play-btn" title="Play Pronunciation">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"></polygon><path d="M15.54 8.46a5 5 0 0 1 0 7.07"></path><path d="M19.07 4.93a10 10 0 0 1 0 14.14"></path></svg>
          </button>
        `;
        row.addEventListener('click', () => {
          playAudio(item.japanese);
        });
        groupDiv.appendChild(row);
      });

      sentenceContainer.appendChild(groupDiv);
    });
  };

  if (sentenceContainer) {
    renderSentences();
  }

  // Slow playback applies to every view, but lives here where shadowing matters most
  const btnSpeed = document.getElementById('btn-speed');
  const speedLabel = document.getElementById('speed-label');
  btnSpeed.addEventListener('click', () => {
    slowSpeech = !slowSpeech;
    speedLabel.textContent = `Slow playback: ${slowSpeech ? 'On' : 'Off'}`;
    btnSpeed.setAttribute('aria-pressed', String(slowSpeech));
    btnSpeed.classList.toggle('btn-primary', slowSpeech);
    btnSpeed.classList.toggle('btn-secondary', !slowSpeech);
  });

  // --- Word Lookup Logic ---
  const LOOKUP_HISTORY_KEY = 'kotoba.lookupHistory';
  const LOOKUP_HISTORY_LIMIT = 500;
  const KANA_RE = /[぀-ヿｦ-ﾟ]/;
  const JAPANESE_RE = /[぀-ヿ㐀-鿿ｦ-ﾟ]/;
  const PLAY_ICON = '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"></polygon><path d="M15.54 8.46a5 5 0 0 1 0 7.07"></path><path d="M19.07 4.93a10 10 0 0 1 0 14.14"></path></svg>';

  const lookupForm = document.getElementById('lookup-form');
  const lookupInput = document.getElementById('lookup-input');
  const lookupResult = document.getElementById('lookup-result');
  const historyList = document.getElementById('history-list');
  const historyCount = document.getElementById('history-count');
  const historyFilter = document.getElementById('history-filter');

  // Lookups and remote translations are untrusted, so never inject them raw
  const escapeHtml = (text) => String(text ?? '').replace(/[&<>"']/g, c => (
    { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]
  ));

  const localWords = [
    ...n5VocabData.map(item => ({ ...item, level: 'N5' })),
    ...n4VocabData.map(item => ({ ...item, level: 'N4' })),
  ];

  const glosses = (english) => english.toLowerCase().split(/[,;/]/).map(g => g.trim().replace(/^to /, ''));

  const findLocalMatches = (query, japanese) => {
    const q = query.toLowerCase().replace(/^to /, '');
    const score = (item) => {
      if (item.japanese === japanese || item.japanese === query) return 3;
      if (item.romaji.toLowerCase() === q || glosses(item.english).includes(q)) return 2;
      if (japanese && japanese.length > 1 && item.japanese.includes(japanese)) return 1;
      return 0;
    };
    return localWords
      .map(item => ({ item, rank: score(item) }))
      .filter(m => m.rank > 0)
      .sort((a, b) => b.rank - a.rank)
      .slice(0, 6)
      .map(m => m.item);
  };

  // Same free Google endpoint family as the audio; it allows cross-origin calls
  const translate = async (text, sl, tl) => {
    const params = new URLSearchParams({ client: 'gtx', ie: 'UTF-8', sl, tl, q: text });
    ['t', 'bd', 'rm'].forEach(dt => params.append('dt', dt));
    const res = await fetch(`https://translate.googleapis.com/translate_a/single?${params}`);
    if (!res.ok) throw new Error(`Translate request failed: HTTP ${res.status}`);
    const data = await res.json();

    const segments = data[0] || [];
    const romanization = segments.find(s => s[0] == null) || [];
    return {
      translation: segments.filter(s => typeof s[0] === 'string').map(s => s[0]).join(''),
      sourceRomaji: romanization[3] || '',
      targetRomaji: romanization[2] || '',
      senses: (data[1] || []).map(([pos, terms]) => ({ pos, terms: terms.slice(0, 6) })).slice(0, 4),
      source: data[2],
    };
  };

  // Turns any input (kana, kanji, romaji, English, Chinese) into a Japanese headword
  const resolveJapanese = async (query) => {
    if (KANA_RE.test(query)) return query;

    const romajiMatch = localWords.find(item => item.romaji.toLowerCase() === query.toLowerCase());
    if (romajiMatch) return romajiMatch.japanese;

    const result = await translate(query, 'auto', 'ja');
    // Kanji-only input detected as Japanese stays as typed; Chinese gets translated
    if (result.source === 'ja' && JAPANESE_RE.test(query)) return query;
    return result.translation;
  };

  const fetchEntry = async (query) => {
    const japanese = await resolveJapanese(query);
    if (!JAPANESE_RE.test(japanese)) {
      throw new Error(`No Japanese word found for "${query}". Try typing it in kana.`);
    }
    const [en, zh] = await Promise.all([
      translate(japanese, 'ja', 'en'),
      translate(japanese, 'ja', 'zh-CN'),
    ]);
    const local = localWords.find(item => item.japanese === japanese);
    return {
      japanese,
      romaji: en.sourceRomaji || local?.romaji || '',
      english: en.translation,
      chinese: zh.translation,
      senses: en.senses,
      level: local?.level || '',
    };
  };

  // --- Lookup History (persisted in localStorage) ---
  const loadHistory = () => {
    try {
      const parsed = JSON.parse(localStorage.getItem(LOOKUP_HISTORY_KEY) || '[]');
      return Array.isArray(parsed) ? parsed : [];
    } catch (err) {
      console.warn('Could not read lookup history', err);
      return [];
    }
  };

  let lookupHistory = loadHistory();

  const saveHistory = () => {
    try {
      localStorage.setItem(LOOKUP_HISTORY_KEY, JSON.stringify(lookupHistory));
    } catch (err) {
      console.warn('Could not save lookup history', err);
    }
  };

  const recordLookup = (query, entry) => {
    const now = Date.now();
    const existing = lookupHistory.find(h => h.japanese === entry.japanese);
    lookupHistory = lookupHistory.filter(h => h !== existing);

    const record = {
      ...entry,
      query,
      count: (existing?.count || 0) + 1,
      firstLookedUp: existing?.firstLookedUp || now,
      lastLookedUp: now,
    };
    lookupHistory.unshift(record); // Most recent first
    lookupHistory = lookupHistory.slice(0, LOOKUP_HISTORY_LIMIT);
    saveHistory();
    return record;
  };

  const formatDate = (timestamp) => new Date(timestamp).toLocaleDateString(undefined, { month: 'short', day: 'numeric', year: 'numeric' });

  const renderHistory = () => {
    const filter = historyFilter.value.trim().toLowerCase();
    const items = lookupHistory.filter(h => !filter ||
      [h.japanese, h.romaji, h.english, h.chinese, h.query].some(f => (f || '').toLowerCase().includes(filter)));

    historyCount.textContent = lookupHistory.length ? `(${lookupHistory.length})` : '';

    if (lookupHistory.length === 0) {
      historyList.innerHTML = '<div class="lookup-empty">Words you look up will appear here.</div>';
      return;
    }
    if (items.length === 0) {
      historyList.innerHTML = '<div class="lookup-empty">No saved words match that filter.</div>';
      return;
    }

    historyList.innerHTML = '';
    items.forEach(h => {
      const row = document.createElement('div');
      row.className = 'history-row';
      row.innerHTML = `
        <div class="history-main">
          <span class="history-jp">${escapeHtml(h.japanese)}</span>
          <span class="history-romaji">${escapeHtml(h.romaji)}</span>
          <span class="history-meaning">${escapeHtml(h.english)}${h.chinese ? ` · ${escapeHtml(h.chinese)}` : ''}</span>
        </div>
        <div class="history-meta">
          ${h.count > 1 ? `<span class="history-badge" title="Times looked up">×${h.count}</span>` : ''}
          <span>${formatDate(h.lastLookedUp)}</span>
        </div>
        <button class="btn-icon history-play" title="Play Pronunciation">${PLAY_ICON}</button>
        <button class="btn-icon history-remove" title="Remove from history">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 6 6 18"></path><path d="m6 6 12 12"></path></svg>
        </button>
      `;
      row.addEventListener('click', (e) => {
        if (e.target.closest('.history-play')) {
          playAudio(h.japanese);
        } else if (e.target.closest('.history-remove')) {
          lookupHistory = lookupHistory.filter(item => item !== h);
          saveHistory();
          renderHistory();
        } else {
          // Saved entries show instantly, without a network round trip
          renderResult(h, findLocalMatches(h.query || h.japanese, h.japanese));
          lookupResult.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
        }
      });
      historyList.appendChild(row);
    });
  };

  const renderResult = (entry, localMatches) => {
    const senses = (entry.senses || []).map(s => `
      <div class="lookup-sense">
        <span class="lookup-pos">${escapeHtml(s.pos)}</span>
        <span>${s.terms.map(escapeHtml).join(', ')}</span>
      </div>
    `).join('');

    const related = localMatches.map(item => `
      <div class="dict-card lookup-local" data-jp="${escapeHtml(item.japanese)}">
        <div>
          <div class="dict-jp">${escapeHtml(item.japanese)} <span class="lookup-level">${item.level}</span></div>
          <div class="dict-romaji">${escapeHtml(item.romaji)}</div>
          <div class="dict-en">${escapeHtml(item.english)}</div>
        </div>
        <button class="btn-icon" title="Play Pronunciation">${PLAY_ICON}</button>
      </div>
    `).join('');

    lookupResult.innerHTML = `
      <div class="lookup-card">
        <div class="lookup-card-head">
          <div>
            <div class="lookup-jp">${escapeHtml(entry.japanese)}
              ${entry.level ? `<span class="lookup-level">${entry.level}</span>` : ''}
            </div>
            <div class="lookup-romaji">${escapeHtml(entry.romaji)}</div>
          </div>
          <button class="btn-icon" id="btn-play-lookup" title="Play Pronunciation">
            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"></polygon><path d="M15.54 8.46a5 5 0 0 1 0 7.07"></path><path d="M19.07 4.93a10 10 0 0 1 0 14.14"></path></svg>
          </button>
        </div>
        <div class="lookup-meanings">
          ${entry.english ? `<div class="lookup-meaning"><span class="lookup-lang">EN</span>${escapeHtml(entry.english)}</div>` : ''}
          ${entry.chinese ? `<div class="lookup-meaning"><span class="lookup-lang">中</span>${escapeHtml(entry.chinese)}</div>` : ''}
        </div>
        ${senses ? `<div class="lookup-senses">${senses}</div>` : ''}
      </div>
      ${related ? `<div class="sentence-group-header lookup-related-header">In your N5 / N4 lists</div><div class="dict-grid">${related}</div>` : ''}
    `;

    document.getElementById('btn-play-lookup').addEventListener('click', () => playAudio(entry.japanese));
    lookupResult.querySelectorAll('.lookup-local').forEach(card => {
      card.addEventListener('click', () => playAudio(card.dataset.jp));
    });
  };

  let lookupToken = 0;

  const lookupWord = async (rawQuery) => {
    const query = rawQuery.trim();
    if (!query) return;
    const attempt = ++lookupToken;
    lookupResult.innerHTML = '<div class="lookup-empty">Looking up…</div>';

    let entry;
    try {
      entry = await fetchEntry(query);
    } catch (err) {
      if (attempt !== lookupToken) return;
      // Offline or rate-limited: fall back to the built-in word lists
      const local = findLocalMatches(query, query);
      if (local.length === 0) {
        lookupResult.innerHTML = `<div class="lookup-empty lookup-error">${escapeHtml(err.message)}</div>`;
        return;
      }
      console.warn('Online lookup failed, using local word lists', err);
      entry = { japanese: local[0].japanese, romaji: local[0].romaji, english: local[0].english, chinese: '', senses: [], level: local[0].level };
    }
    if (attempt !== lookupToken) return; // A newer lookup has started

    const record = recordLookup(query, entry);
    renderResult(record, findLocalMatches(query, record.japanese));
    renderHistory();
    playAudio(record.japanese);
  };

  lookupForm.addEventListener('submit', (e) => {
    e.preventDefault();
    lookupWord(lookupInput.value);
  });

  historyFilter.addEventListener('input', renderHistory);

  document.getElementById('btn-clear-history').addEventListener('click', () => {
    if (lookupHistory.length === 0) return;
    if (!confirm(`Delete all ${lookupHistory.length} saved words?`)) return;
    lookupHistory = [];
    saveHistory();
    renderHistory();
  });

  renderHistory();

  // --- Dictionary Rendering Logic (N5 & N4) ---
  const renderDictionary = (dataArray, containerId) => {
    const container = document.getElementById(containerId);
    if (!container) return;
    
    // Group by first letter of romaji
    const groups = {};
    dataArray.forEach(item => {
      if (!item.romaji) return;
      const firstLetter = item.romaji.charAt(0).toUpperCase();
      if (!groups[firstLetter]) groups[firstLetter] = [];
      groups[firstLetter].push(item);
    });

    const sortedLetters = Object.keys(groups).sort();
    
    container.innerHTML = '';
    
    sortedLetters.forEach(letter => {
      // Group Wrapper
      const groupDiv = document.createElement('div');
      groupDiv.className = 'dict-group';
      
      // Group Header
      const header = document.createElement('div');
      header.className = 'dict-group-header';
      header.textContent = letter;
      groupDiv.appendChild(header);
      
      // Grid for cards
      const grid = document.createElement('div');
      grid.className = 'dict-grid';
      
      groups[letter].forEach(item => {
        const card = document.createElement('div');
        card.className = 'dict-card';
        card.innerHTML = `
          <div>
            <div class="dict-jp">${item.japanese}</div>
            <div class="dict-romaji">${item.romaji}</div>
            <div class="dict-en">${item.english}</div>
          </div>
          <button class="btn-icon" title="Play Pronunciation">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"></polygon><path d="M15.54 8.46a5 5 0 0 1 0 7.07"></path><path d="M19.07 4.93a10 10 0 0 1 0 14.14"></path></svg>
          </button>
        `;
        
        card.addEventListener('click', () => {
          playAudio(item.japanese);
        });
        
        grid.appendChild(card);
      });
      
      groupDiv.appendChild(grid);
      container.appendChild(groupDiv);
    });
  };

  if (typeof n5VocabData !== 'undefined') renderDictionary(n5VocabData, 'dict-n5-container');
  if (typeof n4VocabData !== 'undefined') renderDictionary(n4VocabData, 'dict-n4-container');

});
