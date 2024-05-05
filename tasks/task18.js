// исходный код
const user = {
    id: 7,
    name: 'Bob',
    token: 12343423

};

//todo 9.1 Получите из объекта user значение id и разместите его в константу userId не используя выражение user.id.

const userId = user['id']
console.log(userId)

//todo 9.2 Создайте новый объект на базе объекта user без свойства token через деструктуризацию объекта

let {id, name} = user;

function User() {
    this.id = id;
    this.name = name;
}

const newUser = new User

console.log(newUser)


//todo 9.3 Заморозьте объект user, так чтобы в него нельзя было добавить свойства.

// Object.freeze(user);

// user.id = 8
// console.log(user.id)

//todo 9.4 Создайте на базе объекта user новый объкт с доп. полями login и password
const _newUser = {
    login:'',
    password:'',
};

for (let key in user) {
    _newUser[key] = user[key]
}

console.log(_newUser)

//todo 9.5 Добавьте к объекту user метод getId который возвращает свойство id

function getId() {
    return user.id
}

user.getId = getId;

console.log(user.getId())


//todo 9.6 Добавьте к объекту user метод setId который утанавливает свойство id

function setId(num) {
    user.id = num
}

user.setId = setId;

user.setId(55)
console.log(user.id)

//todo 9.7 Проитерируйте объект user так чтобы при итерации можно было получить его ключ и значение.

for (let keyValue of Object.entries(user)) {
    console.log(keyValue)
}

//todo 9.8 Сериализуйте объект в json

let json = JSON.stringify(user);
console.log(json)

//todo 9.8 Преобразуйте объект в ассоциативный массив.

let arr = Object.entries(user)
console.log(arr)