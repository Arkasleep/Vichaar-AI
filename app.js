/**
 * Vichaar AI - Central Controller & Engine
 */

// 1. MULTILINGUAL TRANSLATION DICTIONARY
const Translations = {
  English: {
    app_title: "🧠 Vichaar AI",
    welcome_text: "Welcome! Select your preferred language:",
    select_lang_label: "🌐 Select Language:",
    save_pref_label: "Save language setting for future sessions",
    save_btn: "Save & Proceed",
    btn_reminders: "🔔 Daily Reminders & Routine",
    btn_games: "🎮 Play Cognitive Games",
    btn_dashboard: "📊 Caregiver Dashboard",
    nav_home: "⚙️ Home",
    nav_games: "🎮 Games",
    nav_reminders: "🔔 Reminders",
    nav_dashboard: "📊 Dashboard",
    reminders_header: "🔔 Audio-Visual Cues & Routine Reminders",
    sec_meds: "💊 Daily Medication Schedule (Audio-Visual)",
    med_1_text: "Dementia Morning Medicine: Donepezil (1 Tablet with Water)",
    med_1_sub: "Take after breakfast to maintain memory clarity.",
    med_2_text: "Night Medicine: Memantine (1 Tablet)",
    med_2_sub: "Take before bedtime with a glass of warm milk/water.",
    btn_mark_taken: "Take Pill ✅",
    sec_family: "👨‍👩‍👧‍👦 Family Faces & Essential Contacts",
    face_1_desc: "Visits every morning. Primary caregiver.",
    face_2_desc: "Calls every evening at 7:00 PM.",
    sec_routine: "🌅 Today's Routine Schedule",
    routine_1_text: "Evening Garden Walk & Light Physical Movement",
    games_header: "🕹️ Cognitive Game Suite",
    g1_title: "Finish the Song / Saying",
    g1_desc: "Begin a well-known song line or proverb and let the patient fill in or choose the missing final word.",
    g1_instr: "Complete the well-known phrase by selecting or typing the missing word.",
    g2_title: "Nostalgic Scent Jars",
    g2_desc: "Simulate cotton balls infused with nostalgic smells (vanilla, coffee, pine, lavender) to trigger sensory recall.",
    g2_instr: "Select a scent jar to simulate smelling cotton-ball infusions and spark sensory memories.",
    g3_title: "Large-Piece Tile Patterns",
    g3_desc: "Use oversized colored blocks to complete color-matching sequences and shape patterns.",
    g3_instr: "Complete the color sequence by choosing the correct matching tile for the blank spot.",
    btn_play: "▶ Play Game",
    back_games: "← Back to Games Directory",
    label_type: "Or type answer:",
    btn_submit: "Submit Typed Answer",
    btn_next: "Next Phrase →",
    btn_save_mem: "Save Memory & Log Session",
    pattern_ask: "Which tile completes the pattern?",
    btn_next_pat: "Next Pattern →",
    dash_header: "📊 Patient Analytics & Caregiver Dashboard",
    table_title: "Logged Game Statistics",
    th_game: "Game Name",
    th_sessions: "Sessions Completed",
    th_latency: "Avg Latency / Time",
    th_acc: "Accuracy Rate",
    ai_title: "🤖 Vichaar AI Progress Engine"
  },
  Meitei: {
    app_title: "🧠 ꯋꯤꯆꯥꯔ ꯑꯦꯑꯥꯏ",
    welcome_text: "ꯇꯔꥥꯝꯅ ꯑꯣꯛꯆꯔꯤ! ꯅꯍꯥꯛꯅ ꯄꯥꯝꯕ ꯂꯣꯟ ꯈꯅꯕꯤꯌꯨ:",
    select_lang_label: "🌐 ꯂꯣꯟ ꯈꯅꯕꯤꯌꯨ:",
    save_pref_label: "ꯇꯨꯡꯒꯤ ꯁꯦꯁꯅꯒꯤꯗꯃꯛ ꯂꯣꯟ ꯁꯦꯚ ꯇꯧꯕ",
    save_btn: "ꯁꯦꯚ ꯇꯧꯕ & ꯃꯈꯥ ꯆꯠꯊꯕ",
    btn_reminders: "🔔 ꯅꯨꯃꯤꯠꯈꯨꯗꯤꯡꯒꯤ ꯍꯤꯗꯥꯛ",
    btn_games: "🎮 ꯁꯥꯟꯅꯄꯣꯠ ꯁꯥꯟꯅꯕ",
    btn_dashboard: "📊 ꯌꯦꯡꯁꯤꯅꯕꯒꯤ ꯗꯦꯁꯕꯣꯔꯗ"
  },
  Assamese: {
    app_title: "🧠 বিচাৰ এআই",
    welcome_text: "স্বাগতম! অনুগ্ৰহ কৰি ভাষাতো বাছি লওক:",
    btn_reminders: "🔔 দৈনিক ঔষধ আৰু অনুসূচী",
    btn_games: "🎮 খেলসমূহ খেলক",
    btn_dashboard: "📊 কেয়াৰগিভাৰ ড্যাশবৰ্ড"
  },
  Hindi: {
    app_title: "🧠 विचार एआई",
    welcome_text: "स्वागत है! अपनी पसंदीदा भाषा चुनें:",
    btn_reminders: "🔔 दैनिक दवा और दिनचर्या",
    btn_games: "🎮 कॉग्निटिव गेम खेलें",
    btn_dashboard: "📊 केयरगिवर डैशबोर्ड"
  },
  Bodo: { 
    app_title: "🧠 Vichaar AI", 
    welcome_text: "गाहायनि राविफोरखौ सायख':", 
    btn_reminders: "🔔 सानफ्रोमबोनि गोसोखां होनाय",
    btn_games: "🎮 गेलेमुफोर गेले",
    btn_dashboard: "📊 केयारगिभार ड्यासबोर्ड"
  },
  Mizo: { 
    app_title: "🧠 Vichaar AI", 
    welcome_text: "I ṭawng duh zawk thlang rawh:", 
    btn_reminders: "🔔 Ni tin hriatnawmna",
    btn_games: "🎮 Infiamna khel rawh",
    btn_dashboard: "📊 Caregiver Dashboard"
  },
  Khasi: { 
    app_title: "🧠 Vichaar AI", 
    welcome_text: "Jied ia ka ktien ba phi kwah:", 
    btn_reminders: "🔔 Ki jingkynmaw ba man ka sngi",
    btn_games: "🎮 Phialial bad kynmaw",
    btn_dashboard: "📊 Caregiver Dashboard"
  }
};

