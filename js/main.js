// set onclick for first
rangeDiv = document.getElementById('rangeSubmit');
rangeDiv.addEventListener('click', determineLowLimit);
rangeDiv.addEventListener('click', determineUpLimit);
rangeDiv.addEventListener('click', function(){submitRange(biggestNum, smallestNum)});
rangeDiv.addEventListener('click', function(){randomNum(biggestNum, smallestNum)});

guessDiv = document.getElementById('guessSubmit');
guessDiv.addEventListener('click', function(){guessTracker(prevGuesses, secretNum)});
guessDiv.addEventListener('click', function(){checkRan(secretNum)});
guessDiv.addEventListener('click', function(){acceptGuess(secretNum, prevGuesses)});

//
// This shouldn't be called globally like this for it to work the way I want.
//
const biggestNum = determineUpLimit();
const smallestNum = determineLowLimit();

//
// If I don't define biggestNum and smallestNum globally, it's saying they're undefined at
// lines 5 and 6. I don't understand why they won't pass as arguements there.
// They console.log within the function fine.
//
//
function determineUpLimit() {
  const biggestNum = parseInt(document.getElementById('upper').value);
  console.log('biggest in determine', biggestNum);
  return biggestNum;
}
function determineLowLimit() {
  const smallestNum = parseInt(document.getElementById('lower').value);
  console.log('smallest in determine', smallestNum);
  return smallestNum;
}


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
}
// random number range equation
function randomNum(biggestNum, smallestNum) {
  console.log('biggest at random', biggestNum);
  let secretNum;
  this.secretNum = Math.floor(Math.random() * (biggestNum - smallestNum + 1)) + smallestNum;
  console.log('secretNum in random', secretNum);
  return secretNum;
}

function checkRan(secretNum) {
  console.log('secret at check', secretNum);
}

function hideRange() {
  document.querySelector('#range').style.display = 'none';
}
function showGame() {
  document.querySelector('#game').style.display = 'block';
}
// on submit
function submitRange(biggestNum, smallestNum) {
  // set biggestNum and smallestNum
  console.log('biggest in submit', biggestNum);
  console.log('smallest in submit', smallestNum);
  document.getElementById('gameRange').innerHTML = `Guess a number between ${smallestNum} and ${biggestNum}!`;
  hideRange();
  showGame();
}
