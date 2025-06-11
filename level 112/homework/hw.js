class Person {
    constructor(name, age) {
      this.name = name;
      this.age = age;
    }
  
    introduce() {
      console.log(`მე ვარ ${this.name}, ${this.age} წლის.`);
    }
  }
  
  // მაგალითის გამოყენება
  const person1 = new Person("ლიკა", 25);
  person1.introduce();  // გამოიტანს: მე ვარ ლიკა, 25 წლის.
  