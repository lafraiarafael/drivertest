var STORAGE_KEY = 'cbr-trainer-progress-v1';
var ROTATION_STORAGE_KEY = 'cbr-question-rotation-v1';
var baseShowModeScreen = showModeScreen;
var baseCheckPracticeAnswer = checkPracticeAnswer;
var baseShowResults = showResults;
var baseStartPracticeMode = startPracticeMode;
var baseStartExamMode = startExamMode;
var baseRestartCurrentMode = restartCurrentMode;

function tr(key, fallback) {
  return typeof t === 'function' ? t(key) : fallback;
}

function trCategory(category) {
  return typeof tc === 'function' ? tc(category) : category;
}

function getProgress() {
  try {
    return JSON.parse(localStorage.getItem(STORAGE_KEY)) || createEmptyProgress();
  } catch (error) {
    return createEmptyProgress();
  }
}

function createEmptyProgress() {
  return {
    attempts: 0,
    bestScore: 0,
    totalAnswered: 0,
    totalCorrect: 0,
    categories: {},
    mistakes: {}
  };
}

function saveProgress(progress) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(progress));
  renderProgressPanel();
}

function getQuestionId(question) {
  return question.c + '|' + question.q;
}

function ensureCategory(progress, category) {
  if (!progress.categories[category]) {
    progress.categories[category] = { answered: 0, correct: 0 };
  }
}

function recordAnswer(question, wasCorrect) {
  var progress = getProgress();
  var questionId = getQuestionId(question);

  progress.totalAnswered++;
  if (wasCorrect) progress.totalCorrect++;

  ensureCategory(progress, question.c);
  progress.categories[question.c].answered++;
  if (wasCorrect) progress.categories[question.c].correct++;

  if (wasCorrect) {
    delete progress.mistakes[questionId];
  } else {
    progress.mistakes[questionId] = {
      id: questionId,
      category: question.c,
      question: question.q,
      lastWrongAt: new Date().toISOString()
    };
  }

  saveProgress(progress);
}

function recordAttempt(finalScore) {
  var progress = getProgress();
  progress.attempts++;
  progress.bestScore = Math.max(progress.bestScore || 0, finalScore);
  saveProgress(progress);
}

function getMistakeQuestions() {
  var progress = getProgress();
  var mistakeIds = Object.keys(progress.mistakes || {});

  return QUESTIONS.filter(function (question) {
    return mistakeIds.indexOf(getQuestionId(question)) !== -1;
  });
}

function getWeakCategories(progress) {
  return Object.keys(progress.categories || {})
    .map(function (category) {
      var item = progress.categories[category];
      var accuracy = item.answered > 0 ? item.correct / item.answered : 1;
      return { category: category, answered: item.answered, accuracy: accuracy };
    })
    .filter(function (item) {
      return item.answered >= 2 && item.accuracy < 0.75;
    })
    .sort(function (a, b) {
      return a.accuracy - b.accuracy;
    })
    .slice(0, 3);
}

function renderProgressPanel() {
  var progress = getProgress();
  var mistakesCount = Object.keys(progress.mistakes || {}).length;
  var accuracy = progress.totalAnswered > 0
    ? Math.round(progress.totalCorrect / progress.totalAnswered * 100)
    : 0;
  var weakCategories = getWeakCategories(progress);
  var summary = document.getElementById('progressSummary');
  var reviewCard = document.getElementById('reviewCard');
  var reviewButton = document.getElementById('reviewButton');

  if (!summary) return;

  if (progress.totalAnswered === 0 && progress.attempts === 0) {
    summary.innerHTML = tr('progressEmpty', 'No saved attempts yet. Start Practice Mode or Exam Mode to build your progress history.');
  } else {
    summary.innerHTML =
      tr('attempts', 'Attempts') + ': <strong>' + progress.attempts + '</strong> · ' +
      tr('bestExamScore', 'Best exam score') + ': <strong>' + progress.bestScore + '/50</strong> · ' +
      tr('overallAccuracy', 'Overall accuracy') + ': <strong>' + accuracy + '%</strong> · ' +
      tr('mistakesToReview', 'Mistakes to review') + ': <strong>' + mistakesCount + '</strong>';

    if (weakCategories.length > 0) {
      summary.innerHTML += '<div class="weak-cats">' + weakCategories.map(function (item) {
        return '<span class="weak-cat">' + trCategory(item.category) + ' · ' + Math.round(item.accuracy * 100) + '%</span>';
      }).join('') + '</div>';
    }
  }

  if (reviewCard && reviewButton) {
    if (mistakesCount === 0) {
      reviewCard.className = 'mode-card review-card disabled';
      reviewButton.textContent = tr('noMistakes', 'No mistakes yet');
    } else {
      reviewCard.className = 'mode-card review-card';
      var template = tr('reviewCount', 'Review {count} mistake{plural}');
      reviewButton.textContent = template
        .replace('{count}', mistakesCount)
        .replace('{plural}', mistakesCount === 1 ? '' : 's');
    }
  }
}

