/*const date = new Date();
console.log(date);
let y = date.getFullYear();
let m = date.getMonth();
let d = date.getDate();
// console.log(year, +month, +day);

let today = [y, m, d];
console.log(today);
*/
// AGGE Calculator
function age(year, month, day) {
  const today = new Date();
  let y = today.getFullYear() - year;
  let m = today.getMonth() - month + 1;
  let d = today.getDate() - day;

  if (d < 0) {
    d += new Date(today.getFullYear(), today.getMonth(), 0).getDate();
    m--;
  }
  if(m<0){
    m+=12;
    y--;
  }
  console.log(y + " years " + m + " month " + d + " days");
}


age(2000, 4, 15);
age(2000, 11, 29);
age(1996, 2, 5);
age(1971,12,16)