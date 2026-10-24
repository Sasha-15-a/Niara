// Единый скрипт для работы с корзиной и системой ID товаров

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

// Глобальная функция поиска товара по ID во всех базах данных (для системы ID)
function getProductById(id) {
    // 1. Проверяем главную базу товаров
    let mainDb = JSON.parse(localStorage.getItem('niaraProductsDatabase')) || {};
    if (mainDb[id]) return { ...mainDb[id], id };

    // 2. Проверяем базу новинок
    let newDb = JSON.parse(localStorage.getItem('niaraNewProductsDatabase')) || {};
    if (newDb[id]) return { ...newDb[id], id };

    // 3. Проверяем базу акций (если есть)
    let saleDb = JSON.parse(localStorage.getItem('niaraSaleProductsDatabase')) || {};
    if (saleDb[id]) return { ...saleDb[id], id };

    return null;
}

updateCartCount();