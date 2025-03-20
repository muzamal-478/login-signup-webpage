// Function to handle Signup form validation
document.getElementById('signupForm').addEventListener('submit', function(e) {
    e.preventDefault();

    // Get the values from the signup form fields
    let name = document.getElementById('name').value;
    let email = document.getElementById('email').value;
    let password = document.getElementById('password').value;
    let confirmPassword = document.getElementById('confirmPassword').value;

    // Check if all fields are filled
    if (!name || !email || !password || !confirmPassword) {
        alert("Please fill out all fields.");
        return;
    }

    // Check if the password and confirm password match
    if (password !== confirmPassword) {
        alert("Passwords do not match.");
        return;
    }

    // Check if password is strong (e.g., minimum 6 characters)
    if (password.length < 6) {
        alert("Password must be at least 6 characters long.");
        return;
    }

    // If everything is valid, proceed (for now, just alert the user)
    alert("Sign Up Successful!");
    // Here you can send the form data to the server (AJAX, API call, etc.)
});

// Function to handle Login form validation
document.getElementById('loginForm').addEventListener('submit', function(e) {
    e.preventDefault();

    // Get the values from the login form fields
    let email = document.getElementById('email').value;
    let password = document.getElementById('password').value;

    // Check if all fields are filled
    if (!email || !password) {
        alert("Please fill in both fields.");
        return;
    }

    // Check if the email format is valid
    let emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
    if (!email.match(emailPattern)) {
        alert("Please enter a valid email address.");
        return;
    }

    // If everything is valid, proceed (for now, just alert the user)
    alert("Login Successful!");
    // Here you can send the login data to the server for authentication (AJAX, API call, etc.)
});
