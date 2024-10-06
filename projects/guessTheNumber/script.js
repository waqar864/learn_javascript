let randomNumber = parseInt(Math.random() * 100 + 1);

const submit = document.querySelector('#subt');
const userInput = document.querySelector('#guessField');
const guessSlot = document.querySelector('.guesses');
const remaining  = document.querySelector('.lastResult');
const lowOrHi = document.querySelector('.lowOrHi');
const startOver = document.querySelector('.resultParas');


const p = document.createElement('p');

let prevGuess = [];
let numGuess = [];
let PlayGame = true;

if(PlayGame){
    submit.addEventListener('click',function(e){
        e.preventDefault();
        const guess = parseInt(userInput.value);
        console.log(guess);
        validateGuess(guess);
    })
}
function validateGuess(guess){
    if(isNaN(guess)){
        alert('Please enter a valid number');
    }else if(guess < 1 ){
        alert('Enter a number more then 1');
    }else if(guess > 100){
        alert('Enter a number less then 100');
    }else{
        prevGuess.push(guess);
        if(numGuess === 11){
            displayGuess(guess);
            displayMessage(`Game Over. Random number was ${randomNumber}`);
            endGame();
        }else{
            displayGuess(guess);
            checkGuess(guess);
        }
       
    }

}

function checkGuess(guess){
    if(guess === randomNumber){
        displayMessage(`Correct! You guessed the number ${randomNumber}`);
        endGame();
    }else if(guess < randomNumber){
        displayMessage(`Number is Too Low!`);
       
    }else if(guess > randomNumber){
        displayMessage(`Number is Too High!`);
        
    }
}

function displayGuess(guess){
    userInput.value = '';
    guessSlot.innerHTML += `${guess} `;
    numGuess++;
    remaining.innerHTML = `${11 - numGuess}`;
}
function displayMessage(message){
    lowOrHi.innerHTML = `<h2>${message}</h2>`;
}

function endGame(){
    userInput.value = '';
    userInput.setAttribute('disabled', 'disabled');
    p.classList.add('button');
    p.innerHTML = `<h2 id="newGame">Start New Game</h2>`;
    startOver.appendChild(p);
    PlayGame = false;
    newGame();
}
function newGame(){
    document.querySelector('#newGame').addEventListener('click',function(){
        randomNumber = parseInt(Math.random() * 100 + 1);
        PlayGame = true;
        prevGuess = [];
        numGuess = 0;
        userInput.removeAttribute('disabled');
        guessSlot.innerHTML = '';
        remaining.innerHTML = '10';
        lowOrHi.innerHTML = '';
        startOver.removeChild(p);
        userInput.value = '';

    })
}





