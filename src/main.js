import { getDatabase } from './utils/api.js';
import { renderHero } from './components/HeroSection.js';
import { renderProducts } from './components/ProductList.js';
import { renderAwards } from './components/AwardsSection.js';
import { renderFooter } from './components/Footer.js';

document.addEventListener('DOMContentLoaded', async () => {
    // 1. Render static sections immediately
    renderHero(document.getElementById('landing-section'));
    renderFooter(document.getElementById('footer'));

    // 2. Fetch Data
    const data = await getDatabase();

    // 3. Render dynamic sections with data
    renderProducts(document.getElementById('products-section'), data.products);
    renderAwards(document.getElementById('awards-section'), data.awards);
});
