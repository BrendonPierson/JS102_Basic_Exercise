// Create a variable that holds your name
var myName = "";

// Create an object that holds your personal information
var myInfo = {
  age: 0,
  last_company: "",
  marital_status: "",
  spouse: ""
};

// Add your name as a new key on the info object
myInfo.name = myName;

// Create another object that represents a record/album
var Eliminator = {
  name: "Eliminator",
  artist: "ZZ Top",
  year: 1981,
  sales: 11000000,
  number_of_hits: 4
};

// Create an array that holds records
var recordArray = [Eliminator];

// Add at least two more album objects to the array



/*
Create a function that adds a new rating
property to an album. The function should take
two arguments.
  1. album - The name of the album
  2. rating - A numeric rating from 1-10
*/
var ??? = function () {
  // Add the rating to the album
};

/*
Create a function that loops over your record
array and adds the same rating (of your choice)
to each one.
*/
var modifyAlbums = function () {
  for () {
    someFunction(???, ???);
  }
};

// Call the function that starts modifying the array
modifyAlbums();
  
// console.log your array of records
console.log(recordArray);

// Display the new array in the browser
var recordDom = document.getElementById(???);

/*
 JSON.stringify() is a built-in function
 on all major browsers that parses a complex
 structure like an array or JavaScript 
 object and lets you see it as a string.
*/
recordDom.innerHTML = JSON.stringify(recordArray, null, 2);
