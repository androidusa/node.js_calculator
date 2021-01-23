var readlineSync = require('readline-sync');
var num1 = readlineSync.questionInt("please enter first number: " + '');
var num2 = readlineSync.questionInt("please enter second number: " + '');
var enteredOperator = readlineSync.question("What operation do you want to perform? Enter add / sub / mul / div: " + '');




function add(a , b){
    return a + b;
    }
function sub(a , b){
    return a - b;
    }
function mul(a , b){
    return a * b;
    }
function div(a , b){
    return a / b;
    }                 
    

function calculator(a , b , c){
    if (c === "add"){
        return add(a , b);
    }
    else if (c === "sub"){    
        return sub(a , b);
    }
    else if (c ==="mul"){
        return mul(a , b);
    }   
    else if(c === "div"){
        return div(a , b); 
    }
}                  

console.log ("result is: " + calculator(num1 , num2 , enteredOperator));
