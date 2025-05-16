const colors = {
    red: "#ff0000",
    green: "#00ff00",
    blue: "#0000ff",
    "golden rod": '#daa520'
};
console.log(colors["golden rod"])

const car = {
    make: "Toyota",
    model: "Corolla",
    year: 2020
};
car["passenger capacity"] =5;
console.log(car)

const student = {
    name: "Hamim Sakep",
    id: 5421,
    physics: {
        subject: "HSC Physics",
        author: "Shahjahan Tapan",
        marks: 30
    }
};

console.log(student.physics.marks)

let students = {
    name: 'Ariana Grande',
    age: 21,
    city: 'Gaibandha',
    isStudent: true
};
let count =0;
for(let i in students){
    count++;
}
console.log(count)

// hard problem

let myObject = {

name: 'John Doe',
age: 25,
city: 'Example City',
isStudent: true
};

for(let i in myObject){
    console.log("key: " +i +" | "+"type: " +typeof myObject[i])
}