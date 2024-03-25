//todo:  Задан произвольный url необходимо получить его домен.

Пеример:
var url = "http://www.ozon.ru/context/detail/id/19677670/"
// Домен: www.ozon.ru
let a = "https://learn.javascript.ru/array-methods"
let b = 'https://www.youtube.com/watch?v=aVfWNUV-m-8'

let hostname = (someUrl) => {
    let adress = new URL(someUrl)
    return adress.host;
}

console.log(hostname(url))
console.log(hostname(a))
console.log(hostname(b))
