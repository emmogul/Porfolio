// script.js
document.addEventListener('DOMContentLoaded', () => {
    const changeElement = document.querySelector('.change');
    const texts = [
        'Web Developer',
        'Android App Developer',
        'Graphic Designer',
        'Creative Thinker',
        'Freelancer',

    ];
    let currentIndex = 0;

    function changeText() {
        // Fade out the current text
        changeElement.classList.add('hidden');

        // Change text after fading out
        setTimeout(() => {
            currentIndex = (currentIndex + 1) % texts.length;
            changeElement.textContent = texts[currentIndex];

            // Fade in the new text
            changeElement.classList.remove('hidden');
        }, 400); // Match this with the CSS transition duration
    }

    // Change text every 2 seconds
    setInterval(changeText, 2000);
});