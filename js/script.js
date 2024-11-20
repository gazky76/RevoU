// Form Validation

function contactForm(){
  const name = document.getElementById('name').value;
  console.log(name);
  const email = document.getElementById('email').value;
  console.log(email);
  const interest = document.getElementById('interest').value;
  console.log(interest);
  
  if (!name || !email || !interest) {
    alert('Please fill out all fields.');
    event.preventDefault();
  } else if (!/\S+@\S+\.\S+/.test(email)) {
    alert('Please enter a valid email address.');
    event.preventDefault();
  }  
}

let indexSlide = 1;
const listImages = document.getElementsByClassName('banner-autoslide');

showSlide();

function nextSlide(){
  showSlide(indexSlide +=1);
}

function showSlide(index){
  // Resetter
  if(index > listImages.length) indexSlide = 1;
  console.log(indexSlide);
  hideAllSlide();
  listImages[indexSlide -1].style.display = 'block';
}


// Logic for hidden all slide
function hideAllSlide(){
  for (let i = 0; i < listImages.length; i++){
    listImages[i].style.display = 'none';
  }
}

setInterval(() => nextSlide(),2000);
  
  