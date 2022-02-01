// Use the DOM to get the HTML submit button element and store it in a variable
var submit = document.getElementById('submit');

// Add an event listener to the submit button so when the user clicks submit
// This event listener will call the onSubmit function to display the form data on the webpage
submit.addEventListener("click", onSubmit);

// Create a function to display the form data in the input fields on the web page
function onSubmit(e) {
    e.preventDefault();
    // Use the DOM to get the values of each input field element and store them in variables
    var firstName = document.getElementById('firstName').value;
    var lastName = document.getElementById('lastName').value;
    var gender = document.querySelector('input[name="gender"]:checked').value;
    var country = document.querySelector('#country').value;

    // Use the DOM to set the HTML of the form submission elements
    document.getElementById('firstNameValue').innerHTML = "First Name: " + firstName;
    document.getElementById('lastNameValue').innerHTML = "Last Name: " + lastName;
    document.getElementById('genderValue').innerHTML = "Gender: " + gender;
    document.getElementById('countryValue').innerHTML = "Country: " + country;

    // Display the hidden submission data on the webpage
    document.querySelector('.formSubmission').style.display = "block";
}