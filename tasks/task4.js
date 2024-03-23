//todo: Задано число. Проверить на  истинность (true или false) что 
// сумма цифр данного трехзначного числа является четным числом. Числа меняются !
// Пример:

// let x = 552

// Сумма чисел: 5 + 5 + 2 = 12 
// 12 - четное число (true)

let x = Array.from(String(prompt('Введите число',)), Number);

let result = x.reduce((sum, current) => sum + current, 0);
alert(result);

if (result % 2 === 0) {
    alert('TRUE');
} else (
    alert('FALSE')
);