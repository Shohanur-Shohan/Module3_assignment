// 3. prime number

function primeNum(number){
   
    if(number%2 === 0 || number < 2){
        console.log('False');
    }
    else{
        console.log("True");
    }

}
const result = primeNum(-2);