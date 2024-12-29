document.addEventListener("DOMContentLoaded", function() {
    const cards = document.querySelectorAll('.card');
    
    cards.forEach(card => {
        const video = card.querySelector('video');

        card.addEventListener('mouseenter', function() {
            video.play(); // Play video on hover
        });

        card.addEventListener('mouseleave', function() {
            video.pause(); // Pause video when mouse leaves the card
            video.currentTime = 0; // Reset the video to the beginning (optional)
        });
    });
});
