export function renderProducts(element, productCategories) {
    const logos = [
        { name: 'DAF', src: '/public/assets/logos/DAF.png' },
        { name: 'IVECO', src: '/public/assets/logos/IVECO.png' },
        { name: 'SCANIA', src: '/public/assets/logos/SCANIA.png' },
        { name: 'MAN', src: '/public/assets/logos/MAN.png' },
        { name: 'VOLVO', src: '/public/assets/logos/VOLVO.png' }
    ];

    // Create "All" category with all products
    const allProducts = productCategories.flatMap(cat => cat.products);

    element.innerHTML = `
        <div class="products-section">
            <div class="products-header">
                <h2 class="products-title">Our Products</h2>
                <p class="products-subtitle">Premium truck parts for all major European brands</p>
            </div>

            <div class="brands-carousel">
                <div class="brands-track">
                    ${logos.concat(logos).map(logo => `
                        <div class="brand-logo-item">
                            <img src="${logo.src}" alt="${logo.name}" class="brand-logo" />
                        </div>
                    `).join('')}
                </div>
            </div>

            <div class="category-tabs">
                <button class="category-tab active" data-category="all">
                    All
                </button>
                ${productCategories.map(category => `
                    <button class="category-tab" data-category="${category.id}">
                        ${category.name}
                    </button>
                `).join('')}
            </div>

            <div class="categories-container">
                <div class="product-category active" id="category-all">
                    <div class="category-header">
                        <h3 class="category-title">All Products</h3>
                        <div class="category-line"></div>
                    </div>
                    <div class="products-grid">
                        ${allProducts.map(product => `
                            <div class="product-card">
                                <div class="product-image-container">
                                    <img src="${product.image}" alt="${product.name}" class="product-image" />
                                </div>
                                <div class="product-info">
                                    <h4 class="product-name">${product.name}</h4>
                                    <p class="product-description">${product.description}</p>
                                    <a href="https://wa.me/YOUR_PHONE_NUMBER?text=I'm interested in ${encodeURIComponent(product.name)}" target="_blank" class="product-order-btn">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                                            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                                        </svg>
                                        Order Now
                                    </a>
                                </div>
                            </div>
                        `).join('')}
                    </div>
                </div>
                ${productCategories.map(category => `
                    <div class="product-category" id="category-${category.id}">
                        <div class="category-header">
                            <h3 class="category-title">${category.name}</h3>
                            <div class="category-line"></div>
                        </div>
                        <div class="products-grid">
                            ${category.products.map(product => `
                                <div class="product-card">
                                    <div class="product-image-container">
                                        <img src="${product.image}" alt="${product.name}" class="product-image" />
                                    </div>
                                    <div class="product-info">
                                        <h4 class="product-name">${product.name}</h4>
                                        <p class="product-description">${product.description}</p>
                                        <a href="https://wa.me/YOUR_PHONE_NUMBER?text=I'm interested in ${encodeURIComponent(product.name)}" target="_blank" class="product-order-btn">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                                                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                                            </svg>
                                            Order Now
                                        </a>
                                    </div>
                                </div>
                            `).join('')}
                        </div>
                    </div>
                `).join('')}
            </div>
        </div>
    `;

    // Tab switching functionality
    const tabs = element.querySelectorAll('.category-tab');
    const categories = element.querySelectorAll('.product-category');

    tabs.forEach(tab => {
        tab.addEventListener('click', () => {
            const categoryId = tab.dataset.category;

            // Remove active class from all tabs and categories
            tabs.forEach(t => t.classList.remove('active'));
            categories.forEach(c => c.classList.remove('active'));

            // Add active class to clicked tab and corresponding category
            tab.classList.add('active');
            element.querySelector(`#category-${categoryId}`).classList.add('active');
        });
    });
}
