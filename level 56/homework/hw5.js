let N = prompt('enter numbers of elements')
let numbers =[]
for(let i=0; i<N; i++){
    let elem = prompt('enter'+ i + 'th'+'element')
    numbers.push(elem)
}
let temp = arr[0]
arr[0] = arr[N-1]
arr[N-1]=temp
console.log(arr)