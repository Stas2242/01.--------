//todo: Определить, является ли строка полиндромом. Палиндром - это число или слова, читающиеся одинаково в обоих направлениях.

// 'потоп'
// 'мадам'
// 'комок'

// 'Уж истово вот сижу'

// 37573 - true
// 23442 - false

let x = "потоп";
let y = "мадам";
let z = "комок";
let w = "Уж истово вот сижу";
let a = "asdfgh";

let result = (str) => {
  function mainStr(str) {
    let lowCaseStr = str.toLowerCase();
    // console.log(lowCaseStr);
    let noTabs = lowCaseStr.replaceAll(" ", "");
    // console.log(noTabs);
    return noTabs;
  }

  function reverseString(str) {
    let lowCaseStr = str.toLowerCase();
    // console.log(lowCaseStr);
    let noTabs = lowCaseStr.replaceAll(" ", "");
    // console.log(noTabs);
    let splitString = noTabs.split("");
    // console.log(splitString);
    let reverseArray = splitString.reverse();
    // console.log(reverseArray);
    let joinArray = reverseArray.join("");
    // console.log(joinArray);
    return joinArray;
  }

  if (mainStr(str) === reverseString(str)) {
    console.log("Это палиндром");
  } else {
    console.log("Это не палиндром");
  }
};

result(x)
result(y)
result(z)
result(w);
result(a)
