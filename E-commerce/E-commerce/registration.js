// registration.js

document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("registration-form");

    form.addEventListener("submit", (event) => {
        event.preventDefault(); // Prevent actual form submission

        // Basic form validation
        const fname = document.getElementById("fname").value.trim();
        const lname = document.getElementById("lname").value.trim();
        const email = document.getElementById("email").value.trim();
        const password = document.getElementById("password").value.trim();

        if (fname === "" || lname === "" || email === "" || password === "") {
            alert("Please fill out all fields.");
            return;
        }

        // Simulate form submission
        alert("Registration successful! Welcome, " + fname + "!");
        form.reset(); // Reset form fields after submission
    });
});
