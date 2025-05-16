// მანქანის კონსტრუქტორი
function Car(name, year, engine, horsepower, color) {
    this.name = name;
    this.year = year;
    this.engine = engine;
    this.horsepower = horsepower;
    this.color = color;
}

// ცხოველის კონსტრუქტორი
function Animal(name, species, age, color) {
    this.name = name;
    this.species = species;
    this.age = age;
    this.color = color;
}

// მოსწავლის კონსტრუქტორი
function Student(name, age, grade, school) {
    this.name = name;
    this.age = age;
    this.grade = grade;
    this.school = school;
}

// მანქანების ობიექტების შექმნა
let car1 = new Car("BMW X5", 2020, "V6", 335, "Black");
let car2 = new Car("Audi Q7", 2022, "V8", 400, "White");
let car3 = new Car("Tesla Model 3", 2023, "Electric", 350, "Red");

// ცხოველების ობიექტების შექმნა
let animal1 = new Animal("მაკსი", "ძაღლი", 5, "Brown");
let animal2 = new Animal("ლაზარე", "კატა", 3, "Black");
let animal3 = new Animal("ბოლოტა", "ღორი", 2, "Pink");

// მოსწავლეების ობიექტების შექმნა
let student1 = new Student("გიორგი", 15, "10th grade", "IV Gymnasium");
let student2 = new Student("ანა", 14, "9th grade", "V Gymnasium");
let student3 = new Student("მარიამი", 16, "11th grade", "I Gymnasium");

// ინფორმაცია თითოეული ობიექტის შესახებ
console.log(car1);
console.log(car2);
console.log(car3);

console.log(animal1);
console.log(animal2);
console.log(animal3);

console.log(student1);
console.log(student2);
console.log(student3);

