var LANGUAGE_KEY = 'cbr-trainer-language-v1';
var currentLanguage = localStorage.getItem(LANGUAGE_KEY) || null;

var I18N = {
  en: {
    htmlLang: 'en',
    appTitle: 'CBR Exam Trainer',
    appBadge: 'Dutch theory practice',
    languageSwitch: 'Language',
    formatNote: 'Practice set: 50 questions per simulation · rotating pool · pass target 44/50 · study time target 30 minutes',
    disclaimerText: 'Study tool only. Traffic rules can change and local signs/markings always prevail. Verify final details with official CBR/RDW/government material before your real exam.',
    progressKicker: 'Your progress',
    resetProgressButton: 'Reset progress',
    practiceKicker: 'Fast feedback',
    practiceTitle: 'Practice Mode',
    practiceDescription: 'Train by category, answer one question at a time and read the explanation immediately.',
    practiceButton: 'Start practice',
    examKicker: 'Realistic simulation',
    examTitle: 'Exam Mode',
    examDescription: '50 questions selected from a larger rotating pool, 30-minute timer, no instant feedback.',
    examButton: 'Start exam mode',
    reviewKicker: 'Target weak points',
    reviewTitle: 'Review Mistakes',
    reviewDescription: 'Repeat questions you previously missed. Correct answers remove them from the mistake queue.',
    reviewButton: 'Review mistakes',
    noMistakes: 'No mistakes yet',
    changeModeButton: 'Change mode',
    answeredLabel: 'Answered',
    correctLabel: 'Correct',
    wrongLabel: 'Wrong',
    scoreLabel: 'Score',
    tryAgainButton: 'Try again',
    resultChangeModeButton: 'Change mode',
    officialSiteButton: 'CBR official site ↗',
    noTimer: 'No timer',
    hidden: 'Hidden',
    knowledge: 'Knowledge',
    insight: 'Insight',
    nextQuestion: 'Next question →',
    seeResults: 'See results',
    finishExam: 'Finish exam',
    skipForNow: 'Skip for now →',
    progressEmpty: 'No saved attempts yet. Start Practice Mode or Exam Mode to build your progress history.',
    resetConfirm: 'Reset all saved progress, mistakes and the current session?',
    categories: {
      'All': 'All','Priority': 'Priority','Speed limits': 'Speed limits','Traffic signs': 'Traffic signs','Alcohol & drugs': 'Alcohol & drugs','Overtaking': 'Overtaking','Motorway': 'Motorway','Lights': 'Lights','Vehicle & docs': 'Vehicle & docs','Parking': 'Parking','Cyclists & pedestrians': 'Cyclists & pedestrians','Insight': 'Insight','Emergency': 'Emergency','Environment': 'Environment','Mistakes': 'Mistakes'
    }
  },
  nl: {
    htmlLang: 'nl',
    appTitle: 'CBR Theorie Trainer',
    appBadge: 'Nederlandse theorie oefening',
    languageSwitch: 'Taal',
    formatNote: 'Oefenset: 50 vragen per simulatie · roterende vragenbank · slagingsdoel 44/50 · streeftijd 30 minuten',
    disclaimerText: 'Alleen een studiehulpmiddel. Verkeersregels kunnen veranderen en lokale borden/markeringen gaan altijd voor. Controleer de definitieve informatie via officiële CBR/RDW/overheidsbronnen vóór je echte examen.',
    progressKicker: 'Jouw voortgang',
    resetProgressButton: 'Voortgang wissen',
    practiceKicker: 'Directe feedback',
    practiceTitle: 'Oefenmodus',
    practiceDescription: 'Oefen per categorie, beantwoord één vraag tegelijk en lees direct de uitleg.',
    practiceButton: 'Start oefenen',
    examKicker: 'Realistische simulatie',
    examTitle: 'Examenmodus',
    examDescription: '50 vragen uit een grotere roterende vragenbank, timer van 30 minuten, geen directe feedback.',
    examButton: 'Start examenmodus',
    reviewKicker: 'Werk aan zwakke punten',
    reviewTitle: 'Fouten herhalen',
    reviewDescription: 'Herhaal vragen die je eerder fout had. Goede antwoorden verwijderen ze uit de foutenlijst.',
    reviewButton: 'Fouten herhalen',
    noMistakes: 'Nog geen fouten',
    changeModeButton: 'Modus wijzigen',
    answeredLabel: 'Beantwoord',
    correctLabel: 'Goed',
    wrongLabel: 'Fout',
    scoreLabel: 'Score',
    tryAgainButton: 'Opnieuw proberen',
    resultChangeModeButton: 'Modus wijzigen',
    officialSiteButton: 'Officiële CBR-site ↗',
    noTimer: 'Geen timer',
    hidden: 'Verborgen',
    knowledge: 'Kennis',
    insight: 'Inzicht',
    nextQuestion: 'Volgende vraag →',
    seeResults: 'Bekijk resultaat',
    finishExam: 'Examen afronden',
    skipForNow: 'Nu overslaan →',
    progressEmpty: 'Nog geen opgeslagen pogingen. Start Oefenmodus of Examenmodus om je voortgang op te bouwen.',
    resetConfirm: 'Alle opgeslagen voortgang, fouten en de huidige sessie wissen?',
    categories: {
      'All': 'Alles','Priority': 'Voorrang','Speed limits': 'Snelheidslimieten','Traffic signs': 'Verkeersborden','Alcohol & drugs': 'Alcohol & drugs','Overtaking': 'Inhalen','Motorway': 'Autosnelweg','Lights': 'Verlichting','Vehicle & docs': 'Voertuig & documenten','Parking': 'Parkeren','Cyclists & pedestrians': 'Fietsers & voetgangers','Insight': 'Inzicht','Emergency': 'Noodgevallen','Environment': 'Milieu','Mistakes': 'Fouten'
    }
  }
};

