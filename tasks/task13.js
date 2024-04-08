//todo: В массиве размерности 10, найти минимальный и максимальный элементы, поменять их местами.


const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const arr2 = [11, 155, 0, 12]
const arr3 = [1990, 2000, 2010, 2020, -1000]

let result = (someArr) => {


let min = someArr.reduce((x, y) => Math.min(x, y));
let max = someArr.reduce((x, y) => Math.max(x, y));
console.log(min, max)

let a = someArr.indexOf(min);
let b = someArr.indexOf(max);

[someArr[a], someArr[b]] = [someArr[b], someArr[a]]

console.log (a, b)

}

result(arr)
console.log(arr)

result(arr2)
console.log(arr2)

result(arr3)
console.log(arr3)