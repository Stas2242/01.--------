//todo: Написать функцию анаграммы

// 'finder', 'friend' === true
// 'test', 'sets' === false
// 'abc', 'aaa' === false
// 'abb', 'aab' === false

let result = (a, b) => {
  let x = a.split("").sort().join("");
  let z = b.split("").sort().join("");

  if (x === z) {
    console.log(a + " и " + b + " - анаграммы");
  } else {
    console.log(a + " и " + b + " - не анаграммы");
  }
};

result("finder", "friend");
result('test', 'sets');
result('abc', 'aaa' );
result('abb', 'aab');
result("abracadabra", "arbadacarba")