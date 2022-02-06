// Part A script
// Use the DOM to get the div and select elements and store them in varaibles
var div = document.getElementById('partA');
var weekday = document.querySelector('#weekday');

// Add an event listener to the select element so that when the selected option
// is changed, the background color of the div element is changed
weekday.addEventListener("change", onChange);

// Create a function that takes in the selected option value and changes the 
// background of the div element when the selected option changes using switch statements
function onChange() {
    var day = weekday.value;
    switch(day) {
        case "Sunday":
            div.style.backgroundColor = "#005f73";
            break;
        case "Monday":
            div.style.backgroundColor = "#0a9396";
            break;
        case "Tuesday":
            div.style.backgroundColor = "#94d2bd";
            break;
        case "Wednesday":
            div.style.backgroundColor = "#e9d8a6";
            break;
        case "Thursday":
            div.style.backgroundColor = "#ee9b00";
            break;
        case "Friday":
            div.style.backgroundColor = "#ca6702";
            break;
        case "Saturday":
            div.style.backgroundColor = "#bb3e03";
            break;
        default:
            div.style.backgroundColor = "none";
            break;
    }
}

// Part B script
// Use the DOM to get the HTML submit button element and store it in a variable
var submit = document.getElementById('submit');

// Add an event listener to the submit button
// This event listener will call the onSubmit function to display the message about the number submitted
submit.addEventListener("click", onSubmit);

// Create a function to display the message about the number submitted
function onSubmit(e) {
    e.preventDefault();
    // Use the DOM to get the value of the input field
    var number = document.getElementById('number').value;

    // Create a variable to store the message to be displayed
    var message = 'The number entered is an ';

    // Check if number is odd or even
    message += (number % 2 == 0) ? 'even ' : 'odd ';

    // Check if number is prime or composite or neither
    var prime = true;
    for (var i = 2; i < number/2; i++) {
        if (number % i == 0) {
            // Number is composite
            prime = false;
            break;
        }
    }
    if (prime && number != 1) {
        message += 'prime number ';
    } else if (!prime && number != 1) {
        message += 'composite number ';
    } else {
        message += 'neither prime nor composite number ';
    }

    // Check the range of the number
    if (number <= 50) {
        message += 'less than or equal to 50';
    } else if (number > 50 && number <= 75) {
        message += 'greater than 50 and less than or equal to 75';
    } else if (number > 75 && number <= 100) {
        message += 'greater than 75 and less than or equal to 100';
    } else {
        message += 'greater than 100';
    }

    // Display the message
    document.getElementById('message').innerHTML = message;
    document.getElementById('message').style.display = "block";

}