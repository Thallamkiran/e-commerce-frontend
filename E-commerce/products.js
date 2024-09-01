// Initialize cart count from localStorage or set to 0
document.addEventListener('DOMContentLoaded', () => {
    const cartCountElement = document.querySelector('.cart-count');
    const cartCount = localStorage.getItem('cartCount') || 0;
    cartCountElement.textContent = cartCount;
});

// Filter products based on search input
document.getElementById('filter-input').addEventListener('input', function() {
    const filterValue = this.value.toLowerCase();
    const productItems = document.querySelectorAll('.product-item');

    productItems.forEach(item => {
        const name = item.querySelector('h3').textContent.toLowerCase();
        if (name.includes(filterValue)) {
            item.style.display = '';
        } else {
            item.style.display = 'none';
        }
    });
});

// Sort products based on selected option
document.getElementById('sort-select').addEventListener('change', function() {
    const sortBy = this.value;
    const productContainer = document.querySelector('.product-columns');
    const products = Array.from(productContainer.querySelectorAll('.product-item'));

    products.sort((a, b) => {
        const aValue = sortBy === 'price' ? parseFloat(a.getAttribute('data-price')) : a.querySelector('h3').textContent.toLowerCase();
        const bValue = sortBy === 'price' ? parseFloat(b.getAttribute('data-price')) : b.querySelector('h3').textContent.toLowerCase();

        return aValue > bValue ? 1 : -1;
    });

    products.forEach(product => productContainer.appendChild(product));
});

// Add to Cart functionality and redirect
document.querySelectorAll('.add-to-cart-btn').forEach(button => {
    button.addEventListener('click', function() {
        const cartCountElement = document.querySelector('.cart-count');
        let cartCount = parseInt(cartCountElement.textContent, 10);
        cartCount += 1;
        cartCountElement.textContent = cartCount;
        localStorage.setItem('cartCount', cartCount);

        // Show confirmation message
        alert('Your product has been added to the cart.');

        // Redirect to cart page
        window.location.href = 'cart.html';
    });
});

// Buy Now functionality and redirect
document.querySelectorAll('.buy-now').forEach(button => {
    button.addEventListener('click', function() {
        // Redirect to cart page
        window.location.href = 'cart.html';
    });
});
