function Car(brand, model, year, engineVolume) {
    this.brand = brand;
    this.model = model;
    this.year = year;
    this.engineVolume = engineVolume;

    this.getDescription = function() {
        return `${this.brand} ${this.model}, ${this.year}, ${this.engineVolume}L`;
    };
}

// მაგალითი:
const myCar = new Car("Toyota", "Prius", 2018, 1.8);
console.log(myCar.getDescription());  // "Toyota Prius, 2018, 1.8L"
