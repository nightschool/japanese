const hiraganaData = [
  // Seion (Basic)
  { kana: 'あ', romaji: 'a' }, { kana: 'い', romaji: 'i' }, { kana: 'う', romaji: 'u' }, { kana: 'え', romaji: 'e' }, { kana: 'お', romaji: 'o' },
  { kana: 'か', romaji: 'ka' }, { kana: 'き', romaji: 'ki' }, { kana: 'く', romaji: 'ku' }, { kana: 'け', romaji: 'ke' }, { kana: 'こ', romaji: 'ko' },
  { kana: 'さ', romaji: 'sa' }, { kana: 'し', romaji: 'shi' }, { kana: 'す', romaji: 'su' }, { kana: 'せ', romaji: 'se' }, { kana: 'そ', romaji: 'so' },
  { kana: 'た', romaji: 'ta' }, { kana: 'ち', romaji: 'chi' }, { kana: 'つ', romaji: 'tsu' }, { kana: 'て', romaji: 'te' }, { kana: 'と', romaji: 'to' },
  { kana: 'な', romaji: 'na' }, { kana: 'に', romaji: 'ni' }, { kana: 'ぬ', romaji: 'nu' }, { kana: 'ね', romaji: 'ne' }, { kana: 'の', romaji: 'no' },
  { kana: 'は', romaji: 'ha' }, { kana: 'ひ', romaji: 'hi' }, { kana: 'ふ', romaji: 'fu' }, { kana: 'へ', romaji: 'he' }, { kana: 'ほ', romaji: 'ho' },
  { kana: 'ま', romaji: 'ma' }, { kana: 'み', romaji: 'mi' }, { kana: 'む', romaji: 'mu' }, { kana: 'め', romaji: 'me' }, { kana: 'も', romaji: 'mo' },
  { kana: 'や', romaji: 'ya' }, { kana: '', romaji: '' }, { kana: 'ゆ', romaji: 'yu' }, { kana: '', romaji: '' }, { kana: 'よ', romaji: 'yo' },
  { kana: 'ら', romaji: 'ra' }, { kana: 'り', romaji: 'ri' }, { kana: 'る', romaji: 'ru' }, { kana: 'れ', romaji: 're' }, { kana: 'ろ', romaji: 'ro' },
  { kana: 'わ', romaji: 'wa' }, { kana: '', romaji: '' }, { kana: '', romaji: '' }, { kana: '', romaji: '' }, { kana: 'を', romaji: 'wo' },
  { kana: 'ん', romaji: 'n' }, { kana: '', romaji: '' }, { kana: '', romaji: '' }, { kana: '', romaji: '' }, { kana: '', romaji: '' },
  
  // Dakuten & Handakuten (浊音 & 半浊音)
  { kana: 'が', romaji: 'ga' }, { kana: 'ぎ', romaji: 'gi' }, { kana: 'ぐ', romaji: 'gu' }, { kana: 'げ', romaji: 'ge' }, { kana: 'ご', romaji: 'go' },
  { kana: 'ざ', romaji: 'za' }, { kana: 'じ', romaji: 'ji' }, { kana: 'ず', romaji: 'zu' }, { kana: 'ぜ', romaji: 'ze' }, { kana: 'ぞ', romaji: 'zo' },
  { kana: 'だ', romaji: 'da' }, { kana: 'ぢ', romaji: 'ji' }, { kana: 'づ', romaji: 'zu' }, { kana: 'で', romaji: 'de' }, { kana: 'ど', romaji: 'do' },
  { kana: 'ば', romaji: 'ba' }, { kana: 'び', romaji: 'bi' }, { kana: 'ぶ', romaji: 'bu' }, { kana: 'べ', romaji: 'be' }, { kana: 'ぼ', romaji: 'bo' },
  { kana: 'ぱ', romaji: 'pa' }, { kana: 'ぴ', romaji: 'pi' }, { kana: 'ぷ', romaji: 'pu' }, { kana: 'ぺ', romaji: 'pe' }, { kana: 'ぽ', romaji: 'po' },

  // Yoon (拗音) - padded to match 5 columns
  { kana: 'きゃ', romaji: 'kya' }, { kana: '', romaji: '' }, { kana: 'きゅ', romaji: 'kyu' }, { kana: '', romaji: '' }, { kana: 'きょ', romaji: 'kyo' },
  { kana: 'しゃ', romaji: 'sha' }, { kana: '', romaji: '' }, { kana: 'しゅ', romaji: 'shu' }, { kana: '', romaji: '' }, { kana: 'しょ', romaji: 'sho' },
  { kana: 'ちゃ', romaji: 'cha' }, { kana: '', romaji: '' }, { kana: 'ちゅ', romaji: 'chu' }, { kana: '', romaji: '' }, { kana: 'ちょ', romaji: 'cho' },
  { kana: 'にゃ', romaji: 'nya' }, { kana: '', romaji: '' }, { kana: 'にゅ', romaji: 'nyu' }, { kana: '', romaji: '' }, { kana: 'にょ', romaji: 'nyo' },
  { kana: 'ひゃ', romaji: 'hya' }, { kana: '', romaji: '' }, { kana: 'ひゅ', romaji: 'hyu' }, { kana: '', romaji: '' }, { kana: 'ひょ', romaji: 'hyo' },
  { kana: 'みゃ', romaji: 'mya' }, { kana: '', romaji: '' }, { kana: 'みゅ', romaji: 'myu' }, { kana: '', romaji: '' }, { kana: 'みょ', romaji: 'myo' },
  { kana: 'りゃ', romaji: 'rya' }, { kana: '', romaji: '' }, { kana: 'りゅ', romaji: 'ryu' }, { kana: '', romaji: '' }, { kana: 'りょ', romaji: 'ryo' },
  { kana: 'ぎゃ', romaji: 'gya' }, { kana: '', romaji: '' }, { kana: 'ぎゅ', romaji: 'gyu' }, { kana: '', romaji: '' }, { kana: 'ぎょ', romaji: 'gyo' },
  { kana: 'じゃ', romaji: 'ja' }, { kana: '', romaji: '' }, { kana: 'じゅ', romaji: 'ju' }, { kana: '', romaji: '' }, { kana: 'じょ', romaji: 'jo' },
  { kana: 'びゃ', romaji: 'bya' }, { kana: '', romaji: '' }, { kana: 'びゅ', romaji: 'byu' }, { kana: '', romaji: '' }, { kana: 'びょ', romaji: 'byo' },
  { kana: 'ぴゃ', romaji: 'pya' }, { kana: '', romaji: '' }, { kana: 'ぴゅ', romaji: 'pyu' }, { kana: '', romaji: '' }, { kana: 'ぴょ', romaji: 'pyo' }
];

const katakanaData = [
  // Seion (Basic)
  { kana: 'ア', romaji: 'a' }, { kana: 'イ', romaji: 'i' }, { kana: 'ウ', romaji: 'u' }, { kana: 'エ', romaji: 'e' }, { kana: 'オ', romaji: 'o' },
  { kana: 'カ', romaji: 'ka' }, { kana: 'キ', romaji: 'ki' }, { kana: 'ク', romaji: 'ku' }, { kana: 'ケ', romaji: 'ke' }, { kana: 'コ', romaji: 'ko' },
  { kana: 'サ', romaji: 'sa' }, { kana: 'シ', romaji: 'shi' }, { kana: 'ス', romaji: 'su' }, { kana: 'セ', romaji: 'se' }, { kana: 'ソ', romaji: 'so' },
  { kana: 'タ', romaji: 'ta' }, { kana: 'チ', romaji: 'chi' }, { kana: 'ツ', romaji: 'tsu' }, { kana: 'テ', romaji: 'te' }, { kana: 'ト', romaji: 'to' },
  { kana: 'ナ', romaji: 'na' }, { kana: 'ニ', romaji: 'ni' }, { kana: 'ヌ', romaji: 'nu' }, { kana: 'ネ', romaji: 'ne' }, { kana: 'ノ', romaji: 'no' },
  { kana: 'ハ', romaji: 'ha' }, { kana: 'ヒ', romaji: 'hi' }, { kana: 'フ', romaji: 'fu' }, { kana: 'ヘ', romaji: 'he' }, { kana: 'ホ', romaji: 'ho' },
  { kana: 'マ', romaji: 'ma' }, { kana: 'ミ', romaji: 'mi' }, { kana: 'ム', romaji: 'mu' }, { kana: 'メ', romaji: 'me' }, { kana: 'モ', romaji: 'mo' },
  { kana: 'ヤ', romaji: 'ya' }, { kana: '', romaji: '' }, { kana: 'ユ', romaji: 'yu' }, { kana: '', romaji: '' }, { kana: 'ヨ', romaji: 'yo' },
  { kana: 'ラ', romaji: 'ra' }, { kana: 'リ', romaji: 'ri' }, { kana: 'ル', romaji: 'ru' }, { kana: 'レ', romaji: 're' }, { kana: 'ロ', romaji: 'ro' },
  { kana: 'ワ', romaji: 'wa' }, { kana: '', romaji: '' }, { kana: '', romaji: '' }, { kana: '', romaji: '' }, { kana: 'ヲ', romaji: 'wo' },
  { kana: 'ン', romaji: 'n' }, { kana: '', romaji: '' }, { kana: '', romaji: '' }, { kana: '', romaji: '' }, { kana: '', romaji: '' },
  
  // Dakuten & Handakuten (浊音 & 半浊音)
  { kana: 'ガ', romaji: 'ga' }, { kana: 'ギ', romaji: 'gi' }, { kana: 'グ', romaji: 'gu' }, { kana: 'ゲ', romaji: 'ge' }, { kana: 'ゴ', romaji: 'go' },
  { kana: 'ザ', romaji: 'za' }, { kana: 'ジ', romaji: 'ji' }, { kana: 'ズ', romaji: 'zu' }, { kana: 'ゼ', romaji: 'ze' }, { kana: 'ゾ', romaji: 'zo' },
  { kana: 'ダ', romaji: 'da' }, { kana: 'ヂ', romaji: 'ji' }, { kana: 'ヅ', romaji: 'zu' }, { kana: 'デ', romaji: 'de' }, { kana: 'ド', romaji: 'do' },
  { kana: 'バ', romaji: 'ba' }, { kana: 'ビ', romaji: 'bi' }, { kana: 'ブ', romaji: 'bu' }, { kana: 'ベ', romaji: 'be' }, { kana: 'ボ', romaji: 'bo' },
  { kana: 'パ', romaji: 'pa' }, { kana: 'ピ', romaji: 'pi' }, { kana: 'プ', romaji: 'pu' }, { kana: 'ペ', romaji: 'pe' }, { kana: 'ポ', romaji: 'po' },

  // Yoon (拗音) - padded to match 5 columns
  { kana: 'キャ', romaji: 'kya' }, { kana: '', romaji: '' }, { kana: 'キュ', romaji: 'kyu' }, { kana: '', romaji: '' }, { kana: 'キョ', romaji: 'kyo' },
  { kana: 'シャ', romaji: 'sha' }, { kana: '', romaji: '' }, { kana: 'シュ', romaji: 'shu' }, { kana: '', romaji: '' }, { kana: 'ショ', romaji: 'sho' },
  { kana: 'チャ', romaji: 'cha' }, { kana: '', romaji: '' }, { kana: 'チュ', romaji: 'chu' }, { kana: '', romaji: '' }, { kana: 'チョ', romaji: 'cho' },
  { kana: 'ニャ', romaji: 'nya' }, { kana: '', romaji: '' }, { kana: 'ニュ', romaji: 'nyu' }, { kana: '', romaji: '' }, { kana: 'ニョ', romaji: 'nyo' },
  { kana: 'ヒャ', romaji: 'hya' }, { kana: '', romaji: '' }, { kana: 'ヒュ', romaji: 'hyu' }, { kana: '', romaji: '' }, { kana: 'ヒョ', romaji: 'hyo' },
  { kana: 'ミャ', romaji: 'mya' }, { kana: '', romaji: '' }, { kana: 'ミュ', romaji: 'myu' }, { kana: '', romaji: '' }, { kana: 'ミョ', romaji: 'myo' },
  { kana: 'リャ', romaji: 'rya' }, { kana: '', romaji: '' }, { kana: 'リュ', romaji: 'ryu' }, { kana: '', romaji: '' }, { kana: 'リョ', romaji: 'ryo' },
  { kana: 'ギャ', romaji: 'gya' }, { kana: '', romaji: '' }, { kana: 'ギュ', romaji: 'gyu' }, { kana: '', romaji: '' }, { kana: 'ギョ', romaji: 'gyo' },
  { kana: 'ジャ', romaji: 'ja' }, { kana: '', romaji: '' }, { kana: 'ジュ', romaji: 'ju' }, { kana: '', romaji: '' }, { kana: 'ジョ', romaji: 'jo' },
  { kana: 'ビャ', romaji: 'bya' }, { kana: '', romaji: '' }, { kana: 'ビュ', romaji: 'byu' }, { kana: '', romaji: '' }, { kana: 'ビョ', romaji: 'byo' },
  { kana: 'ピャ', romaji: 'pya' }, { kana: '', romaji: '' }, { kana: 'ピュ', romaji: 'pyu' }, { kana: '', romaji: '' }, { kana: 'ピョ', romaji: 'pyo' }
];

