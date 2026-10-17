document.addEventListener('click', (e) => {
    if (e.target && e.target.classList.contains('buy-btn')) {
        const button = e.target;
        const card = button.closest('.product-card');
        if (!card) return;
        
        const item = {
            id: card.getAttribute('data-id'),
            title: card.getAttribute('data-title'),
            price: Number(card.getAttribute('data-price')),
            img: card.getAttribute('data-img'),
            quantity: 1
        };

        let cart = JSON.parse(localStorage.getItem('niaraCart')) || [];
        let existingItem = cart.find(i => i.id === item.id);

        if (existingItem) {
            existingItem.quantity += 1;
        } else {
            cart.push(item);
        }

        localStorage.setItem('niaraCart', JSON.stringify(cart));
        updateCartCount();

        button.textContent = 'Додано ✓';
        button.style.backgroundColor = '#800020';
        setTimeout(() => {
            button.textContent = 'У кошик';
            button.style.backgroundColor = '';
        }, 1500);
    }
});

function updateCartCount() {
    let cart = JSON.parse(localStorage.getItem('niaraCart')) || [];
    let totalCount = cart.reduce((sum, item) => sum + item.quantity, 0);
    const cartLink = document.getElementById('cart-link') || document.querySelector('a[href*="TrashCan"]');
    if (cartLink) {
        cartLink.textContent = `🛒 Кошик (${totalCount})`;
    }
}

updateCartCount();