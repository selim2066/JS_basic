console.log(" \n")
console.log("assignment of hello javascript\n")

/* Problem-01 : Tax Calculator

*/
function calculateTax(income, expenses) {
 
  if(typeof income !=='number' || typeof expenses!=='number' || income <= 0 || expenses <= 0 ){
    console.log("pls enter valid input\n")

  }else{
    let x = income - expenses;
    let tax = x * 0.2;
    console.log(tax);
  }
 
}
calculateTax(-5000, 2000);
calculateTax(7000, 7000);

/* Problem 02 : Notification Generator

*/
function sendNotification(email){
if(email.includes('@')){
    let x= email.split('@')
    console.log(x[0]+" send you a mail from " +x[1])
}else{
    console.log("wrong input")
}
}

sendNotification("mdselimreza2066@gmail.com");