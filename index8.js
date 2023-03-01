// 8. Write a JS code to find the largest number in an array

const array = [2, -5, 88, 1, 9, 3];

let max = array[0];

for(let i = 1; i < array.length; i++) {
  if(array[i] > max) {
    max = array[i]
  }
}

console.log(`The largest number in the array is: ${max}`);

