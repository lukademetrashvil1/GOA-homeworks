// 1
const names = ["Ana", "Giorgi", "Luka", "Nino", "Sopiko", "Dato"];

names.forEach(name => {
  if (name.length > 5) {
    console.log(name);
  }
});
// 2
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const evenNumbers = [];

numbers.forEach(num => {
  if (num % 2 === 0) {
    evenNumbers.push(num);
  }
});

console.log(evenNumbers); // [2, 4, 6, 8, 10]

// 3
const products = {
    "apple": 5,
    "banana": 12,
    "cherry": 20,
    "grape": 8
  };
  
  for (let key in products) {
    if (products[key] > 10) {
      console.log(`${key}: ${products[key]}`);
    }
  }
  
// 4
const grades = {
    math: 45,
    english: 78,
    history: 50,
    biology: 60,
    chemistry: 49
  };
  
  let failedCount = 0;
  
  for (let subject in grades) {
    if (grades[subject] < 51) {
      failedCount++;
    }
  }
  
  console.log(`ჩაჭრილია ${failedCount} საგანი`);
  
