
document.addEventListener('DOMContentLoaded', () => {
    const filterInput = document.getElementById('filter-input');
    const sortSelect = document.getElementById('sort-select');
    const productItems = document.querySelectorAll('.product-item');

    function filterProducts() {
        const filterText = filterInput.value.toLowerCase();
        productItems.forEach(item => {
            const title = item.querySelector('h3').textContent.toLowerCase();
            const description = item.querySelector('p').textContent.toLowerCase();
            if (title.includes(filterText) || description.includes(filterText)) {
                item.style.display = '';
            } else {
                item.style.display = 'none';
            }
        });
    }

    function sortProducts() {
        const sortBy = sortSelect.value;
        const sortedItems = Array.from(productItems).sort((a, b) => {
            const aValue = sortBy === 'name' ? a.querySelector('h3').textContent.toLowerCase() : parseFloat(a.getAttribute('data-price'));
            const bValue = sortBy === 'name' ? b.querySelector('h3').textContent.toLowerCase() : parseFloat(b.getAttribute('data-price'));

            if (sortBy === 'name') {
                return aValue.localeCompare(bValue);
            } else {
                return aValue - bValue;
            }
        });

        const container = document.querySelector('.product-columns');
        sortedItems.forEach(item => container.appendChild(item));
    }

    filterInput.addEventListener('input', filterProducts);
    sortSelect.addEventListener('change', sortProducts);
});
