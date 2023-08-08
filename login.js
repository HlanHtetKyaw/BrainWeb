// Get the select element
const selectBox = document.getElementById("numberSelect");

// Generate options from 1 to 18
for (let i = 0; i <= 18; i++) {
  // Create a new option element
  const option = document.createElement("option");
  
  // Set the value and text of the option
  option.value = i;
  option.textContent = i;
  
  // Append the option to the select element
  selectBox.appendChild(option);
}

// Get the select element
const selectBox1 = document.getElementById("numberSelect1");

// Generate options from 1 to 18
for (let j = 0; j <= 18; j++) {
  // Create a new option element
  const option1 = document.createElement("option");
  
  // Set the value and text of the option
  option1.value = j;
  option1.textContent = j;
  
  // Append the option to the select element
  selectBox1.appendChild(option1);
}

const card = document.getElementById("card");
let expand = false;
function openSignUp(){
  if(!expand){
    card.style.display='block';
    expand=true;
    console.log("click");
  }
  else{
    card.style.display='none';
    expand=false;
  }
}
function openSignIn(){
    card.style.transform = "rotateY(0deg)";
}
