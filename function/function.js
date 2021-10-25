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

//3)Arr

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

//4

const reverseArr = (el) => {
  let arrReverse = [];
  for (var i = el.length - 1; i >= 0; i--) {
    arrReverse.push(el[i]);
  }
  return arrReverse;
};

console.log(reverseArr(arr));

//5

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
