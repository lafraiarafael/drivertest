(function applyQuestionFixes() {
  function patchQuestion(pool, originalQuestion, replacement) {
    if (!Array.isArray(pool)) return;

    var item = pool.find(function (question) {
      return question.q === originalQuestion;
    });

    if (item) {
      Object.assign(item, replacement);
    }
  }

  patchQuestion(
    window.QUESTIONS,
    'What is the general maximum speed for cars on a Dutch motorway when no lower limit is shown?',
    {
      c: 'Speed limits',
      t: 'K',
      q: 'On Dutch motorways, what speed rule should you normally expect during the day, from 06:00 to 19:00, unless signs indicate otherwise?',
      o: ['100 km/h', '120 km/h', '130 km/h', 'There is no limit'],
      a: 0,
      e: 'During the day, from 06:00 to 19:00, many Dutch motorways use <strong>100 km/h</strong> as the standard rule unless signs indicate otherwise. Higher speeds, such as 130 km/h, may apply only where and when signs allow it.'
    }
  );

  patchQuestion(
    window.QUESTIONS_NL,
    'Wat is de algemene maximumsnelheid voor personenauto’s op de autosnelweg als er geen lagere limiet staat?',
    {
      c: 'Speed limits',
      t: 'K',
      q: 'Welke snelheidsregel moet je op Nederlandse autosnelwegen overdag, van 06:00 tot 19:00, normaal verwachten tenzij borden anders aangeven?',
      o: ['100 km/u', '120 km/u', '130 km/u', 'Er is geen limiet'],
      a: 0,
      e: 'Overdag, van 06:00 tot 19:00, geldt op veel Nederlandse autosnelwegen <strong>100 km/u</strong> als standaardregel, tenzij borden anders aangeven. Hogere snelheden, zoals 130 km/u, gelden alleen waar en wanneer borden dat toestaan.'
    }
  );
})();
