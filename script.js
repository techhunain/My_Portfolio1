// JavaScript to toggle the active class for the menu and hamburger icon
const hamburger = document.querySelector(".hamburger");
const navLinks = document.querySelector(".nav-links");

hamburger.addEventListener("click", () => {
  navLinks.classList.toggle("active");
  hamburger.classList.toggle("active");
});
const text = "Frontend Developer"; // Text to type
const textElement = document.getElementById("text");
const cursorElement = document.getElementById("cursor");
let index = 0;

function typeEffect() {
  if (index < text.length) {
    textElement.textContent += text[index]; // Add one character at a time
    index++;
    setTimeout(typeEffect, 150); // Adjust typing speed (in milliseconds)
  } else {
    cursorElement.style.animation = ""; 
  }
}

typeEffect(); // Start typing

// JavaScript function to clear form fields
function clearFields(event) {
  event.preventDefault(); // Prevent form submission for testing purpose
  const form = document.getElementById('contact-form');
  
  // Submit the form
  form.submit();

  // Clear the form fields
  form.reset();

  // Optional: Notify the user
  swal("Submitted Successfully", "You clicked the button!", "success");
}

