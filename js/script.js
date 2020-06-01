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


//tshirt section
//hide select theme option
const select = document.querySelector("#design");
select.style.display = "none";

//updated the “Color” field to read “Please select a T-shirt theme”.
const color = document.querySelector("#color");
color[0].innerText = "Please select a T-shirt theme";

//hide the colors in the “Color” drop down menu.
for (let i = 1; i < color.length; i++) {
  color[i].style.display= "none";
}


//register for activities

//Create an element to display the total activity cost
let cost = 0;
let totalCost = document.createElement("div");
let activities = document.querySelector(".activities");
activities.appendChild(totalCost);
totalCost.textContent= `Total Cost: £${cost}`;







//payment info



//