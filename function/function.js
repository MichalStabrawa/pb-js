const arr = [1, 6, 23, 8, 4, 8, 3, 7];

//1)	Create a function that returns the sum of all elements passed in array as parameter. Function (array)=>number

let getSum = (arr) => {
  let sum = 0;
  arr.forEach((element) => {
    sum += element;
  });

  return sum;
};

console.log(getSum(arr));

//2) 2)	Create a function that returns sum of first and last elements of given array.

let getSumFirstLastElement = (arr) => {
  let sum = arr[0] + (arr.length - 1);
  return sum;
};

console.log(
  getSumFirstLastElement(arr) + " " + "" + "is sum of first and last element"
);

//3)3)	Create a function that takes a number and return factorial of that number

function factorial(n) {
  if (n == 0 || n == 1) {
    return 1;
  } else {
    return n * factorial(n - 1);
  }
}

function ittArr(arr) {
  for (let i = 0; i < arr.length; i++) {
    console.log(`Factorial with ${arr[i]} is ${factorial(arr[i])}`);
  }
}

ittArr(arr);

// 4)	Create a function that returns given array in reverse order. // no build in functions 

const reverseArr = (el) => {
  let arrReverse = [];
  for (var i = el.length - 1; i >= 0; i--) {
    arrReverse.push(el[i]);
  }
  return arrReverse;
};

console.log(reverseArr(arr));

//5 5)	Create a function that based on given array returns new array in pattern
// [a,b,c,d,e,f] -> [a+b, c+d, e+f]    [1,3,4,1,0,3] => [4,5,3] function(array)=>array

let arrSumAdd = [];
let arrSumOdd = [];
const sumsecondElement = (el) => {
  el.forEach((item, index) => {
    if (index % 2 === 0) {
      arrSumAdd.push(item);
    } else {
      arrSumOdd.push(item);
    }
  });
};

sumsecondElement(arr);

const arrNew = [...arrSumAdd].map((el, i) => el + arrSumOdd[i]);
console.log(arrNew);

//6 [1, 6, 23, 8, 4, 8, 3, 7]; 6)	For time of this example remove last element from the given array.
//  Create a function that based on given array return new array in pattern [a,b,c,d,e] -> [a+b, c+d, e+e]
let arrLastIndex = [...arr];
arrLastIndex.pop();

let arrSumAddPop = [];
let arrSumOddPop = [];

const sumSecondElementDeleted = (el) => {
  el.forEach((item, index) => {
    if (index % 2 === 0) {
      arrSumAddPop.push(item);
    } else {
      arrSumOddPop.push(item);
    }
  });

  if (arrSumAddPop.length > arrSumOddPop.length) {
    let lastIndex = arrSumAddPop[arrSumAddPop.length - 1];
    arrSumOddPop.push(lastIndex);
  }
};

sumSecondElementDeleted(arrLastIndex);

const arrNew2 = [...arrSumAddPop].map((el, i) => el + arrSumOddPop[i]);
console.log("e+e");
console.log(arrNew2);

//7)	Create a function the return one random element from given array. // use random function

const random = Math.floor(Math.random() * arr.length);

console.log(`index ${random} :`, arr[random]);

//8)	Create a function that takes two parameters: array and number off attempts.
//Based on number of attempts choose a random number from table that many times and return lowest one.
let tabMin = [];
const randomLessNumber = (arr, item) => {
  for (let j = 0; j < item; j++) {
    const random2 = Math.floor(Math.random() * arr.length);
    tabMin.push(arr[random2]);
  }
};

randomLessNumber(arr, 4);
console.log(tabMin);
console.log(Math.min(...tabMin));

//9 arr[1, 6, 23, 8, 4, 8, 3, 7]
const arrDe = [1, 6, 23, 8, 4, 8, 3, 7];
let tabRandom = [];
let deletedSlice = arrDe.length;
const randomDeleteItem = (a) => {
  let i = 0;
  while (i < a.length) {
    let random3 = Math.floor(Math.random() * a.length);
    let b = a[random3];
    let j = a.indexOf(b);
    tabRandom.push(b);
    arrDe.splice(j, 1);
  }
};

randomDeleteItem(arrDe);
console.log(tabRandom);
console.log(arrDe);
console.log(deletedSlice);

//10 	Create a function that on given array will perform operation of adding or subtracting elements.
// Operation is to be chosen at random. And return a result.[a,b,c,d] =>(((a+-b)+-c)+-d)
const arrRandom = [1, 6, 23, 8, 4, 8, 3, 7];
const element = ["+", "-"];
const randomAddOdd = (el) => {
  let result = 0;

  el.map((item, index) => {
    let randomShow = Math.floor(Math.random() * element.length);
    console.log(randomShow);
    if (index == 0) {
      result += item;
    } else {
      if (randomShow === 0) {
        result += item;
      } else {
        result -= item;
      }
    }
  });

  console.log(result);
};

randomAddOdd(arrRandom);

// 11)	Create a function that will return the current day name in Polish
const days2 = [
  "Niedziela",
  "Poniedzialek",
  "Wtorek",
  "Sroda", //etc
  "Czwartek",
  "Piatek",
  "Sobota",
];

console.log(days2[new Date().getDay()]);
console.log(days2.indexOf(days2[new Date().getDay()]));

//12	Create a function that tells us how many days till Friday
let curantlyDay = days2[new Date().getDay()];
const howManyDayToFriday = () => {
  if (days2.indexOf(curantlyDay) == 5) {
    console.log(
      `Zostało do piątku ${days2.length - 2 - days2.indexOf(curantlyDay)}`
    );
  } else if (days2.indexOf(curantlyDay) < 5) {
    console.log(
      `Zostało do piątku ${days2.length - 2 - days2.indexOf(curantlyDay)}`
    );
  } else {
    `Zostało do piatku ${days2.length - 1}`;
  }
};

console.log(howManyDayToFriday());

//13 13)	Create a function that take two numbers and return the object with 4 fields.
//Result on 4 basic arithmetic operations.

const createObj = (a, b) => {
  let obj = {
    a: a,
    b: b,
    add() {
      return a + b;
    },
    sub() {
      return a - b;
    },
    multip() {
      return a * b;
    },
    division() {
      return a / b;
    },
  };
  return obj;
};

let a = createObj(10, 20);

console.log(a.add());
console.log(a.sub());
console.log(a.multip());
console.log(a.division());
