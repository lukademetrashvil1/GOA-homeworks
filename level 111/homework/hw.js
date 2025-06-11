const colors = ["red", "green", "blue", "yellow", "purple"];

const [firstColor, secondColor, ...otherColors] = colors;

console.log(firstColor);   // "red"
console.log(secondColor);  // "green"
console.log(otherColors);  // ["blue", "yellow", "purple"]
