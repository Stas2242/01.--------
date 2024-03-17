// todo: Даны три переменные a и b и с им присвоены целочисленные значения.
// Необходимо вывести значения по возрастанию.
// Пример:
let a = 10
let b = 7
let c = 8

// Вывод: 7 8 10 

let arr = [a, b, c];

arr.sort(function(a,b) {
    return a - b
});

console.log(arr);