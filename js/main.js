'use strict'

const gameBot = (x, y) => {

  let num = Math.floor(Math.random() * (x + y) + x);
  let i = 10;

  const askFunc = () => {
    i--;
    let str = prompt('Угадайте число от 1 до 100.');
    console.log(typeof +str);

    if (i === 0) {
      confirm('Попытки закончились, хотите сыграть еще?');
      gameBot();
    } else if (str === null) {
      alert('Game Over');
      return;
    } else if (str > num) {
      alert(`Загаданное число меньше, осталось попыток ${i}`);
      gameBot(1, 100);
    } else if (str !== str.trim()) {
      alert('Введи число! А не пустую строку.');
      gameBot();
    } else if (str < num) {
      alert(`Загаданное число больше, осталось попыток ${i}`);
      gameBot(1, 100);
    } else if (typeof +str !== 'number') {
      alert('Введи число! А не строку.');
      gameBot();
    } else if (+str === num) {
      alert('Поздравляю, Вы угадали!!! Хотели бы сыграть еще?');
    }
  }
  askFunc();
}

gameBot(1, 100);
