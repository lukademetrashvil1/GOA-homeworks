// 1) unshift() - Adds elements to the beginning of the array
let fruits = ["apple", "banana"];
fruits.unshift("orange");  // Adds "orange" at the start
console.log(fruits);  // ["orange", "apple", "banana"]

// 2) shift() - Removes the first element from the array
let fruits2 = ["apple", "banana", "orange"];
let removed = fruits2.shift();  // Removes "apple"
console.log(fruits2);  // ["banana", "orange"]
console.log(removed);  // "apple"

// 3) splice() - Adds/removes elements from any position in the array
let fruits3 = ["apple", "banana", "orange"];
fruits3.splice(1, 1, "mango", "grapes");  // Starting from index 1, removes 1 item and adds 2
console.log(fruits3);  // ["apple", "mango", "grapes", "orange"]

// 4) slice() - Returns a shallow copy of a portion of an array
let fruits4 = ["apple", "banana", "orange", "mango"];
let slicedFruits = fruits4.slice(1, 3);  // Starts at index 1 and ends before index 3
console.log(slicedFruits);  // ["banana", "orange"]

// 5) concat() - Merges two or more arrays
let fruits5 = ["apple", "banana"];
let moreFruits = ["orange", "mango"];
let allFruits = fruits5.concat(moreFruits);  // Merges two arrays
console.log(allFruits);  // ["apple", "banana", "orange", "mango"]

// 6) sort() - Sorts the elements of an array
let fruits6 = ["banana", "apple", "orange", "mango"];
fruits6.sort();  // Sorts in alphabetical order by default
console.log(fruits6);  // ["apple", "banana", "mango", "orange"]

// 7) reverse() - Reverses the order of elements in an array
let fruits7 = ["apple", "banana", "orange"];
fruits7.reverse();  // Reverses the order
console.log(fruits7);  // ["orange", "banana", "apple"]

// 8) join() - Joins all elements of an array into a string
let fruits8 = ["apple", "banana", "orange"];
let joinedFruits = fruits8.join(", ");  // Joins elements with a comma and space
console.log(joinedFruits);  // "apple, banana, orange"
