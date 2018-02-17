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

    //Printing underscores to screen
        document.getElementById('word-blanks').textContent = underScores.join(" ");
        console.log(underScores);
    //reset
        wrongLetter = [];
        guessesLeft = 10;

    //HTML
        document.getElementById('guesses-left').textContent = guessesLeft;

    }
}
function winLose() {
    if(winCounter === randWord.length){
        
        alert('Winner Winner, Chicken Dinner');
    }
    else if(guessesLeft === 0){
        
        alert('Loser');
    }
}

// User Guesses 
document.onkeyup = function(event) {

    userGuesses = event.key;
    //checking if the letter exist inside of the word
    if(randWord.indexOf(userGuesses) > -1) {

        for(var i = 0; i < randWord.length; i++) {

            if(randWord[i] === userGuesses)  {

                underScores[i] = userGuesses;
                console.log(underScores);
                winCounter++;
                winLose();
            }
        }
    }
    else
    {
        wrongLetter.push(userGuesses);
        guessesLeft--;
        console.log(wrongLetter);
        winLose();
    }
}
//Main
//===========================================================
startGame();
//