const selectBox = document.getElementById("numberSelect");

for (let i = 0; i <= 18; i++) {
  const option = document.createElement("option");
  
  option.value = i;
  option.textContent = i;
  
  selectBox.appendChild(option);
}

const selectBox1 = document.getElementById("numberSelect1");

for (let j = 0; j <= 18; j++) {
  const option1 = document.createElement("option");
  
  option1.value = j;
  option1.textContent = j;

  selectBox1.appendChild(option1);
}

const card = document.getElementById("card");
const card0 = document.getElementById("card0");

const signUpBtn = document.querySelector('.sign-up-button');
const signInBtn = document.querySelector('.back-but');
const rsignUpBtn = document.querySelector('.real-sign-up-button');

signUpBtn.addEventListener('click',openSignUp);
signInBtn.addEventListener('click',openSignIn);
rsignUpBtn.addEventListener('click',doSignUp);

function openSignUp(e){
  e.preventDefault();
  card.classList.add('show');
  card0.classList.add('show');
}

function openSignIn(event){
  event.preventDefault();
  card.classList.remove('show');
  card0.classList.remove('show');
}
function doSignUp(e){
  e.preventDefault();
}
