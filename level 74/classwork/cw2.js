// Human ობიექტის კონსტრუქტორი
function createHuman(name, age, height, id_number) {
    return {
        name: name,
        age: age,
        height: height,
        id_number: id_number,
        displayInfo: function() {
            return `Name: ${this.name}, Age: ${this.age}, Height: ${this.height}m, ID: ${this.id_number}`;
        }
    };
}

// Car ობიექტის კონსტრუქტორი
function createCar(name, year, engine, horsepower, color, owner) {
    return {
        name: name,
        year: year,
        engine: engine,
        horsepower: horsepower,
        color: color,
        owner: owner,  // owner არის Human ტიპის ობიექტი
        displayCarInfo: function() {
            return `${this.name} (${this.year}), Engine: ${this.engine}, Horsepower: ${this.horsepower}HP, Color: ${this.color}, Owner: ${this.owner.name}`;
        }
    };
}

// Human ობიექტების შექმნა
let owner1 = createHuman("გიორგი", 30, 1.80, "ID12345");
let owner2 = createHuman("ანა", 25, 1.65, "ID67890");
let owner3 = createHuman("მარიამი", 28, 1.70, "ID11223");

// Car ობიექტების შექმნა
let car1 = createCar("BMW X5", 2020, "V6", 335, "Black", owner1);
let car2 = createCar("Audi Q7", 2022, "V8", 400, "White", owner2);
let car3 = createCar("Tesla Model X", 2023, "Electric", 670, "Red", owner3);

// მანქანების ინფორმაცია
console.log(car1.displayCarInfo());
console.log(car2.displayCarInfo());
console.log(car3.displayCarInfo());
