// dates:
let myDate=new Date()
//console.log(myDate.toString());
//console.log(myDate.toDateString());
//console.log(myDate.toLocaleString());

let myCratedDate=new Date(2003,0,19)
//console.log(myCratedDate.toDateString());

let myCratedDate2=new Date(2003,0,19,23,3)
//console.log(myCratedDate2.toLocaleString());
 
let myCratedDate3=new Date("2003-01-19")
//console.log(myCratedDate3.toLocaleString());
let myCreatedDate4=new Date("01-19-2003")
//console.log(myCreatedDate4.toLocaleString());

let mytimeStamp= Date.now()   //for getting present date in millii seconds from that date 1970
//console.log(mytimeStamp);
//console.log(myCreatedDate4.getTime());
console.log(Math.floor(Date.now()/1000));

let newDate=new Date()
console.log(newDate);
console.log(newDate.getDate());
console.log(newDate.getDay());
console.log(newDate.getFullYear());

newDate.toLocaleString('default',{
    weekday:"long",
})





