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
