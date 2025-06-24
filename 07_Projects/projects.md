# Projects Related to DOM

## project link
[Click here](Deleted By )

# Solution Code

## project 1

``` javascript
console.log('Kirti')
```

## Project 2 Solution (BMI Converter)

[Click Here](https://stackblitz.com/edit/vitejs-vite-8e8bozz2?file=index.html)

```document.querySelector('form').addEventListener('submit', (e) => {
  e.preventDefault();

  const height = parseFloat(document.querySelector('#height').value);
  const weight = parseFloat(document.querySelector('#weight').value);
  const results = document.querySelector('#results');

  //Show the results
  if (height === '' || height < 0 || isNaN(height)) {
    results.innerHTML = `Please enter a valid Height ${height}`;
  } else if (weight === '' || weight < 0 || isNaN(weight)) {
    results.innerHTML = `Please enter a valid Weight ${weight}`;
  } else {
    const bmi = (weight / ((height * height) / 10000)).toFixed(2);
    if (bmi < 18.6) {
      results.innerHTML = `Your BMI is ${bmi} but you are "UnderWeight"`;
    } else if (bmi < 24.9 && bmi > 18.6) {
      results.innerHTML = `Your BMI is ${bmi} , Good! Your BMI is almost Perfect`;
    } else {
      results.innerHTML = `Your BMI is ${bmi} but you are "Overweight"`;
    }
  }
});
```

## Project 3 Solution Code (Digital Clock)

[Click Here](https://stackblitz.com/edit/vitejs-vite-ax3chuux?file=index.html)

```
const clock = document.getElementById('clock');

setInterval(function () {
  const date = new Date();
  clock.innerHTML = `${date.toLocaleTimeString()}`;
}, 1000);

```

## Project 4 Solution Code (Guess The Number)

```import './style.css';
import javascriptLogo from './javascript.svg';
import viteLogo from '/vite.svg';

let randomNo = Math.floor(Math.random() * 100 + 1);
const guess = document.getElementById('guessField');
const submit = document.getElementById('submit');
const prevGusses = document.querySelector('.prevGuesses');
const guessesRem = document.querySelector('.guessesRem');
const lowOrHi = document.querySelector('.lowOrHi');
const resultsPara = document.querySelector('.resultsPara');

let prevGuess = [];
let playGame = true;
let guessRe = 10;

//for Start New Game
const startOver = document.createElement('p');

if (playGame) {
  submit.addEventListener('click', function submitGuess(e) {
    e.preventDefault();
    validateGuess(parseInt(guess.value));
  });
}

function validateGuess(guess) {
  if (guess < 1 || guess > 100 || isNaN(guess)) {
    alert('Please Enter Valid Number');
  } else {
    prevGuess.push(guess);
    if (guessRe == 1) {
      displayGuess(guess);
      displayMessage(`Game Over ! Random Number was ${randomNo}`);
      endGame();
    } else {
      displayGuess(guess);
      guessCheck(guess);
    }
  }
}

function guessCheck(guess) {
  if (guess == randomNo) {
    displayMessage(`Congretulations ! You Guessed it Correctly`);
    endGame();
  } else if (guess < randomNo) {
    displayMessage(`Your Guess is Too Low`);
  } else {
    displayMessage(`Your Guess is Too High`);
  }
}

function displayGuess(guessNo) {
  guessesRem.innerHTML = `${--guessRe}`;
  guess.value = '';
  prevGusses.innerHTML = `${prevGuess}`;
}

function displayMessage(message) {
  lowOrHi.innerHTML = `${message}`;
}

function endGame() {
  playGame = false;
  guess.setAttribute('disabled', true);
  submit.setAttribute('disabled', true);
  startOver.classList.add('button');
  startOver.innerHTML = `<h2 id = "newGame" >Start a New Game</h2>`;
  resultsPara.appendChild(startOver);
  newGame();
}

function newGame() {
  const yesNewGame = document.querySelector('#newGame');
  yesNewGame.addEventListener('click', function () {
    playGame = true;
    prevGuess = [];
    guessRe = 10;
    guessesRem.innerHTML = 10;
    prevGusses.innerHTML = ``;
    lowOrHi.innerHTML = ``;
    resultsPara.removeChild(startOver);
    guess.removeAttribute('disabled');
    submit.removeAttribute('disabled');
    randomNo = Math.floor(Math.random() * 100 + 1);
  });
}
```

## Project 05 - Unlimited Background Colors 
Solution Code

```
import './style.css';

const createColor = function () {
  const hex = '0123456789ABCDEF';
  let randomColor = '#';
  for (let i = 0; i < 6; i++) {
    randomColor += hex[Math.floor(Math.random() * 16)];
  }
  return randomColor;
};

let intervalId;
document.getElementById('start').addEventListener('click', function () {
  if (!intervalId) {
    intervalId = setInterval(() => {
      let color = createColor();
      document.body.style.backgroundColor = color;
    }, 1000);
  }
});

document.getElementById('stop').addEventListener('click', function () {
  clearInterval(intervalId);
  intervalId = null;
});
```

## Project 06 : Solution Code - Press The Key

```
import './style.css';

const insert = document.getElementById('insert');

window.addEventListener('keydown', function (e) {
  console.log(e);
  insert.innerHTML = `
<div class="color">
<table>
  <tr>
    <th>Key</th>
    <th>KeyCode</th>
    <th>Code</th>
  </tr>
  <tr>
    <td>${e.key === ' ' ? 'Space' : e.key}</td>
    <td>${e.keyCode}</td>
    <td>${e.code}</td>
  </tr>

</table>
</div>
`;
});
```