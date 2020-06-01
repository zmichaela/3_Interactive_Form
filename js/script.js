//set focus on the first text field - Name

window.onload = function() {
    document.getElementById("name").focus();
  };
  
//created a new input file (Other Job) and hid it
const otherJob = document.querySelector("#other-title");
otherJob.style.display = "none";

const title = document.querySelector("#title");
if (title.value ==="other") {
    otherJob.style.display = "show";
}


//Tshirt section
//Hide select theme option
const design = document.querySelector("#design");
design[0].style.display = "none";

//Update the “Color” field to read “Please select a T-shirt theme”.
const color = document.querySelector("#color");
color[0].innerText = "Please select a T-shirt theme";

//Hide the colors in the “Color” drop down menu.
for (let i = 1; i < color.length; i++) {
  color[i].style.display= "none";
}

//Show & hide options
if (design.value == "js puns") {
  for (let i = 3; i < color.length; i++) {
    color.style.diplay = "block";
    color[i].style.display = "none";
    color[0].style.display = color[1];
  }
}  

if (design.value == "heart js") {
  for (let j = 0; j < 3; j++) {
    color[j].style.display = "none";
    color[0].style.display = color[1];
  
  }
}


//register for activities

//Create an element to display the total activity cost
let cost = 0;
let totalCost = document.createElement("div");
let activities = document.querySelector(".activities");
activities.appendChild(totalCost);
totalCost.textContent= `Total Cost: £${cost}`;





//

//payment info



//