// Wait for the DOM to fully load
document.addEventListener('DOMContentLoaded', function() {
    const form = document.querySelector('form');
    
    form.addEventListener('submit', function(event) {
        // Get form field values
        const name = document.getElementById('name').value.trim();
        const email = document.getElementById('email').value.trim();
        const address = document.getElementById('address').value.trim();
        const payment = document.getElementById('payment').value;
        
        // Check for empty fields
        if (name === '' || email === '' || address === '' || payment === '') {
            event.preventDefault(); // Prevent form from submitting
            alert('Please fill in all required fields.');
            return;
        }
        
        // Example validation for email format
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailPattern.test(email)) {
            event.preventDefault(); // Prevent form from submitting
            alert('Please enter a valid email address.');
            return;
        }
        
        // Additional custom validations can be added here
        
        // If all validations pass, the form will submit
    });
});
