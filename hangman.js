//creates an array that lists all the words for hangman
var wordBank = ['carrie', 
            'halloween',
             'saw', 
             'exorcist', 
             'cujo',
             'shining'];
    console.log(wordBank);
var wins = 0;
var loss = 0;
var wrongLetter = [];
var guessesLeft = 9;
var underScores = [];
var userGuesses = [];
var randWord;
var winCounter = 0;

//function 
function startGame(){
    //picks random word
   randWord = wordBank[Math.floor(Math.random() * wordBank.length)];
   console.log('random Word = ' + randWord);
   for (var i = 0; i < randWord.length; i++){
      
    underScores.push('_');
}