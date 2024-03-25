//todo: Решите задачу с помощью массивов и их методов
// В банке работает всего 1 окошко и стоит очередь из 4 человек
// const queue = ['Иван', 'Мария', 'Саша', 'Даша']
// const outside = ['Aмфибрахий']
// За несколько часов из банка вышли Иван и Даша, но позже пришел
// Амфибрахий и занял последнее место в очереди.
// Напишите такой код, чтобы в консоле было следующее
// В очереди: Мария, Саша, Aмфибрахий
// Вне банка: Иван, Даша
// console.log('В очереди: ' + queue + '\n ' + 'Вне банка: ' + outside)

const queue = ["Иван", "Мария", "Саша", "Даша"];
const outside = ["Aмфибрахий"];

let lineMovement = () => {
  let shifted = queue.shift();
  let poped = queue.pop();
  let entered = outside.shift();

  outside.push(shifted, poped);
  queue.push(entered);

  console.log("В очереди: " + queue + "\n " + "Вне банка: " + outside);
};
lineMovement();
