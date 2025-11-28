export function renderProducts(element, products) {
    const listHtml = products.map(product => `
        <div class="card">
            <h3>${product.name}</h3>
            <p>${product.description}</p>
            <strong>$${product.price}</strong>
        </div>
    `).join('');

    element.innerHTML = `
        <h2>Our Products</h2>
        <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)); gap: 1rem;">
            ${listHtml}
        </div>
    `;
}
