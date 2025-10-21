// object literals

const mySym=Symbol("mykey1")

const jsuser={ 
    name:"asif",
    "fullName":"asif ali",
    age:22,
    [mySym]:"mykey1",
    email:'asifalinon123@gmail.com',
    isLoggedIn:true,
    lastLoginDay:["monday","friday"]
}

//console.log(jsuser.email);
//console.log(jsuser["email"]);
//console.log(jsuser[mySym]);
//console.log(typeof jsuser.mySym);

jsuser.email="asifmehar@gmail.com"
//Object.freeze(jsuser)
jsuser.email="asifalinon123@gmail.com"
console.log(jsuser);

jsuser.greeting=function(){
    console.log("hello user");
    
}

jsuser.greetingTwo=function(){
    console.log(`hello user, ${this.fullName}`);
    
}

console.log(jsuser.greeting());
console.log(jsuser.greetingTwo());