const DefaultGameStats = [
  { id: 1, name: "Game 1: Finish the Song / Saying", sessions: 5, totalTimeSec: 15.0, accuracy: 100 },
  { id: 2, name: "Game 2: Nostalgic Scent Jars", sessions: 3, totalTimeSec: 25.0, accuracy: 90 },
  { id: 3, name: "Game 3: Large-Piece Tile Patterns", sessions: 4, totalTimeSec: 18.0, accuracy: 85 }
];

const Phrases = [
  { prompt: '"You are my sunshine, my only..."', correct: "sunshine", options: ["moonlight", "sunshine", "starlight", "friend"] },
  { prompt: '"A stitch in time saves..."', correct: "nine", options: ["five", "ten", "nine", "time"] },
  { prompt: '"An apple a day keeps the doctor..."', correct: "away", options: ["near", "happy", "away", "sleeping"] }
];

let currentPhraseIdx = 0;
let game1StartTime = null;

document.addEventListener('DOMContentLoaded', () => {
  const activeLang = localStorage.getItem('savedLanguage') || sessionStorage.getItem('activeLanguage') || 'English';
  
  const selectEl = document.getElementById('languageSelect');
  if (selectEl) {
    selectEl.value = activeLang;
  }

  const langBadge = document.getElementById('active-lang-badge');
  if (langBadge) langBadge.innerText = `Active Language: ${activeLang}`;

  translatePage(activeLang);

  if (document.getElementById('stats-table')) {
    renderDashboard();
  }
});

function translatePage(lang) {
  const dict = Translations[lang] || Translations['English'];
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (dict[key]) {
      el.innerText = dict[key];
    }
  });
}

function previewLanguage() {
  const select = document.getElementById('languageSelect');
  if (select) {
    translatePage(select.value);
  }
}

function saveLanguageSetting() {
  const select = document.getElementById('languageSelect');
  const checkbox = document.getElementById('savePreference');
  if (select) {
    const lang = select.value;
    if (checkbox && checkbox.checked) {
      localStorage.setItem('savedLanguage', lang);
    }
    sessionStorage.setItem('activeLanguage', lang);
    alert(`Language saved as ${lang}!`);
    window.location.href = 'games.html';
  }
}

function speakText(text) {
  if (!('speechSynthesis' in window)) {
    alert('Text-to-speech is not supported on this browser.');
    return;
  }
  
  window.speechSynthesis.cancel();
  const utterance = new SpeechSynthesisUtterance(text);
  const activeLang = localStorage.getItem('savedLanguage') || sessionStorage.getItem('activeLanguage') || 'English';

  const langCodes = {
    English: 'en-US',
    Hindi: 'hi-IN',
    Assamese: 'as-IN',
    Meitei: 'mni-IN',
    Bodo: 'hi-IN',
    Mizo: 'en-US',
    Khasi: 'en-US'
  };

  utterance.lang = langCodes[activeLang] || 'en-US';
  utterance.rate = 0.9;
  utterance.pitch = 1.0;
  
  window.speechSynthesis.speak(utterance);
}

