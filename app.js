// Create a variable that holds your name
var myName = "Brendon Pierson";

// Create an object that holds your personal information
var myInfo = {
  age: 25,
  last_company: "mnps",
  marital_status: "single",
  spouse: ""
};

// Add your name as a new key on the info object
myInfo.name = myName;

// Create another object that represents a record/album

var Album = function(name, artist, year, sales, number_of_hits) {
  this.name = name,
  this.artist = artist,
  this.year = year,
  this.sales = sales,
  this.number_of_hits = number_of_hits
}

var Thickfreakedness = new Album("Thickfreakedness", "The Black Keys", 2010, 160000, 2);
var Eliminator = new Album("Eliminator", "ZZ Top",1981,11000000,4);
var BeTheVoid = new Album("Be The Void", "Dr. Dog",2012,1000000,5);
var BornToRun =new Album("Born to Run","Bruce Springsteen",1975, 5000000,10)

// Create an array that holds records
var recordArray = [Eliminator];

// Add at least two more album objects to the array
recordArray[recordArray.length] = BeTheVoid;
recordArray[recordArray.length] = BornToRun;
recordArray[recordArray.length] = Thickfreakedness;

/*
Create a function that adds a new rating
property to an album. The function should take
two arguments.
  1. album - The name of the album
  2. rating - A numeric rating from 1-10
*/
var ratingAdd = function (album, rate) {
  album.rating = rate;
};

/*
Create a function that loops over your record
array and adds the same rating (of your choice)
to each one.
*/
var modifyAlbums = function () {
  for (var i = 0; i < recordArray.length; i++) {
    ratingAdd(recordArray[i], 5);
  }
};
// Call the function that starts modifying the array
modifyAlbums();
// console.log your array of records
console.log(recordArray);
// Display the new array in the browser
var recordDom = document.getElementById("records");
/*
 JSON.stringify() is a built-in function
 on all major browsers that parses a complex
 structure like an array or JavaScript 
 object and lets you see it as a string.
*/
recordDom.innerHTML = JSON.stringify(recordArray, null, 2);
