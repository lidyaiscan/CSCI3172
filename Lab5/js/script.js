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
    
    numbersArray.forEach(number => {
        // Check if number is prime or composite or neither
        var prime = true;
        for (var i = 2; i < number/2; i++) {
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

    // Display the count
    document.getElementById('primeNumbers').innerHTML = primeNumbers;
    document.getElementById('compositeNumbers').innerHTML = compositeNumbers;
    document.getElementById('neither').innerHTML = neither;
    document.getElementById('formSubmission').style.display = "block";
}