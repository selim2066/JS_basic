console.log(" \n");
console.log("assignment of hello javascript\n");

/* Problem-01 : Tax Calculator

*/
function calculateTax(income, expenses) {
  if (
    typeof income !== "number" ||
    typeof expenses !== "number" ||
    income <= 0 ||
    expenses <= 0
  ) {
    console.log("pls enter valid input\n");
  } else {
    let x = income - expenses;
    let tax = x * 0.2;
    console.log(tax);
  }
}
calculateTax(-5000, 2000);
calculateTax(7000, 7000);

/* Problem 02 : Notification Generator

*/
function sendNotification(email) {
  if (email.includes("@")) {
    let x = email.split("@");
    console.log(x[0] + " send you a mail from " + x[1]);
  } else {
    console.log("wrong input");
  }
}

sendNotification("mdselimreza2066@gmail.com");

/*Problem-03: Checking Digits Inside a Name
 */
function checkDigitsInName(name) {
  //write your code here
  if (typeof name === "string") {
    if (/\d/.test(name)) {
      console.log(true);
    } else {
      console.log(false);
    }
  } else {
    console.log("uinvalid input");
  }
}
checkDigitsInName("selim2066");
checkDigitsInName(["Raj"]);

/* Problem 04 : Calculate Admission Final Score */
function calculateFinalScore(obj) {
  console.log("\nProblem 04 : Calculate Admission Final Score\n");
  if (
    typeof obj === "object" &&
    typeof obj.name === "string" &&
    typeof obj.testScore === "number" &&
    typeof obj.schoolGrade === "number" &&
    typeof obj.isFFamily === "boolean"
  ) {
    let total;
    if (obj.isFFamily == true) {
      total = obj.testScore + obj.schoolGrade + 20;
    } else {
      total = obj.testScore + obj.schoolGrade;
    }

    if (total >= 80) {
      console.log(true);
    } else {
      console.log(false);
    }
  } else {
    console.log("invalid input\n");
  }
}

calculateFinalScore({
  name: "Rajib",
  testScore: 45,
  schoolGrade: 25,
  isFFamily: true,
});

calculateFinalScore({
  name: "Rajib",
  testScore: 15,
  schoolGrade: 25,
  isFFamily: true,
});
calculateFinalScore("hiMyNameIs Selim");

/* Predict Avarage Waiting Time */
console.log(" \nProblem-05: Predict Avarage Waiting Time\n");
function waitingTime(waitingTimes, serialNumber) {
 if(Array.isArray(waitingTimes) && typeof serialNumber ==='number'){
  let sum = 0;
  for (let i of waitingTimes) {
    sum += i;
  }
  let avg = Math.floor(sum / waitingTimes.length);
  let peopleLeft = serialNumber - 1 - waitingTimes.length;
  // console.log(peopleLeft, avg);

  return avg * peopleLeft;
 }else{
 return "invalid input"
 }
}
console.log(waitingTime([3, 5, 7, 11, 6], 10));
console.log(waitingTime([13, 2, 6, 7, 10], 6));
console.log(waitingTime([7, 8, 3, 4, 5], "9"));
