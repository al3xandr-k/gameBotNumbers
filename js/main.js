'use strict'



const gameBot = (x, y) => {
  let num = Math.floor(Math.random() * (x + y) + x);

  let a = 10;

  const chanceLeft = () => {
    a--;
    console.log('z: ', a);
    if (a >= 0) {
      return a;
    }
    chanceLeft();
  };


  if (chanceLeft === 0) {
    confirm('Попытки закончились, хотите сыграть еще?');
  }

  return function () {
    let str = prompt('Угадайте число от 1 до 100.');

    if (str === null) {
      console.log('Game Over');
      return;
    } else if (str > num) {
      console.log(`Загаданное число меньше, осталось попыток ${chanceLeft()}`);
      str = prompt('Угадайте число от 1 до 100.');
    } else if (str !== str.trim()) {
      console.log('Введи число! А не пустую строку.');
    } else if (str < num) {
      console.log(`Загаданное число больше, осталось попыток ${chanceLeft()}`);
      str = prompt('Угадайте число от 1 до 100.');
    } else if (+str === num) {
      confirm('Поздравляю, Вы угадали!!! Хотели бы сыграть еще?');
    } else if (typeof str !== 'number') {
      console.log('Введи число! А не строку.');
      str = prompt('Угадайте число от 1 до 100.')
    }
  }
}

const game = gameBot(1, 100);
game();

