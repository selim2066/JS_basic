function noDuplicate(array) {
  const unique = [];
  for (let i of array) {
    if (unique.includes(i) === false) {
      unique.push(i);
    }
  }
  return unique;
}
names = [
  "selim",
  "arif",
  "nasim",
  "tijul",
  "sabbir",
  "rumon",
  "rasel",
  "selim",
  "rumon",
  "nasim",
];
console.log(noDuplicate(names));
