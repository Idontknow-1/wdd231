export function initHeroSlide() {
    const heroImg = document.querySelector('#hero-slide');

    const images = [
        'images/childrenlearning.webp',
        'images/childrencooking.webp',
        'images/childpainting.webp',
        'images/childtoys.webp'
    ];

    let currentIndex = 0;

    if (heroImg) {
        setInterval(() => {
            heroImg.classList.add('fade-out');

            setTimeout(() => {
                currentIndex = (currentIndex + 1) % images.length;
                heroImg.src = images[currentIndex];

                heroImg.classList.remove('fade-out');

            }, 800);
        }, 5000);
    }
}

initHeroSlide();