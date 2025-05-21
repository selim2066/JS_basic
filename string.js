// Count how many times a string has the letter a or A

let a_string = "Amar nam ki jano tumi AAAa?";
let count = 0;
for (let i of a_string) {
  if (i == "a" || i == "A") {
    count++;
  }
}
console.log(count);

// Check whether a string contains all the vowels a, e, i, o, u
// i=='a' && i=='e' && i=='i' && i=='o' && i=='u'

let vowels = ["a", "e", "i", "o", "u"];
let text = "selim reza is not worthy of anything bt a slave of Allah";
let isVowel = true;

for (let v of vowels) {
  if (!text.includes(v)) {
    isVowel = false;
    break;
  }
}
if (isVowel == true) {
  console.log("text have all the vowels");
} else {
  console.log("nooooooooooooo");
}
// if(){
//         console.log("yes, contained");
//     }else{
//         console.log("nooooooooo")}
// for(let i of text){
//     if(text.includes('a','e','i','o','u')){
//         console.log("yes, contained");
//     }else{
//         console.log("nooooooooo")
//     }
// }

// console.log()

// If a given string has either x, replace x by y. if the given string has X, replace it by Y.

let str = "starX";

for (let i of str) {
  console.log(i);
  if (i == "x") {
    let newStr = str.replace(/x/g, "y");
    console.log(newStr);
  } else if (i == "X") {
    let newStr = str.replace(/X/g, "Y");
    console.log(newStr);
  }
}

// Capitalize Every first Letter of each word in a String

let cap = "hi my name is selim reza";
let newCap = "";

for (let i in cap) {
  if (i == 0 || cap[i-1] === " ") {
    newCap += cap[i].toUpperCase();
  } else {
    newCap += cap[i];
  }
}

console.log(newCap);
let words= cap.split(' ')
for(let word in words){
console.log(words[word])
}
console.log(words)