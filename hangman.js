//creates an array that lists all the words for hangman
var wordBank = ['carrie', 
            'halloween',
             'saw', 
             'exorcist', 
             'cujo',
             'shining'];
var wins = 0;
var guessesLeft = 9;
var underScores = [];
var randWord;


//function 
function startGame(){
    //picks random word
   randWord = wordBank[Math.floor(Math.random() * wordBank.length)];
   console.log('random Word = ' + randWord);


    
    //computer chooses word at randmom from array
//Main
//===========================================================

for (var i = 0; i < randWord.length; i++) {
       
    underScores.push('_');
}

//Printing underscores to screen
document.getElementById('word-blanks').textContent= underScores.join(' ');{
console.log(underScores);
}
//reset
wrongLetter = [];
guessesLeft = 10;

//HTML
document.getElementById('guesses-left').textContent= guessesLeft;
// User Guesses 

}


document.onkeyup = function(event) {

    userGuesses = event.key;
//checking if the letter exist insider of the word
    if(randWord.indexOf(userGuesses) > -1) {

        for(var i = 0; i < randWord.length; i++) {

            if(randWord[i] === userGuesses)  {

                underScores[i] = userGuesses;
                console.log(underScores);
                winCounter++;
            }
        }
    }
else
{
        wrongLetter.push(userGuesses);
        guessesLeft--;

        console.log(guessesLeft);
    }
}

startGame();
//
console.log(randWord[0]);





    