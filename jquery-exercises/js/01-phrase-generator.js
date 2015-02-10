/* --------------------------------------------------------------------------
   Task #0

   Fill the `phrases` array with some of your favorite phrases.
   -------------------------------------------------------------------------- */
   'use strict'; 


var phrases = newarray();

var counter = 0
function newarray (){
  return ['I like pie',
    'An apple a day keeps the zombies away.',
    '2chainnnzzzzz.',
    'Bye felicia.',
    'just bllllaayze', 
    'Nick cage'
  ];
}

var arrayLength = phrases.length;
var msg = $('.message');
var del = $('.js-delete')
var refresh = $('.js-refresh')
refresh.on('click', nextPhrase)
msg.on('click', nextPhrase)
del.on('click', remove)

function nextPhrase(){
  counter++;
  var message = (phrases[counter]);
  if (counter >= phrases.length){
    counter = 0;
  }
    msg.html(message);
}

function remove(){
    phrases.splice(counter, 1);
    if (counter >= phrases.length && phrases.length == 0) {
      phrases = newarray();
      counter = 0;
    }
     var message = (phrases[counter]);
    msg.html(message);

}

/* --------------------------------------------------------------------------
   Task #1

   Use jQuery to make it so that when you click the refresh button, the phrase
   currently displayed on the screen is replaced with the next one from
   the `phrases` array. When the last phrase is reached, it should start again
   from the beginning.
   -------------------------------------------------------------------------- */


/* --------------------------------------------------------------------------
   Task #2

   Notice how the cursor changes when you move your mouse over the phrase. Again
   use jQuery to make it so that when you click on the phrase itself it behaves
   as if the refresh button was clicked.
   -------------------------------------------------------------------------- */


/* --------------------------------------------------------------------------
   Task #3

   Use jQuery to make it so that when you click the trash button, the phrase
   changes but the phrase that was just removed is also removed from
   circulation. It shouldn't appear again no matter how many times the phrase is
   changed.
   -------------------------------------------------------------------------- */
