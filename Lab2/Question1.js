/* 1. Create a function to calculate the area of a circle with a radius of 6. Ensure you use ‘const’ for this 
calculation. */

/* This function takes in one parameter, radius, to calculate the area of the circle
The constant pi is rounded and hardcoded as 3.14159 */
function areaOfCircle(radius) {
    const PI = 3.14159;
    // area of a circle: 2(pi)r^2
    let area = 2 * PI * (radius * radius);
    console.log("Area of a circle with radius 6: " + area);
    return("Area of a circle with radius 6 is: " + area);
}