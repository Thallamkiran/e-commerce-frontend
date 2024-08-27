
// about.js

document.addEventListener("DOMContentLoaded", () => {
    // Apply fade-in animation to all section headings and paragraphs
    const headings = document.querySelectorAll("h2");
    const paragraphs = document.querySelectorAll("p");

    // Function to add animation classes
    const animateElements = (elements, animationClass) => {
        elements.forEach(element => {
            element.classList.add(animationClass);
        });
    };

    // Adding animation classes after a delay for better effect
    setTimeout(() => animateElements(headings, "fade-in"), 200);
    setTimeout(() => animateElements(paragraphs, "fade-in"), 500);
});
