function temperatureC(C, F) {
  let fahrenheit = C * (9 / 5) + 32;
  let celsius = ((F - 32) * 5) / 9;
  let kelvin = C + 273.15;
  console.log("Celsius to fahrenheit : " + C + " is equal to " + fahrenheit);
  console.log("fahrenheit to Celsius : " + F + " is equal to " + celsius);
  console.log("Celsius to Kelvin : " + C + " is equal to " + kelvin);
}
temperatureC(40,100)


/* Task-2:
You are given an array of numbers. Count how many times the a number is repeated in the array.

sample-input: numbers = [5,6,11,12,98, 5]*/

numbers = [5, 6, 11, 12, 98, 5];
function repeated(numbers){
    
}