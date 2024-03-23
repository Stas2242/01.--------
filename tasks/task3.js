//todo: Дан номер некоторого года (положительное целое число). 
// Вывести соответствующий ему номер столетия, учитывая, что, 
// к примеру, началом 20 столетия был 1901 год.

let year = +(prompt('Введине год',));
let century 

if ((year % 100) > 0) {
    century = Math.floor(year / 100) + 1;
} else {
    century = Math.floor(year / 100);
}

console.log(century);