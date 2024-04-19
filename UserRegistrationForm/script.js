function validateForm() {
    var firstName = document.getElementById("firstName").value;
    var lastName = document.getElementById("lastName").value;
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;
    var confirmPassword = document.getElementById("confirmPassword").value;
    var dob = document.getElementById("dob").value;
    var gender = document.getElementById("gender").value;
    var terms = document.getElementById("terms").checked;

    // Simple validation example, you can add more complex validation as needed
    if (firstName === "" || lastName === "" || email === "" || password === "" || confirmPassword === "" || dob === "" || gender === "" || !terms) {
        alert("Please fill in all fields and accept the Terms and Conditions.");
        return false;
    }

    if (password !== confirmPassword) {
        alert("Passwords do not match.");
        return false;
    }

    return true;
}
// Function to toggle password visibility
function togglePasswordVisibility(inputId, toggleButtonId) {
    var passwordInput = document.getElementById(inputId);
    var toggleButton = document.getElementById(toggleButtonId);

    if (passwordInput.type === "password") {
        passwordInput.type = "text";
        toggleButton.classList.remove("fa-eye");
        toggleButton.classList.add("fa-eye-slash");
    } else {
        passwordInput.type = "password";
        toggleButton.classList.remove("fa-eye-slash");
        toggleButton.classList.add("fa-eye");
    }
}

// Event listener for toggling password visibility
document.getElementById("togglePassword").addEventListener("click", function() {
    togglePasswordVisibility("password", "togglePassword");
});

document.getElementById("toggleConfirmPassword").addEventListener("click", function() {
    togglePasswordVisibility("confirmPassword", "toggleConfirmPassword");
});
