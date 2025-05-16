let animal = [
    ['lion', '16', '180', 'true'],
    ['hippo', '23', '400', 'false'],
    ['wolf', '10', '45', 'true']
];

for (let i = 0; i < animal.length; i++) {
    let name = animal[i][0];
    let age = animal[i][1];
    let weight = animal[i][2];
    let isBull = animal[i][3];

    console.log(`${name} - ${age} - ${weight} - ${isBull}`);
}
//ორმაგი
let  = [
    ['lion', '16', '180', 'true'],
    ['hippo', '23', '400', 'false'],
    ['wolf', '10', '45', 'true']
];

for (let i = 0; i < animal.length; i++) {
    let animalData = animal[i]; // ცხოველის მონაცემების მასივი
    let result = ''; // შექმნათ ცარიელი სტრიქონი, რომ მონაცემები დავამატოთ ტირეებით
    
    for (let j = 0; j < animalData.length; j++) {
        if (j > 0) {
            result += ' - '; // თუ არა პირველი ელემენტი, დაამატეთ ტირე
        }
        result += animalData[j]; // დაამატეთ ცხოველის მონაცემი
    }
    
    console.log(result); // გამოიტანეთ შედეგი
}