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
//const color = document.querySelector("#color");
//color.options = "none";

//hide the colors in the “Color” drop down menu.


/*
