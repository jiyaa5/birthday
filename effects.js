// effects.js

// Function to change background color on button hover
function handleButtonHover() {
    const buttons = document.querySelectorAll('button');

    buttons.forEach(button => {
        button.addEventListener('mouseover', () => {
            button.style.backgroundColor = '#ff3f3f';
        });

        button.addEventListener('mouseleave', () => {
            button.style.backgroundColor = '#ff6f61';
        });
    });
}

// Function to animate GIF on page load
function animateGif() {
    const gif = document.getElementById('excitementGif');
    if (gif) {
        gif.style.transition = 'transform 1s ease-in-out';
        gif.style.transform = 'scale(1.1)';
    }
}

// Function to add effect to "It is 20th January" text
function animateDateText() {
    const dateText = document.getElementById('dateText');

    if (dateText) {
        dateText.style.transition = 'transform 0.5s ease-in-out, color 0.5s ease-in-out';
        dateText.style.transform = 'scale(1.05)';
        dateText.style.color = '#ff6f61';
    }
}

// Execute functions after the page loads
window.onload = function() {
    handleButtonHover();  // Add hover effect to buttons
    animateGif();         // Animate GIF on load
    animateDateText();    // Animate "It is 20th January" text
};
