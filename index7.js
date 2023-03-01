// 7. Write a JS code to calculate the sum of digits in a number
function sumOfDigits(number) {
    let sum = 0;
    const digits = number.toString().split('');
    for (let digit of digits) {
      sum += parseInt(digit);
    }
    return sum;
  }
  
  // Example usage:
  console.log(sumOfDigits(123876));
  