const n5VocabData = [
  {
    "japanese": "あびる",
    "romaji": "abiru",
    "english": "to bathe, to shower"
  },
  {
    "japanese": "危ない",
    "romaji": "abunai",
    "english": "dangerous"
  },
  {
    "japanese": "あちら",
    "romaji": "achira",
    "english": "there"
  },
  {
    "japanese": "上げる",
    "romaji": "ageru",
    "english": "to give"
  },
  {
    "japanese": "赤",
    "romaji": "aka",
    "english": "red"
  },
  {
    "japanese": "赤い",
    "romaji": "akai",
    "english": "red"
  },
  {
    "japanese": "明い",
    "romaji": "akarui",
    "english": "bright"
  },
  {
    "japanese": "開ける",
    "romaji": "akeru",
    "english": "to open"
  },
  {
    "japanese": "秋",
    "romaji": "aki",
    "english": "autumn"
  },
  {
    "japanese": "開く",
    "romaji": "aku",
    "english": "to open, to become open"
  },
  {
    "japanese": "甘い",
    "romaji": "amai",
    "english": "sweet"
  },
  {
    "japanese": "あまり",
    "romaji": "amari",
    "english": "not very"
  },
  {
    "japanese": "雨",
    "romaji": "ame",
    "english": "rain"
  },
  {
    "japanese": "飴",
    "romaji": "ame",
    "english": "candy"
  },
  {
    "japanese": "あなた",
    "romaji": "anata",
    "english": "you"
  },
  {
    "japanese": "姉",
    "romaji": "ane",
    "english": "(humble) older sister"
  },
  {
    "japanese": "兄",
    "romaji": "ani",
    "english": "(humble) older brother"
  },
  {
    "japanese": "あの",
    "romaji": "ano",
    "english": "that over there"
  },
  {
    "japanese": "青",
    "romaji": "ao",
    "english": "blue"
  },
  {
    "japanese": "青い",
    "romaji": "aoi",
    "english": "blue"
  },
  {
    "japanese": "アパート",
    "romaji": "apāto",
    "english": "apartment"
  },
  {
    "japanese": "洗う",
    "romaji": "arau",
    "english": "to wash"
  },
  {
    "japanese": "あれ",
    "romaji": "are",
    "english": "that"
  },
  {
    "japanese": "ある",
    "romaji": "aru",
    "english": "to be, to have (used for inanimate objects)"
  },
  {
    "japanese": "歩く",
    "romaji": "aruku",
    "english": "to walk"
  },
  {
    "japanese": "朝",
    "romaji": "asa",
    "english": "morning"
  },
  {
    "japanese": "朝御飯",
    "romaji": "asagohan",
    "english": "breakfast"
  },
  {
    "japanese": "あさって",
    "romaji": "asatte",
    "english": "day after tomorrow"
  },
  {
    "japanese": "足",
    "romaji": "ashi",
    "english": "foot, leg"
  },
  {
    "japanese": "明日",
    "romaji": "ashita",
    "english": "tomorrow"
  },
  {
    "japanese": "遊ぶ",
    "romaji": "asobu",
    "english": "to play, to make a visit"
  },
  {
    "japanese": "あそこ",
    "romaji": "asoko",
    "english": "over there"
  },
  {
    "japanese": "頭",
    "romaji": "atama",
    "english": "head"
  },
  {
    "japanese": "新しい",
    "romaji": "atarashii",
    "english": "new"
  },
  {
    "japanese": "暖かい",
    "romaji": "atatakai",
    "english": "warm"
  },
  {
    "japanese": "あっち",
    "romaji": "atchi",
    "english": "over there"
  },
  {
    "japanese": "後",
    "romaji": "ato",
    "english": "afterwards"
  },
  {
    "japanese": "暑い",
    "romaji": "atsui",
    "english": "hot"
  },
  {
    "japanese": "厚い",
    "romaji": "atsui",
    "english": "kind, deep, thick"
  },
  {
    "japanese": "熱い",
    "romaji": "atsui",
    "english": "hot to the touch"
  },
  {
    "japanese": "会う",
    "romaji": "au",
    "english": "to meet"
  },
  {
    "japanese": "晩",
    "romaji": "ban",
    "english": "evening"
  },
  {
    "japanese": "番号",
    "romaji": "bangō",
    "english": "number"
  },
  {
    "japanese": "晩御飯",
    "romaji": "bangohan",
    "english": "evening meal"
  },
  {
    "japanese": "バス",
    "romaji": "basu",
    "english": "bus"
  },
  {
    "japanese": "バター",
    "romaji": "batā",
    "english": "butter"
  },
  {
    "japanese": "ベ��ド",
    "romaji": "beddo",
    "english": "bed"
  },
  {
    "japanese": "勉強",
    "romaji": "benkyōsuru",
    "english": "to study"
  },
  {
    "japanese": "便利",
    "romaji": "benri",
    "english": "useful, convenient"
  },
  {
    "japanese": "ボールペン",
    "romaji": "bōrupen",
    "english": "ball-point pen"
  },
  {
    "japanese": "帽子",
    "romaji": "bōshi",
    "english": "hat"
  },
  {
    "japanese": "ボタン",
    "romaji": "botan",
    "english": "button"
  },
  {
    "japanese": "文章",
    "romaji": "bunshō",
    "english": "sentence, text"
  },
  {
    "japanese": "豚肉",
    "romaji": "butaniku",
    "english": "pork"
  },
  {
    "japanese": "病院",
    "romaji": "byōin",
    "english": "hospital"
  },
  {
    "japanese": "病気",
    "romaji": "byōki",
    "english": "illness"
  },
  {
    "japanese": "茶色",
    "romaji": "chairo",
    "english": "brown"
  },
  {
    "japanese": "ちゃわん",
    "romaji": "chawan",
    "english": "rice bowl"
  },
  {
    "japanese": "違う",
    "romaji": "chigau",
    "english": "to differ"
  },
  {
    "japanese": "小さい",
    "romaji": "chiisai",
    "english": "little"
  },
  {
    "japanese": "小さな",
    "romaji": "chiisana",
    "english": "little"
  },
  {
    "japanese": "近い",
    "romaji": "chikai",
    "english": "near"
  },
  {
    "japanese": "近く",
    "romaji": "chikaku",
    "english": "near"
  },
  {
    "japanese": "地下鉄",
    "romaji": "chikatetsu",
    "english": "underground train"
  },
  {
    "japanese": "地図",
    "romaji": "chizu",
    "english": "map"
  },
  {
    "japanese": "ちょうど",
    "romaji": "chōdo",
    "english": "exactly"
  },
  {
    "japanese": "ちょっと",
    "romaji": "chotto",
    "english": "somewhat"
  },
  {
    "japanese": "台所",
    "romaji": "daidokoro",
    "english": "kitchen"
  },
  {
    "japanese": "大学",
    "romaji": "daigaku",
    "english": "university"
  },
  {
    "japanese": "大丈夫",
    "romaji": "daijōbu",
    "english": "all right"
  },
  {
    "japanese": "大好き",
    "romaji": "daisuki",
    "english": "to be very likeable"
  },
  {
    "japanese": "だんだん",
    "romaji": "dandan",
    "english": "gradually"
  },
  {
    "japanese": "誰",
    "romaji": "dare",
    "english": "who"
  },
  {
    "japanese": "出す",
    "romaji": "dasu",
    "english": "to put out"
  },
  {
    "japanese": "出口",
    "romaji": "deguchi",
    "english": "exit"
  },
  {
    "japanese": "では",
    "romaji": "deha",
    "english": "with that..."
  },
  {
    "japanese": "出かける",
    "romaji": "dekakeru",
    "english": "to go out"
  },
  {
    "japanese": "できる",
    "romaji": "dekiru",
    "english": "to be able to"
  },
  {
    "japanese": "でも",
    "romaji": "demo",
    "english": "but"
  },
  {
    "japanese": "電気",
    "romaji": "denki",
    "english": "electricity, electric light"
  },
  {
    "japanese": "電車",
    "romaji": "densha",
    "english": "electric train"
  },
  {
    "japanese": "電話",
    "romaji": "denwa",
    "english": "telephone"
  },
  {
    "japanese": "デパート",
    "romaji": "depāto",
    "english": "department store"
  },
  {
    "japanese": "出る",
    "romaji": "deru",
    "english": "to appear, to leave"
  },
  {
    "japanese": "どう",
    "romaji": "dō",
    "english": "how, in what way"
  },
  {
    "japanese": "ドア",
    "romaji": "doa",
    "english": "Western style door"
  },
  {
    "japanese": "動物",
    "romaji": "dōbutsu",
    "english": "animal"
  },
  {
    "japanese": "どちら",
    "romaji": "dochira",
    "english": "which of two"
  },
  {
    "japanese": "どこ",
    "romaji": "doko",
    "english": "where"
  },
  {
    "japanese": "どうも",
    "romaji": "dōmo",
    "english": "thanks"
  },
  {
    "japanese": "どなた",
    "romaji": "donata",
    "english": "who"
  },
  {
    "japanese": "どの",
    "romaji": "dono",
    "english": "which"
  },
  {
    "japanese": "どれ",
    "romaji": "dore",
    "english": "which (of three or more)"
  },
  {
    "japanese": "どうして",
    "romaji": "dōshite",
    "english": "for what reason"
  },
  {
    "japanese": "ど��ち",
    "romaji": "dotchi",
    "english": "which"
  },
  {
    "japanese": "土曜日",
    "romaji": "doyōbi",
    "english": "Saturday"
  },
  {
    "japanese": "どうぞ",
    "romaji": "dōzo",
    "english": "please"
  },
  {
    "japanese": "絵",
    "romaji": "e",
    "english": "picture"
  },
  {
    "japanese": "ええ",
    "romaji": "ee",
    "english": "yes"
  },
  {
    "japanese": "映画",
    "romaji": "eiga",
    "english": "movie"
  },
  {
    "japanese": "映画館",
    "romaji": "eigakan",
    "english": "cinema"
  },
  {
    "japanese": "英語",
    "romaji": "eigo",
    "english": "English language"
  },
  {
    "japanese": "駅",
    "romaji": "eki",
    "english": "station"
  },
  {
    "japanese": "鉛筆",
    "romaji": "enpitsu",
    "english": "pencil"
  },
  {
    "japanese": "エレベーター",
    "romaji": "erebētā",
    "english": "elevator"
  },
  {
    "japanese": "フィルム",
    "romaji": "firumu",
    "english": "roll of film"
  },
  {
    "japanese": "フォーク",
    "romaji": "fōku",
    "english": "fork"
  },
  {
    "japanese": "吹く",
    "romaji": "fuku",
    "english": "to blow"
  },
  {
    "japanese": "服",
    "romaji": "fuku",
    "english": "clothes"
  },
  {
    "japanese": "ふろ",
    "romaji": "furo",
    "english": "bath"
  },
  {
    "japanese": "降る",
    "romaji": "furu",
    "english": "to fall, e.g. rain or snow"
  },
  {
    "japanese": "古い",
    "romaji": "furui",
    "english": "old (not used for people)"
  },
  {
    "japanese": "二人",
    "romaji": "futari",
    "english": "two people"
  },
  {
    "japanese": "二つ",
    "romaji": "futatsu",
    "english": "two"
  },
  {
    "japanese": "封筒",
    "romaji": "fūtō",
    "english": "envelope"
  },
  {
    "japanese": "太い",
    "romaji": "futoi",
    "english": "fat"
  },
  {
    "japanese": "二日",
    "romaji": "futsuka",
    "english": "two days, second day of the month"
  },
  {
    "japanese": "冬",
    "romaji": "fuyu",
    "english": "winter"
  },
  {
    "japanese": "外国",
    "romaji": "gaikoku",
    "english": "foreign country"
  },
  {
    "japanese": "外国人",
    "romaji": "gaikokujin",
    "english": "foreigner"
  },
  {
    "japanese": "学校",
    "romaji": "gakkō",
    "english": "school"
  },
  {
    "japanese": "学生",
    "romaji": "gakusei",
    "english": "student"
  },
  {
    "japanese": "玄関",
    "romaji": "genkan",
    "english": "entry hall"
  },
  {
    "japanese": "元気",
    "romaji": "genki",
    "english": "health, vitality"
  },
  {
    "japanese": "月曜日",
    "romaji": "getsuyōbi",
    "english": "Monday"
  },
  {
    "japanese": "銀行",
    "romaji": "ginkō",
    "english": "bank"
  },
  {
    "japanese": "ギター",
    "romaji": "gitā",
    "english": "guitar"
  },
  {
    "japanese": "五",
    "romaji": "go",
    "english": "five"
  },
  {
    "japanese": "午後",
    "romaji": "gogo",
    "english": "afternoon"
  },
  {
    "japanese": "御飯",
    "romaji": "gohan",
    "english": "cooked rice, meal"
  },
  {
    "japanese": "午前",
    "romaji": "gozen",
    "english": "morning"
  },
  {
    "japanese": "グラム",
    "romaji": "guramu",
    "english": "gram"
  },
  {
    "japanese": "牛肉",
    "romaji": "gyūniku",
    "english": "beef"
  },
  {
    "japanese": "牛乳",
    "romaji": "gyūnyū",
    "english": "milk"
  },
  {
    "japanese": "歯",
    "romaji": "ha",
    "english": "tooth"
  },
  {
    "japanese": "八",
    "romaji": "hachi",
    "english": "eight"
  },
  {
    "japanese": "葉書",
    "romaji": "hagaki",
    "english": "postcard"
  },
  {
    "japanese": "はい",
    "romaji": "hai",
    "english": "yes"
  },
  {
    "japanese": "入る",
    "romaji": "hairu",
    "english": "to enter, to contain"
  },
  {
    "japanese": "灰皿",
    "romaji": "haizara",
    "english": "ashtray"
  },
  {
    "japanese": "始まる",
    "romaji": "hajimaru",
    "english": "to begin"
  },
  {
    "japanese": "初め / 始め",
    "romaji": "hajime",
    "english": "beginning"
  },
  {
    "japanese": "初めて",
    "romaji": "hajimete",
    "english": "for the first time"
  },
  {
    "japanese": "箱",
    "romaji": "hako",
    "english": "box"
  },
  {
    "japanese": "はく",
    "romaji": "haku",
    "english": "to wear, to put on trousers"
  },
  {
    "japanese": "半",
    "romaji": "han",
    "english": "half"
  },
  {
    "japanese": "花",
    "romaji": "hana",
    "english": "flower"
  },
  {
    "japanese": "鼻",
    "romaji": "hana",
    "english": "nose"
  },
  {
    "japanese": "話",
    "romaji": "hanashi",
    "english": "talk, story"
  },
  {
    "japanese": "話す",
    "romaji": "hanasu",
    "english": "to speak"
  },
  {
    "japanese": "半分",
    "romaji": "hanbun",
    "english": "half minute"
  },
  {
    "japanese": "ハンカチ",
    "romaji": "hankachi",
    "english": "handkerchief"
  },
  {
    "japanese": "晴れ",
    "romaji": "hare",
    "english": "clear weather"
  },
  {
    "japanese": "晴れる",
    "romaji": "hareru",
    "english": "to be sunny"
  },
  {
    "japanese": "春",
    "romaji": "haru",
    "english": "spring"
  },
  {
    "japanese": "貼る",
    "romaji": "haru",
    "english": "to stick"
  },
  {
    "japanese": "はし",
    "romaji": "hashi",
    "english": "chopsticks"
  },
  {
    "japanese": "橋",
    "romaji": "hashi",
    "english": "bridge"
  },
  {
    "japanese": "走る",
    "romaji": "hashiru",
    "english": "to run"
  },
  {
    "japanese": "二十歳",
    "romaji": "hatachi",
    "english": "20 years old, 20th year"
  },
  {
    "japanese": "働く",
    "romaji": "hataraku",
    "english": "to work"
  },
  {
    "japanese": "二十日",
    "romaji": "hatsuka",
    "english": "twenty days, twentieth"
  },
  {
    "japanese": "速い",
    "romaji": "hayai",
    "english": "quick"
  },
  {
    "japanese": "早い",
    "romaji": "hayai",
    "english": "early"
  },
  {
    "japanese": "辺",
    "romaji": "hen",
    "english": "area"
  },
  {
    "japanese": "下手",
    "romaji": "heta",
    "english": "unskillful"
  },
  {
    "japanese": "部屋",
    "romaji": "heya",
    "english": "room"
  },
  {
    "japanese": "左",
    "romaji": "hidari",
    "english": "left hand side"
  },
  {
    "japanese": "東",
    "romaji": "higashi",
    "english": "east"
  },
  {
    "japanese": "飛行機",
    "romaji": "hikōki",
    "english": "aeroplane"
  },
  {
    "japanese": "引く",
    "romaji": "hiku",
    "english": "to pull"
  },
  {
    "japanese": "弾く",
    "romaji": "hiku",
    "english": "to play an instrument with strings, including piano"
  },
  {
    "japanese": "低い",
    "romaji": "hikui",
    "english": "short, low"
  },
  {
    "japanese": "暇",
    "romaji": "hima",
    "english": "free time"
  },
  {
    "japanese": "広い",
    "romaji": "hiroi",
    "english": "spacious, wide"
  },
  {
    "japanese": "昼",
    "romaji": "hiru",
    "english": "noon, daytime"
  },
  {
    "japanese": "昼御飯",
    "romaji": "hirugohan",
    "english": "midday meal"
  },
  {
    "japanese": "人",
    "romaji": "hito",
    "english": "person"
  },
  {
    "japanese": "一人",
    "romaji": "hitori",
    "english": "one person"
  },
  {
    "japanese": "一つ",
    "romaji": "hitotsu",
    "english": "one"
  },
  {
    "japanese": "一月",
    "romaji": "hitotsuki",
    "english": "one month"
  },
  {
    "japanese": "ほか",
    "romaji": "hoka",
    "english": "other, the rest"
  },
  {
    "japanese": "本",
    "romaji": "hon",
    "english": "book"
  },
  {
    "japanese": "本棚",
    "romaji": "hondana",
    "english": "bookshelves"
  },
  {
    "japanese": "ほんとう",
    "romaji": "hontō",
    "english": "truth"
  },
  {
    "japanese": "欲しい",
    "romaji": "hoshii",
    "english": "want"
  },
  {
    "japanese": "細い",
    "romaji": "hosoi",
    "english": "thin"
  },
  {
    "japanese": "ホテル",
    "romaji": "hoteru",
    "english": "hotel"
  },
  {
    "japanese": "百",
    "romaji": "hyaku",
    "english": "hundred"
  },
  {
    "japanese": "一",
    "romaji": "ichi",
    "english": "one"
  },
  {
    "japanese": "いちばん",
    "romaji": "ichiban",
    "english": "best, first"
  },
  {
    "japanese": "一日",
    "romaji": "ichinichi",
    "english": "(1) one day, (2) first of month"
  },
  {
    "japanese": "家",
    "romaji": "ie",
    "english": "house"
  },
  {
    "japanese": "いい / よい",
    "romaji": "ii / yoi",
    "english": "good"
  },
  {
    "japanese": "いいえ",
    "romaji": "iie",
    "english": "no"
  },
  {
    "japanese": "いかが",
    "romaji": "ikaga",
    "english": "how"
  },
  {
    "japanese": "池",
    "romaji": "ike",
    "english": "pond"
  },
  {
    "japanese": "行く",
    "romaji": "iku",
    "english": "to go"
  },
  {
    "japanese": "いくら",
    "romaji": "ikura",
    "english": "how much?"
  },
  {
    "japanese": "いくつ",
    "romaji": "ikutsu",
    "english": "how many?, how old?"
  },
  {
    "japanese": "今",
    "romaji": "ima",
    "english": "now"
  },
  {
    "japanese": "意味",
    "romaji": "imi",
    "english": "meaning"
  },
  {
    "japanese": "妹",
    "romaji": "imōto",
    "english": "(humble) younger sister"
  },
  {
    "japanese": "犬",
    "romaji": "inu",
    "english": "dog"
  },
  {
    "japanese": "入れる",
    "romaji": "ireru",
    "english": "to put in"
  },
  {
    "japanese": "入口",
    "romaji": "iriguchi",
    "english": "entrance"
  },
  {
    "japanese": "色",
    "romaji": "iro",
    "english": "colour"
  },
  {
    "japanese": "いろいろ",
    "romaji": "iroiro",
    "english": "various"
  },
  {
    "japanese": "要る",
    "romaji": "iru",
    "english": "to need"
  },
  {
    "japanese": "居る",
    "romaji": "iru",
    "english": "to be, to have (used for people and animals)"
  },
  {
    "japanese": "医者",
    "romaji": "isha",
    "english": "medical doctor"
  },
  {
    "japanese": "忙しい",
    "romaji": "isogashii",
    "english": "busy, irritated"
  },
  {
    "japanese": "一緒",
    "romaji": "issho",
    "english": "together"
  },
  {
    "japanese": "いす",
    "romaji": "isu",
    "english": "chair"
  },
  {
    "japanese": "痛い",
    "romaji": "itai",
    "english": "painful"
  },
  {
    "japanese": "いつ",
    "romaji": "itsu",
    "english": "when"
  },
  {
    "japanese": "五日",
    "romaji": "itsuka",
    "english": "five days, fifth day"
  },
  {
    "japanese": "いつも",
    "romaji": "itsumo",
    "english": "always"
  },
  {
    "japanese": "五つ",
    "romaji": "itsutsu",
    "english": "five"
  },
  {
    "japanese": "言う",
    "romaji": "iu",
    "english": "to say"
  },
  {
    "japanese": "嫌",
    "romaji": "iya",
    "english": "unpleasant"
  },
  {
    "japanese": "じゃ / じゃあ",
    "romaji": "ja / jaa",
    "english": "well then…"
  },
  {
    "japanese": "字引",
    "romaji": "jibiki",
    "english": "dictionary"
  },
  {
    "japanese": "自分",
    "romaji": "jibun",
    "english": "oneself"
  },
  {
    "japanese": "自動車",
    "romaji": "jidōsha",
    "english": "automobile"
  },
  {
    "japanese": "時間",
    "romaji": "jikan",
    "english": "time"
  },
  {
    "japanese": "辞書",
    "romaji": "jisho",
    "english": "dictionary"
  },
  {
    "japanese": "自転車",
    "romaji": "jitensha",
    "english": "bicycle"
  },
  {
    "japanese": "丈夫",
    "romaji": "jōbu",
    "english": "strong, durable"
  },
  {
    "japanese": "上手",
    "romaji": "jōzu",
    "english": "skillful"
  },
  {
    "japanese": "十",
    "romaji": "jū  tō",
    "english": "ten"
  },
  {
    "japanese": "授業",
    "romaji": "jugyō",
    "english": "lesson, class work"
  },
  {
    "japanese": "かばん",
    "romaji": "kaban",
    "english": "bag, basket"
  },
  {
    "japanese": "花瓶",
    "romaji": "kabin",
    "english": "a vase"
  },
  {
    "japanese": "角",
    "romaji": "kado",
    "english": "a corner"
  },
  {
    "japanese": "帰る",
    "romaji": "kaeru",
    "english": "to go back"
  },
  {
    "japanese": "返す",
    "romaji": "kaesu",
    "english": "to return something"
  },
  {
    "japanese": "かぎ",
    "romaji": "kagi",
    "english": "key"
  },
  {
    "japanese": "階段",
    "romaji": "kaidan",
    "english": "stairs"
  },
  {
    "japanese": "買い物",
    "romaji": "kaimono",
    "english": "shopping"
  },
  {
    "japanese": "会社",
    "romaji": "kaisha",
    "english": "company"
  },
  {
    "japanese": "かかる",
    "romaji": "kakaru",
    "english": "to take time or money"
  },
  {
    "japanese": "かける",
    "romaji": "kakeru",
    "english": "to call by phone"
  },
  {
    "japanese": "書く",
    "romaji": "kaku",
    "english": "to write"
  },
  {
    "japanese": "カメラ",
    "romaji": "kamera",
    "english": "camera"
  },
  {
    "japanese": "紙",
    "romaji": "kami",
    "english": "paper"
  },
  {
    "japanese": "漢字",
    "romaji": "kanji",
    "english": "Chinese character"
  },
  {
    "japanese": "カップ",
    "romaji": "kappu",
    "english": "cup"
  },
  {
    "japanese": "体",
    "romaji": "karada",
    "english": "body"
  },
  {
    "japanese": "辛い",
    "romaji": "karai",
    "english": "spicy"
  },
  {
    "japanese": "カレー",
    "romaji": "karē",
    "english": "curry"
  },
  {
    "japanese": "カレンダー",
    "romaji": "karendā",
    "english": "calendar"
  },
  {
    "japanese": "借りる",
    "romaji": "kariru",
    "english": "to borrow"
  },
  {
    "japanese": "軽い",
    "romaji": "karui",
    "english": "light"
  },
  {
    "japanese": "傘",
    "romaji": "kasa",
    "english": "umbrella"
  },
  {
    "japanese": "貸す",
    "romaji": "kasu",
    "english": "to lend"
  },
  {
    "japanese": "方",
    "romaji": "kata",
    "english": "person, way of doing"
  },
  {
    "japanese": "家庭",
    "romaji": "katei",
    "english": "household"
  },
  {
    "japanese": "買う",
    "romaji": "kau",
    "english": "to buy"
  },
  {
    "japanese": "川 / 河",
    "romaji": "kawa",
    "english": "river"
  },
  {
    "japanese": "かわいい",
    "romaji": "kawaii",
    "english": "cute"
  },
  {
    "japanese": "火曜日",
    "romaji": "kayōbi",
    "english": "Tuesday"
  },
  {
    "japanese": "風邪",
    "romaji": "kaze",
    "english": "a cold"
  },
  {
    "japanese": "風",
    "romaji": "kaze",
    "english": "wind"
  },
  {
    "japanese": "家族",
    "romaji": "kazoku",
    "english": "family"
  },
  {
    "japanese": "警官",
    "romaji": "keikan",
    "english": "policeman"
  },
  {
    "japanese": "結構",
    "romaji": "kekkō",
    "english": "splendid, enough"
  },
  {
    "japanese": "結婚",
    "romaji": "kekkon",
    "english": "marriage"
  },
  {
    "japanese": "今朝",
    "romaji": "kesa",
    "english": "this morning"
  },
  {
    "japanese": "消す",
    "romaji": "kesu",
    "english": "to erase, to turn off power"
  },
  {
    "japanese": "木",
    "romaji": "ki",
    "english": "tree, wood"
  },
  {
    "japanese": "消える",
    "romaji": "kieru",
    "english": "to disappear"
  },
  {
    "japanese": "黄色",
    "romaji": "kiiro",
    "english": "yellow"
  },
  {
    "japanese": "黄色い",
    "romaji": "kiiroi",
    "english": "yellow"
  },
  {
    "japanese": "聞く",
    "romaji": "kiku",
    "english": "to hear, to listen to, to ask"
  },
  {
    "japanese": "金曜日",
    "romaji": "kin'yōbi",
    "english": "Friday"
  },
  {
    "japanese": "昨日",
    "romaji": "kinō",
    "english": "yesterday"
  },
  {
    "japanese": "切符",
    "romaji": "kippu",
    "english": "ticket"
  },
  {
    "japanese": "嫌い",
    "romaji": "kirai",
    "english": "hate"
  },
  {
    "japanese": "きれい",
    "romaji": "kirei",
    "english": "pretty, clean"
  },
  {
    "japanese": "キロ / キログラム",
    "romaji": "kiro / kiroguramu",
    "english": "kilogram"
  },
  {
    "japanese": "キロ / キロメートル",
    "romaji": "kiro / kiromētoru",
    "english": "kilometre"
  },
  {
    "japanese": "着る",
    "romaji": "kiru",
    "english": "to put on from the shoulders down"
  },
  {
    "japanese": "切る",
    "romaji": "kiru",
    "english": "to cut"
  },
  {
    "japanese": "喫茶店",
    "romaji": "kissaten",
    "english": "coffee lounge"
  },
  {
    "japanese": "北",
    "romaji": "kita",
    "english": "north"
  },
  {
    "japanese": "汚い",
    "romaji": "kitanai",
    "english": "dirty"
  },
  {
    "japanese": "切手",
    "romaji": "kitte",
    "english": "postage stamp"
  },
  {
    "japanese": "交番",
    "romaji": "kōban",
    "english": "police box"
  },
  {
    "japanese": "紅茶",
    "romaji": "kōcha",
    "english": "black tea"
  },
  {
    "japanese": "こちら",
    "romaji": "kochira",
    "english": "this person or way"
  },
  {
    "japanese": "子供",
    "romaji": "kodomo",
    "english": "child"
  },
  {
    "japanese": "声",
    "romaji": "koe",
    "english": "voice"
  },
  {
    "japanese": "公園",
    "romaji": "kōen",
    "english": "park"
  },
  {
    "japanese": "コーヒー",
    "romaji": "kōhī",
    "english": "coffee"
  },
  {
    "japanese": "ここ",
    "romaji": "koko",
    "english": "here"
  },
  {
    "japanese": "九日",
    "romaji": "kokonoka",
    "english": "nine days, ninth day"
  },
  {
    "japanese": "九つ",
    "romaji": "kokonotsu",
    "english": "nine"
  },
  {
    "japanese": "困る",
    "romaji": "komaru",
    "english": "to be worried"
  },
  {
    "japanese": "今晩",
    "romaji": "konban",
    "english": "this evening"
  },
  {
    "japanese": "今月",
    "romaji": "kongetsu",
    "english": "this month"
  },
  {
    "japanese": "こんな",
    "romaji": "konna",
    "english": "such"
  },
  {
    "japanese": "この",
    "romaji": "kono",
    "english": "this"
  },
  {
    "japanese": "今週",
    "romaji": "konshū",
    "english": "this week"
  },
  {
    "japanese": "コピーする",
    "romaji": "kopīsuru",
    "english": "to copy"
  },
  {
    "japanese": "コップ",
    "romaji": "koppu",
    "english": "a glass"
  },
  {
    "japanese": "これ",
    "romaji": "kore",
    "english": "this"
  },
  {
    "japanese": "交差点",
    "romaji": "kōsaten",
    "english": "intersection"
  },
  {
    "japanese": "答える",
    "romaji": "kotaeru",
    "english": "to answer"
  },
  {
    "japanese": "こっち",
    "romaji": "kotchi",
    "english": "this person or way"
  },
  {
    "japanese": "コート",
    "romaji": "kōto",
    "english": "coat, tennis court"
  },
  {
    "japanese": "言葉",
    "romaji": "kotoba",
    "english": "word, language"
  },
  {
    "japanese": "今年",
    "romaji": "kotoshi",
    "english": "this year"
  },
  {
    "japanese": "口",
    "romaji": "kuchi",
    "english": "mouth, opening"
  },
  {
    "japanese": "果物",
    "romaji": "kudamono",
    "english": "fruit"
  },
  {
    "japanese": "ください",
    "romaji": "kudasai",
    "english": "please"
  },
  {
    "japanese": "曇り",
    "romaji": "kumori",
    "english": "cloudy weather"
  },
  {
    "japanese": "曇る",
    "romaji": "kumoru",
    "english": "to become cloudy, to become dim"
  },
  {
    "japanese": "国",
    "romaji": "kuni",
    "english": "country"
  },
  {
    "japanese": "暗い",
    "romaji": "kurai",
    "english": "gloomy"
  },
  {
    "japanese": "クラス",
    "romaji": "kurasu",
    "english": "class"
  },
  {
    "japanese": "黒",
    "romaji": "kuro",
    "english": "black"
  },
  {
    "japanese": "黒い",
    "romaji": "kuroi",
    "english": "black"
  },
  {
    "japanese": "来る",
    "romaji": "kuru",
    "english": "to come"
  },
  {
    "japanese": "車",
    "romaji": "kuruma",
    "english": "car, vehicle"
  },
  {
    "japanese": "薬",
    "romaji": "kusuri",
    "english": "medicine"
  },
  {
    "japanese": "靴",
    "romaji": "kutsu",
    "english": "shoes"
  },
  {
    "japanese": "靴下",
    "romaji": "kutsushita",
    "english": "socks"
  },
  {
    "japanese": "今日",
    "romaji": "kyō",
    "english": "today"
  },
  {
    "japanese": "兄弟",
    "romaji": "kyōdai",
    "english": "(humble) siblings"
  },
  {
    "japanese": "去年",
    "romaji": "kyonen",
    "english": "last year"
  },
  {
    "japanese": "教室",
    "romaji": "kyōshitsu",
    "english": "classroom"
  },
  {
    "japanese": "九",
    "romaji": "kyū / ku",
    "english": "nine"
  },
  {
    "japanese": "町",
    "romaji": "machi",
    "english": "town, city"
  },
  {
    "japanese": "まだ",
    "romaji": "mada",
    "english": "yet, still"
  },
  {
    "japanese": "窓",
    "romaji": "mado",
    "english": "window"
  },
  {
    "japanese": "前",
    "romaji": "mae",
    "english": "before"
  },
  {
    "japanese": "曲る",
    "romaji": "magaru",
    "english": "to turn, to bend"
  },
  {
    "japanese": "毎朝",
    "romaji": "maiasa",
    "english": "every morning"
  },
  {
    "japanese": "毎晩",
    "romaji": "maiban",
    "english": "every night"
  },
  {
    "japanese": "毎月",
    "romaji": "maigetsu / maitsuki",
    "english": "every month"
  },
  {
    "japanese": "毎年",
    "romaji": "mainen / maitoshi",
    "english": "every year"
  },
  {
    "japanese": "毎日",
    "romaji": "mainichi",
    "english": "every day"
  },
  {
    "japanese": "毎週",
    "romaji": "maishū",
    "english": "every week"
  },
  {
    "japanese": "万",
    "romaji": "man",
    "english": "ten thousand"
  },
  {
    "japanese": "万年筆",
    "romaji": "mannenhitsu",
    "english": "fountain pen"
  },
  {
    "japanese": "丸い / 円い",
    "romaji": "marui",
    "english": "round, circular"
  },
  {
    "japanese": "まっすぐ",
    "romaji": "massugu",
    "english": "straight ahead, direct"
  },
  {
    "japanese": "また",
    "romaji": "mata",
    "english": "again, and"
  },
  {
    "japanese": "マッチ",
    "romaji": "matchi",
    "english": "match"
  },
  {
    "japanese": "待つ",
    "romaji": "matsu",
    "english": "to wait"
  },
  {
    "japanese": "まずい",
    "romaji": "mazui",
    "english": "unpleasant"
  },
  {
    "japanese": "目",
    "romaji": "me",
    "english": "eye"
  },
  {
    "japanese": "眼鏡",
    "romaji": "megane",
    "english": "glasses"
  },
  {
    "japanese": "メートル",
    "romaji": "mētoru",
    "english": "metre"
  },
  {
    "japanese": "道",
    "romaji": "michi",
    "english": "street"
  },
  {
    "japanese": "緑",
    "romaji": "midori",
    "english": "green"
  },
  {
    "japanese": "磨く",
    "romaji": "migaku",
    "english": "to brush teeth, to polish"
  },
  {
    "japanese": "右",
    "romaji": "migi",
    "english": "right side"
  },
  {
    "japanese": "短い",
    "romaji": "mijikai",
    "english": "short"
  },
  {
    "japanese": "三日",
    "romaji": "mikka",
    "english": "three days, third day of the month"
  },
  {
    "japanese": "耳",
    "romaji": "mimi",
    "english": "ear"
  },
  {
    "japanese": "南",
    "romaji": "minami",
    "english": "south"
  },
  {
    "japanese": "皆さん",
    "romaji": "minasan",
    "english": "everyone"
  },
  {
    "japanese": "みんな",
    "romaji": "minna",
    "english": "everyone"
  },
  {
    "japanese": "見る  観る",
    "romaji": "miru",
    "english": "to see, to watch"
  },
  {
    "japanese": "店",
    "romaji": "mise",
    "english": "shop"
  },
  {
    "japanese": "見せる",
    "romaji": "miseru",
    "english": "to show"
  },
  {
    "japanese": "三つ",
    "romaji": "mittsu",
    "english": "three"
  },
  {
    "japanese": "水",
    "romaji": "mizu",
    "english": "water"
  },
  {
    "japanese": "もう",
    "romaji": "mō",
    "english": "already"
  },
  {
    "japanese": "もう一度",
    "romaji": "mōichido",
    "english": "again"
  },
  {
    "japanese": "木曜日",
    "romaji": "mokuyōbi",
    "english": "Thursday"
  },
  {
    "japanese": "門",
    "romaji": "mon",
    "english": "gate"
  },
  {
    "japanese": "問題",
    "romaji": "mondai",
    "english": "problem"
  },
  {
    "japanese": "物",
    "romaji": "mono",
    "english": "thing"
  },
  {
    "japanese": "持つ",
    "romaji": "motsu",
    "english": "to hold"
  },
  {
    "japanese": "もっと",
    "romaji": "motto",
    "english": "more"
  },
  {
    "japanese": "六日",
    "romaji": "muika",
    "english": "six days, sixth day of the month"
  },
  {
    "japanese": "向こう",
    "romaji": "mukō",
    "english": "over there"
  },
  {
    "japanese": "村",
    "romaji": "mura",
    "english": "village"
  },
  {
    "japanese": "六つ",
    "romaji": "muttsu",
    "english": "six"
  },
  {
    "japanese": "難しい",
    "romaji": "muzukashii",
    "english": "difficult"
  },
  {
    "japanese": "など",
    "romaji": "nado",
    "english": "et cetera"
  },
  {
    "japanese": "長い",
    "romaji": "nagai",
    "english": "long"
  },
  {
    "japanese": "ナイフ",
    "romaji": "naifu",
    "english": "knife"
  },
  {
    "japanese": "中",
    "romaji": "naka",
    "english": "middle"
  },
  {
    "japanese": "鳴く",
    "romaji": "naku",
    "english": "animal noise. to chirp, roar or croak etc."
  },
  {
    "japanese": "無くす",
    "romaji": "nakusu",
    "english": "to lose something"
  },
  {
    "japanese": "名前",
    "romaji": "namae",
    "english": "name"
  },
  {
    "japanese": "何",
    "romaji": "nan / nani",
    "english": "what"
  },
  {
    "japanese": "七つ",
    "romaji": "nanatsu",
    "english": "seven"
  },
  {
    "japanese": "七日",
    "romaji": "nanoka",
    "english": "seven days, the seventh day"
  },
  {
    "japanese": "並べる",
    "romaji": "naraberu",
    "english": "to line up, to set up"
  },
  {
    "japanese": "並ぶ",
    "romaji": "narabu",
    "english": "to line up, to stand in a line"
  },
  {
    "japanese": "習う",
    "romaji": "narau",
    "english": "to learn"
  },
  {
    "japanese": "なる",
    "romaji": "naru",
    "english": "to become"
  },
  {
    "japanese": "夏",
    "romaji": "natsu",
    "english": "summer"
  },
  {
    "japanese": "夏休み",
    "romaji": "natsuyasumi",
    "english": "summer holiday"
  },
  {
    "japanese": "なぜ",
    "romaji": "naze",
    "english": "why"
  },
  {
    "japanese": "猫",
    "romaji": "neko",
    "english": "cat"
  },
  {
    "japanese": "ネクタイ",
    "romaji": "nekutai",
    "english": "tie, necktie"
  },
  {
    "japanese": "寝る",
    "romaji": "neru",
    "english": "to go to bed, to sleep"
  },
  {
    "japanese": "二",
    "romaji": "ni",
    "english": "two"
  },
  {
    "japanese": "日曜日",
    "romaji": "nichiyōbi",
    "english": "Sunday"
  },
  {
    "japanese": "賑やか",
    "romaji": "nigiyaka",
    "english": "bustling, busy"
  },
  {
    "japanese": "肉",
    "romaji": "niku",
    "english": "meat"
  },
  {
    "japanese": "荷物",
    "romaji": "nimotsu",
    "english": "luggage"
  },
  {
    "japanese": "西",
    "romaji": "nishi",
    "english": "west"
  },
  {
    "japanese": "庭",
    "romaji": "niwa",
    "english": "garden"
  },
  {
    "japanese": "登る",
    "romaji": "noboru",
    "english": "to climb"
  },
  {
    "japanese": "飲み物",
    "romaji": "nomimono",
    "english": "a drink"
  },
  {
    "japanese": "飲む",
    "romaji": "nomu",
    "english": "to drink"
  },
  {
    "japanese": "乗る",
    "romaji": "noru",
    "english": "to get on, to ride"
  },
  {
    "japanese": "ノート",
    "romaji": "nōto",
    "english": "notebook, exercise book"
  },
  {
    "japanese": "脱ぐ",
    "romaji": "nugu",
    "english": "to take off clothes"
  },
  {
    "japanese": "温い",
    "romaji": "nurui",
    "english": "luke warm"
  },
  {
    "japanese": "ニュース",
    "romaji": "nyūsu",
    "english": "news"
  },
  {
    "japanese": "おばあさん",
    "romaji": "obaasan",
    "english": "grandmother, female senior-citizen"
  },
  {
    "japanese": "伯母さん / 叔母さん",
    "romaji": "obasan",
    "english": "aunt"
  },
  {
    "japanese": "お弁当",
    "romaji": "obentō",
    "english": "boxed lunch"
  },
  {
    "japanese": "覚える",
    "romaji": "oboeru",
    "english": "to remember"
  },
  {
    "japanese": "お茶",
    "romaji": "ocha",
    "english": "green tea"
  },
  {
    "japanese": "お風呂",
    "romaji": "ofuro",
    "english": "bath"
  },
  {
    "japanese": "多い",
    "romaji": "ōi",
    "english": "many"
  },
  {
    "japanese": "おいしい",
    "romaji": "oishii",
    "english": "delicious"
  },
  {
    "japanese": "伯父 / 叔父",
    "romaji": "ojiisan",
    "english": "grandfather, male senior citizen"
  },
  {
    "japanese": "お母さん",
    "romaji": "okaasan",
    "english": "(honorable) mother"
  },
  {
    "japanese": "お金",
    "romaji": "okane",
    "english": "money"
  },
  {
    "japanese": "お菓子",
    "romaji": "okashi",
    "english": "sweets, candy"
  },
  {
    "japanese": "大きい",
    "romaji": "ōkii",
    "english": "big"
  },
  {
    "japanese": "大きな",
    "romaji": "ōkina",
    "english": "big"
  },
  {
    "japanese": "起きる",
    "romaji": "okiru",
    "english": "to get up"
  },
  {
    "japanese": "置く",
    "romaji": "oku",
    "english": "to put"
  },
  {
    "japanese": "奥さん",
    "romaji": "okusan",
    "english": "(honorable) wife"
  },
  {
    "japanese": "おまわりさん",
    "romaji": "omawarisan",
    "english": "friendly term for policeman"
  },
  {
    "japanese": "重い",
    "romaji": "omoi",
    "english": "heavy"
  },
  {
    "japanese": "おもしろい",
    "romaji": "omoshiroi",
    "english": "interesting"
  },
  {
    "japanese": "同じ",
    "romaji": "onaji",
    "english": "same"
  },
  {
    "japanese": "おなか",
    "romaji": "onaka",
    "english": "stomach"
  },
  {
    "japanese": "お姉さん",
    "romaji": "oneesan",
    "english": "(honorable) older sister"
  },
  {
    "japanese": "音楽",
    "romaji": "ongaku",
    "english": "music"
  },
  {
    "japanese": "お兄さん",
    "romaji": "oniisan",
    "english": "(honorable) older brother"
  },
  {
    "japanese": "女",
    "romaji": "onna",
    "english": "woman"
  },
  {
    "japanese": "女の子",
    "romaji": "onnanoko",
    "english": "girl"
  },
  {
    "japanese": "降りる",
    "romaji": "oriru",
    "english": "to get off, to descend"
  },
  {
    "japanese": "お酒",
    "romaji": "osake",
    "english": "alcohol, rice wine"
  },
  {
    "japanese": "お皿",
    "romaji": "osara",
    "english": "plate, dish"
  },
  {
    "japanese": "教える",
    "romaji": "oshieru",
    "english": "to teach, to tell"
  },
  {
    "japanese": "遅い",
    "romaji": "osoi",
    "english": "late, slow"
  },
  {
    "japanese": "押す",
    "romaji": "osu",
    "english": "to push, to stamp something"
  },
  {
    "japanese": "お手洗い",
    "romaji": "otearai",
    "english": "bathroom"
  },
  {
    "japanese": "男",
    "romaji": "otoko",
    "english": "man"
  },
  {
    "japanese": "男の子",
    "romaji": "otokonoko",
    "english": "boy"
  },
  {
    "japanese": "大人",
    "romaji": "otona",
    "english": "adult"
  },
  {
    "japanese": "お父さん",
    "romaji": "otōsan",
    "english": "(honorable) father"
  },
  {
    "japanese": "弟",
    "romaji": "otōto",
    "english": "younger brother"
  },
  {
    "japanese": "一昨日",
    "romaji": "ototoi",
    "english": "day before yesterday"
  },
  {
    "japanese": "一昨年",
    "romaji": "ototoshi",
    "english": "year before last"
  },
  {
    "japanese": "終る",
    "romaji": "owaru",
    "english": "to finish"
  },
  {
    "japanese": "泳ぐ",
    "romaji": "oyogu",
    "english": "to swim"
  },
  {
    "japanese": "大勢",
    "romaji": "ōzei",
    "english": "great number of people"
  },
  {
    "japanese": "パン",
    "romaji": "pan",
    "english": "bread"
  },
  {
    "japanese": "パーティー",
    "romaji": "pātī",
    "english": "party"
  },
  {
    "japanese": "ページ",
    "romaji": "pēji",
    "english": "page"
  },
  {
    "japanese": "ペン",
    "romaji": "pen",
    "english": "pen"
  },
  {
    "japanese": "ペット",
    "romaji": "petto",
    "english": "pet"
  },
  {
    "japanese": "ポケット",
    "romaji": "poketto",
    "english": "pocket"
  },
  {
    "japanese": "ポスト",
    "romaji": "posuto",
    "english": "post"
  },
  {
    "japanese": "プール",
    "romaji": "pūru",
    "english": "swimming pool"
  },
  {
    "japanese": "来月",
    "romaji": "raigetsu",
    "english": "next month"
  },
  {
    "japanese": "来年",
    "romaji": "rainen",
    "english": "next year"
  },
  {
    "japanese": "来週",
    "romaji": "raishū",
    "english": "next week"
  },
  {
    "japanese": "ラジカセ / ラジオカセット",
    "romaji": "rajikase / rajiokasetto",
    "english": "radio cassette player"
  },
  {
    "japanese": "ラジオ",
    "romaji": "rajio",
    "english": "radio"
  },
  {
    "japanese": "零",
    "romaji": "rei",
    "english": "zero"
  },
  {
    "japanese": "冷蔵庫",
    "romaji": "reizōko",
    "english": "refrigerator"
  },
  {
    "japanese": "レコード",
    "romaji": "rekōdo",
    "english": "record"
  },
  {
    "japanese": "練習",
    "romaji": "renshūsuru",
    "english": "to practice"
  },
  {
    "japanese": "レストラン",
    "romaji": "resutoran",
    "english": "restaurant"
  },
  {
    "japanese": "りっぱ",
    "romaji": "rippa",
    "english": "splendid"
  },
  {
    "japanese": "廊下",
    "romaji": "rōka",
    "english": "corridor"
  },
  {
    "japanese": "六",
    "romaji": "roku",
    "english": "six"
  },
  {
    "japanese": "旅行",
    "romaji": "ryokō",
    "english": "travel"
  },
  {
    "japanese": "料理",
    "romaji": "ryōri",
    "english": "cuisine"
  },
  {
    "japanese": "両親",
    "romaji": "ryōshin",
    "english": "both parents"
  },
  {
    "japanese": "留学生",
    "romaji": "ryūgakusei",
    "english": "overseas student"
  },
  {
    "japanese": "さあ",
    "romaji": "saa",
    "english": "well…"
  },
  {
    "japanese": "財布",
    "romaji": "saifu",
    "english": "wallet"
  },
  {
    "japanese": "魚",
    "romaji": "sakana",
    "english": "fish"
  },
  {
    "japanese": "先",
    "romaji": "saki",
    "english": "the future, previous"
  },
  {
    "japanese": "咲く",
    "romaji": "saku",
    "english": "to bloom"
  },
  {
    "japanese": "作文",
    "romaji": "sakubun",
    "english": "composition, writing"
  },
  {
    "japanese": "寒い",
    "romaji": "samui",
    "english": "cold"
  },
  {
    "japanese": "三",
    "romaji": "san",
    "english": "three"
  },
  {
    "japanese": "散歩",
    "romaji": "sanposuru",
    "english": "to stroll"
  },
  {
    "japanese": "さ来年",
    "romaji": "sarainen",
    "english": "year after next"
  },
  {
    "japanese": "差す",
    "romaji": "sasu",
    "english": "to stretch out hands, to raise an umbrella"
  },
  {
    "japanese": "砂糖",
    "romaji": "satō",
    "english": "sugar"
  },
  {
    "japanese": "背",
    "romaji": "se",
    "english": "height, stature"
  },
  {
    "japanese": "背広",
    "romaji": "sebiro",
    "english": "business suit"
  },
  {
    "japanese": "生徒",
    "romaji": "seito",
    "english": "pupil"
  },
  {
    "japanese": "せっけん",
    "romaji": "sekken",
    "english": "economy"
  },
  {
    "japanese": "狭い",
    "romaji": "semai",
    "english": "narrow"
  },
  {
    "japanese": "千",
    "romaji": "sen",
    "english": "thousand"
  },
  {
    "japanese": "先月",
    "romaji": "sengetsu",
    "english": "last month"
  },
  {
    "japanese": "先生",
    "romaji": "sensei",
    "english": "teacher, doctor"
  },
  {
    "japanese": "先週",
    "romaji": "senshū",
    "english": "last week"
  },
  {
    "japanese": "洗濯",
    "romaji": "sentaku",
    "english": "washing"
  },
  {
    "japanese": "セーター",
    "romaji": "sētā",
    "english": "sweater, jumper"
  },
  {
    "japanese": "写真",
    "romaji": "shashin",
    "english": "photograph"
  },
  {
    "japanese": "シャツ",
    "romaji": "shatsu",
    "english": "shirt"
  },
  {
    "japanese": "シャワー",
    "romaji": "shawā",
    "english": "shower"
  },
  {
    "japanese": "四",
    "romaji": "shi / yon",
    "english": "four"
  },
  {
    "japanese": "七",
    "romaji": "shichi / nana",
    "english": "seven"
  },
  {
    "japanese": "仕事",
    "romaji": "shigoto",
    "english": "job"
  },
  {
    "japanese": "しかし",
    "romaji": "shikashi",
    "english": "however"
  },
  {
    "japanese": "閉まる",
    "romaji": "shimaru",
    "english": "to close, to be closed"
  },
  {
    "japanese": "閉める",
    "romaji": "shimeru",
    "english": "to close something"
  },
  {
    "japanese": "締める",
    "romaji": "shimeru",
    "english": "to tie"
  },
  {
    "japanese": "新聞",
    "romaji": "shinbun",
    "english": "newspaper"
  },
  {
    "japanese": "死ぬ",
    "romaji": "shinu",
    "english": "to die"
  },
  {
    "japanese": "塩",
    "romaji": "shio",
    "english": "salt"
  },
  {
    "japanese": "白",
    "romaji": "shiro",
    "english": "white"
  },
  {
    "japanese": "白い",
    "romaji": "shiroi",
    "english": "white"
  },
  {
    "japanese": "知る",
    "romaji": "shiru",
    "english": "to know"
  },
  {
    "japanese": "下",
    "romaji": "shita",
    "english": "below"
  },
  {
    "japanese": "質問",
    "romaji": "shitsumon",
    "english": "question"
  },
  {
    "japanese": "静か",
    "romaji": "shizuka",
    "english": "quiet"
  },
  {
    "japanese": "食堂",
    "romaji": "shokudō",
    "english": "dining hall"
  },
  {
    "japanese": "しょうゆ",
    "romaji": "shōyu",
    "english": "soy sauce"
  },
  {
    "japanese": "宿題",
    "romaji": "shukudai",
    "english": "homework"
  },
  {
    "japanese": "そば",
    "romaji": "soba",
    "english": "near, beside"
  },
  {
    "japanese": "そちら",
    "romaji": "sochira",
    "english": "over there"
  },
  {
    "japanese": "掃除",
    "romaji": "sōjisuru",
    "english": "to clean, to sweep"
  },
  {
    "japanese": "そこ",
    "romaji": "soko",
    "english": "that place"
  },
  {
    "japanese": "その",
    "romaji": "sono",
    "english": "that"
  },
  {
    "japanese": "空",
    "romaji": "sora",
    "english": "sky"
  },
  {
    "japanese": "それ",
    "romaji": "sore",
    "english": "that"
  },
  {
    "japanese": "それでは",
    "romaji": "soredeha",
    "english": "in that situation"
  },
  {
    "japanese": "それから",
    "romaji": "sorekara",
    "english": "after that"
  },
  {
    "japanese": "そうして / そして",
    "romaji": "sōshite / soshite",
    "english": "and"
  },
  {
    "japanese": "そっち",
    "romaji": "sotchi",
    "english": "over there"
  },
  {
    "japanese": "外",
    "romaji": "soto",
    "english": "outside"
  },
  {
    "japanese": "吸う",
    "romaji": "sū",
    "english": "to smoke, to suck"
  },
  {
    "japanese": "すぐに",
    "romaji": "suguni",
    "english": "instantly"
  },
  {
    "japanese": "水曜日",
    "romaji": "suiyōbi",
    "english": "Wednesday"
  },
  {
    "japanese": "スカート",
    "romaji": "sukāto",
    "english": "skirt"
  },
  {
    "japanese": "好き",
    "romaji": "suki",
    "english": "likeable"
  },
  {
    "japanese": "少し",
    "romaji": "sukoshi",
    "english": "few"
  },
  {
    "japanese": "少ない",
    "romaji": "sukunai",
    "english": "a few"
  },
  {
    "japanese": "住む",
    "romaji": "sumu",
    "english": "to live in"
  },
  {
    "japanese": "スポーツ",
    "romaji": "supōtsu",
    "english": "sport"
  },
  {
    "japanese": "スプーン",
    "romaji": "supūn",
    "english": "spoon"
  },
  {
    "japanese": "スリッパ",
    "romaji": "surippa",
    "english": "slippers"
  },
  {
    "japanese": "する",
    "romaji": "suru",
    "english": "to do"
  },
  {
    "japanese": "ストーブ",
    "romaji": "sutōbu",
    "english": "heater"
  },
  {
    "japanese": "座る",
    "romaji": "suwaru",
    "english": "to sit"
  },
  {
    "japanese": "涼しい",
    "romaji": "suzushii",
    "english": "refreshing"
  },
  {
    "japanese": "たばこ",
    "romaji": "tabako",
    "english": "tobacco, cigarettes"
  },
  {
    "japanese": "食べ物",
    "romaji": "tabemono",
    "english": "food"
  },
  {
    "japanese": "食べる",
    "romaji": "taberu",
    "english": "to eat"
  },
  {
    "japanese": "たぶん",
    "romaji": "tabun",
    "english": "probably"
  },
  {
    "japanese": "たいへん",
    "romaji": "taihen",
    "english": "very"
  },
  {
    "japanese": "大切",
    "romaji": "taisetsu",
    "english": "important"
  },
  {
    "japanese": "大使館",
    "romaji": "taishikan",
    "english": "embassy"
  },
  {
    "japanese": "高い",
    "romaji": "takai",
    "english": "tall, expensive"
  },
  {
    "japanese": "たくさん",
    "romaji": "takusan",
    "english": "many"
  },
  {
    "japanese": "タクシー",
    "romaji": "takushī",
    "english": "taxi"
  },
  {
    "japanese": "卵",
    "romaji": "tamago",
    "english": "egg"
  },
  {
    "japanese": "誕生日",
    "romaji": "tanjōbi",
    "english": "birthday"
  },
  {
    "japanese": "頼む",
    "romaji": "tanomu",
    "english": "to ask"
  },
  {
    "japanese": "楽しい",
    "romaji": "tanoshii",
    "english": "enjoyable"
  },
  {
    "japanese": "たて",
    "romaji": "tate",
    "english": "length, height"
  },
  {
    "japanese": "建物",
    "romaji": "tatemono",
    "english": "building"
  },
  {
    "japanese": "立つ",
    "romaji": "tatsu",
    "english": "to stand"
  },
  {
    "japanese": "手",
    "romaji": "te",
    "english": "hand"
  },
  {
    "japanese": "テーブル",
    "romaji": "tēburu",
    "english": "table"
  },
  {
    "japanese": "手紙",
    "romaji": "tegami",
    "english": "letter"
  },
  {
    "japanese": "天気",
    "romaji": "tenki",
    "english": "weather"
  },
  {
    "japanese": "テープ",
    "romaji": "tēpu",
    "english": "tape"
  },
  {
    "japanese": "テープレコーダー",
    "romaji": "tēpurekōdā",
    "english": "tape recorder"
  },
  {
    "japanese": "テレビ",
    "romaji": "terebi",
    "english": "television"
  },
  {
    "japanese": "テスト",
    "romaji": "tesuto",
    "english": "test"
  },
  {
    "japanese": "戸",
    "romaji": "to",
    "english": "Japanese style door"
  },
  {
    "japanese": "飛ぶ",
    "romaji": "tobu",
    "english": "to fly, to hop"
  },
  {
    "japanese": "遠い",
    "romaji": "tōi",
    "english": "far"
  },
  {
    "japanese": "トイレ",
    "romaji": "toire",
    "english": "toilet"
  },
  {
    "japanese": "十日",
    "romaji": "tōka",
    "english": "ten days, the tenth day"
  },
  {
    "japanese": "時計",
    "romaji": "tokei",
    "english": "watch, clock"
  },
  {
    "japanese": "時々",
    "romaji": "tokidoki",
    "english": "sometimes"
  },
  {
    "japanese": "所",
    "romaji": "tokoro",
    "english": "place"
  },
  {
    "japanese": "止まる",
    "romaji": "tomaru",
    "english": "to come to a halt"
  },
  {
    "japanese": "友達",
    "romaji": "tomodachi",
    "english": "friend"
  },
  {
    "japanese": "隣",
    "romaji": "tonari",
    "english": "next door to"
  },
  {
    "japanese": "鳥",
    "romaji": "tori",
    "english": "bird"
  },
  {
    "japanese": "とり肉",
    "romaji": "toriniku",
    "english": "chicken meat"
  },
  {
    "japanese": "取る",
    "romaji": "toru",
    "english": "to take something"
  },
  {
    "japanese": "撮る",
    "romaji": "toru",
    "english": "to take a photo or record a film"
  },
  {
    "japanese": "年",
    "romaji": "toshi",
    "english": "year"
  },
  {
    "japanese": "図書館",
    "romaji": "toshokan",
    "english": "library"
  },
  {
    "japanese": "とても",
    "romaji": "totemo",
    "english": "very"
  },
  {
    "japanese": "次",
    "romaji": "tsugi",
    "english": "next"
  },
  {
    "japanese": "疲れる",
    "romaji": "tsukareru",
    "english": "to get tired"
  },
  {
    "japanese": "使う",
    "romaji": "tsukau",
    "english": "to use"
  },
  {
    "japanese": "つける",
    "romaji": "tsukeru",
    "english": "to turn on"
  },
  {
    "japanese": "着く",
    "romaji": "tsuku",
    "english": "to arrive at"
  },
  {
    "japanese": "机",
    "romaji": "tsukue",
    "english": "desk"
  },
  {
    "japanese": "作る",
    "romaji": "tsukuru",
    "english": "to make"
  },
  {
    "japanese": "つまらない",
    "romaji": "tsumaranai",
    "english": "boring"
  },
  {
    "japanese": "冷たい",
    "romaji": "tsumetai",
    "english": "cold to the touch"
  },
  {
    "japanese": "勤める",
    "romaji": "tsutomeru",
    "english": "to work for someone"
  },
  {
    "japanese": "強い",
    "romaji": "tsuyoi",
    "english": "powerful"
  },
  {
    "japanese": "上",
    "romaji": "ue",
    "english": "on top of"
  },
  {
    "japanese": "生まれる",
    "romaji": "umareru",
    "english": "to be born"
  },
  {
    "japanese": "海",
    "romaji": "umi",
    "english": "sea"
  },
  {
    "japanese": "売る",
    "romaji": "uru",
    "english": "to sell"
  },
  {
    "japanese": "煩い",
    "romaji": "urusai",
    "english": "noisy, annoying"
  },
  {
    "japanese": "後ろ",
    "romaji": "ushiro",
    "english": "behind"
  },
  {
    "japanese": "薄い",
    "romaji": "usui",
    "english": "thin, weak"
  },
  {
    "japanese": "歌",
    "romaji": "uta",
    "english": "song"
  },
  {
    "japanese": "歌う",
    "romaji": "utau",
    "english": "to sing"
  },
  {
    "japanese": "上着",
    "romaji": "uwagi",
    "english": "jacket"
  },
  {
    "japanese": "ワイシャツ",
    "romaji": "waishatsu",
    "english": "business shirt"
  },
  {
    "japanese": "若い",
    "romaji": "wakai",
    "english": "young"
  },
  {
    "japanese": "分かる",
    "romaji": "wakaru",
    "english": "to be understood"
  },
  {
    "japanese": "悪い",
    "romaji": "warui",
    "english": "bad"
  },
  {
    "japanese": "忘れる",
    "romaji": "wasureru",
    "english": "to forget"
  },
  {
    "japanese": "私",
    "romaji": "watakushi",
    "english": "(humble) I, myself"
  },
  {
    "japanese": "渡る",
    "romaji": "wataru",
    "english": "to go across"
  },
  {
    "japanese": "渡す",
    "romaji": "watasu",
    "english": "to hand over"
  },
  {
    "japanese": "山",
    "romaji": "yama",
    "english": "mountain"
  },
  {
    "japanese": "八百屋",
    "romaji": "yaoya",
    "english": "greengrocer"
  },
  {
    "japanese": "やる",
    "romaji": "yaru",
    "english": "to do"
  },
  {
    "japanese": "野菜",
    "romaji": "yasai",
    "english": "vegetable"
  },
  {
    "japanese": "易しい",
    "romaji": "yasashii",
    "english": "easy, simple"
  },
  {
    "japanese": "安い",
    "romaji": "yasui",
    "english": "cheap"
  },
  {
    "japanese": "休み",
    "romaji": "yasumi",
    "english": "rest, holiday"
  },
  {
    "japanese": "休む",
    "romaji": "yasumu",
    "english": "to rest"
  },
  {
    "japanese": "八つ",
    "romaji": "yattsu",
    "english": "eight"
  },
  {
    "japanese": "呼ぶ",
    "romaji": "yobu",
    "english": "to call out, to invite"
  },
  {
    "japanese": "洋服",
    "romaji": "yōfuku",
    "english": "western-style clothes"
  },
  {
    "japanese": "八日",
    "romaji": "yōka",
    "english": "eight days, eighth day of the month"
  },
  {
    "japanese": "四日",
    "romaji": "yokka",
    "english": "four days, fouth day of the month"
  },
  {
    "japanese": "横",
    "romaji": "yoko",
    "english": "beside, side, width"
  },
  {
    "japanese": "よく",
    "romaji": "yoku",
    "english": "often, well"
  },
  {
    "japanese": "読む",
    "romaji": "yomu",
    "english": "to read"
  },
  {
    "japanese": "より、ほう",
    "romaji": "yori,hō",
    "english": "Used for comparison."
  },
  {
    "japanese": "夜",
    "romaji": "yoru",
    "english": "evening, night"
  },
  {
    "japanese": "四つ",
    "romaji": "yottsu",
    "english": "four"
  },
  {
    "japanese": "弱い",
    "romaji": "yowai",
    "english": "weak"
  },
  {
    "japanese": "昨夜",
    "romaji": "yūbe",
    "english": "last night"
  },
  {
    "japanese": "郵便局",
    "romaji": "yūbinkyoku",
    "english": "post office"
  },
  {
    "japanese": "夕方",
    "romaji": "yūgata",
    "english": "evening"
  },
  {
    "japanese": "夕飯",
    "romaji": "yūhan",
    "english": "dinner"
  },
  {
    "japanese": "雪",
    "romaji": "yuki",
    "english": "snow"
  },
  {
    "japanese": "ゆっくりと",
    "romaji": "yukkurito",
    "english": "slowly"
  },
  {
    "japanese": "有名",
    "romaji": "yūmei",
    "english": "famous"
  },
  {
    "japanese": "雑誌",
    "romaji": "zasshi",
    "english": "magazine"
  },
  {
    "japanese": "全部",
    "romaji": "zenbu",
    "english": "all"
  },
  {
    "japanese": "ゼロ",
    "romaji": "zero",
    "english": "zero"
  },
  {
    "japanese": "ズボン",
    "romaji": "zubon",
    "english": "trousers"
  }
];

