//const tinderUser= new Object()
const tinderUser={}

tinderUser.id="123abc"
tinderUser.name="jonny"
tinderUser.isloggedIn=false

//console.log(tinderUser);

const regularUser={
    email:"soma123@gmail.com",
    fullName:{
        userfullName:{
            firstName:'asif',
            lastName:"ali"
        }
    }
}

//console.log(regularUser.fullName.userfullName.firstName);

const obj1={1:"a",2:"b"}
const obj2={3:"c",4:"d"}

//const obj3={obj1 , obj2}

//console.log(obj3);
//const obj3=Object.assign({},obj1,obj2)
const obj3={...obj1,...obj2}
//console.log(obj3);

console.log(Object.keys(tinderUser));
console.log(Object.values(tinderUser));
console.log(Object.entries(tinderUser));
console.log(tinderUser.hasOwnProperty('isLoggedIn'));



