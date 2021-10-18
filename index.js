//From years in array check for leap years [1974, 1900, 1985, 2000]
let tabA = [1974, 1900, 1985, 2000];

for (let i = 0; i < tabA.length; i++) {
  if ((tabA[i] % 4 === 0 && tabA[i] % 100 != 0) || tabA[i] % 400 === 0) {
    console.log(i + ":" + tabA[i]);
  }
}

// 2 Calculate factorial of 7.

let factorial = (n) => {
  if (n == 0 || n == 1) {
    return 1;
  } else {
    return n * factorial(n - 1);
  }
};
let n = 7;
answer = factorial(n);
console.log("The factorial of " + n + " is " + answer);

//3 Calculate the sum of the odd items
let arre = [1, 6, 23, 8, 4, 98, 3, 7, 3, 98, 4, 98];

let odds = arre.filter((n) => n % 2);
console.log(odds);

//5 Choose longest string from the array.
const arr = ["Karol", "Adam", "Rogowski", "Politechnika", "Super", "Weekend"];

arr.sort(function (a, b) {
  return b.length - a.length;
});
console.log(arr[0]);

//4 Choose highest and lowest values from the given array. [1,6,23,8,4,98,3,7,3,98,4,98].
const arrMinMax = [1, 6, 23, 8, 4, 98, 3, 7, 3, 98, 4, 98];

console.log(
  `Min value: ${Math.min(...arrMinMax)}, Max value: ${Math.max(...arrMinMax)}`
);

//6 Choose all the indexes on the highest value from the given array. [1,6,23,8,4,98,3,7,3,98,4,98].
let arrAll = [1, 6, 23, 8, 4, 98, 3, 7, 3, 98, 4, 98];
let max = Math.max(...arrAll);

let allIndex = [];
for (let i = 0; i < arrAll.length; i++) {
  if (arrAll[i] === max) {
    allIndex.push(i);
    console.log(`${i} : ${arrAll[i]}`);
  }
}
console.log(`All hightest values has index: ${allIndex}`);