const n4VocabData = [
  {
    "japanese": "あ",
    "romaji": "a",
    "english": "Ah"
  },
  {
    "japanese": "ああ",
    "romaji": "aa",
    "english": "like that"
  },
  {
    "japanese": "アフリカ",
    "romaji": "afurika",
    "english": "Africa"
  },
  {
    "japanese": "上る",
    "romaji": "agaru",
    "english": "to rise"
  },
  {
    "japanese": "あげる",
    "romaji": "ageru",
    "english": "to give"
  },
  {
    "japanese": "間",
    "romaji": "aida",
    "english": "a space"
  },
  {
    "japanese": "あいさつ・する",
    "romaji": "aisatsu-suru",
    "english": "to greet"
  },
  {
    "japanese": "味",
    "romaji": "aji",
    "english": "flavour"
  },
  {
    "japanese": "アジア",
    "romaji": "ajia",
    "english": "Asia"
  },
  {
    "japanese": "あかちゃん",
    "romaji": "akachan",
    "english": "infant"
  },
  {
    "japanese": "赤ん坊",
    "romaji": "akanbō",
    "english": "baby"
  },
  {
    "japanese": "空く",
    "romaji": "aku",
    "english": "to open, to become empty"
  },
  {
    "japanese": "アクセサリー",
    "romaji": "akusesarī",
    "english": "accessory"
  },
  {
    "japanese": "アメリカ",
    "romaji": "amerika",
    "english": "America"
  },
  {
    "japanese": "アナウンサー",
    "romaji": "anaunsā",
    "english": "announcer"
  },
  {
    "japanese": "あんな",
    "romaji": "anna",
    "english": "such"
  },
  {
    "japanese": "案内",
    "romaji": "annai-suru",
    "english": "to guide"
  },
  {
    "japanese": "安心",
    "romaji": "anshin",
    "english": "relief"
  },
  {
    "japanese": "安全",
    "romaji": "anzen",
    "english": "safety"
  },
  {
    "japanese": "アルバイト",
    "romaji": "arubaito",
    "english": "part-time job"
  },
  {
    "japanese": "アルコール",
    "romaji": "arukōru",
    "english": "alcohol"
  },
  {
    "japanese": "浅い",
    "romaji": "asai",
    "english": "shallow, superficial"
  },
  {
    "japanese": "遊び",
    "romaji": "asobi",
    "english": "play"
  },
  {
    "japanese": "明日",
    "romaji": "asu",
    "english": "tomorrow"
  },
  {
    "japanese": "集る",
    "romaji": "atsumaru",
    "english": "to gather"
  },
  {
    "japanese": "集める",
    "romaji": "atsumeru",
    "english": "to collect something"
  },
  {
    "japanese": "合う",
    "romaji": "au",
    "english": "to match"
  },
  {
    "japanese": "謝る",
    "romaji": "ayamaru",
    "english": "to apologize"
  },
  {
    "japanese": "場合",
    "romaji": "baai",
    "english": "situation"
  },
  {
    "japanese": "倍",
    "romaji": "bai",
    "english": "double"
  },
  {
    "japanese": "番組",
    "romaji": "bangumi",
    "english": "television or radio program"
  },
  {
    "japanese": "場所",
    "romaji": "basho",
    "english": "location"
  },
  {
    "japanese": "ベル",
    "romaji": "beru",
    "english": "bell"
  },
  {
    "japanese": "別",
    "romaji": "betsu",
    "english": "different"
  },
  {
    "japanese": "美術館",
    "romaji": "bijutsukan",
    "english": "art gallery"
  },
  {
    "japanese": "びっくり・する",
    "romaji": "bikkuri-suru",
    "english": "to be surprised"
  },
  {
    "japanese": "ビル",
    "romaji": "biru",
    "english": "building or bill"
  },
  {
    "japanese": "貿易",
    "romaji": "bōeki",
    "english": "trade"
  },
  {
    "japanese": "僕",
    "romaji": "boku",
    "english": "I (used by males)"
  },
  {
    "japanese": "部長",
    "romaji": "buchō",
    "english": "head of a section"
  },
  {
    "japanese": "ぶどう",
    "romaji": "budō",
    "english": "grapes"
  },
  {
    "japanese": "文学",
    "romaji": "bungaku",
    "english": "literature"
  },
  {
    "japanese": "文化",
    "romaji": "bunka",
    "english": "culture"
  },
  {
    "japanese": "文法",
    "romaji": "bunpō",
    "english": "grammar"
  },
  {
    "japanese": "ちゃん",
    "romaji": "chan",
    "english": "suffix for familiar female person"
  },
  {
    "japanese": "チェック・する",
    "romaji": "chekku-suru",
    "english": "to check"
  },
  {
    "japanese": "血",
    "romaji": "chi",
    "english": "blood"
  },
  {
    "japanese": "力",
    "romaji": "chikara",
    "english": "strength, power"
  },
  {
    "japanese": "地理",
    "romaji": "chiri",
    "english": "geography"
  },
  {
    "japanese": "ちっとも",
    "romaji": "chittomo",
    "english": "not at all (used with a negative verb)"
  },
  {
    "japanese": "中学校",
    "romaji": "chūgakkō",
    "english": "junior high school, middle school"
  },
  {
    "japanese": "注意",
    "romaji": "chūi",
    "english": "caution"
  },
  {
    "japanese": "注射",
    "romaji": "chūsha",
    "english": "injection"
  },
  {
    "japanese": "駐車場",
    "romaji": "chūshajō",
    "english": "parking lot"
  },
  {
    "japanese": "大分",
    "romaji": "daibu",
    "english": "greatly"
  },
  {
    "japanese": "大学生",
    "romaji": "daigakusei",
    "english": "university student"
  },
  {
    "japanese": "大事",
    "romaji": "daiji",
    "english": "important, valuable, serious matter"
  },
  {
    "japanese": "大体",
    "romaji": "daitai",
    "english": "generally"
  },
  {
    "japanese": "だから",
    "romaji": "dakara",
    "english": "so, therefore"
  },
  {
    "japanese": "だめ",
    "romaji": "dame",
    "english": "no good"
  },
  {
    "japanese": "暖房",
    "romaji": "danbō",
    "english": "heating"
  },
  {
    "japanese": "男性",
    "romaji": "dansei",
    "english": "male"
  },
  {
    "japanese": "できるだけ",
    "romaji": "dekirudake",
    "english": "as much as possible"
  },
  {
    "japanese": "電報",
    "romaji": "denpō",
    "english": "telegram"
  },
  {
    "japanese": "電灯",
    "romaji": "dentō",
    "english": "electric light"
  },
  {
    "japanese": "動物園",
    "romaji": "dōbutsuen",
    "english": "zoo"
  },
  {
    "japanese": "道具",
    "romaji": "dōgu",
    "english": "tool, means"
  },
  {
    "japanese": "どんどん",
    "romaji": "dondon",
    "english": "more and more"
  },
  {
    "japanese": "泥棒",
    "romaji": "dorobō",
    "english": "thief"
  },
  {
    "japanese": "枝",
    "romaji": "eda",
    "english": "branch, twig"
  },
  {
    "japanese": "遠慮",
    "romaji": "enryo-suru",
    "english": "to be reserved, to be restrained"
  },
  {
    "japanese": "選ぶ",
    "romaji": "erabu",
    "english": "to choose"
  },
  {
    "japanese": "エスカレーター",
    "romaji": "esukarētā",
    "english": "escalator"
  },
  {
    "japanese": "ファックス",
    "romaji": "fakkusu",
    "english": "fax"
  },
  {
    "japanese": "不便",
    "romaji": "fuben",
    "english": "inconvenience"
  },
  {
    "japanese": "増える",
    "romaji": "fueru",
    "english": "to increase"
  },
  {
    "japanese": "深い",
    "romaji": "fukai",
    "english": "deep"
  },
  {
    "japanese": "復習",
    "romaji": "fukushū",
    "english": "revision"
  },
  {
    "japanese": "複雑",
    "romaji": "fukuzatsu",
    "english": "complexity, complication"
  },
  {
    "japanese": "踏む",
    "romaji": "fumu",
    "english": "to step on"
  },
  {
    "japanese": "舟",
    "romaji": "fune",
    "english": "ship"
  },
  {
    "japanese": "降り出す",
    "romaji": "furidasu",
    "english": "to start to rain"
  },
  {
    "japanese": "布団",
    "romaji": "futon",
    "english": "Japanese bedding, futon"
  },
  {
    "japanese": "太る",
    "romaji": "futoru",
    "english": "to become fat"
  },
  {
    "japanese": "普通",
    "romaji": "futsū",
    "english": "usually, or a train that stops at every station"
  },
  {
    "japanese": "ガラス",
    "romaji": "garasu",
    "english": "a glass pane"
  },
  {
    "japanese": "ガソリン",
    "romaji": "gasorin",
    "english": "petrol"
  },
  {
    "japanese": "ガソリンスタンド",
    "romaji": "gasorinsutando",
    "english": "petrol station"
  },
  {
    "japanese": "ガス",
    "romaji": "gasu",
    "english": "petrol"
  },
  {
    "japanese": "原因",
    "romaji": "gen'in",
    "english": "cause, source"
  },
  {
    "japanese": "下宿",
    "romaji": "geshuku",
    "english": "lodging"
  },
  {
    "japanese": "技術",
    "romaji": "gijutsu",
    "english": "art, technology, skill"
  },
  {
    "japanese": "ごちそう",
    "romaji": "gochisō",
    "english": "a feast"
  },
  {
    "japanese": "ごみ",
    "romaji": "gomi",
    "english": "rubbish"
  },
  {
    "japanese": "ごらんになる",
    "romaji": "goranninaru",
    "english": "(respectful) to see"
  },
  {
    "japanese": "御主人",
    "romaji": "goshujin",
    "english": "(honorable) your husband"
  },
  {
    "japanese": "ご存じ",
    "romaji": "gozonji",
    "english": "knowing, acquaintance"
  },
  {
    "japanese": "具合",
    "romaji": "guai",
    "english": "condition, health"
  },
  {
    "japanese": "葉",
    "romaji": "ha",
    "english": "leaf"
  },
  {
    "japanese": "拝見",
    "romaji": "haiken-suru",
    "english": "(humble) to look at"
  },
  {
    "japanese": "歯医者",
    "romaji": "haisha",
    "english": "dentist"
  },
  {
    "japanese": "始める",
    "romaji": "hajimeru",
    "english": "to begin"
  },
  {
    "japanese": "はっきり",
    "romaji": "hakkiri",
    "english": "clearly"
  },
  {
    "japanese": "運ぶ",
    "romaji": "hakobu",
    "english": "to transport"
  },
  {
    "japanese": "花見",
    "romaji": "hanami",
    "english": "cherry-blossom viewing"
  },
  {
    "japanese": "ハンドバッグ",
    "romaji": "handobaggu",
    "english": "handbag　"
  },
  {
    "japanese": "反対",
    "romaji": "hantai",
    "english": "opposition"
  },
  {
    "japanese": "払う",
    "romaji": "harau",
    "english": "to pay"
  },
  {
    "japanese": "発音",
    "romaji": "hatsuon",
    "english": "pronunciation"
  },
  {
    "japanese": "林",
    "romaji": "hayashi",
    "english": "woods, forester"
  },
  {
    "japanese": "はず",
    "romaji": "hazu",
    "english": "it should be so"
  },
  {
    "japanese": "恥ずかしい",
    "romaji": "hazukashii",
    "english": "embarrassed"
  },
  {
    "japanese": "変",
    "romaji": "hen",
    "english": "strange"
  },
  {
    "japanese": "返事",
    "romaji": "henji",
    "english": "reply"
  },
  {
    "japanese": "日",
    "romaji": "hi",
    "english": "day, sun"
  },
  {
    "japanese": "火",
    "romaji": "hi",
    "english": "fire"
  },
  {
    "japanese": "ひどい",
    "romaji": "hidoi",
    "english": "awful"
  },
  {
    "japanese": "冷える",
    "romaji": "hieru",
    "english": "to grow cold"
  },
  {
    "japanese": "ひげ",
    "romaji": "hige",
    "english": "beard"
  },
  {
    "japanese": "非常に",
    "romaji": "hijōni",
    "english": "extremely"
  },
  {
    "japanese": "光",
    "romaji": "hikari",
    "english": "light"
  },
  {
    "japanese": "光る",
    "romaji": "hikaru",
    "english": "to shine, to glitter"
  },
  {
    "japanese": "引き出し",
    "romaji": "hikidashi",
    "english": "drawer, drawing out"
  },
  {
    "japanese": "引き出す",
    "romaji": "hikidasu",
    "english": "to withdraw"
  },
  {
    "japanese": "引っ越す",
    "romaji": "hikkosu",
    "english": "to move house"
  },
  {
    "japanese": "飛行場",
    "romaji": "hikōjō",
    "english": "airport"
  },
  {
    "japanese": "開く",
    "romaji": "hiraku",
    "english": "to open an event"
  },
  {
    "japanese": "拾う",
    "romaji": "hirō",
    "english": "to pick up, to gather"
  },
  {
    "japanese": "昼間",
    "romaji": "hiruma",
    "english": "daytime, during the day"
  },
  {
    "japanese": "昼休み",
    "romaji": "hiruyasumi",
    "english": "noon break"
  },
  {
    "japanese": "久しぶり",
    "romaji": "hisashiburi",
    "english": "after a long time"
  },
  {
    "japanese": "必要",
    "romaji": "hitsuyō",
    "english": "necessary"
  },
  {
    "japanese": "ほど",
    "romaji": "hodo",
    "english": "extent"
  },
  {
    "japanese": "ほめる",
    "romaji": "homeru",
    "english": "to praise"
  },
  {
    "japanese": "翻訳",
    "romaji": "hon'yaku",
    "english": "translation"
  },
  {
    "japanese": "法律",
    "romaji": "hōritsu",
    "english": "law"
  },
  {
    "japanese": "星",
    "romaji": "hoshi",
    "english": "star"
  },
  {
    "japanese": "放送",
    "romaji": "hōsō-suru",
    "english": "to broadcast"
  },
  {
    "japanese": "ほとんど",
    "romaji": "hotondo",
    "english": "mostly"
  },
  {
    "japanese": "一度",
    "romaji": "ichido",
    "english": "once"
  },
  {
    "japanese": "以外",
    "romaji": "igai",
    "english": "with the exception of"
  },
  {
    "japanese": "医学",
    "romaji": "igaku",
    "english": "medical science"
  },
  {
    "japanese": "いじめる",
    "romaji": "ijimeru",
    "english": "to tease"
  },
  {
    "japanese": "以上",
    "romaji": "ijō",
    "english": "more than, this is all"
  },
  {
    "japanese": "以下",
    "romaji": "ika",
    "english": "less than"
  },
  {
    "japanese": "意見",
    "romaji": "iken",
    "english": "opinion"
  },
  {
    "japanese": "生きる",
    "romaji": "ikiru",
    "english": "to live"
  },
  {
    "japanese": "以内",
    "romaji": "inai",
    "english": "within"
  },
  {
    "japanese": "田舎",
    "romaji": "inaka",
    "english": "countryside"
  },
  {
    "japanese": "祈る",
    "romaji": "inoru",
    "english": "to pray"
  },
  {
    "japanese": "いっぱい",
    "romaji": "ippai",
    "english": "full"
  },
  {
    "japanese": "いらっしゃる",
    "romaji": "irassharu",
    "english": "(respectful) to be, to come or to go"
  },
  {
    "japanese": "石",
    "romaji": "ishi",
    "english": "stone"
  },
  {
    "japanese": "急ぐ",
    "romaji": "isogu",
    "english": "to hurry"
  },
  {
    "japanese": "一生懸命",
    "romaji": "isshōkenmei",
    "english": "with utmost effort"
  },
  {
    "japanese": "いただく",
    "romaji": "itadaku",
    "english": "(humble) to receive"
  },
  {
    "japanese": "致す",
    "romaji": "itasu",
    "english": "(humble) to do"
  },
  {
    "japanese": "糸",
    "romaji": "ito",
    "english": "thread"
  },
  {
    "japanese": "じゃま",
    "romaji": "jama",
    "english": "hindrance, intrusion"
  },
  {
    "japanese": "ジャム",
    "romaji": "jamu",
    "english": "jam"
  },
  {
    "japanese": "字",
    "romaji": "ji",
    "english": "character"
  },
  {
    "japanese": "時代",
    "romaji": "jidai",
    "english": "era"
  },
  {
    "japanese": "事故",
    "romaji": "jiko",
    "english": "accident"
  },
  {
    "japanese": "事務所",
    "romaji": "jimusho",
    "english": "office"
  },
  {
    "japanese": "神社",
    "romaji": "jinja",
    "english": "Shinto shrine"
  },
  {
    "japanese": "人口",
    "romaji": "jinkō",
    "english": "population"
  },
  {
    "japanese": "地震",
    "romaji": "jishin",
    "english": "earthquake"
  },
  {
    "japanese": "辞典",
    "romaji": "jiten",
    "english": "dictionary"
  },
  {
    "japanese": "自由",
    "romaji": "jiyū",
    "english": "freedom"
  },
  {
    "japanese": "女性",
    "romaji": "josei",
    "english": "woman"
  },
  {
    "japanese": "十分",
    "romaji": "jūbun",
    "english": "enough"
  },
  {
    "japanese": "柔道",
    "romaji": "jūdō",
    "english": "judo"
  },
  {
    "japanese": "準備",
    "romaji": "junbi-suru",
    "english": "to prepare"
  },
  {
    "japanese": "住所",
    "romaji": "jūsho",
    "english": "an address, a residence"
  },
  {
    "japanese": "壁",
    "romaji": "kabe",
    "english": "wall"
  },
  {
    "japanese": "課長",
    "romaji": "kachō",
    "english": "section manager"
  },
  {
    "japanese": "帰り",
    "romaji": "kaeri",
    "english": "return"
  },
  {
    "japanese": "変える",
    "romaji": "kaeru",
    "english": "to change"
  },
  {
    "japanese": "科学",
    "romaji": "kagaku",
    "english": "science"
  },
  {
    "japanese": "鏡",
    "romaji": "kagami",
    "english": "mirror"
  },
  {
    "japanese": "海岸",
    "romaji": "kaigan",
    "english": "coast"
  },
  {
    "japanese": "会議",
    "romaji": "kaigi",
    "english": "meeting"
  },
  {
    "japanese": "会議室",
    "romaji": "kaigishitsu",
    "english": "meeting room"
  },
  {
    "japanese": "会場",
    "romaji": "kaijō",
    "english": "assembly hall or meeting place"
  },
  {
    "japanese": "会話",
    "romaji": "kaiwa",
    "english": "conversation"
  },
  {
    "japanese": "火事",
    "romaji": "kaji",
    "english": "fire"
  },
  {
    "japanese": "掛ける",
    "romaji": "kakeru",
    "english": "to hang something"
  },
  {
    "japanese": "かっこう",
    "romaji": "kakkō",
    "english": "appearance"
  },
  {
    "japanese": "かまう",
    "romaji": "kamau",
    "english": "to mind"
  },
  {
    "japanese": "髪",
    "romaji": "kami",
    "english": "hair"
  },
  {
    "japanese": "噛む",
    "romaji": "kamu",
    "english": "to bite, to chew"
  },
  {
    "japanese": "家内",
    "romaji": "kanai",
    "english": "housewife"
  },
  {
    "japanese": "必ず",
    "romaji": "kanarazu",
    "english": "certainly, necessarily"
  },
  {
    "japanese": "悲しい",
    "romaji": "kanashii",
    "english": "sad"
  },
  {
    "japanese": "お・金持ち",
    "romaji": "kanemochi / okanemochi",
    "english": "rich man"
  },
  {
    "japanese": "考える",
    "romaji": "kangaeru",
    "english": "to consider"
  },
  {
    "japanese": "看護婦",
    "romaji": "kangofu",
    "english": "female nurse"
  },
  {
    "japanese": "関係",
    "romaji": "kankei",
    "english": "relationship"
  },
  {
    "japanese": "彼女",
    "romaji": "kanojo",
    "english": "she, girlfriend"
  },
  {
    "japanese": "簡単",
    "romaji": "kantan",
    "english": "simple"
  },
  {
    "japanese": "彼",
    "romaji": "kare",
    "english": "he, boyfriend"
  },
  {
    "japanese": "彼ら",
    "romaji": "karera",
    "english": "they"
  },
  {
    "japanese": "形",
    "romaji": "katachi",
    "english": "shape"
  },
  {
    "japanese": "堅 / 硬/固い",
    "romaji": "katai",
    "english": "hard"
  },
  {
    "japanese": "片付ける",
    "romaji": "katazukeru",
    "english": "to tidy up"
  },
  {
    "japanese": "カーテン",
    "romaji": "kāten",
    "english": "curtain"
  },
  {
    "japanese": "勝つ",
    "romaji": "katsu",
    "english": "to win"
  },
  {
    "japanese": "乾く",
    "romaji": "kawaku",
    "english": "to get dry"
  },
  {
    "japanese": "代わり",
    "romaji": "kawari",
    "english": "substitute, alternate"
  },
  {
    "japanese": "変わる",
    "romaji": "kawaru",
    "english": "to change"
  },
  {
    "japanese": "通う",
    "romaji": "kayō",
    "english": "to commute"
  },
  {
    "japanese": "飾る",
    "romaji": "kazaru",
    "english": "to decorate"
  },
  {
    "japanese": "毛",
    "romaji": "ke",
    "english": "hair or fur"
  },
  {
    "japanese": "けが・する",
    "romaji": "kega-suru",
    "english": "to injure"
  },
  {
    "japanese": "計画",
    "romaji": "keikaku-suru",
    "english": "to plan"
  },
  {
    "japanese": "経験",
    "romaji": "keiken-suru",
    "english": "to experience"
  },
  {
    "japanese": "警察",
    "romaji": "keisatsu",
    "english": "police"
  },
  {
    "japanese": "経済",
    "romaji": "keizai",
    "english": "finance, economy"
  },
  {
    "japanese": "ケーキ",
    "romaji": "kēki",
    "english": "cake"
  },
  {
    "japanese": "見物",
    "romaji": "kenbutsu",
    "english": "sightseeing"
  },
  {
    "japanese": "けんか・する",
    "romaji": "kenka-suru",
    "english": "to quarrel"
  },
  {
    "japanese": "研究",
    "romaji": "kenkyū",
    "english": "research"
  },
  {
    "japanese": "研究室",
    "romaji": "kenkyūshitsu",
    "english": "study room, laboratory"
  },
  {
    "japanese": "けれど / けれども",
    "romaji": "keredo / keredomo",
    "english": "however"
  },
  {
    "japanese": "消しゴム",
    "romaji": "keshigomu",
    "english": "eraser"
  },
  {
    "japanese": "景色",
    "romaji": "keshiki",
    "english": "scene, landscape"
  },
  {
    "japanese": "決して",
    "romaji": "kesshite",
    "english": "never"
  },
  {
    "japanese": "気",
    "romaji": "ki",
    "english": "spirit, mood"
  },
  {
    "japanese": "厳しい",
    "romaji": "kibishii",
    "english": "strict"
  },
  {
    "japanese": "気分",
    "romaji": "kibun",
    "english": "mood"
  },
  {
    "japanese": "機会",
    "romaji": "kikai",
    "english": "opportunity"
  },
  {
    "japanese": "危険",
    "romaji": "kiken",
    "english": "danger"
  },
  {
    "japanese": "聞こえる",
    "romaji": "kikoeru",
    "english": "to be heard"
  },
  {
    "japanese": "決る",
    "romaji": "kimaru",
    "english": "to be decided"
  },
  {
    "japanese": "決める",
    "romaji": "kimeru",
    "english": "to decide"
  },
  {
    "japanese": "君",
    "romaji": "kimi",
    "english": "(informal) You (used by men towards women)"
  },
  {
    "japanese": "気持ち",
    "romaji": "kimochi",
    "english": "feeling, mood"
  },
  {
    "japanese": "着物",
    "romaji": "kimono",
    "english": "kimono"
  },
  {
    "japanese": "近所",
    "romaji": "kinjo",
    "english": "neighbourhood"
  },
  {
    "japanese": "絹",
    "romaji": "kinu",
    "english": "silk"
  },
  {
    "japanese": "季節",
    "romaji": "kisetsu",
    "english": "season"
  },
  {
    "japanese": "汽車",
    "romaji": "kisha",
    "english": "steam train"
  },
  {
    "japanese": "規則",
    "romaji": "kisoku",
    "english": "regulations"
  },
  {
    "japanese": "きっと",
    "romaji": "kitto",
    "english": "surely"
  },
  {
    "japanese": "子",
    "romaji": "ko",
    "english": "child"
  },
  {
    "japanese": "こう",
    "romaji": "kō",
    "english": "this way"
  },
  {
    "japanese": "校長",
    "romaji": "kōchō",
    "english": "headmaster"
  },
  {
    "japanese": "講堂",
    "romaji": "kōdō",
    "english": "auditorium"
  },
  {
    "japanese": "郊外",
    "romaji": "kōgai",
    "english": "outskirts"
  },
  {
    "japanese": "講義",
    "romaji": "kōgi",
    "english": "lecture"
  },
  {
    "japanese": "工業",
    "romaji": "kōgyō",
    "english": "the manufacturing industry"
  },
  {
    "japanese": "工場",
    "romaji": "kōjō",
    "english": "factory"
  },
  {
    "japanese": "高校",
    "romaji": "kōkō",
    "english": "high school"
  },
  {
    "japanese": "心",
    "romaji": "kokoro",
    "english": "core, heart"
  },
  {
    "japanese": "高校生",
    "romaji": "kōkōsei",
    "english": "high school student"
  },
  {
    "japanese": "国際",
    "romaji": "kokusai",
    "english": "international"
  },
  {
    "japanese": "細かい",
    "romaji": "komakai",
    "english": "small, fine"
  },
  {
    "japanese": "米",
    "romaji": "kome",
    "english": "uncooked rice"
  },
  {
    "japanese": "込む",
    "romaji": "komu",
    "english": "to be crowded"
  },
  {
    "japanese": "公務員",
    "romaji": "kōmuin",
    "english": "government worker"
  },
  {
    "japanese": "今夜",
    "romaji": "kon'ya",
    "english": "tonight"
  },
  {
    "japanese": "今度",
    "romaji": "kondo",
    "english": "now, next time"
  },
  {
    "japanese": "このあいだ",
    "romaji": "konoaida",
    "english": "the other day, recently"
  },
  {
    "japanese": "このごろ",
    "romaji": "konogoro",
    "english": "these days, nowadays"
  },
  {
    "japanese": "コンピュータ / コンピューター",
    "romaji": "konpyūta / konpyūtā",
    "english": "computer"
  },
  {
    "japanese": "コンサート",
    "romaji": "konsāto",
    "english": "concert"
  },
  {
    "japanese": "これから",
    "romaji": "korekara",
    "english": "after this"
  },
  {
    "japanese": "故障",
    "romaji": "koshō-suru",
    "english": "to break-down"
  },
  {
    "japanese": "答",
    "romaji": "kotae",
    "english": "response"
  },
  {
    "japanese": "こと",
    "romaji": "koto",
    "english": "thing, matter"
  },
  {
    "japanese": "高等学校",
    "romaji": "kōtōgakkō",
    "english": "high school"
  },
  {
    "japanese": "小鳥",
    "romaji": "kotori",
    "english": "small bird"
  },
  {
    "japanese": "交通",
    "romaji": "kōtsū",
    "english": "traffic, transportation"
  },
  {
    "japanese": "怖い",
    "romaji": "kowai",
    "english": "frightening"
  },
  {
    "japanese": "壊れる",
    "romaji": "kowareru",
    "english": "to be broken"
  },
  {
    "japanese": "壊す",
    "romaji": "kowasu",
    "english": "to break"
  },
  {
    "japanese": "首",
    "romaji": "kubi",
    "english": "neck"
  },
  {
    "japanese": "くださる",
    "romaji": "kudasaru",
    "english": "(respectful) to give"
  },
  {
    "japanese": "空気",
    "romaji": "kūki",
    "english": "air, atmosphere"
  },
  {
    "japanese": "空港",
    "romaji": "kūkō",
    "english": "airport"
  },
  {
    "japanese": "雲",
    "romaji": "kumo",
    "english": "cloud"
  },
  {
    "japanese": "比べる",
    "romaji": "kuraberu",
    "english": "to compare"
  },
  {
    "japanese": "くれる",
    "romaji": "kureru",
    "english": "to give"
  },
  {
    "japanese": "暮れる",
    "romaji": "kureru",
    "english": "to get dark, to come to an end"
  },
  {
    "japanese": "草",
    "romaji": "kusa",
    "english": "grass"
  },
  {
    "japanese": "客",
    "romaji": "kyaku",
    "english": "guest, customer"
  },
  {
    "japanese": "教育",
    "romaji": "kyōiku",
    "english": "education"
  },
  {
    "japanese": "教会",
    "romaji": "kyōkai",
    "english": "church"
  },
  {
    "japanese": "興味",
    "romaji": "kyōmi",
    "english": "an interest"
  },
  {
    "japanese": "競争",
    "romaji": "kyōsō",
    "english": "competition"
  },
  {
    "japanese": "急",
    "romaji": "kyū",
    "english": "urgent, steep"
  },
  {
    "japanese": "急行",
    "romaji": "kyūkō",
    "english": "speedy, express"
  },
  {
    "japanese": "間違える",
    "romaji": "machigaeru",
    "english": "to make a mistake"
  },
  {
    "japanese": "参る",
    "romaji": "mairu",
    "english": "(humble) to go, to come"
  },
  {
    "japanese": "まじめ",
    "romaji": "majime",
    "english": "serious"
  },
  {
    "japanese": "負ける",
    "romaji": "makeru",
    "english": "to lose"
  },
  {
    "japanese": "漫画",
    "romaji": "manga",
    "english": "comic"
  },
  {
    "japanese": "間に合う",
    "romaji": "maniau",
    "english": "to be in time for"
  },
  {
    "japanese": "真中",
    "romaji": "mannaka",
    "english": "middle"
  },
  {
    "japanese": "または",
    "romaji": "mataha",
    "english": "or, otherwise"
  },
  {
    "japanese": "周り",
    "romaji": "mawari",
    "english": "surroundings"
  },
  {
    "japanese": "回る",
    "romaji": "mawaru",
    "english": "to go around"
  },
  {
    "japanese": "まず",
    "romaji": "mazu",
    "english": "first of all"
  },
  {
    "japanese": "召し上がる",
    "romaji": "meshiagaru",
    "english": "(polite) to eat"
  },
  {
    "japanese": "珍しい",
    "romaji": "mezurashii",
    "english": "rare"
  },
  {
    "japanese": "見える",
    "romaji": "mieru",
    "english": "to be in sight"
  },
  {
    "japanese": "皆",
    "romaji": "mina",
    "english": "everybody"
  },
  {
    "japanese": "港",
    "romaji": "minato",
    "english": "harbour"
  },
  {
    "japanese": "味噌",
    "romaji": "miso",
    "english": "bean paste"
  },
  {
    "japanese": "見つかる",
    "romaji": "mitsukaru",
    "english": "to be discovered"
  },
  {
    "japanese": "見つける",
    "romaji": "mitsukeru",
    "english": "to discover"
  },
  {
    "japanese": "湖",
    "romaji": "mizūmi",
    "english": "lake"
  },
  {
    "japanese": "もちろん",
    "romaji": "mochiron",
    "english": "of course"
  },
  {
    "japanese": "戻る",
    "romaji": "modoru",
    "english": "to turn back"
  },
  {
    "japanese": "木綿",
    "romaji": "momen",
    "english": "cotton"
  },
  {
    "japanese": "もらう",
    "romaji": "morau",
    "english": "to receive"
  },
  {
    "japanese": "森",
    "romaji": "mori",
    "english": "forest"
  },
  {
    "japanese": "もし",
    "romaji": "moshi",
    "english": "if"
  },
  {
    "japanese": "申し上げる",
    "romaji": "mōshiageru",
    "english": "(humble) to say, to tell"
  },
  {
    "japanese": "申す",
    "romaji": "mōsu",
    "english": "(humble) to be called, to say"
  },
  {
    "japanese": "もうすぐ",
    "romaji": "mōsugu",
    "english": "soon"
  },
  {
    "japanese": "もっとも",
    "romaji": "mottomo",
    "english": "extremely"
  },
  {
    "japanese": "迎える",
    "romaji": "mukaeru",
    "english": "to go out to meet"
  },
  {
    "japanese": "昔",
    "romaji": "mukashi",
    "english": "olden days, former"
  },
  {
    "japanese": "向かう",
    "romaji": "mukau",
    "english": "to face"
  },
  {
    "japanese": "無理",
    "romaji": "muri",
    "english": "impossible"
  },
  {
    "japanese": "虫",
    "romaji": "mushi",
    "english": "insect"
  },
  {
    "japanese": "息子",
    "romaji": "musuko",
    "english": "(humble) son"
  },
  {
    "japanese": "娘",
    "romaji": "musume",
    "english": "(humble) daughter"
  },
  {
    "japanese": "投げる",
    "romaji": "nageru",
    "english": "to throw or cast away"
  },
  {
    "japanese": "中々",
    "romaji": "nakanaka",
    "english": "considerably"
  },
  {
    "japanese": "泣く",
    "romaji": "naku",
    "english": "to weep"
  },
  {
    "japanese": "亡くなる",
    "romaji": "nakunaru",
    "english": "to die"
  },
  {
    "japanese": "無くなる",
    "romaji": "nakunaru",
    "english": "to disappear, to get lost"
  },
  {
    "japanese": "直る",
    "romaji": "naoru",
    "english": "to be fixed, to be repaired"
  },
  {
    "japanese": "治る",
    "romaji": "naoru",
    "english": "to be cured, to heal"
  },
  {
    "japanese": "直す",
    "romaji": "naosu",
    "english": "to fix, to repair"
  },
  {
    "japanese": "慣れる",
    "romaji": "nareru",
    "english": "to grow accustomed to"
  },
  {
    "japanese": "鳴る",
    "romaji": "naru",
    "english": "to sound"
  },
  {
    "japanese": "なるべく",
    "romaji": "narubeku",
    "english": "as much as possible"
  },
  {
    "japanese": "なるほど",
    "romaji": "naruhodo",
    "english": "now I understand"
  },
  {
    "japanese": "なさる",
    "romaji": "nasaru",
    "english": "(respectful) to do"
  },
  {
    "japanese": "寝坊",
    "romaji": "nebō",
    "english": "sleeping in late"
  },
  {
    "japanese": "ねだん",
    "romaji": "nedan",
    "english": "price"
  },
  {
    "japanese": "眠い",
    "romaji": "nemui",
    "english": "sleepy"
  },
  {
    "japanese": "眠る",
    "romaji": "nemuru",
    "english": "to sleep"
  },
  {
    "japanese": "ねっしん",
    "romaji": "nesshin",
    "english": "enthusiasm"
  },
  {
    "japanese": "熱",
    "romaji": "netsu",
    "english": "fever"
  },
  {
    "japanese": "苦い",
    "romaji": "nigai",
    "english": "bitter"
  },
  {
    "japanese": "逃げる",
    "romaji": "nigeru",
    "english": "to escape"
  },
  {
    "japanese": "二階建て",
    "romaji": "nikaidate",
    "english": "two storied"
  },
  {
    "japanese": "日記",
    "romaji": "nikki",
    "english": "journal"
  },
  {
    "japanese": "人形",
    "romaji": "ningyō",
    "english": "doll, figure"
  },
  {
    "japanese": "におい",
    "romaji": "nioi",
    "english": "a smell"
  },
  {
    "japanese": "似る",
    "romaji": "niru",
    "english": "to be similar"
  },
  {
    "japanese": "のど",
    "romaji": "nodo",
    "english": "throat"
  },
  {
    "japanese": "残る",
    "romaji": "nokoru",
    "english": "to remain"
  },
  {
    "japanese": "乗り換える",
    "romaji": "norikaeru",
    "english": "to change between buses or trains"
  },
  {
    "japanese": "乗り物",
    "romaji": "norimono",
    "english": "vehicle"
  },
  {
    "japanese": "ぬれる",
    "romaji": "nureru",
    "english": "to get wet"
  },
  {
    "japanese": "塗る",
    "romaji": "nuru",
    "english": "to paint, to plaster"
  },
  {
    "japanese": "盗む",
    "romaji": "nusumu",
    "english": "to steal"
  },
  {
    "japanese": "入学",
    "romaji": "nyūgaku-suru",
    "english": "to enter school or university"
  },
  {
    "japanese": "入院",
    "romaji": "nyūin-suru",
    "english": "to hospitalise"
  },
  {
    "japanese": "落る",
    "romaji": "ochiru",
    "english": "to fall or drop"
  },
  {
    "japanese": "踊り",
    "romaji": "odori",
    "english": "a dance"
  },
  {
    "japanese": "驚く",
    "romaji": "odoroku",
    "english": "to be surprised"
  },
  {
    "japanese": "踊る",
    "romaji": "odoru",
    "english": "to dance"
  },
  {
    "japanese": "おいでになる",
    "romaji": "oideninaru",
    "english": "(respectful) to be"
  },
  {
    "japanese": "お祝い",
    "romaji": "oiwai",
    "english": "congratulation"
  },
  {
    "japanese": "お嬢さん",
    "romaji": "ojōsan",
    "english": "young lady"
  },
  {
    "japanese": "おかげ",
    "romaji": "okage",
    "english": "owing to"
  },
  {
    "japanese": "おかしい",
    "romaji": "okashii",
    "english": "strange or funny"
  },
  {
    "japanese": "行う",
    "romaji": "okonau",
    "english": "to do"
  },
  {
    "japanese": "怒る",
    "romaji": "okoru",
    "english": "to get angry, to be angry"
  },
  {
    "japanese": "起す",
    "romaji": "okosu",
    "english": "to wake"
  },
  {
    "japanese": "億",
    "romaji": "oku",
    "english": "one hundred million"
  },
  {
    "japanese": "屋上",
    "romaji": "okujō",
    "english": "rooftop"
  },
  {
    "japanese": "遅れる",
    "romaji": "okureru",
    "english": "to be late"
  },
  {
    "japanese": "贈り物",
    "romaji": "okurimono",
    "english": "gift"
  },
  {
    "japanese": "送る",
    "romaji": "okuru",
    "english": "to send"
  },
  {
    "japanese": "お祭り",
    "romaji": "omatsuri",
    "english": "festival"
  },
  {
    "japanese": "お見舞い",
    "romaji": "omimai",
    "english": "calling on someone who is ill, enquiry"
  },
  {
    "japanese": "お土産",
    "romaji": "omiyage",
    "english": "souvenir"
  },
  {
    "japanese": "思う",
    "romaji": "omō",
    "english": "to think, to feel"
  },
  {
    "japanese": "おもちゃ",
    "romaji": "omocha",
    "english": "toy"
  },
  {
    "japanese": "思い出す",
    "romaji": "omoidasu",
    "english": "to remember"
  },
  {
    "japanese": "表",
    "romaji": "omote",
    "english": "the front"
  },
  {
    "japanese": "お礼",
    "romaji": "orei",
    "english": "expression of gratitude"
  },
  {
    "japanese": "折れる",
    "romaji": "oreru",
    "english": "to break or be folded"
  },
  {
    "japanese": "下りる",
    "romaji": "oriru",
    "english": "to get off"
  },
  {
    "japanese": "折る",
    "romaji": "oru",
    "english": "to break or to fold"
  },
  {
    "japanese": "押し入れ",
    "romaji": "oshiire",
    "english": "closet"
  },
  {
    "japanese": "おっしゃる",
    "romaji": "ossharu",
    "english": "(respectful) to say"
  },
  {
    "japanese": "お宅",
    "romaji": "otaku",
    "english": "(polite) your house"
  },
  {
    "japanese": "音",
    "romaji": "oto",
    "english": "sound, note"
  },
  {
    "japanese": "オートバイ",
    "romaji": "ōtobai",
    "english": "motorcycle"
  },
  {
    "japanese": "落す",
    "romaji": "otosu",
    "english": "to drop"
  },
  {
    "japanese": "おつり",
    "romaji": "otsuri",
    "english": "change from purchase, balance"
  },
  {
    "japanese": "夫",
    "romaji": "otto",
    "english": "husband"
  },
  {
    "japanese": "終わり",
    "romaji": "owari",
    "english": "the end"
  },
  {
    "japanese": "親",
    "romaji": "oya",
    "english": "parents"
  },
  {
    "japanese": "泳ぎ方",
    "romaji": "oyogikata",
    "english": "way of swimming"
  },
  {
    "japanese": "パソコン",
    "romaji": "pasokon",
    "english": "personal computer"
  },
  {
    "japanese": "パート",
    "romaji": "pāto",
    "english": "part time"
  },
  {
    "japanese": "ピアノ",
    "romaji": "piano",
    "english": "piano"
  },
  {
    "japanese": "プレゼント",
    "romaji": "purezento",
    "english": "present"
  },
  {
    "japanese": "冷房",
    "romaji": "reibō",
    "english": "air conditioning"
  },
  {
    "japanese": "レジ",
    "romaji": "reji",
    "english": "register"
  },
  {
    "japanese": "歴史",
    "romaji": "rekishi",
    "english": "history"
  },
  {
    "japanese": "連絡",
    "romaji": "renraku",
    "english": "contact"
  },
  {
    "japanese": "レポート / リポート",
    "romaji": "repōto / ripōto",
    "english": "report"
  },
  {
    "japanese": "利用",
    "romaji": "riyō",
    "english": "utilization"
  },
  {
    "japanese": "理由",
    "romaji": "riyū",
    "english": "reason"
  },
  {
    "japanese": "留守",
    "romaji": "rusu",
    "english": "absence"
  },
  {
    "japanese": "両方",
    "romaji": "ryōhō",
    "english": "both sides"
  },
  {
    "japanese": "旅館",
    "romaji": "ryokan",
    "english": "Japanese hotel"
  },
  {
    "japanese": "寂しい",
    "romaji": "sabishii",
    "english": "lonely"
  },
  {
    "japanese": "下る",
    "romaji": "sagaru",
    "english": "to get down, to descend"
  },
  {
    "japanese": "探す",
    "romaji": "sagasu",
    "english": "to look for"
  },
  {
    "japanese": "下げる",
    "romaji": "sageru",
    "english": "to hang, to lower, to move back"
  },
  {
    "japanese": "最後",
    "romaji": "saigo",
    "english": "last, end"
  },
  {
    "japanese": "最近",
    "romaji": "saikin",
    "english": "latest, nowadays"
  },
  {
    "japanese": "最初",
    "romaji": "saisho",
    "english": "beginning, first"
  },
  {
    "japanese": "坂",
    "romaji": "saka",
    "english": "slope, hill"
  },
  {
    "japanese": "盛ん",
    "romaji": "sakan",
    "english": "popularity, prosperous"
  },
  {
    "japanese": "さっき",
    "romaji": "sakki",
    "english": "some time ago"
  },
  {
    "japanese": "サンダル",
    "romaji": "sandaru",
    "english": "sandal"
  },
  {
    "japanese": "サンドイッチ",
    "romaji": "sandoitchi",
    "english": "sandwich"
  },
  {
    "japanese": "産業",
    "romaji": "sangyō",
    "english": "industry"
  },
  {
    "japanese": "サラダ",
    "romaji": "sarada",
    "english": "salad"
  },
  {
    "japanese": "さ来月",
    "romaji": "saraigetsu",
    "english": "the month after next"
  },
  {
    "japanese": "さ来週",
    "romaji": "saraishū",
    "english": "the week after next"
  },
  {
    "japanese": "差し上げる",
    "romaji": "sashiageru",
    "english": "(polite) to give"
  },
  {
    "japanese": "騒ぐ",
    "romaji": "sawagu",
    "english": "to make noise, to be excited"
  },
  {
    "japanese": "触る",
    "romaji": "sawaru",
    "english": "to touch"
  },
  {
    "japanese": "政治",
    "romaji": "seiji",
    "english": "politics, government"
  },
  {
    "japanese": "生活",
    "romaji": "seikatsu-suru",
    "english": "to live"
  },
  {
    "japanese": "生産",
    "romaji": "seisan-suru",
    "english": "to produce"
  },
  {
    "japanese": "西洋",
    "romaji": "seiyō",
    "english": "western countries"
  },
  {
    "japanese": "世界",
    "romaji": "sekai",
    "english": "the world"
  },
  {
    "japanese": "席",
    "romaji": "seki",
    "english": "seat"
  },
  {
    "japanese": "線",
    "romaji": "sen",
    "english": "line"
  },
  {
    "japanese": "背中",
    "romaji": "senaka",
    "english": "back of the body"
  },
  {
    "japanese": "先輩",
    "romaji": "senpai",
    "english": "senior"
  },
  {
    "japanese": "戦争",
    "romaji": "sensō",
    "english": "war"
  },
  {
    "japanese": "説明",
    "romaji": "setsumei",
    "english": "explanation"
  },
  {
    "japanese": "世話",
    "romaji": "sewa-suru",
    "english": "to look after"
  },
  {
    "japanese": "社長",
    "romaji": "shachō",
    "english": "company president"
  },
  {
    "japanese": "社会",
    "romaji": "shakai",
    "english": "society, public"
  },
  {
    "japanese": "市",
    "romaji": "shi",
    "english": "city"
  },
  {
    "japanese": "試合",
    "romaji": "shiai",
    "english": "match, game"
  },
  {
    "japanese": "しばらく",
    "romaji": "shibaraku",
    "english": "little while"
  },
  {
    "japanese": "しかる",
    "romaji": "shikaru",
    "english": "a particular"
  },
  {
    "japanese": "仕方",
    "romaji": "shikata",
    "english": "method"
  },
  {
    "japanese": "試験",
    "romaji": "shiken",
    "english": "examination"
  },
  {
    "japanese": "しっかり",
    "romaji": "shikkari",
    "english": "firmly, steadily"
  },
  {
    "japanese": "島",
    "romaji": "shima",
    "english": "island"
  },
  {
    "japanese": "市民",
    "romaji": "shimin",
    "english": "citizen"
  },
  {
    "japanese": "品物",
    "romaji": "shinamono",
    "english": "goods"
  },
  {
    "japanese": "新聞社",
    "romaji": "shinbunsha",
    "english": "newspaper company"
  },
  {
    "japanese": "心配",
    "romaji": "shinpai-suru",
    "english": "to worry"
  },
  {
    "japanese": "親切",
    "romaji": "shinsetsu",
    "english": "kindness"
  },
  {
    "japanese": "失敗",
    "romaji": "shippai",
    "english": "failure, mistake"
  },
  {
    "japanese": "調べる",
    "romaji": "shiraberu",
    "english": "to investigate"
  },
  {
    "japanese": "知らせる",
    "romaji": "shiraseru",
    "english": "to notify"
  },
  {
    "japanese": "下着",
    "romaji": "shitagi",
    "english": "underwear"
  },
  {
    "japanese": "支度",
    "romaji": "shitaku-suru",
    "english": "to prepare"
  },
  {
    "japanese": "承知",
    "romaji": "shōchi-suru",
    "english": "to consent"
  },
  {
    "japanese": "小学校",
    "romaji": "shōgakkō",
    "english": "elementary school"
  },
  {
    "japanese": "紹介",
    "romaji": "shōkai",
    "english": "introduction"
  },
  {
    "japanese": "食事",
    "romaji": "shokuji-suru",
    "english": "to have a meal"
  },
  {
    "japanese": "食料品",
    "romaji": "shokuryōhin",
    "english": "groceries"
  },
  {
    "japanese": "将来",
    "romaji": "shōrai",
    "english": "future, prospects"
  },
  {
    "japanese": "小説",
    "romaji": "shōsetsu",
    "english": "novel"
  },
  {
    "japanese": "招待",
    "romaji": "shōtai-suru",
    "english": "to invite"
  },
  {
    "japanese": "習慣",
    "romaji": "shūkan",
    "english": "custom, manners"
  },
  {
    "japanese": "趣味",
    "romaji": "shumi",
    "english": "hobby"
  },
  {
    "japanese": "出発",
    "romaji": "shuppatsu-suru",
    "english": "to depart"
  },
  {
    "japanese": "出席",
    "romaji": "shusseki-suru",
    "english": "to attend"
  },
  {
    "japanese": "そう",
    "romaji": "sō",
    "english": "really"
  },
  {
    "japanese": "祖母",
    "romaji": "sobo",
    "english": "grandmother"
  },
  {
    "japanese": "相談",
    "romaji": "sōdan-suru",
    "english": "to discuss"
  },
  {
    "japanese": "育てる",
    "romaji": "sodateru",
    "english": "to rear, to bring up"
  },
  {
    "japanese": "祖父",
    "romaji": "sofu",
    "english": "grandfather"
  },
  {
    "japanese": "ソフト",
    "romaji": "sofuto",
    "english": "soft"
  },
  {
    "japanese": "そんな",
    "romaji": "sonna",
    "english": "that sort of"
  },
  {
    "japanese": "そんなに",
    "romaji": "sonnani",
    "english": "so much, like that"
  },
  {
    "japanese": "それで",
    "romaji": "sorede",
    "english": "because of that"
  },
  {
    "japanese": "それほど",
    "romaji": "sorehodo",
    "english": "to that extent"
  },
  {
    "japanese": "それに",
    "romaji": "soreni",
    "english": "moreover"
  },
  {
    "japanese": "そろそろ",
    "romaji": "sorosoro",
    "english": "gradually, soon"
  },
  {
    "japanese": "卒業",
    "romaji": "sotsugyō",
    "english": "graduation"
  },
  {
    "japanese": "すばらしい",
    "romaji": "subarashii",
    "english": "wonderful"
  },
  {
    "japanese": "滑る",
    "romaji": "suberu",
    "english": "to slide, to slip"
  },
  {
    "japanese": "数学",
    "romaji": "sūgaku",
    "english": "mathematics, arithmetic"
  },
  {
    "japanese": "過ぎる",
    "romaji": "sugiru",
    "english": "to exceed"
  },
  {
    "japanese": "凄い",
    "romaji": "sugoi",
    "english": "terrific"
  },
  {
    "japanese": "水道",
    "romaji": "suidō",
    "english": "water supply"
  },
  {
    "japanese": "水泳",
    "romaji": "suiei",
    "english": "swimming"
  },
  {
    "japanese": "すっかり",
    "romaji": "sukkari",
    "english": "completely"
  },
  {
    "japanese": "すく",
    "romaji": "suku",
    "english": "to become empty"
  },
  {
    "japanese": "スクリーン",
    "romaji": "sukurīn",
    "english": "screen"
  },
  {
    "japanese": "隅",
    "romaji": "sumi",
    "english": "corner, nook"
  },
  {
    "japanese": "済む",
    "romaji": "sumu",
    "english": "to finish"
  },
  {
    "japanese": "砂",
    "romaji": "suna",
    "english": "sand"
  },
  {
    "japanese": "すり",
    "romaji": "suri",
    "english": "pickpocket"
  },
  {
    "japanese": "すると",
    "romaji": "suruto",
    "english": "then"
  },
  {
    "japanese": "進む",
    "romaji": "susumu",
    "english": "to make progress"
  },
  {
    "japanese": "ステーキ",
    "romaji": "sutēki",
    "english": "steak"
  },
  {
    "japanese": "ステレオ",
    "romaji": "sutereo",
    "english": "stereo"
  },
  {
    "japanese": "捨てる",
    "romaji": "suteru",
    "english": "to throw away"
  },
  {
    "japanese": "スーツ",
    "romaji": "sūtsu",
    "english": "suit"
  },
  {
    "japanese": "スーツケース",
    "romaji": "sūtsukēsu",
    "english": "suitcase"
  },
  {
    "japanese": "すっと",
    "romaji": "sutto",
    "english": "straight, all of a sudden"
  },
  {
    "japanese": "正しい",
    "romaji": "tadashii",
    "english": "correct"
  },
  {
    "japanese": "台風",
    "romaji": "taifū",
    "english": "typhoon"
  },
  {
    "japanese": "退院",
    "romaji": "taiin-suru",
    "english": "to leave hospital"
  },
  {
    "japanese": "タイプ",
    "romaji": "taipu",
    "english": "type, style"
  },
  {
    "japanese": "たいてい",
    "romaji": "taitei",
    "english": "usually"
  },
  {
    "japanese": "たまに",
    "romaji": "tamani",
    "english": "occasionally"
  },
  {
    "japanese": "為",
    "romaji": "tame",
    "english": "in order to"
  },
  {
    "japanese": "棚",
    "romaji": "tana",
    "english": "shelves"
  },
  {
    "japanese": "楽しみ",
    "romaji": "tanoshimi",
    "english": "joy"
  },
  {
    "japanese": "楽む",
    "romaji": "tanoshimu",
    "english": "to enjoy oneself"
  },
  {
    "japanese": "倒れる",
    "romaji": "taoreru",
    "english": "to break down"
  },
  {
    "japanese": "足りる",
    "romaji": "tariru",
    "english": "to be enough"
  },
  {
    "japanese": "確か",
    "romaji": "tashika",
    "english": "definite"
  },
  {
    "japanese": "足す",
    "romaji": "tasu",
    "english": "to add a number"
  },
  {
    "japanese": "畳",
    "romaji": "tatami",
    "english": "Japanese straw mat"
  },
  {
    "japanese": "建てる",
    "romaji": "tateru",
    "english": "to build"
  },
  {
    "japanese": "立てる",
    "romaji": "tateru",
    "english": "to stand something up"
  },
  {
    "japanese": "例えば",
    "romaji": "tatoeba",
    "english": "for example"
  },
  {
    "japanese": "訪ねる",
    "romaji": "tazuneru",
    "english": "to visit"
  },
  {
    "japanese": "尋ねる",
    "romaji": "tazuneru",
    "english": "to ask"
  },
  {
    "japanese": "手袋",
    "romaji": "tebukuro",
    "english": "glove"
  },
  {
    "japanese": "丁寧",
    "romaji": "teinei",
    "english": "polite"
  },
  {
    "japanese": "テキスト",
    "romaji": "tekisuto",
    "english": "text, text book"
  },
  {
    "japanese": "適当",
    "romaji": "tekitō",
    "english": "suitability"
  },
  {
    "japanese": "点",
    "romaji": "ten",
    "english": "point, dot"
  },
  {
    "japanese": "店員",
    "romaji": "ten'in",
    "english": "shop assistant"
  },
  {
    "japanese": "テニス",
    "romaji": "tenisu",
    "english": "tennis"
  },
  {
    "japanese": "天気予報",
    "romaji": "tenkiyohō",
    "english": "weather forecast"
  },
  {
    "japanese": "展覧会",
    "romaji": "tenrankai",
    "english": "exhibition"
  },
  {
    "japanese": "寺",
    "romaji": "tera",
    "english": "temple"
  },
  {
    "japanese": "手伝う",
    "romaji": "tetsudau",
    "english": "to assist"
  },
  {
    "japanese": "都",
    "romaji": "to",
    "english": "metropolitan"
  },
  {
    "japanese": "途中",
    "romaji": "tochū",
    "english": "on the way"
  },
  {
    "japanese": "届ける",
    "romaji": "todokeru",
    "english": "to reach"
  },
  {
    "japanese": "特急",
    "romaji": "tokkyū",
    "english": "limited express train (faster than an express train)"
  },
  {
    "japanese": "とこや",
    "romaji": "tokoya",
    "english": "barber"
  },
  {
    "japanese": "遠く",
    "romaji": "tōku",
    "english": "distant"
  },
  {
    "japanese": "特別",
    "romaji": "tokubetsu",
    "english": "special"
  },
  {
    "japanese": "特に",
    "romaji": "tokuni",
    "english": "particularly, especially"
  },
  {
    "japanese": "泊まる",
    "romaji": "tomaru",
    "english": "to lodge at"
  },
  {
    "japanese": "止める",
    "romaji": "tomeru",
    "english": "to stop something"
  },
  {
    "japanese": "取り替える",
    "romaji": "torikaeru",
    "english": "to exchange"
  },
  {
    "japanese": "通る",
    "romaji": "tōru",
    "english": "to go through"
  },
  {
    "japanese": "とうとう",
    "romaji": "tōtō",
    "english": "finally, after all"
  },
  {
    "japanese": "都合",
    "romaji": "tsugō",
    "english": "circumstances, convenience"
  },
  {
    "japanese": "捕まえる",
    "romaji": "tsukamaeru",
    "english": "to seize"
  },
  {
    "japanese": "漬ける",
    "romaji": "tsukeru",
    "english": "to soak, to pickle"
  },
  {
    "japanese": "つき",
    "romaji": "tsuki",
    "english": "moon"
  },
  {
    "japanese": "付く",
    "romaji": "tsuku",
    "english": "to be attached"
  },
  {
    "japanese": "妻",
    "romaji": "tsuma",
    "english": "(humble) wife"
  },
  {
    "japanese": "つもり",
    "romaji": "tsumori",
    "english": "intention"
  },
  {
    "japanese": "連れる",
    "romaji": "tsureru",
    "english": "to lead"
  },
  {
    "japanese": "釣る",
    "romaji": "tsuru",
    "english": "to fish"
  },
  {
    "japanese": "伝える",
    "romaji": "tsutaeru",
    "english": "to report"
  },
  {
    "japanese": "包む",
    "romaji": "tsutsumu",
    "english": "to wrap"
  },
  {
    "japanese": "続ける",
    "romaji": "tsuzukeru",
    "english": "to continue"
  },
  {
    "japanese": "続く",
    "romaji": "tsuzuku",
    "english": "to be continued"
  },
  {
    "japanese": "うち",
    "romaji": "uchi",
    "english": "within"
  },
  {
    "japanese": "腕",
    "romaji": "ude",
    "english": "arm"
  },
  {
    "japanese": "植える",
    "romaji": "ueru",
    "english": "to plant, to grow"
  },
  {
    "japanese": "動く",
    "romaji": "ugoku",
    "english": "to move"
  },
  {
    "japanese": "うかがう",
    "romaji": "ukagau",
    "english": "to visit"
  },
  {
    "japanese": "受ける",
    "romaji": "ukeru",
    "english": "to take a lesson or test"
  },
  {
    "japanese": "受付",
    "romaji": "uketsuke",
    "english": "receipt"
  },
  {
    "japanese": "うまい",
    "romaji": "umai",
    "english": "delicious"
  },
  {
    "japanese": "うん",
    "romaji": "un",
    "english": "(informal) yes"
  },
  {
    "japanese": "運動",
    "romaji": "undō-suru",
    "english": "to exercise"
  },
  {
    "japanese": "運転",
    "romaji": "unten-suru",
    "english": "to drive"
  },
  {
    "japanese": "運転手",
    "romaji": "untenshu",
    "english": "driver"
  },
  {
    "japanese": "裏",
    "romaji": "ura",
    "english": "reverse side"
  },
  {
    "japanese": "うれしい",
    "romaji": "ureshii",
    "english": "glad"
  },
  {
    "japanese": "売り場",
    "romaji": "uriba",
    "english": "place where things are sold"
  },
  {
    "japanese": "うそ",
    "romaji": "uso",
    "english": "a lie"
  },
  {
    "japanese": "打つ",
    "romaji": "utsu",
    "english": "to hit"
  },
  {
    "japanese": "美しい",
    "romaji": "utsukushii",
    "english": "beautiful"
  },
  {
    "japanese": "移る",
    "romaji": "utsuru",
    "english": "to move house or transfer"
  },
  {
    "japanese": "写す",
    "romaji": "utsusu",
    "english": "to copy or photograph"
  },
  {
    "japanese": "別れる",
    "romaji": "wakareru",
    "english": "to separate"
  },
  {
    "japanese": "沸かす",
    "romaji": "wakasu",
    "english": "to boil, to heat"
  },
  {
    "japanese": "訳",
    "romaji": "wake",
    "english": "meaning, reason"
  },
  {
    "japanese": "沸く",
    "romaji": "waku",
    "english": "to boil, to grow hot, to get excited"
  },
  {
    "japanese": "ワープロ",
    "romaji": "wāpuro",
    "english": "word processor"
  },
  {
    "japanese": "笑う",
    "romaji": "warau",
    "english": "to laugh, to smile"
  },
  {
    "japanese": "割れる",
    "romaji": "wareru",
    "english": "to break"
  },
  {
    "japanese": "割合",
    "romaji": "wariai",
    "english": "rate, ratio, percentage"
  },
  {
    "japanese": "忘れ物",
    "romaji": "wasuremono",
    "english": "lost article"
  },
  {
    "japanese": "やはり / やっぱり",
    "romaji": "yahari / yappari",
    "english": "as I thought, absolutely"
  },
  {
    "japanese": "焼ける",
    "romaji": "yakeru",
    "english": "to burn, to be roasted"
  },
  {
    "japanese": "焼く",
    "romaji": "yaku",
    "english": "to bake, to grill"
  },
  {
    "japanese": "役に立つ",
    "romaji": "yakunitatsu",
    "english": "to be helpful"
  },
  {
    "japanese": "約束",
    "romaji": "yakusoku",
    "english": "promise"
  },
  {
    "japanese": "止む",
    "romaji": "yamu",
    "english": "to stop"
  },
  {
    "japanese": "優しい",
    "romaji": "yasashii",
    "english": "kind"
  },
  {
    "japanese": "痩せる",
    "romaji": "yaseru",
    "english": "to become thin"
  },
  {
    "japanese": "やっと",
    "romaji": "yatto",
    "english": "at last"
  },
  {
    "japanese": "柔らかい",
    "romaji": "yawarakai",
    "english": "soft"
  },
  {
    "japanese": "用",
    "romaji": "yō",
    "english": "use"
  },
  {
    "japanese": "汚れる",
    "romaji": "yogoreru",
    "english": "to get dirty"
  },
  {
    "japanese": "用意",
    "romaji": "yōi",
    "english": "preparation"
  },
  {
    "japanese": "用事",
    "romaji": "yōji",
    "english": "things to do"
  },
  {
    "japanese": "喜ぶ",
    "romaji": "yorokobu",
    "english": "to be delighted"
  },
  {
    "japanese": "よろしい",
    "romaji": "yoroshii",
    "english": "(respectful) OK, all right"
  },
  {
    "japanese": "寄る",
    "romaji": "yoru",
    "english": "to visit"
  },
  {
    "japanese": "予習",
    "romaji": "yoshū",
    "english": "preparation for a lesson"
  },
  {
    "japanese": "予定",
    "romaji": "yotei",
    "english": "arrangement"
  },
  {
    "japanese": "予約",
    "romaji": "yoyaku",
    "english": "reservation"
  },
  {
    "japanese": "湯",
    "romaji": "yu",
    "english": "hot water"
  },
  {
    "japanese": "指",
    "romaji": "yubi",
    "english": "finger"
  },
  {
    "japanese": "指輪",
    "romaji": "yubiwa",
    "english": "finger ring"
  },
  {
    "japanese": "夢",
    "romaji": "yume",
    "english": "dream"
  },
  {
    "japanese": "輸入",
    "romaji": "yunyū-suru",
    "english": "to import"
  },
  {
    "japanese": "揺れる",
    "romaji": "yureru",
    "english": "to shake, to sway"
  },
  {
    "japanese": "輸出",
    "romaji": "yushutsu-suru",
    "english": "to export"
  },
  {
    "japanese": "残念",
    "romaji": "zannen",
    "english": "disappointment"
  },
  {
    "japanese": "ぜひ",
    "romaji": "zehi",
    "english": "without fail"
  },
  {
    "japanese": "ぜんぜん",
    "romaji": "zenzen",
    "english": "not entirely (used in a negative sentence)"
  },
  {
    "japanese": "ずいぶん",
    "romaji": "zuibun",
    "english": "extremely"
  }
];

