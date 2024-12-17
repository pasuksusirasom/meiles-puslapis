// Muzikos valdymas
const audio = document.getElementById('bg-music');
const musicBtn = document.getElementById('music-btn');

musicBtn.addEventListener('click', () => {
    if (audio.paused) {
        audio.play();
        musicBtn.textContent = 'PAUZĖ';
    } else {
        audio.pause();
        musicBtn.textContent = 'PLAY';
    }
});

// Slankiojanti galerija
let slideIndex = 0;
const slides = document.getElementsByClassName('slide');

function showSlides() {
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = 'none';
    }
    slideIndex++;
    if (slideIndex > slides.length) { slideIndex = 1; }
    slides[slideIndex - 1].style.display = 'block';
    setTimeout(showSlides, 4000); // 4 sekundžių perėjimas
}

document.addEventListener('DOMContentLoaded', showSlides);

// Širdelės ir balionai
const balloonsContainer = document.getElementById('balloons-container');

function createBalloon() {
    const balloon = document.createElement('div');
    balloon.classList.add('balloon');
    balloon.style.left = `${Math.random() * 100}vw`;
    balloon.style.animationDuration = `${Math.random() * 8 + 4}s`;
    balloonsContainer.appendChild(balloon);

    setTimeout(() => {
        balloon.remove();
    }, 10000);
}

setInterval(createBalloon, 50);
