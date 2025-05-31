//1
const person1 = {
    name: "Luka",
    lastName: "Beridze",
    age: 25,
    height: 180,
    isStudent: true
  };
//2
const person2 = {
    name: "Luka",
    lastName: "Beridze",
    age: 25,
    greet() {
      console.log(`Hello, my name is ${this.name} ${this.lastName}`);
    }
  };
  
  person2.greet(); // Hello, my name is Luka Beridze
//3
function sayAge() {
    console.log(`I am ${this.age} years old`);
  }
  
  person1.sayAge = sayAge;
  
  person1.sayAge(); // I am 25 years old
  