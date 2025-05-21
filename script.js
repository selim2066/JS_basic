console.log(2066);
let id = 2053;
console.log(typeof id);
console.log(id);
var a = "55.7";
var b = parseInt(a);
console.log(b);

for (i = 0; i < 2; i++) {
  console.log("my name is Selim and id is " + id);
}

if (id == 2066) {
  console.log("Md Selim Reza ibn Abdul Latif");
} else if (id == 2053) {
  console.log("Md Rumon");
} else {
  console.log("user unidentify");
}

// shorthand
const isPassed = false;
if (!isPassed) {
  console.log("fail tui");
} else {
  console.log("passed betttta");
}

//
// array task js
// task:1
let fruits = ["am", "jam", "kola", "lichu", "tormuj"];
console.log(fruits[2]);
fruits[1] = "jambura";
console.log(fruits);

// task:2
let destination = ["coxBazar", "zaflong", "tanguar haor"];
destination.push("peshoyar");
destination.push("kashmir", "kabul");
destination.pop();
console.log(destination);

// task:3
let book = ["c++", "java", "algorithm"];
console.log(book.includes("js"));

// task:4
let arr = [1, 2, 3, 4, 5];
let names = "isArray()";
console.log(Array.isArray(arr));
console.log(Array.isArray(names));
// task:5

let seasonal = ["am", "jam", "lichu", "tormuj"];
let non_seasonal = ["lau", "peyara", "kola"];
let allFruits = seasonal.concat(non_seasonal);
console.log(allFruits);
