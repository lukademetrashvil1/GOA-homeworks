// Manual map
function manualMap(arr, callback) {
    const result = [];
    for (let i = 0; i < arr.length; i++) {
      result.push(callback(arr[i], i, arr));
    }
    return result;
  }
  
  // Manual filter
  function manualFilter(arr, callback) {
    const result = [];
    for (let i = 0; i < arr.length; i++) {
      if (callback(arr[i], i, arr)) {
        result.push(arr[i]);
      }
    }
    return result;
  }
  
  // Manual reduce
  function manualReduce(arr, callback, initialValue) {
    let accumulator = initialValue;
    for (let i = 0; i < arr.length; i++) {
      accumulator = callback(accumulator, arr[i], i, arr);
    }
    return accumulator;
  }
//2
function sayHello() {
    console.log("Hello");
    // return არ აქვს
  }
  
//3
function add(a, b) {
    return a + b;
  }
  
  let sum = add(2, 3); // sum = 5
  
//4
const users = [
    { firstName: "Ana", lastName: "Kiknadze" },
    { firstName: "Giorgi", lastName: "Maisuradze" },
    { firstName: "Nino", lastName: "Kalandadze" }
  ];
  
  const fullNames = users.map(user => `${user.firstName} ${user.lastName}`);
  console.log(fullNames);
  // ["Ana Kiknadze", "Giorgi Maisuradze", "Nino Kalandadze"]
//5
const students = [
    { name: "Nika", score: 85 },
    { name: "Lika", score: 92 },
    { name: "Saba", score: 88 },
    { name: "Tako", score: 95 }
  ];
  
  const topStudents = students.filter(student => student.score > 90);
  console.log(topStudents);
  // [{ name: "Lika", score: 92 }, { name: "Tako", score: 95 }]
//6
const cart = [
    { name: "Laptop", price: 1200, quantity: 1 },
    { name: "Mouse", price: 50, quantity: 2 },
    { name: "Keyboard", price: 80, quantity: 1 }
  ];
  
  const total = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);
  console.log(total); // 1380
  