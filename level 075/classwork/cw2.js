// Animal კონსტრუქტორი
function Animal(name, species, age) {
    this.name = name;       // ცხოველის სახელი
    this.species = species; // ცხოველის სახეობა
    this.age = age;         // ცხოველის ასაკი

    // მეთოდი, რომელიც ამოიტანს ცხოველის ინფორმაციას
    this.showInfo = function() {
        console.log(`Name: ${this.name}, Species: ${this.species}, Age: ${this.age} years old.`);
    };
}

// სამი ცხოველის ობიექტის შექმნა
let animal1 = new Animal("მაკსი", "ძაღლი", 5);
let animal2 = new Animal("ლაზარე", "კატა", 3);
let animal3 = new Animal("ბოლოტა", "ღორი", 2);

// ცხოველების ინფორმაციის გამოტანა
animal1.showInfo();
animal2.showInfo();
animal3.showInfo();
