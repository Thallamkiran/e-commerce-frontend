
document.addEventListener('DOMContentLoaded', () => {
    // Mock cart data - In a real application, this would come from a server or local storage
    const cartItems = [
        {
            id: 1,
            name: 'Product 1',
            price: 1999,
            quantity: 1,
            image: 'product1.jpg'
        },
        {
            id: 2,
            name: 'Product 2',
            price: 2999,
            quantity: 2,
            image: 'product2.jpg'
        }
    ];

    const cartContainer = document.querySelector('.cart-items ul');
    const totalPriceElement = document.querySelector('.checkout-container .total-price');
    const cartCountElement = document.querySelector('.cart-count');

    function updateCart() {
        cartContainer.innerHTML = '';
        let totalPrice = 0;

        cartItems.forEach(item => {
            totalPrice += item.price * item.quantity;

            const listItem = document.createElement('li');
            listItem.innerHTML = `
                <img src="${item.image}" alt="${item.name}">
                <div class="item-details">
                    <h3>${item.name}</h3>
                    <p>Price: ₹${(item.price / 100).toFixed(2)}</p>
                    <p>Quantity: ${item.quantity}</p>
                </div>
                <div class="item-actions">
                    <button class="remove-btn" data-id="${item.id}">Remove</button>
                </div>
            `;
            cartContainer.appendChild(listItem);
        });

        totalPriceElement.textContent = `Total Price: ₹${(totalPrice / 100).toFixed(2)}`;
        cartCountElement.textContent = cartItems.length;
    }

    function handleRemoveItem(event) {
        if (event.target.classList.contains('remove-btn')) {
            const itemId = parseInt(event.target.dataset.id, 10);
            const itemIndex = cartItems.findIndex(item => item.id === itemId);

            if (itemIndex > -1) {
                cartItems.splice(itemIndex, 1);
                updateCart();
            }
        }
    }

    function handleCheckout() {
        alert('Proceeding to checkout. This is a placeholder action.');
        // Implement checkout logic here, e.g., redirect to payment page
    }

    cartContainer.addEventListener('click', handleRemoveItem);
    document.getElementById('checkout-btn').addEventListener('click', handleCheckout);

    // Initial cart update
    updateCart();
});
