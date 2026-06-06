var QUESTIONS = window.QUESTIONS || [];
var currentCategory = 'All';
var filteredQuestions = [];
var shuffledQuestions = [];
var userAnswers = [];
var currentQuestionIndex = 0;
var score = 0;
var answeredTotal = 0;
var hasAnsweredCurrentQuestion = false;
var currentMode = 'practice';
var timerInterval = null;
var remainingSeconds = 30 * 60;

var categories = [
  'All',
  'Priority',
  'Speed limits',
  'Traffic signs',
  'Alcohol & drugs',
  'Overtaking',
  'Motorway',
  'Lights',
  'Vehicle & docs',
  'Parking',
  'Cyclists & pedestrians',
  'Insight',
  'Emergency',
  'Environment'
];

function shuffleQuestions(items) {
  var copy = items.slice();

  for (var index = copy.length - 1; index > 0; index--) {
    var randomIndex = Math.floor(Math.random() * (index + 1));
    var temporary = copy[index];
    copy[index] = copy[randomIndex];
    copy[randomIndex] = temporary;
  }

  return copy;
}

function showElement(id, displayValue) {
  document.getElementById(id).style.display = displayValue || 'block';
}

function hideElement(id) {
  document.getElementById(id).style.display = 'none';
}

function showModeScreen() {
  clearTimer();
  showElement('modeScreen', 'grid');
  hideElement('examBar');
  hideElement('stats');
  hideElement('progressBar');
  hideElement('cbar');
  hideElement('qa');
  hideElement('rs');
}

function startPracticeMode() {
  currentMode = 'practice';
  currentCategory = 'All';
  document.getElementById('modeLabel').textContent = 'Practice Mode';
  document.getElementById('timer').textContent = 'No timer';
  document.getElementById('timer').className = 'timer';
  hideElement('modeScreen');
  showElement('examBar', 'flex');
  showElement('stats', 'grid');
  showElement('progressBar');
  showElement('cbar', 'flex');
  init();
}

function startExamMode() {
  currentMode = 'exam';
  currentCategory = 'All';
  document.getElementById('modeLabel').textContent = 'Exam Mode';
  hideElement('modeScreen');
  showElement('examBar', 'flex');
  showElement('stats', 'grid');
  showElement('progressBar');
  hideElement('cbar');
  init();
  startTimer();
}

function buildCategoryButtons() {
  var categoryBar = document.getElementById('cbar');
  categoryBar.innerHTML = '';

  categories.forEach(function (category) {
    var hasCategory = category === 'All' || QUESTIONS.some(function (question) {
      return question.c === category;
    });

    if (!hasCategory) return;

    var button = document.createElement('button');
    button.className = 'cbt' + (category === currentCategory ? ' on' : '');
    button.textContent = category;
    button.onclick = function () {
      currentCategory = category;
      init();
    };

    categoryBar.appendChild(button);
  });
}

function init() {
  clearTimer(false);

  filteredQuestions = currentCategory === 'All'
    ? QUESTIONS.slice()
    : QUESTIONS.filter(function (question) {
      return question.c === currentCategory;
    });

  shuffledQuestions = shuffleQuestions(filteredQuestions);
  currentQuestionIndex = 0;
  score = 0;
  answeredTotal = 0;
  hasAnsweredCurrentQuestion = false;
  userAnswers = [];

  hideElement('rs');
  showElement('qa');

  if (currentMode === 'practice') {
    buildCategoryButtons();
  }

  updateStats();
  renderQuestion();

  if (currentMode === 'exam') {
    startTimer();
  }
}

