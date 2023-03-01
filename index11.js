// Write a JS code for Linear search algorithm
// Write a JS code for Linear search algorithm
let array = [1, 2, 3, 4, 5, 7, 8, 9,]
let alg = 13 ;
let lin = array.length ;
function search(array, alg,lin){
    for(let i = 0;i < lin ;i++){
        if(array[i]==alg)
        return i ;
        return-1
    }
}
let result = search(array, alg,lin)
console.log(result);
