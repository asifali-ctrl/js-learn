// Iimmediately invocked function expressions (IIFE)

(function chai(){
    console.log(`DB Connected`);  //named IIFE
})();

( (name) => {
    console.log(`DB connected Two ${name}`);
    
})('asif')