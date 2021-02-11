'use strict'

const gameBot = (x, y) => {
  let randomNumbers = Math.floor(Math.random() * (x + y) + x);
  let i = 10;
  console.log('randomNumbers: ', randomNumbers); //Данная строчка указывает число, для проверки условие когда randomNumbers === playerNumber;

  const gameConditions = () => {
    i--;
    let playerNumber = prompt('Загадывание случайного числа от 1 до 100.');

    if (typeof playerNumber === 'object') {
      alert('Game Over');
    } else if (i === 0) {
      let chanceEnd = confirm('Попытки закончились, хотите сыграть еще?');
      if (chanceEnd === true) {
        gameBot(1, 10);
      } else {
        alert('Как хочешь, дружище! Приходи ещё.');
      }
    } else if (playerNumber > randomNumbers) {
      alert(`Загаданное число меньше, осталось попыток ${i}`);
      gameConditions();
    } else if (playerNumber < randomNumbers) {
      alert(`Загаданное число больше, осталось попыток ${i}`);
      gameConditions();
    } else if (Number(playerNumber) === randomNumbers) {
      let finalQuestion = confirm('Поздравляю, Вы угадали!!! Хотели бы сыграть еще?');
      if (finalQuestion === true) {
        gameBot(1, 10);
      } else {
        alert('Как хочешь, дружище!');
      };
    } else if (playerNumber !== playerNumber.trim() && playerNumber !== '') {
      alert('Введи число! А не пустую строку.');
      gameConditions();
      //не работает!!!!!
    } else if (typeof playerNumber !== 'number') {
      alert('Введи число! А не строку.');
      gameConditions();
    }
  }
  gameConditions();
}
gameBot(1, 10);