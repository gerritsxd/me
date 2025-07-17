// Smoother cursor spotlight effect
const body = document.body;
let mouseX = 0;
let mouseY = 0;
let spotlightX = 0;
let spotlightY = 0;
const speed = 0.05; // Lower value = smoother/slower lag

// Update mouse coordinates on move
window.addEventListener('mousemove', e => {
    mouseX = e.clientX;
    mouseY = e.clientY;
});

// Animation loop
function animateSpotlight() {
    // Interpolate the spotlight position towards the mouse position
    let dx = mouseX - spotlightX;
    let dy = mouseY - spotlightY;
    spotlightX += dx * speed;
    spotlightY += dy * speed;

    // Set the CSS custom properties
    body.style.setProperty('--cursor-x', spotlightX + 'px');
    body.style.setProperty('--cursor-y', spotlightY + 'px');

    // Continue the loop
    requestAnimationFrame(animateSpotlight);
}

// Start the animation
animateSpotlight();