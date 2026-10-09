document.querySelectorAll('.add-to-cart-btn').forEach(button => {
    button.addEventListener('click', (e) => {
        const card = e.target.closest('.product-card');
        
        // Збираємо дані про товар з атрибутів
        const item = {
            id: card.getAttribute('data-id'),
            title: card.getAttribute('data-title'),
            price: Number(card.getAttribute('data-price')),
            img: card.getAttribute('data-img'),
            quantity: 1
        };

        // Дістаємо вже збережені товари з localStorage або створюємо новий масив
        let cart = JSON.parse(localStorage.getItem('niaraCart')) || [];

        // Перевіряємо, чи є вже такий товар у кошику
        let existingItem = cart.find(i => i.id === item.id);
        if (existingItem) {
            existingItem.quantity += 1; // Якщо є, збільшуємо кількість
        } else {
            cart.push(item); // Якщо немає, додаємо новий
        }

        // Зберігаємо назад у localStorage
        localStorage.setItem('niaraCart', JSON.stringify(cart));

        // Візуальний ефект (наприклад, зміна тексту кнопки)
        button.textContent = 'Додано ✓';
        button.style.backgroundColor = '#2E7D32';
        setTimeout(() => {
            button.textContent = 'Додати в кошик';
            button.style.backgroundColor = '';
        }, 1500);

        updateCartCount();
    });
});

// Функція оновлення лічильника кошика в шапці сайту
function updateCartCount() {
    let cart = JSON.parse(localStorage.getItem('niaraCart')) || [];
    let totalCount = cart.reduce((sum, item) => sum + item.quantity, 0);
    const cartLink = document.querySelector('a[href*="TrashCan"]');
    if (cartLink) {
        cartLink.textContent = `🛒 Кошик (${totalCount})`;
    }
}
// Викликаємо при завантаженні сторінки
updateCartCount();