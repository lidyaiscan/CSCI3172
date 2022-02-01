<!--- The following README.md sample file was adapted from https://gist.github.com/PurpleBooth/109311bb0361f32d87a2#file-readme-template-md by Gabriella Mosquera for academic use ---> 

# Lab 3

* *Date Created*: 01 02 2022
* *Last Modification Date*: 01 02 2022

## Authors:

* [Lidya Iscan-Insense](lidyaiscan@dal.ca) - *(Author)*

## Getting Started

GitLab Repository Link: https://git.cs.dal.ca/lidya/csci-3172/-/tree/main/Lab3
Timberlea Link: https://web.cs.dal.ca/~lidya/csci3172/lab3/

## Question 2
(a) what is the use of preventDefault()?
preventDefault() is used to tell the user agent that the default action should not taken if the event does not get explicitly handled.
For example, in my script.js file on line 9 in the function declaration, e is passed in as the event and on line 10 the preventDefault() function is called on the event. This allows
my form submission results to be displayed on the webpage.

(b) What changes are required in the code to keep previous data on the page?
In order to keep previous data on the web page after an event has occured, the line in the function called that inserts the HTML onto the page should be modified.
by replacing the "=" with the "+=" concatenation symol in the document.getElementById("id").innerHTML line, so that the HTML that is already present inside the HTML element with 
that specific id is concatenated with the new content.
For example, in my script.js file on lines 18-21, I would write something along the lines of document.getElementById("firstNameValue").innerHTML += firstName; for each of my form elements;

## Sources Used

No code was copied, re-used, or modified from other sources.
The Lab 2 material presented during the lab was used to help answer Question 2 a), and b).