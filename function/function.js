const arr = [1, 6, 23, 8, 4, 8, 3, 7];

//1)	Create a function that returns the sum of all elements passed in array as parameter. Function (array)=>number

let getSum = (arr) => {

    let sum = 0;
    arr.forEach(element => {
        sum += element
    });

    return sum;
}

console.log(getSum(arr));

//2) 2)	Create a function that returns sum of first and last elements of given array.

let getSumFirstLastElement = (arr) => {
    let sum = arr[0] + (arr.length - 1);
    return sum;
}

console.log(getSumFirstLastElement(arr));