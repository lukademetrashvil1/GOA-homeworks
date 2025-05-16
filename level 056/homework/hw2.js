let N = prompt('enter the numbers of elements')
let arr =[]
for(let i=0; i<N; i++){
    let elem = prompt('enter'+ i + 'th'+'element')
    arr.push(elem)
}
for(let i=1 ;i<N; i+=2)
    console.log(arr[i])