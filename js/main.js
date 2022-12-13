console.log("JavaScript Portion of the Test");

// Step 1: Write a multi-line comment detailing your name and student number
/*
  Name: Vilas Desai
  Student Number: 200522471
*/

// Step 2: Create a block scoped, immutable variable that stores an empty array
const array = [];

// Step 3: Add the 3 people's names to the array
array.push("Dev");
array.push("Kalp");
array.push("Veer");

// Step 4: Remove the second array item from the array
array.splice(1, 1);

// Step 5: Using array map, iterate over the array items and make them all uppercase. Store the result in a new, block scoped, mutable variable
const rs = array.map(function (se) {
    return se.toUpperCase();
});

// Step 6: Create an event listener that fires a callback function when the aside h2 is clicked. It should alert "Hello from Boo the World's Cutest Dog!";
let header = document.querySelector("aside h2");
header.addEventListener("click", function () {
alert("Hello from Boo the World's Cutest Dog!")});


