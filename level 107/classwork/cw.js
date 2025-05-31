// 1
const arr = ["Goa", "novatori", "step", "step"];

const result = arr.map(word => {
  // ვამოწმებთ პირველი სიმბოლო დიდი ასოა თუ არა
  if (word[0] === word[0].toUpperCase()) {
    return "Good";
  } else {
    return "Bad";
  }
});

console.log(result); // ["Good", "Bad", "Bad", "Bad"]
// 2
const numbers = [11, 3, 1, 5, 6, 2, 0, 13];

const greaterThanFive = numbers.filter(num => num > 5);

console.log(greaterThanFive); // [11, 6, 13]
// 3
const words = ["Hello", " ", "world", "!", ];
const sentence = words.reduce((accumulator, currentValue) => {
    return accumulator + currentValue;
  });
  
  console.log(sentence); // "Hello world! "
  