let N = prompt('how many numbers to input ')
let numbers =[]
for(let i=0; i<N; i++){
    let elem = prompt('enter'+ i + 'th'+'element')
    numbers.push(elem)
}
for(let i=N-1 ;i>=0; i--)
    console.log(numbers[i])