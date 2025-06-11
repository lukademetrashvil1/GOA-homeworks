class Student {
    constructor(name, age) {
      this._name = name;
      this._age = age;
    }
  
    // name-ის getter და setter
    get name() {
      return this._name;
    }
  
    set name(newName) {
      this._name = newName;
    }
  
    // age-ის getter და setter
    get age() {
      return this._age;
    }
  
    set age(newAge) {
      this._age = newAge;
    }
  }
  
  // გამოყენების მაგალითი
  const student1 = new Student("ნიკა", 20);
  console.log(student1.name); // "ნიკა"
  student1.age = 21;
  console.log(student1.age);  // 21
  