function renderQuestion() {
  if (currentQuestionIndex >= shuffledQuestions.length) {
    showResults(false);
    return;
  }

  hasAnsweredCurrentQuestion = false;
  var question = shuffledQuestions[currentQuestionIndex];

  document.getElementById('qm').innerHTML =
    '<span>Q ' + (currentQuestionIndex + 1) + '/' + shuffledQuestions.length + '</span> ' +
    '<span>·</span> ' +
    '<span>' + question.c + '</span> ' +
    '<span>·</span> ' +
    '<span class="qtag ' + (question.t === 'K' ? 'k' : 'i') + '">' +
    (question.t === 'K' ? 'Knowledge' : 'Insight') +
    '</span>';

  document.getElementById('qt').textContent = question.q;

  var options = document.getElementById('op');
  options.innerHTML = '';

  var letters = ['A', 'B', 'C', 'D'];
  for (var index = 0; index < question.o.length; index++) {
    (function (optionIndex) {
      var button = document.createElement('button');
      button.className = 'opt';
      button.innerHTML = '<span class="opt-letter">' + letters[optionIndex] + '</span><span>' + question.o[optionIndex] + '</span>';
      button.onclick = function () {
        if (currentMode === 'exam') {
          selectExamAnswer(optionIndex);
        } else {
          checkPracticeAnswer(optionIndex, question.a, question.e);
        }
      };
      options.appendChild(button);
    })(index);
  }

  document.getElementById('ex').className = 'expl';
  document.getElementById('ex').innerHTML = '';
  document.getElementById('ac').innerHTML = '';
  document.getElementById('pf').style.width = Math.round(currentQuestionIndex / shuffledQuestions.length * 100) + '%';

  if (currentMode === 'exam') {
    var skipButton = document.createElement('button');
    skipButton.className = 'btn';
    skipButton.textContent = currentQuestionIndex + 1 < shuffledQuestions.length ? 'Skip for now →' : 'Finish exam';
    skipButton.onclick = function () {
      userAnswers[currentQuestionIndex] = null;
      answeredTotal = countAnsweredQuestions();
      updateStats();
      currentQuestionIndex++;
      renderQuestion();
    };
    document.getElementById('ac').appendChild(skipButton);
  }
}

function checkPracticeAnswer(chosenAnswer, correctAnswer, explanation) {
  if (hasAnsweredCurrentQuestion) return;

  hasAnsweredCurrentQuestion = true;
  answeredTotal++;

  var optionButtons = document.getElementById('op').querySelectorAll('.opt');

  optionButtons.forEach(function (button, index) {
    button.disabled = true;

    if (index === correctAnswer && index === chosenAnswer) {
      button.className = 'opt correct';
    } else if (index === chosenAnswer) {
      button.className = 'opt wrong';
    } else if (index === correctAnswer) {
      button.className = 'opt reveal';
    }
  });

  if (chosenAnswer === correctAnswer) score++;

  updateStats();

  var explanationBox = document.getElementById('ex');
  explanationBox.innerHTML =
    (chosenAnswer === correctAnswer
      ? '<strong style="color:#22c55e">Correct.</strong> '
      : '<strong style="color:#ef4444">Incorrect.</strong> ') + explanation;
  explanationBox.className = 'expl on';

  var nextButton = document.createElement('button');
  nextButton.className = 'btn primary';
  nextButton.textContent = currentQuestionIndex + 1 < shuffledQuestions.length ? 'Next question →' : 'See results';
  nextButton.onclick = function () {
    currentQuestionIndex++;
    renderQuestion();
  };

  document.getElementById('ac').appendChild(nextButton);
}

function selectExamAnswer(chosenAnswer) {
  userAnswers[currentQuestionIndex] = chosenAnswer;
  answeredTotal = countAnsweredQuestions();
  updateStats();

  var optionButtons = document.getElementById('op').querySelectorAll('.opt');
  optionButtons.forEach(function (button, index) {
    button.disabled = true;
    if (index === chosenAnswer) {
      button.className = 'opt selected';
    }
  });

  document.getElementById('ac').innerHTML = '';
  var nextButton = document.createElement('button');
  nextButton.className = 'btn primary';
  nextButton.textContent = currentQuestionIndex + 1 < shuffledQuestions.length ? 'Next question →' : 'Finish exam';
  nextButton.onclick = function () {
    currentQuestionIndex++;
    renderQuestion();
  };
  document.getElementById('ac').appendChild(nextButton);
}

function countAnsweredQuestions() {
  return userAnswers.filter(function (answer) {
    return answer !== undefined && answer !== null;
  }).length;
}

