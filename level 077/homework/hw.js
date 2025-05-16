function createObject(keys, values) {
    let obj = {};
    for (let i = 0; i < keys.length; i++) {
        obj[keys[i]] = values[i];
    }
    return obj;
}

// ტესტირება
let keys = ['name', 'age', 'city'];
let values = ['Alice', 30, 'New York'];

let result = createObject(keys, values);
console.log(result);  // { name: 'Alice', age: 30, city: 'New York' }