function t(key) {
  var lang = currentLanguage || 'en';
  return (I18N[lang] && I18N[lang][key]) || I18N.en[key] || key;
}

function tc(category) {
  var lang = currentLanguage || 'en';
  return (I18N[lang].categories && I18N[lang].categories[category]) || category;
}

function setQuestionPoolByLanguage() {
  var lang = currentLanguage || 'en';
  if (lang === 'nl' && window.QUESTIONS_NL && window.QUESTIONS_NL.length) {
    QUESTIONS = (window.QUESTIONS_NL || []).concat(window.EXTRA_QUESTIONS_NL || []);
  } else {
    QUESTIONS = (window.QUESTIONS || []).concat(window.EXTRA_QUESTIONS || []);
  }
}

function applyLanguage() {
  var lang = currentLanguage || 'en';
  document.documentElement.lang = I18N[lang].htmlLang;
  setQuestionPoolByLanguage();

  var ids = [
    'appTitle','appBadge','languageSwitch','formatNote','disclaimerText','progressKicker','resetProgressButton',
    'practiceKicker','practiceTitle','practiceDescription','practiceButton','examKicker','examTitle','examDescription','examButton',
    'reviewKicker','reviewTitle','reviewDescription','changeModeButton','answeredLabel','correctLabel','wrongLabel','scoreLabel',
    'tryAgainButton','resultChangeModeButton','officialSiteButton'
  ];

  ids.forEach(function (id) {
    var element = document.getElementById(id);
    if (element && I18N[lang][id]) element.textContent = I18N[lang][id];
  });

  var languageOverlay = document.getElementById('languageOverlay');
  if (languageOverlay) languageOverlay.className = 'language-overlay';

  if (typeof buildCategoryButtons === 'function' && currentMode === 'practice') buildCategoryButtons();
  if (typeof renderProgressPanel === 'function') renderProgressPanel();
}

function chooseLanguage(lang) {
  currentLanguage = lang;
  localStorage.setItem(LANGUAGE_KEY, lang);
  applyLanguage();
  showModeScreen();
}

function openLanguageSelector() {
  var overlay = document.getElementById('languageOverlay');
  if (overlay) overlay.className = 'language-overlay on';
}

var originalBuildCategoryButtons = buildCategoryButtons;
buildCategoryButtons = function () {
  originalBuildCategoryButtons();
  var buttons = document.querySelectorAll('#cbar .cbt');
  buttons.forEach(function (button) {
    var original = button.textContent;
    Object.keys(I18N.en.categories).forEach(function (key) {
      if (I18N.en.categories[key] === original || I18N.nl.categories[key] === original) original = key;
    });
    button.textContent = tc(original);
  });
};

var originalStartPracticeMode = startPracticeMode;
startPracticeMode = function () {
  setQuestionPoolByLanguage();
  originalStartPracticeMode();
  document.getElementById('modeLabel').textContent = t('practiceTitle');
  document.getElementById('timer').textContent = t('noTimer');
};

var originalStartExamMode = startExamMode;
startExamMode = function () {
  setQuestionPoolByLanguage();
  originalStartExamMode();
  document.getElementById('modeLabel').textContent = t('examTitle');
};

var originalUpdateStats = updateStats;
updateStats = function () {
  originalUpdateStats();
  if (currentMode === 'exam') document.getElementById('sp').textContent = t('hidden');
};

var originalRenderQuestion = renderQuestion;
renderQuestion = function () {
  originalRenderQuestion();
  var meta = document.getElementById('qm');
  if (meta) {
    meta.innerHTML = meta.innerHTML
      .replace('Knowledge', t('knowledge'))
      .replace('Insight', t('insight'));
    categories.forEach(function (category) {
      meta.innerHTML = meta.innerHTML.replace(category, tc(category));
    });
  }

  var actionButtons = document.querySelectorAll('#ac .btn');
  actionButtons.forEach(function (button) {
    if (button.textContent.indexOf('Skip for now') !== -1) button.textContent = t('skipForNow');
    if (button.textContent.indexOf('Finish exam') !== -1) button.textContent = t('finishExam');
    if (button.textContent.indexOf('Next question') !== -1) button.textContent = t('nextQuestion');
    if (button.textContent.indexOf('See results') !== -1) button.textContent = t('seeResults');
  });
};

var originalShowModeScreen = showModeScreen;
showModeScreen = function () {
  originalShowModeScreen();
  applyLanguage();
};

if (!currentLanguage) {
  openLanguageSelector();
} else {
  applyLanguage();
}
