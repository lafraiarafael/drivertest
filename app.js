var QUESTIONS = window.QUESTIONS || [];
var currentCategory = 'All';
var filteredQuestions = [];
var shuffledQuestions = [];
var currentQuestionIndex = 0;
var score = 0;
var answeredTotal = 0;
var hasAnsweredCurrentQuestion = false;

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
      restart();
    };

    categoryBar.appendChild(button);
  });
}

function init() {
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

  document.getElementById('rs').style.display = 'none';
  document.getElementById('qa').style.display = 'block';

  updateStats();
  renderQuestion();
}

function renderQuestion() {
  if (currentQuestionIndex >= shuffledQuestions.length) {
    showResults();
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
        checkAnswer(optionIndex, question.a, question.e);
      };
      options.appendChild(button);
    })(index);
  }

  document.getElementById('ex').className = 'expl';
  document.getElementById('ex').innerHTML = '';
  document.getElementById('ac').innerHTML = '';
  document.getElementById('pf').style.width = Math.round(currentQuestionIndex / shuffledQuestions.length * 100) + '%';
}

function checkAnswer(chosenAnswer, correctAnswer, explanation) {
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

function updateStats() {
  document.getElementById('sd').textContent = answeredTotal;
  document.getElementById('sc').textContent = score;
  document.getElementById('sw').textContent = answeredTotal - score;
  document.getElementById('sp').textContent = answeredTotal > 0 ? Math.round(score / answeredTotal * 100) + '%' : '—';
}

function showResults() {
  document.getElementById('qa').style.display = 'none';

  var resultScreen = document.getElementById('rs');
  resultScreen.style.display = 'block';

  var percentage = Math.round(score / shuffledQuestions.length * 100);
  var isFullPractice = currentCategory === 'All';
  var passed = isFullPractice ? score >= 44 : percentage >= 88;
  var resultScore = document.getElementById('rsc');

  resultScore.textContent = score + ' / ' + shuffledQuestions.length;
  resultScore.className = 'result-score ' + (passed ? 'pass' : 'fail');

  document.getElementById('rl').textContent = passed ? 'You passed the practice target!' : 'Not there yet — keep practising.';
  document.getElementById('rp').textContent = isFullPractice
    ? 'Practice target: 44/50. You got ' + score + '.'
    : percentage + "% on '" + currentCategory + "' questions.";

  var warningTip = document.getElementById('rt');
  var goodTip = document.getElementById('rb');

  if (!passed) {
    warningTip.style.display = 'block';
    warningTip.className = 'result-tip warn';
    warningTip.textContent = 'Tip: use the category buttons to drill your weakest topics. Re-check official CBR material for final exam preparation.';
    goodTip.style.display = 'none';
  } else {
    warningTip.style.display = 'none';
    goodTip.style.display = 'block';
    goodTip.textContent = 'Good progress. Keep practising and verify the latest official CBR guidance before the real exam.';
  }

  document.getElementById('pf').style.width = '100%';
}

function restart() {
  buildCategoryButtons();
  init();
}

buildCategoryButtons();
init();
