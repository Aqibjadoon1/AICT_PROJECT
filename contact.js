// Wait for the DOM to load
document.addEventListener("DOMContentLoaded", () => {
    const form = document.querySelector(".contact-form");

    // Handle form submission
    form.addEventListener("submit", (event) => {
        event.preventDefault(); // Prevent the default form submission

        // Get form values
        const name = document.getElementById("name").value.trim();
        const email = document.getElementById("email").value.trim();
        const message = document.getElementById("message").value.trim();

        // Validate form inputs
        if (!name || !email || !message) {
            alert("Please fill out all the fields.");
            return;
        }

        if (!validateEmail(email)) {
            alert("Please enter a valid email address.");
            return;
        }

        // If all inputs are valid, show a success message
        alert("Thank you for contacting us, " + name + "! We'll get back to you soon.");

        // Optionally clear the form
        form.reset();
    });

    // Email validation function
    function validateEmail(email) {
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailPattern.test(email);
    }
});