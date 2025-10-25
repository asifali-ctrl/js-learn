let a=300
if (true) {
    let a=2
    const b=3
    console.log(a)
}
//console.log(a)

// scopes in nested functions:

function one(){
    const username="asif"
    function two(){
        const website="youtube"
        console.log(username)
    }
    //console.log(website)
    two()
}
one()

if(true){
    const username="asif ali"
    if(true){
        const website=" youtube"
        console.log(username+website)
    }
  //  console.log(website)
}
//console.log(username)

//++++++++++++++++++ INTERESTING THINGS ABOUT HOISTING +++++++++++++++++++++++++++++++++++++++++++++

addOne(5)
function addOne(num1){
    return num1+1
}

//addTwo(5)
const addTwo=function(num){
    return num+2
}