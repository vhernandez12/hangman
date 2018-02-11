//creates an array that lists all the words for hangman
var words = ['carrie', 
            'halloween',
             'saw', 
             'exorcist', 
             'cujo',
             'shining'];

    //computer chooses word at randmom from array
var chooseWord () {
     words[Math.floor(Math.random() * words.length)];
}
//empty array
var answerArray = []; 
    for (var i = 0; i < chooseWord.length; i++) {
        answerArray[i] = "_";
    }
var remainingLetters = chooseWord.length;

while (remainingLetters > 0) {
    // player progress
    playerProgress (answerArray.join)(" "));
    //take input from player
    var guess =
    //update answerArray and remainingLetters for every correct guess
}
