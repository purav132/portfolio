'use strict';

// console.log(document.querySelector('.message'));

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highScore = 0;

// document.querySelector('.number').textContent = secretNumber;

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  if (!guess) {
    document.querySelector('.message').textContent =
      'No Number... Please enter a number!';
  } else {
    if (guess === secretNumber) {
      document.querySelector('.message').textContent = 'Yay...Correct Number!';
      document.querySelector('.number').textContent = secretNumber;
      document.querySelector('body').style.backgroundColor = '#60b347';
      document.querySelector('.number').style.width = '30rem';
      if (score > highScore) highScore = score;
      document.querySelector('.highscore').textContent = highScore;
    } else if (guess > secretNumber) {
      if (score > 0) {
        document.querySelector('.message').textContent = 'Too High...';
        score--;
        document.querySelector('.score').textContent = score;
        if (score == 0)
          document.querySelector('.message').textContent =
            'Sorry...You lost the game!';
      }
    } else {
      if (score > 0) {
        document.querySelector('.message').textContent = 'Too low...';
        score--;
        document.querySelector('.score').textContent = score;
        if (score == 0)
          document.querySelector('.message').textContent =
            'Sorry...You lost the game!';
      }
    }
  }
});

document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  document.querySelector('.message').textContent = 'Start guessing...';
  document.querySelector('.score').textContent = score;
  document.querySelector('.number').textContent = '?';
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
  document.querySelector('.guess').value = '';
});
