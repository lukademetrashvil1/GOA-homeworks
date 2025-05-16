// Human ობიექტის კონსტრუქტორი
function createHuman(name, age, height, id_number) {
    return {
        name: name,
        age: age,
        height: height,
        id_number: id_number
    };
}

// სამი ადამიანის ობიექტის შექმნა
let person1 = createHuman("გიორგი", 30, 1.80, "ID12345");
let person2 = createHuman("ანა", 25, 1.65, "ID67890");
let person3 = createHuman("მარიამი", 28, 1.70, "ID11223");

// თითოეული ადამიანის ინფორმაცია
console.log(person1);
console.log(person2);
console.log(person3);
