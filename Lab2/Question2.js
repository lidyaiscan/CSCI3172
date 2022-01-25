/* 2. Create a function that implements the following arithmetic functions: addition, subtraction, multiplication, 
and division. Your function must accept two numbers as arguments and return the result as output. */

/* This function takes in two parameters, num1 and num2, and calculates the addition operation followed by the 
subtraction, multiplication, and division arithmetic operations based on the results */
function arithmeticOperations(num1, num2) {
    var result = addition(num1, num2);
    function addition(num1, num2) {
        let sum = num1 + num2;
        return sum;
    }
    result = subtraction(result, 4);
    function subtraction(num1, num2) {
        let difference = num1 - num2;
        return difference;
    }
    result = multiplication(result, 2);
    function multiplication(num1, num2) {
        let product = num1 * num2;
        return product;
    }
    result = division(result, 3);
    function division(num1, num2) {
        let quotient = num1 / num2;
        return quotient;
    }
    console.log(result);
    return(result);
}