function calculateExamScore() {
  var finalScore = 0;

  shuffledQuestions.forEach(function (question, index) {
    if (userAnswers[index] === question.a) {
      finalScore++;
    }
  });

  score = finalScore;
  answeredTotal = countAnsweredQuestions();
}

function updateStats() {
  document.getElementById('sd').textContent = answeredTotal;
  document.getElementById('sc').textContent = currentMode === 'exam' ? '—' : score;
  document.getElementById('sw').textContent = currentMode === 'exam' ? '—' : answeredTotal - score;
  document.getElementById('sp').textContent = currentMode === 'exam'
    ? 'Hidden'
    : answeredTotal > 0 ? Math.round(score / answeredTotal * 100) + '%' : '—';
}

function showResults(timeExpired) {
  clearTimer(false);

  if (currentMode === 'exam') {
    calculateExamScore();
  }

  hideElement('qa');
  hideElement('cbar');

  var resultScreen = document.getElementById('rs');
  resultScreen.style.display = 'block';

  var percentage = Math.round(score / shuffledQuestions.length * 100);
  var isFullPractice = currentCategory === 'All';
  var passed = isFullPractice ? score >= 44 : percentage >= 88;
  var resultScore = document.getElementById('rsc');

  resultScore.textContent = score + ' / ' + shuffledQuestions.length;
  resultScore.className = 'result-score ' + (passed ? 'pass' : 'fail');

  if (currentMode === 'exam') {
    document.getElementById('rl').textContent = passed ? 'You passed the exam simulation!' : 'Exam simulation failed — keep practising.';
    document.getElementById('rp').textContent = (timeExpired ? 'Time expired. ' : '') + 'Exam target: 44/50. Answered ' + answeredTotal + '/50.';
  } else {
    document.getElementById('rl').textContent = passed ? 'You passed the practice target!' : 'Not there yet — keep practising.';
    document.getElementById('rp').textContent = isFullPractice
      ? 'Practice target: 44/50. You got ' + score + '.'
      : percentage + "% on '" + currentCategory + "' questions.";
  }

  var warningTip = document.getElementById('rt');
  var goodTip = document.getElementById('rb');

  if (!passed) {
    warningTip.style.display = 'block';
    warningTip.className = 'result-tip warn';
    warningTip.textContent = currentMode === 'exam'
      ? 'Review weak categories in Practice Mode, then repeat Exam Mode with a timer.'
      : 'Tip: use the category buttons to drill your weakest topics. Re-check official CBR material for final exam preparation.';
    goodTip.style.display = 'none';
  } else {
    warningTip.style.display = 'none';
    goodTip.style.display = 'block';
    goodTip.textContent = 'Good progress. Keep practising and verify the latest official CBR guidance before the real exam.';
  }

  document.getElementById('pf').style.width = '100%';
}

function startTimer() {
  clearTimer(false);
  remainingSeconds = 30 * 60;
  updateTimerDisplay();

  timerInterval = window.setInterval(function () {
    remainingSeconds--;
    updateTimerDisplay();

    if (remainingSeconds <= 0) {
      showResults(true);
    }
  }, 1000);
}

function updateTimerDisplay() {
  var timer = document.getElementById('timer');
  var minutes = Math.floor(remainingSeconds / 60);
  var seconds = remainingSeconds % 60;
  timer.textContent = String(minutes).padStart(2, '0') + ':' + String(seconds).padStart(2, '0');

  if (remainingSeconds <= 60) {
    timer.className = 'timer danger';
  } else if (remainingSeconds <= 300) {
    timer.className = 'timer warning';
  } else {
    timer.className = 'timer';
  }
}

function clearTimer(resetText) {
  if (timerInterval) {
    window.clearInterval(timerInterval);
    timerInterval = null;
  }

  if (resetText !== false && document.getElementById('timer')) {
    document.getElementById('timer').textContent = '30:00';
    document.getElementById('timer').className = 'timer';
  }
}

function restartCurrentMode() {
  if (currentMode === 'exam') {
    startExamMode();
  } else {
    startPracticeMode();
  }
}

showModeScreen();
