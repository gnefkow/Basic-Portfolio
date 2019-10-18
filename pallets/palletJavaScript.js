
// FOR LOOP 
// FOR LOOP 

var vegetables = ["Carrots", "Peas", "Lettuce", "Tomatoes"];

// Looping through each item in the array and logging a message to the console.
for (var i = 0; i < vegetables.length; i++) {
  console.log("I love " + vegetables[i]);
}
// i is the standard - "index"
// always use < and NOT <=
//i++ is NOT the same as i+1 
        // it is the same as i=i+1
        //(in other words, it is REDEFINING the variable)


// GET ELEMENT BY ID
// This gets an element by ID and replaces is with some textContent (in this case, the event.key)
var userText = document.getElementById("user-text");

document.onkeyup = function(event) {
    userText.textContent = event.key;
  };