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



