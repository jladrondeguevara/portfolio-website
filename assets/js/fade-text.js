var strengthWords = [
    'Problem Solver',
    'Believer',
    'Empathizer',
    'Deliverer',
    'Thinker'
];

var loopLimit = strengthWords.length;
var counter = 0;
//var $text = $('#fade-text');
var css = {};

(function changeText() {
    if (counter < loopLimit) {
       // $text
        .fadeOut(0)
        .text(strengthWords[counter++])
        .css(css)
        .fadeIn(500);
  
      setTimeout(changeText, 2500);
    }
  
    }());
