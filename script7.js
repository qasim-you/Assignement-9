const array = [-2, 5, -7, 0, 8, -3, -9];
let negativeCount = 0;

for (let i = 0; i < array.length; i++) {
  if (array[i] < 0) {
    negativeCount++;
  }
}

console.log("Total number of negative elements: " + negativeCount);
