function getRowLengths(matrix) {
    let lengths = [];
    for (let i = 0; i < matrix.length; i++) {
        lengths.push(matrix[i].length);
    }
    return lengths;
}

// ტესტირება
let matrix = [
    [1, 2, 3],
    [4, 5],
    [6, 7, 8, 9]
];

let result = getRowLengths(matrix);
console.log(result);  // [3, 2, 4]
