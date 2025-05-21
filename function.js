function selim(name, year, edu) {
  let y = 2025 - year;
  console.log(
    name + " " + y + ", years old" + " and currenty studing in " + edu
  );
}
selim("selimReza", 2000, "GUB ");

// AGE calculator
function age(year, month, date) {
  let age = [2025, 5, 22];
  if (date > age[2]) {
    age[2] += 30;
    age[1]--;
  }
  if (month > age[1]) {
    age[1] += 12;
    age[0]--;
  }
  let y = age[0] - year;
  let m = age[1] - month;
  let d = age[2] - date;
  console.log(y + " years " + m + " month " + d + " days");
}
age(2000, 4, 15);
age(2000, 11, 29);
