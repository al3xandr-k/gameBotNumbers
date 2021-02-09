'use strict'

const gameBot = (x, y) => {

  let num = Math.floor(Math.random() * (x + y) + x);
  let i = 10;

  function chanceLeft() {
    i--;
    console.log('i: ', i);
    if (i > 0) {
      return i;
    }
  };
  
  return function () {

    let str = prompt('Угадайте число от 1 до 100.');

    if (chanceLeft() === 0) {
      confirm('Попытки закончились, хотите сыграть еще?');
    } else if (str === null) {
      console.log('Game Over');
      return;
    } else if (str > num) {
      console.log(`Загаданное число меньше, осталось попыток ${chanceLeft()}`);
      str;
    } else if (str !== str.trim()) {
      console.log('Введи число! А не пустую строку.');
    } else if (str < num) {
      console.log(`Загаданное число больше, осталось попыток ${chanceLeft()}`);
      str;
    } else if (+str === num) {
      confirm('Поздравляю, Вы угадали!!! Хотели бы сыграть еще?');
    } else if (typeof str !== 'number') {
      console.log('Введи число! А не строку.');
    }
  }
}

const game = gameBot(1, 100);
game();