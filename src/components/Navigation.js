export function renderNavigation(element) {
    element.innerHTML = `
        <nav class="navbar">
            <div class="nav-container">
                <div class="nav-logo">
                    <a href="#landing-section">
                        <img src="./public/assets/logos/logo.svg" alt="Bullhorse Africa Logo" class="logo-image"/>
                    </a>
                </div>
                
                <button class="nav-toggle" aria-label="Toggle navigation">
                    <span class="hamburger"></span>
                    <span class="hamburger"></span>
                    <span class="hamburger"></span>
                </button>

                <ul class="nav-menu">
                    <li class="nav-item">
                        <a href="#landing-section" class="nav-link">Home</a>
                    </li>
                    <li class="nav-item">
                        <a href="#products-section" class="nav-link">Products</a>
                    </li>
                    <li class="nav-item">
                        <a href="#awards-section" class="nav-link">About</a>
                    </li>
                    <li class="nav-item">
                        <a href="#footer" class="nav-link">Contact</a>
                    </li>
                    <li class="nav-item">
                        <a href="https://wa.me/263772120899" target="_blank" class="nav-link nav-cta">Get Quote</a>
                    </li>
                </ul>
            </div>
        </nav>
    `;

    // Mobile menu toggle functionality
    const navToggle = element.querySelector('.nav-toggle');
    const navMenu = element.querySelector('.nav-menu');
    const navLinks = element.querySelectorAll('.nav-link');

    navToggle.addEventListener('click', () => {
        navMenu.classList.toggle('active');
        navToggle.classList.toggle('active');
    });

    // Close mobile menu when clicking on a link
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            navMenu.classList.remove('active');
            navToggle.classList.remove('active');
        });
    });

    // Add scroll effect to navbar
    let lastScroll = 0;
    const navbar = element.querySelector('.navbar');

    window.addEventListener('scroll', () => {
        const currentScroll = window.pageYOffset;

        if (currentScroll > 100) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }

        lastScroll = currentScroll;
    });

    // Smooth scroll for navigation links
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const targetId = link.getAttribute('href');
            const targetSection = document.querySelector(targetId);

            if (targetSection) {
                const navHeight = navbar.offsetHeight;
                const targetPosition = targetSection.offsetTop - navHeight;

                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });
}