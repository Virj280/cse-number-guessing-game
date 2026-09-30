// Declarations
let guessesLeft = 5;
let countdownTimer;

// Hint
window.onload = function() { 
    var theHint = localStorage.getItem('hint'); 
    alert('You get 5 guesses!'); 
    alert('Player 1 has left a hint (I think)!'); 
    alert('They said "' + theHint + '"'); 
}

// Game
function startGame() {

  // Timer
  let timeLeft = 60;
  let answer = localStorage.getItem('setNum');

  const timerDisplay = document.getElementById("timer");
  function updateTimer() {
    if (timeLeft < 0) {
      clearInterval(countdownTimer);
      alert('You suck lmao');
      alert('The number was ' + answer + ' your ahh is actually tweaking');
      window.close();
      return;
    }
    timerDisplay.innerHTML = `Time Left: ${timeLeft} seconds`;
    timeLeft -= 1;
  }
  updateTimer();
  countdownTimer = setInterval(updateTimer, 1000);

  //Guesser
  const guessInput = document.createElement("input");
  guessInput.type = "text";
  guessInput.placeholder = "Enter a guess here...";
  guessInput.id = "guess";
  document.body.appendChild(guessInput);

  const guessEnter = document.createElement("input");
  guessEnter.type = "button";
  guessEnter.value = "Check Guess!";
  guessEnter.id = "guessButton";
  guessEnter.onclick = checkGuess;
  document.body.appendChild(guessEnter);
}

function checkGuess() {
  let secretNum = localStorage.getItem('setNum');
  const guess = document.getElementById("guess").value;
  
  if (guess == 67) { 
        alert('Wow'); 
        alert('I had expected player 1 to do this, but...'); 
        alert('It was you.'); 
        alert('...'); 
        alert('So I will tell you what I meant to tell player 1...'); 
        alert('Because clearly you knew what would happen.');
        alert('...Why?'); 
        alert('Do you think this is funny?'); 
        alert('Do you feel accomplished with what you have done?'); 
        alert('You should not be.'); 
        alert('Tell me, player...'); 
        alert('What drives you to do these things?'); 
        alert('...'); 
        alert("Why do you choose to perform such void and meaningless actions?"); 
        alert('...'); 
        alert("What did you think was going to happen?"); 
        window.close();
    } else if (guess.trim() === "" || isNaN(guess) || !Number.isInteger(Number(guess)) || guess < 1 || guess > 100) { 
        alert('Twin your guess lies outside the range');
        alert('That or your answer is just terrible'); 
    } else { 
        guessesLeft--;
        if (guess == secretNum) {
            guessedCorrect();
            clearInterval(countdownTimer);
            alert('Good job man :)');
            alert('Player one should be proud of you.');
            alert('However, if they are not...');
            alert('Eradicate them from this plane.');
            alert('Or play again :D');
        } else if (guessesLeft === 0) {
            alert('You fool.');
            alert('The number was ' + secretNum + '.');
            window.close();
        } else if (guess > secretNum) {
            alert('Guess is too high!');
        } else {
            alert('Guess is too low!');
        }
    }
}

function clearButton() {
    const button = document.getElementById('setButton');
    button.style.display = 'none';
}

function guessedCorrect() {
  const button = document.getElementById('guessButton');
  button.style.display = 'none';
}