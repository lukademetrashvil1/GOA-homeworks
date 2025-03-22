// მომხმარებლისგან წინადადების მიღება
let sentence = prompt("შეიყვანეთ წინადადება: ");

// წინადადების სიტყვებად გადანაწილება, შემოტრიალება და გაერთიანება
let reversedSentence = sentence.split(' ').reverse().join(' ');
console.log("შემოტრიალებული სიტყვები:", reversedSentence);
