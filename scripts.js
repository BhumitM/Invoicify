// JavaScript for handling button interactions and toggles

// Object to store user credentials
const userCredentials = {};

// Function to toggle the visibility of the menu
function toggleMenu() {
    const menu = document.getElementById('menu');
    menu.classList.toggle('hidden');
}

// Function to toggle the visibility of the contact info box
function toggleContact() {
    const contactInfo = document.getElementById('contact-info');
    const aboutInfo = document.getElementById('about-info');
    const loginForm = document.getElementById('login-form');
    const signUpForm = document.getElementById('sign-up-form');
    
    // Hide other sections
    aboutInfo.classList.add('hidden');
    loginForm.classList.add('hidden');
    signUpForm.classList.add('hidden');

    // Toggle contact section
    contactInfo.classList.toggle('hidden');
}

// Function to toggle the visibility of the about info box
function toggleAbout() {
    const aboutInfo = document.getElementById('about-info');
    const contactInfo = document.getElementById('contact-info');
    const loginForm = document.getElementById('login-form');
    const signUpForm = document.getElementById('sign-up-form');
    
    // Hide other sections
    contactInfo.classList.add('hidden');
    loginForm.classList.add('hidden');
    signUpForm.classList.add('hidden');

    // Toggle about section
    aboutInfo.classList.toggle('hidden');
}

// Function to toggle the visibility of the login form
function toggleLoginForm() {
    const loginForm = document.getElementById('login-form');
    const contactInfo = document.getElementById('contact-info');
    const aboutInfo = document.getElementById('about-info');
    const signUpForm = document.getElementById('sign-up-form');

    // Hide other sections
    contactInfo.classList.add('hidden');
    aboutInfo.classList.add('hidden');
    signUpForm.classList.add('hidden');

    // Toggle login form
    loginForm.classList.toggle('hidden');
}

// Function to show the sign-up form
function showSignUpForm() {
    const signUpForm = document.getElementById('sign-up-form');
    const contactInfo = document.getElementById('contact-info');
    const aboutInfo = document.getElementById('about-info');
    const loginForm = document.getElementById('login-form');

    // Hide other sections
    contactInfo.classList.add('hidden');
    aboutInfo.classList.add('hidden');
    loginForm.classList.add('hidden');

    // Show sign-up form
    signUpForm.classList.remove('hidden');
}

// Function to handle sign-up form submission
function handleSignUp(event) {
    event.preventDefault();

    const userId = document.getElementById('signup-userid').value;
    const password = document.getElementById('signup-password').value;

    // Store only the user credentials
    userCredentials[userId] = password;

    alert('Sign-up successful! You can now log in.');

    // Optionally, you can automatically hide the sign-up form here
    document.getElementById('sign-up-form').classList.add('hidden');
    document.getElementById('login-form').classList.remove('hidden');
}

// Function to handle login form submission
function handleLogin(event) {
    event.preventDefault();

    const userId = document.getElementById('userid').value;
    const password = document.getElementById('password').value;

    // Check if the user credentials match
    if (userCredentials[userId] && userCredentials[userId] === password) {
        // Redirect to the invoice generator page
        window.location.href = 'invoice-generator.html';
    } else {
        alert('Invalid credentials. Please try again.');
    }
}

// Function to handle navigation to different pages (dummy function for demonstration)
function navigate(page) {
    alert('Navigating to ' + page);
}

// Function to handle logout (dummy function for demonstration)
function logout() {
    window.location.href = 'index.html'; // Redirect to the main page or login page
}

// Carousel auto-slide functionality
let currentSlide = 0;
const slides = document.querySelector('.slides');
const totalSlides = slides.children.length;

function showNextSlide() {
    currentSlide = (currentSlide + 1) % totalSlides;
    slides.style.transform = `translateX(-${currentSlide * 100}%)`;
}

// Auto-slide every 3 seconds
setInterval(showNextSlide, 3000);

// Attach event listener to login form
document.getElementById('login-form').addEventListener('submit', handleLogin);

// Attach event listener to sign-up form
document.getElementById('sign-up-form').addEventListener('submit', handleSignUp);