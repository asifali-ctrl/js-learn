const user={
    username:"asif ali",
    price:999,
    welcomeMassage:function () {
        console.log(`${this.username}! well come to our website`)
    }
}

//user.welcomeMassage()
//user.username="aman"

//++++++++++++++++ ARROW FUNCTIONS ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

const chai=()=>{
    let username="asif"
    console.log(this)
}
chai()

//const addTwo=(num1,num2)=>{
  //  return num1=num2
//}
//const addTwo=(num1,num2)=> num1+num2 
const addTwo=(num1,num2)=> (num1+num2) 

console.log(addTwo(4,3))