// CONTACT FORM

const contactForm = document.getElementById("contactForm");

if(contactForm){

contactForm.addEventListener("submit", function(e){

e.preventDefault();

alert("Thank you for contacting NexaDev Academy. We will respond shortly.");

});

}



// ENROLL FORM

const enrollForm = document.getElementById("enrollForm");

if(enrollForm){

enrollForm.addEventListener("submit", function(e){

e.preventDefault();

alert("Congratulations! Your enrollment has been submitted successfully.");

});

}



// SIGNUP BUTTON

const signup = document.querySelector(".signup");

if(signup){

signup.addEventListener("click", function(){

alert("Signup page coming soon!");

});

}



// LOGIN BUTTON

const login = document.querySelector(".login");

if(login){

login.addEventListener("click", function(){

alert("Login page coming soon!");

});

}
