// Write a JS code for Linear search algorithm
function binarySearch(array, target) {
    let startIndex = 0;
    let endIndex = array.length - 1;
  
    while (startIndex <= endIndex) {
      const middleIndex = Math.floor((startIndex + endIndex) / 2);
  
      if (array[middleIndex] === target) {
        return middleIndex;
      } else if (array[middleIndex] < target) {
        startIndex = middleIndex + 1;
      } else {
        endIndex = middleIndex - 1;
      }
    }
  
    return -1;
  }
  console.log(binarySearch);