function resetActiveSessionState() {
  currentCategory = 'All';
  filteredQuestions = [];
  shuffledQuestions = [];
  userAnswers = [];
  currentQuestionIndex = 0;
  score = 0;
  answeredTotal = 0;
  hasAnsweredCurrentQuestion = false;

  clearTimer();
  updateStats();

  var progressFill = document.getElementById('pf');
  if (progressFill) progressFill.style.width = '0%';

  var options = document.getElementById('op');
  if (options) options.innerHTML = '';

  var questionText = document.getElementById('qt');
  if (questionText) questionText.textContent = '';

  var questionMeta = document.getElementById('qm');
  if (questionMeta) questionMeta.innerHTML = '';

  var explanation = document.getElementById('ex');
  if (explanation) {
    explanation.className = 'expl';
    explanation.innerHTML = '';
  }

  var actions = document.getElementById('ac');
  if (actions) actions.innerHTML = '';
}

showModeScreen = function () {
  baseShowModeScreen();
  renderProgressPanel();
};

startPracticeMode = function () {
  baseStartPracticeMode();
};

startExamMode = function () {
  baseStartExamMode();
};

checkPracticeAnswer = function (chosenAnswer, correctAnswer, explanation) {
  var question = shuffledQuestions[currentQuestionIndex];
  var wasCorrect = chosenAnswer === correctAnswer;

  baseCheckPracticeAnswer(chosenAnswer, correctAnswer, explanation);
  recordAnswer(question, wasCorrect);
};

showResults = function (timeExpired) {
  if (currentMode === 'exam') {
    calculateExamScore();

    shuffledQuestions.forEach(function (question, index) {
      recordAnswer(question, userAnswers[index] === question.a);
    });

    recordAttempt(score);
  }

  baseShowResults(timeExpired);
  renderProgressPanel();
};

function startReviewMistakes() {
  var mistakes = getMistakeQuestions();

  if (mistakes.length === 0) {
    renderProgressPanel();
    return;
  }

  currentMode = 'review';
  currentCategory = 'Mistakes';
  filteredQuestions = mistakes;
  shuffledQuestions = shuffleQuestions(filteredQuestions);
  currentQuestionIndex = 0;
  score = 0;
  answeredTotal = 0;
  hasAnsweredCurrentQuestion = false;
  userAnswers = [];

  clearTimer();
  document.getElementById('modeLabel').textContent = tr('reviewTitle', 'Review Mistakes');
  document.getElementById('timer').textContent = tr('noTimer', 'No timer');
  document.getElementById('timer').className = 'timer';

  hideElement('modeScreen');
  showElement('examBar', 'flex');
  showElement('stats', 'grid');
  showElement('progressBar');
  hideElement('cbar');
  hideElement('rs');
  showElement('qa');

  updateStats();
  renderQuestion();
}

restartCurrentMode = function () {
  if (currentMode === 'review') {
    startReviewMistakes();
  } else {
    baseRestartCurrentMode();
  }
};

function resetProgress() {
  var confirmed = window.confirm(tr('resetConfirm', 'Reset all saved progress, mistakes and the current session?'));
  if (!confirmed) return;

  localStorage.removeItem(STORAGE_KEY);
  localStorage.removeItem(ROTATION_STORAGE_KEY);
  resetActiveSessionState();
  renderProgressPanel();
  showModeScreen();
}

renderProgressPanel();
