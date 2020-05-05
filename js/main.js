let biggestNum;
let smallestNum;

// set onclick for first
rangeDiv = document.getElementById('rangeSubmit');
rangeDiv.addEventListener('click', function() {
  submitRange();
  randomNum(biggestNum, smallestNum);
});

guessDiv = document.getElementById('guessSubmit');
guessDiv.addEventListener('click', function() {
  guessTracker(prevGuesses, secretNum);
  acceptGuess(secretNum, prevGuesses);
});

let prevGuesses = [];
function guessTracker(prevGuesses, secretNum) {
  console.log('secret at guess', secretNum);
  const guess = parseInt(document.getElementById('guess').value);
  prevGuesses.push(guess);
  return prevGuesses;
}

function acceptGuess(secretNum, prevGuesses) {
  console.log('secretNum at accept', secretNum);
  const guess = parseInt(document.getElementById('guess').value);
  // const gameStatus = document.getElementById('gameStatus').innerHTML;
  console.log('guess in accept', guess);
  if (guess === secretNum) {
    document.getElementById('end').style.display = 'none';
    document.getElementById('guess').style.display = 'none';
    document.getElementById('guessSubmit').style.display = 'none';
    document.getElementById('gameRange').style.display = 'none';
    document.getElementById('gameStatus').innerHTML = `Congrats! You guessed ${guess}! You got the secret number in ${prevGuesses.length} guesses!`;
    return;
  } else if (guess !== secretNum) {
    if (guess > secretNum) {
      document.getElementById('gameStatus').innerHTML = `Your guess is too high.
      Previous guesses: ${prevGuesses.join(', ')}`;
    } else {
      document.getElementById('gameStatus').innerHTML = `Your guess is too low.
      Previous guesses: ${prevGuesses.join(', ')}`;
    }
  }
  document.getElementById('guess').value = '';
  focusGuess();
}

// random number range equation
function randomNum(biggestNum, smallestNum) {
  console.log('biggest at random', biggestNum);
  let secretNum;
  this.secretNum = Math.floor(Math.random() * (biggestNum - smallestNum + 1)) + smallestNum;
  console.log('secretNum in random', secretNum);
  return secretNum;
}

function focusGuess() {
  document.querySelector('#guess').focus();
}

function hideRange() {
  document.querySelector('#range').style.display = 'none';
}
function showGame() {
  document.querySelector('#game').style.display = 'block';
}

// on submit
function submitRange() {
  // set biggestNum and smallestNum
  biggestNum = parseInt(document.getElementById('upper').value);
  smallestNum = parseInt(document.getElementById('lower').value);
  console.log('biggest in submit', biggestNum);

  document.getElementById('gameRange').innerHTML = `Guess a number between ${smallestNum} and ${biggestNum}!`;
  hideRange();
  showGame();
  focusGuess();
  return biggestNum && smallestNum;
}
