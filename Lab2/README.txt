<!--- The following README.md sample file was adapted from https://gist.github.com/PurpleBooth/109311bb0361f32d87a2#file-readme-template-md by Gabriella Mosquera for academic use ---> 

# Lab 2

* *Date Created*: 24 01 2022
* *Last Modification Date*: 24 01 2022

## Authors:

* [Lidya Iscan-Insense](lidyaiscan@dal.ca) - *(Author)*

## Getting Started

GitLab Repository Link: https://git.cs.dal.ca/lidya/csci-3172/-/tree/main/Lab2
Timberlea Link: https://web.cs.dal.ca/~lidya/csci3172/lab2/

The three files for Questions 1-3 for Lab2 are Question1.js, Question2.js, and Question3.js which are referenced within script tags in index.html

To call each function for Questions 1-3 open the index.html file on your browser and call the function from the console window.
The function for Question 1 is called areaOfCircle() and takes in one parameter for the radius.
The function for Question 2 is called arithmeticOperations() and takes in two numbers to compute the four operations.
The function for Question 3 is called areaOfRectangle() and takes in two parameters for the height and width.

## Question 4
(a) What is the scope of a const variable? 
The scope of a const variable is defined as "block scope", so the value of the const variable is restricted to the block that it is declared inside.
Once the value of a const variable has been declared, it cannot be reasigned or redeclared.
Examples:

    // function declared within a function block
    function setAge() {
        const AGE = 21;
    }

    // function declared within a block
    {
        const AGE = 21;
    }

    // correct access of a const variable
    {
        const AGE = 21;
        console.log(AGE);
    }

    // incorrect access of a const variable
    {
        const AGE = 21;
    }
    console.log(AGE); // ERROR

    // reassignment of const variable
    {
        const AGE = 21;
        AGE = 22; // ERROR
    }

    // redeclaration of const variable
    {
        const AGE = 21;
        const AGE = 22; // ERROR
    }

    // correct addition of a property to a const variable
    {
        const student = {firstName: "Lidya", lastName: "Iscan-Insense"};
        const student.B00 = "B00816081";
    }

    // correct reassignment of a property in a const variable
    {
        const grade = {class: "CSCI3172", letter: "A"};
        const grade.letter = "A+";
    }

(b) When were the let and const keywords added to JavaScript?
Both the let and const keywords were added to JavaScript in 2015 with ECMAScript version 6 (ES6).

## Sources Used

No code was copied, re-used, or modified from other sources.
The Lab 2 slides were used for answering Question 4.