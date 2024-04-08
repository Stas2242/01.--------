//todo: Задан произвольный url необходимо получить router, action и id

Пример:
var url = "http://www.ozon.ru/context/detail/id/19677670/"
var urlTwo = "http://www.mail.ru/context/detail/id/186245/"
var urlThree = "http://www.yandex.ru/context/detail/id/1134565/"
// router: context
// action: detail
// id: 19677670

function getParams (someUrl) {
let x = someUrl.split('/');
x.router = x[3];
x.action = x[4];
x.id = x[6]
console.log('router:', x.router)
console.log('action:', x.action)
console.log('id:', x.id)
}

getParams(url)
getParams(urlTwo)
getParams(urlThree)

// console.log(hostname(url))

