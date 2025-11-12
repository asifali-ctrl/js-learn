if(2!=3){
    console.log("executed");
} else{
    console.log("fail!");
    
}
//Shorthand Notation
//const balance=1000
  //  console.log("test2")
//console.log("test3");
//let score=1000
//if(score>10000){
  //  console.log("grater then 10000");
//}else if(score>5000){
  //  console.log("grater then 5000");
//}else if(score>1000){
  //  console.log("grater then 1000");    
//}else{
  //  console.log("less then 1000 or 1000 ");
//}
    
const userLoggedIn=true
const debitcard=true
const LoggedInFromGoogle=true
const LoggedInFromEmail=false
if(userLoggedIn && debitcard){            // && for and
    console.log('allow to buy courses');
}
 if(LoggedInFromGoogle|| LoggedInFromEmail){   // || for or
    console.log("already Logged In");
    
 }

 // switch case:

 /*switch (key) {
  case value:
    
    break;
 
  default:
    break;
 } 
    */

const month=4
switch (month) {
  case 1:
    console.log("january");
    break;
  case 2:
    console.log("febuary");
    break;
  case 3:
    console.log("march");
    break;
  case 4:
    console.log("april");
    break;

  default:
    console.log("error 404");
    
    break;
}

 