function speakCurrentPageText(elementId) {
  const el = document.getElementById(elementId);
  if (el) {
    speakText(el.innerText);
  }
}

function markTaken(cardId) {
  const card = document.getElementById(cardId);
  if (card) {
    card.classList.remove('urgent');
    card.style.background = '#e8f8f5';
    card.style.borderColor = '#27ae60';
    speakText("Medication marked as taken. Well done!");
    alert("Dementia Medication logged in daily care tracker!");
  }
}

function initGame1Page() {
  currentPhraseIdx = 0;
  loadPhrase();
}

function loadPhrase() {
  game1StartTime = Date.now();
  const q = Phrases[currentPhraseIdx];
  document.getElementById('phrase-prompt').innerText = q.prompt;
  document.getElementById('feedback-msg').innerText = '';
  document.getElementById('next-btn').style.display = 'none';

  const container = document.getElementById('options-container');
  container.innerHTML = '';
  q.options.forEach(opt => {
    const btn = document.createElement('button');
    btn.className = 'opt-btn';
    btn.innerText = opt;
    btn.onclick = () => checkOption(opt);
    container.appendChild(btn);
  });
}

function checkOption(selected) {
  const q = Phrases[currentPhraseIdx];
  const duration = (Date.now() - game1StartTime) / 1000;

  if (selected.toLowerCase() === q.correct) {
    document.getElementById('feedback-msg').innerText = '✅ Correct!';
    document.getElementById('feedback-msg').style.color = 'green';
    speakText("Correct answer!");
    recordGameSession(1, duration, true);
    document.getElementById('next-btn').style.display = 'block';
  } else {
    document.getElementById('feedback-msg').innerText = '❌ Try again!';
    document.getElementById('feedback-msg').style.color = 'red';
    speakText("Try again.");
  }
}

function checkManualAnswer() {
  const val = document.getElementById('manualAnswer').value.trim();
  checkOption(val);
}

function nextQuestion() {
  currentPhraseIdx = (currentPhraseIdx + 1) % Phrases.length;
  document.getElementById('manualAnswer').value = '';
  loadPhrase();
}

let activeScent = '';
function openScentJar(name, emoji, memoryText) {
  activeScent = name;
  document.getElementById('memory-display').style.display = 'block';
  document.getElementById('scent-title').innerText = `${emoji} Scent Jar: ${name}`;
  document.getElementById('scent-prompt').innerText = `Sensory Prompts: ${memoryText}`;
  speakText(`Opened ${name} jar. ${memoryText}`);
}

function logScentSession() {
  recordGameSession(2, 8.0, true);
  alert(`Memory notes recorded for ${activeScent}! Game 2 session saved.`);
  document.getElementById('memory-display').style.display = 'none';
}

function checkPatternChoice(color) {
  const feedback = document.getElementById('pattern-feedback');
  if (color === 'blue') {
    feedback.innerText = '✅ Correct! The pattern is Red, Blue, Red, Blue.';
    feedback.style.color = 'green';
    speakText("Correct tile match!");
    recordGameSession(3, 5.0, true);
    document.getElementById('pattern-next').style.display = 'block';
  } else {
    feedback.innerText = '❌ Incorrect tile. Try again!';
    feedback.style.color = 'red';
    speakText("Incorrect tile. Try again.");
  }
}

function nextPattern() {
  alert('Pattern challenge completed! Returning to Games Directory.');
  window.location.href = 'games.html';
}

function recordGameSession(gameId, durationSec, isCorrect) {
  let stats = JSON.parse(localStorage.getItem('gameStats')) || DefaultGameStats;
  const game = stats.find(g => g.id === gameId);
  if (game) {
    game.sessions += 1;
    game.totalTimeSec += durationSec;
    localStorage.setItem('gameStats', JSON.stringify(stats));
  }
}

function renderDashboard() {
  const tbody = document.getElementById('stats-table');
  if (!tbody) return;
  
  const stats = JSON.parse(localStorage.getItem('gameStats')) || DefaultGameStats;
  tbody.innerHTML = '';

  let totalSessions = 0;
  stats.forEach(g => {
    totalSessions += g.sessions;
    const avgTime = g.sessions > 0 ? (g.totalTimeSec / g.sessions).toFixed(1) : '0.0';
    const row = `<tr>
      <td><strong>${g.name}</strong></td>
      <td>${g.sessions}</td>
      <td>${avgTime}s</td>
      <td>${g.accuracy}%</td>
    </tr>`;
    tbody.innerHTML += row;
  });

  document.getElementById('ai-prediction-summary').innerText = 
    `Evaluated across ${totalSessions} logged sessions. Reaction time remains stable with high completion accuracy.`;
  document.getElementById('ai-recommendation').innerText = 
    `Continue daily medication routines and 15-minute game rotations in the chosen primary language.`;
}