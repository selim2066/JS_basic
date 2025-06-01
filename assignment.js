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
calculateFinalScore("hiMyNameIs Selim")


/* Predict Avarage Waiting Time */
function waitingTime(waitingTimes , serialNumber) {
  // You have to write your code here
  }