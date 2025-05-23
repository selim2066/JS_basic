//Task-1 Take four parameters. Multiply the four numbers and then return the result

function multiply(a, b, c, d) {
  return a * b * c * d;
}
console.log(multiply(1, 2, 2, 3));

/*Task-2
Take a number if the number is odd multiply it by 2 and return the result. If the number is even divide it by two and return the result.*/

function oddEven(number) {
  if (number % 2 == 0) {
    console.log("this is a even number\n");
  } else {
    console.log("this is a ODDDDDDD number\n");
  }
}
oddEven(35);
oddEven(36);

/**Task-3
Write a function called make_avg() which will take an array of integers and the size of that array and return the average of those values. */

let array = [10, 20, 80, 97, 6315];
let length = array.length;

function make_avg(ar, length) {
  let sum = 0;
  for (let num of ar) {
    sum += num;
  }
  return sum / length;
}

console.log(make_avg(array, length));

/** Task-4
Write a function called count_zero() which will take a binary string (Binary string is a string which is consist of only 0 and 1) as parameter and count how many 0’s are there in that string.
*/
let binaryString = "1011010010110101";
let count = 0;
function count_zero(params) {
  for (var i of binaryString) {
    if (i == 0) {
      count++;
    }
  }
  console.log("number of zeros in binaryString is: " + count);
}
count_zero(binaryString);

/*Task-5
Write a function called odd_even() which takes an integer value and tells whether this value is even or odd. If even return Even. If odd return Odd
*/
function odd_even(num) {
  if (num % 2 == 0) {
    console.log("this is a even number\n");
  } else {
    console.log("this is odd number\n");
  }
}
odd_even(10);
odd_even(55)
