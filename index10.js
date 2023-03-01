// 10. Write a JS code to find duplicate values in a given array
const array = ["Qasim","Hammad","Awais","Balooch"]
const duplicate =[]
for(i = 0; i<array.length ;i++){
    for(j = i + 1;j<array.length;j++){
        if(array[i]===array[j] && !duplicate.includes(array[i])){
            duplicate.push(array[i])
        }
    }
}
console.log(array);
