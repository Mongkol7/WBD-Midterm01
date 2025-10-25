add = (a, b) => a + b;
substract = (a, b) => a - b;
multiply = (a, b) => a * b;
//handling error
function divide(a, b){
    if(b === 0){
        return "Error: Division by zero";
    }
    return a / b;
}

module.exports = { add, substract, multiply, divide };