const vocabData = [...n5VocabData, ...n4VocabData];

const sentenceData = [
  { category: 'Greetings', japanese: 'おはようございます。', romaji: 'Ohayou gozaimasu.', english: "Good morning." },
  { category: 'Greetings', japanese: 'こんにちは。', romaji: 'Konnichiwa.', english: "Hello. / Good afternoon." },
  { category: 'Greetings', japanese: 'こんばんは。', romaji: 'Konbanwa.', english: "Good evening." },
  { category: 'Greetings', japanese: 'おやすみなさい。', romaji: 'Oyasuminasai.', english: "Good night." },
  { category: 'Greetings', japanese: 'さようなら。', romaji: 'Sayounara.', english: "Goodbye." },
  { category: 'Greetings', japanese: 'また明日。', romaji: 'Mata ashita.', english: "See you tomorrow." },
  { category: 'Greetings', japanese: 'またね。', romaji: 'Mata ne.', english: "See you later." },
  { category: 'Greetings', japanese: '行ってきます。', romaji: 'Ittekimasu.', english: "I am off. (said when leaving home)" },
  { category: 'Greetings', japanese: '行ってらっしゃい。', romaji: 'Itterasshai.', english: "Have a good day. (said to someone leaving)" },
  { category: 'Greetings', japanese: 'ただいま。', romaji: 'Tadaima.', english: "I am home." },
  { category: 'Greetings', japanese: 'おかえりなさい。', romaji: 'Okaerinasai.', english: "Welcome back." },
  { category: 'Greetings', japanese: 'お久しぶりです。', romaji: 'Ohisashiburi desu.', english: "Long time no see." },
  { category: 'Greetings', japanese: 'お疲れ様でした。', romaji: 'Otsukaresama deshita.', english: "Thank you for your hard work." },

  { category: 'Courtesy', japanese: 'ありがとうございます。', romaji: 'Arigatou gozaimasu.', english: "Thank you very much." },
  { category: 'Courtesy', japanese: 'どういたしまして。', romaji: 'Douitashimashite.', english: "You are welcome." },
  { category: 'Courtesy', japanese: 'すみません。', romaji: 'Sumimasen.', english: "Excuse me. / I am sorry." },
  { category: 'Courtesy', japanese: 'ごめんなさい。', romaji: 'Gomen nasai.', english: "I am sorry." },
  { category: 'Courtesy', japanese: '申し訳ありません。', romaji: 'Moushiwake arimasen.', english: "I sincerely apologize." },
  { category: 'Courtesy', japanese: 'お願いします。', romaji: 'Onegaishimasu.', english: "Please. / I ask this of you." },
  { category: 'Courtesy', japanese: 'どうぞ。', romaji: 'Douzo.', english: "Go ahead. / Here you are." },
  { category: 'Courtesy', japanese: '失礼します。', romaji: 'Shitsurei shimasu.', english: "Excuse me. (entering or leaving a room)" },
  { category: 'Courtesy', japanese: 'いただきます。', romaji: 'Itadakimasu.', english: "Thank you for the meal. (before eating)" },
  { category: 'Courtesy', japanese: 'ごちそうさまでした。', romaji: 'Gochisousama deshita.', english: "Thank you for the meal. (after eating)" },
  { category: 'Courtesy', japanese: 'おめでとうございます。', romaji: 'Omedetou gozaimasu.', english: "Congratulations." },
  { category: 'Courtesy', japanese: '大丈夫です。', romaji: 'Daijoubu desu.', english: "It is fine. / I am okay." },

  { category: 'Introducing Yourself', japanese: 'はじめまして。', romaji: 'Hajimemashite.', english: "Nice to meet you." },
  { category: 'Introducing Yourself', japanese: 'どうぞよろしくお願いします。', romaji: 'Douzo yoroshiku onegaishimasu.', english: "Pleased to meet you." },
  { category: 'Introducing Yourself', japanese: '私は田中です。', romaji: 'Watashi wa Tanaka desu.', english: "I am Tanaka." },
  { category: 'Introducing Yourself', japanese: 'お名前は何ですか。', romaji: 'Onamae wa nan desu ka.', english: "What is your name?" },
  { category: 'Introducing Yourself', japanese: 'アメリカから来ました。', romaji: 'Amerika kara kimashita.', english: "I am from America." },
  { category: 'Introducing Yourself', japanese: '日本語を勉強しています。', romaji: 'Nihongo o benkyou shite imasu.', english: "I am studying Japanese." },
  { category: 'Introducing Yourself', japanese: '学生です。', romaji: 'Gakusei desu.', english: "I am a student." },

  { category: 'Everyday Conversation', japanese: 'お元気ですか。', romaji: 'Ogenki desu ka.', english: "How are you?" },
  { category: 'Everyday Conversation', japanese: '元気です。', romaji: 'Genki desu.', english: "I am doing well." },
  { category: 'Everyday Conversation', japanese: 'はい、そうです。', romaji: 'Hai, sou desu.', english: "Yes, that is right." },
  { category: 'Everyday Conversation', japanese: 'いいえ、違います。', romaji: 'Iie, chigaimasu.', english: "No, that is not right." },
  { category: 'Everyday Conversation', japanese: '分かりました。', romaji: 'Wakarimashita.', english: "I understand. / Got it." },
  { category: 'Everyday Conversation', japanese: '分かりません。', romaji: 'Wakarimasen.', english: "I do not understand." },
  { category: 'Everyday Conversation', japanese: '知りません。', romaji: 'Shirimasen.', english: "I do not know." },
  { category: 'Everyday Conversation', japanese: 'もう一度お願いします。', romaji: 'Mou ichido onegaishimasu.', english: "One more time, please." },
  { category: 'Everyday Conversation', japanese: 'ゆっくり話してください。', romaji: 'Yukkuri hanashite kudasai.', english: "Please speak slowly." },
  { category: 'Everyday Conversation', japanese: '英語が話せますか。', romaji: 'Eigo ga hanasemasu ka.', english: "Can you speak English?" },
  { category: 'Everyday Conversation', japanese: '日本語が少し話せます。', romaji: 'Nihongo ga sukoshi hanasemasu.', english: "I can speak a little Japanese." },
  { category: 'Everyday Conversation', japanese: 'これは何ですか。', romaji: 'Kore wa nan desu ka.', english: "What is this?" },
  { category: 'Everyday Conversation', japanese: 'どうしてですか。', romaji: 'Doushite desu ka.', english: "Why is that?" },
  { category: 'Everyday Conversation', japanese: 'ちょっと待ってください。', romaji: 'Chotto matte kudasai.', english: "Please wait a moment." },
  { category: 'Everyday Conversation', japanese: '本当ですか。', romaji: 'Hontou desu ka.', english: "Really?" },
  { category: 'Everyday Conversation', japanese: 'いいですね。', romaji: 'Ii desu ne.', english: "That is nice." },
  { category: 'Everyday Conversation', japanese: 'そうですね。', romaji: 'Sou desu ne.', english: "That is true. / Let me see." },
  { category: 'Everyday Conversation', japanese: '楽しかったです。', romaji: 'Tanoshikatta desu.', english: "It was fun." },
  { category: 'Everyday Conversation', japanese: '今何時ですか。', romaji: 'Ima nanji desu ka.', english: "What time is it now?" },

  { category: 'Shopping & Dining', japanese: 'いらっしゃいませ。', romaji: 'Irasshaimase.', english: "Welcome. (said to customers)" },
  { category: 'Shopping & Dining', japanese: 'これをください。', romaji: 'Kore o kudasai.', english: "I will take this, please." },
  { category: 'Shopping & Dining', japanese: 'いくらですか。', romaji: 'Ikura desu ka.', english: "How much is it?" },
  { category: 'Shopping & Dining', japanese: '見ているだけです。', romaji: 'Mite iru dake desu.', english: "I am just looking." },
  { category: 'Shopping & Dining', japanese: 'メニューをお願いします。', romaji: 'Menyuu o onegaishimasu.', english: "The menu, please." },
  { category: 'Shopping & Dining', japanese: 'おすすめは何ですか。', romaji: 'Osusume wa nan desu ka.', english: "What do you recommend?" },
  { category: 'Shopping & Dining', japanese: '水をください。', romaji: 'Mizu o kudasai.', english: "Water, please." },
  { category: 'Shopping & Dining', japanese: '美味しいです。', romaji: 'Oishii desu.', english: "It is delicious." },
  { category: 'Shopping & Dining', japanese: 'お会計をお願いします。', romaji: 'Okaikei o onegaishimasu.', english: "The check, please." },
  { category: 'Shopping & Dining', japanese: 'カードで払えますか。', romaji: 'Kaado de haraemasu ka.', english: "Can I pay by card?" },

  { category: 'Getting Around', japanese: '駅はどこですか。', romaji: 'Eki wa doko desu ka.', english: "Where is the station?" },
  { category: 'Getting Around', japanese: 'トイレはどこですか。', romaji: 'Toire wa doko desu ka.', english: "Where is the bathroom?" },
  { category: 'Getting Around', japanese: '切符はどこで買えますか。', romaji: 'Kippu wa doko de kaemasu ka.', english: "Where can I buy a ticket?" },
  { category: 'Getting Around', japanese: 'この電車は新宿に行きますか。', romaji: 'Kono densha wa Shinjuku ni ikimasu ka.', english: "Does this train go to Shinjuku?" },
  { category: 'Getting Around', japanese: '東京駅までお願いします。', romaji: 'Toukyou eki made onegaishimasu.', english: "To Tokyo Station, please." },
  { category: 'Getting Around', japanese: 'まもなく、電車が参ります。', romaji: 'Mamonaku, densha ga mairimasu.', english: "The train will arrive shortly." },
  { category: 'Getting Around', japanese: '次は、東京です。', romaji: 'Tsugi wa, Toukyou desu.', english: "The next station is Tokyo." },
  { category: 'Getting Around', japanese: 'ドアが閉まります。ご注意ください。', romaji: 'Doa ga shimarimasu. Gochuui kudasai.', english: "The doors are closing. Please be careful." },
  { category: 'Getting Around', japanese: 'お出口は右側です。', romaji: 'Odeguchi wa migigawa desu.', english: "The doors on the right side will open." },
  { category: 'Getting Around', japanese: '道に迷いました。', romaji: 'Michi ni mayoimashita.', english: "I am lost." },

  { category: 'Help & Emergencies', japanese: '助けてください。', romaji: 'Tasukete kudasai.', english: "Please help me." },
  { category: 'Help & Emergencies', japanese: '気をつけて。', romaji: 'Ki o tsukete.', english: "Take care. / Be careful." },
  { category: 'Help & Emergencies', japanese: '気分が悪いです。', romaji: 'Kibun ga warui desu.', english: "I feel sick." },
  { category: 'Help & Emergencies', japanese: '病院はどこですか。', romaji: 'Byouin wa doko desu ka.', english: "Where is the hospital?" },
  { category: 'Help & Emergencies', japanese: '警察を呼んでください。', romaji: 'Keisatsu o yonde kudasai.', english: "Please call the police." },
  { category: 'Help & Emergencies', japanese: '写真を撮ってもいいですか。', romaji: 'Shashin o totte mo ii desu ka.', english: "May I take a photo?" },
  { category: 'Help & Emergencies', japanese: 'Wi-Fiはありますか。', romaji: 'Wai-fai wa arimasu ka.', english: "Is there Wi-Fi?" }
];
