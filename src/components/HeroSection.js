export function renderHero(element) {
    element.innerHTML = `
        <div class="hero-container">
            <div class="hero-content">
                <h1 class="hero-title">
                    <span class="brand-name">Bullhorse Africa</span>
                </h1>
                <div class="hero-subtitle">
                    <span class="animated-text"></span>
                    <span class="cursor">|</span>
                </div>
                <p class="hero-description">Your trusted partner for quality truck parts across Africa</p>
                <div class="hero-cta">
                    <a href="#products-section" class="btn btn-primary">View Products</a>
                    <a href="#contact" class="btn btn-secondary">Contact Us</a>
                </div>
            </div>
            <div class="hero-decoration">
                <div class="circle circle-1"></div>
                <div class="circle circle-2"></div>
                <div class="circle circle-3"></div>
            </div>
        </div>
    `;

    // Animated text functionality
    const words = ['Quality truck spares', 'Reliable prices'];
    let wordIndex = 0;
    let charIndex = 0;
    let isDeleting = false;
    const animatedTextElement = element.querySelector('.animated-text');
    const typingSpeed = 100;
    const deletingSpeed = 50;
    const pauseDuration = 2000;

    function typeText() {
        const currentWord = words[wordIndex];

        if (!isDeleting) {
            animatedTextElement.textContent = currentWord.substring(0, charIndex + 1);
            charIndex++;

            if (charIndex === currentWord.length) {
                isDeleting = true;
                setTimeout(typeText, pauseDuration);
                return;
            }
        } else {
            animatedTextElement.textContent = currentWord.substring(0, charIndex - 1);
            charIndex--;

            if (charIndex === 0) {
                isDeleting = false;
                wordIndex = (wordIndex + 1) % words.length;
                setTimeout(typeText, 500);
                return;
            }
        }

        setTimeout(typeText, isDeleting ? deletingSpeed : typingSpeed);
    }

    // Start the animation
    setTimeout(typeText, 500);
}
