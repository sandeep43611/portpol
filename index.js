// Function to validate the login form
function validateLoginForm() {
    const username = document.querySelector('.sing-in input[type="text"]').value;
    const password = document.querySelector('.sing-in input[type="password"]').value;

    if (username.trim() === '' || password.trim() === '') {
        alert('Username and password are required for login.');
        return false;
    }

    return true;
}

// Function to validate the signup form
function validateSignupForm() {
    const username = document.querySelector('.sing-Up input[type="text"]').value;
    const email = document.querySelector('.sing-Up input[type="email"]').value;
    const password = document.querySelector('.sing-Up input[type="password"]').value;
    const agreeCheckbox = document.querySelector('.sing-Up input[type="checkbox"]');

    if (username.trim() === '' || email.trim() === '' || password.trim() === '') {
        alert('All fields are required for signup.');
        return false;
    }

    // Check if the email is in a valid format
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
        alert('Please enter a valid email address.');
        return false;
    }

    if (!agreeCheckbox.checked) {
        alert('You must agree to the terms and conditions.');
        return false;
    }

    return true;
}

// Add event listeners to the form submit buttons
document.querySelector('.sing-in form').addEventListener('submit', function (event) {
    if (!validateLoginForm()) {
        event.preventDefault(); // Prevent form submission if validation fails
    }
});

document.querySelector('.sing-Up form').addEventListener('submit', function (event) {
    if (!validateSignupForm()) {
        event.preventDefault(); // Prevent form submission if validation fails
    }
});
