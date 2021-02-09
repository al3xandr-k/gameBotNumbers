'use strict'



const gameBot = (x, y) => {
  let num = Math.floor(Math.random() * (x + y) + x);
  console.log('num: ', num);

  return function () {
    let str = prompt('Угадайте число от 1 до 100.');

    if (str === null) {
      console.log('Игра окончена.');
      return;
    } else if (str > num) {
      console.log('Загаданное число меньше.');
      str = prompt('Угадайте число от 1 до 100.');
      return;
    } else if (str !== str.trim()) {
      console.log('Введи число! А не пустую строку.');
      return;
    } else if (str < num) {
      console.log('Загаданное число больше');
      str = prompt('Угадайте число от 1 до 100.');
      return;
    } else if (+str === num) {
      console.log('Поздравляю, Вы угадали!!!');
      return;
    } else if (typeof str !== 'number') {
      console.log('Введи число! А не строку.');
      return;
    }
  }
}

const game = gameBot(1, 100);
game();

