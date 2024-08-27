// contact.js

document.addEventListener("DOMContentLoaded", () => {
    const form = document.querySelector("form");

    form.addEventListener("submit", (event) => {
        event.preventDefault(); // Prevent actual form submission

        // Basic form validation
        const name = document.getElementById("name").value.trim();
        const email = document.getElementById("email").value.trim();
        const message = document.getElementById("message").value.trim();

        if (name === "" || email === "" || message === "") {
            alert("Please fill out all fields.");
            return;
        }

        // Simulate form submission
        alert("Thank you for your message! We'll get back to you soon.");
        form.reset(); // Reset form fields after submission
    });
});
