//unction sumOfTwoNumbers(number1,number2) {
  //  console.log(number1+number2)
//}
//sumOfTwoNumbers(1,3)

function sumOfTwoNumbers(number1,number2) {
    let result=number1+number2
    return result
}
//sumOfTwoNumbers(1,3)

function loginuserMassage(username){
    if (!username) {
        console.log("please enter a username");
       return 
    }
    return`${username} just logged in`
}
//console.log(loginuserMassage()) 

function calculateCartPrice(val1,val2,...num1){
    return num1
}
//console.log(calculateCartPrice(200,333,444,555))

const user={
    username:"asif",
    age:22
}

function handelObject(anyobject) {
    console.log(`user name is ${anyobject.username} and age is ${anyobject.age}`)
}
//handelObject(user)
handelObject({
    username:"asif",
    age:22
})

const myArray=[100,200,300,400]
function returSecondValue(anyArray) {
    console.log(anyArray[1])
}
//returSecondValue(myArray)
returSecondValue([100,200,300,400])