// Use the DOM to get the HTML submit button element and store it in a variable
var submit = document.getElementById('submit');

// Add an event listener to the submit button so when the user clicks submit
// This event listener will call the onSubmit function to display the number data on the webpage
submit.addEventListener("click", onSubmit);

function onSubmit(e) {
    e.preventDefault();
    // create counter variables to store the number of prime numbers, composite numbers and neither
    var primeNumbers = 0, compositeNumbers = 0, neither = 0;

    // Use the DOM to get the value of the input field element and store it in a variable
    var numbers = document.getElementById('numbers').value;
    // Split the comma separated numbers and store them in an array
    var numbersArray = numbers.split(",");

    // For loop implementation
    for (let i = 0; i < numbersArray.length; i++) {
        // Check if number is prime or composite or neither
        var number = numbersArray[i];
        var prime = true;
        for (let j = 2; j < number/2; j++) {
            if (number % j == 0) {
                // Number is composite
                prime = false;
                break;
            }
        }
        // Increment number counter
        if (prime && number != 1 && number != 0) {
            primeNumbers++;
        } else if (!prime && number != 1 && number != 0) {
            compositeNumbers++;
        } else {
            neither++;
        }
    }

    // Set the count
    document.getElementById('forLoopPrimeNumbers').innerHTML = primeNumbers;
    document.getElementById('forLoopCompositeNumbers').innerHTML = compositeNumbers;
    document.getElementById('forLoopNeither').innerHTML = neither;

    // Reset counters
    primeNumbers = 0, compositeNumbers = 0, neither = 0;

    // ForEach loop implementation
    numbersArray.forEach(number => {
        // Check if number is prime or composite or neither
        var prime = true;
        for (let i = 2; i < number/2; i++) {
            if (number % i == 0) {
                // Number is composite
                prime = false;
                break;
            }
        }
        // Increment number counter
        if (prime && number != 1 && number != 0) {
            primeNumbers++;
        } else if (!prime && number != 1 && number != 0) {
            compositeNumbers++;
        } else {
            neither++;
        }
    });

    // Set the count
    document.getElementById('forEachLoopPrimeNumbers').innerHTML = primeNumbers;
    document.getElementById('forEachLoopCompositeNumbers').innerHTML = compositeNumbers;
    document.getElementById('forEachLoopNeither').innerHTML = neither;

    // Reset counters
    primeNumbers = 0, compositeNumbers = 0, neither = 0;

    numbersArray.map(number => {
        // Check if number is prime or composite or neither
        var prime = true;
        for (let i = 2; i < number/2; i++) {
            if (number % i == 0) {
                // Number is composite
                prime = false;
                break;
            }
        }
        // Increment number counter
        if (prime && number != 1 && number != 0) {
            primeNumbers++;
        } else if (!prime && number != 1 && number != 0) {
            compositeNumbers++;
        } else {
            neither++;
        }
    });

    // Set the count
    document.getElementById('mapFunctionPrimeNumbers').innerHTML = primeNumbers;
    document.getElementById('mapFunctionCompositeNumbers').innerHTML = compositeNumbers;
    document.getElementById('mapFunctionNeither').innerHTML = neither;

    // Display the counts
    document.getElementById('formSubmission').style.display = "block";
}