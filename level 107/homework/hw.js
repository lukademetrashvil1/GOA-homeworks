//1
const arr = [1, "hello", true, "world", 5];

const result = arr.map(item => typeof item === 'string');

console.log(result); // [false, true, false, true, false]

//2
const scores = [45, 72, 88, 69, 91, 33];

const passed = scores.filter(score => score > 70);

console.log(passed); // [72, 88, 91]

//3
const fruits = ["apple", "banana", "apple", "orange", "banana", "apple"];

const count = fruits.reduce((acc, fruit) => {
  acc[fruit] = (acc[fruit] || 0) + 1;
  return acc;
}, {});

console.log(count); 
// { apple: 3, banana: 2, orange: 1 }

//4
const numbers = [10, 20, 30, 40, 50];

const average = numbers.reduce((acc, num, _, arr) => acc + num / arr.length, 0);

console.log(average); // 30

//5
function manualMap(arr, callback) {
    const result = [];
    for (let i = 0; i < arr.length; i++) {
      result.push(callback(arr[i], i, arr));
    }
    return result;
  }
  
//6
function manualFilter(arr, callback) {
    const result = [];
    for (let i = 0; i < arr.length; i++) {
      if (callback(arr[i], i, arr)) {
        result.push(arr[i]);
      }
    }
    return result;
  }
  
//7
function manualReduce(arr, callback, initialValue) {
    let accumulator = initialValue;
    for (let i = 0; i < arr.length; i++) {
      accumulator = callback(accumulator, arr[i], i, arr);
    }
    return accumulator;
  }
  