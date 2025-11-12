const UserEmail="asif@gmail"

if(UserEmail){
    console.log('got email value');
}
else{
    console.log("Don't get email id");
}

// nullish coalescing operator (??) null /undefined

let val1=5 ?? 7
val1=null??3
val1=null??
console.log(val1);
 
// terniary operator:

// condition ? true:false

const price=100
price<=100 ? console.log("less then 100") : console.log("more then 100");

