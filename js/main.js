'use strict'



const gameBot = () => {
  let num = 10;

  return function () {
    let str = prompt('Угадайте число от 1 до 100.');
    console.log('str: ', str);

    if (str === null) {
      console.log('Игра окончена.');
    } else if (str > num) {
      console.log('Загаданное число меньше.');
    } else if (str !== str.trim()) {
      console.log('Введи число! А не пустую строку.');
    } else if (str < num) {
      console.log('Загаданное число больше');
    } else if (+str === num) {
      console.log('Поздравляю, Вы угадали!!!');
    } else if (typeof str !== 'number') {
      console.log('Введи число! А не строку.');

    }
  }
}

const game = gameBot();
game();
