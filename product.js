const defaultProductsDatabase = {
    "1": { 
        title: "Бездротові навушники Niara Sound", price: 450, 
        images: ["img/маршали.png", "img/маршали2.png", "img/маршали3.png"], 
        colors: [
            { name: "Чорний", hex: "#000000", imageIndex: 0 }, 
            { name: "Бежевий", hex: "#fae3cc", imageIndex: 2 }, 
            { name: "Коричневий", hex: "#403533", imageIndex: 1 }
        ], 
        desc: "Преміальний звуковий супровід, глибокі баси та тримають заряд до 20 годин." 
    },
    "2": { 
        title: "Смарт-годинник Sport Edition", price: 890, 
        images: ["img/спорт-годинник.png", "img/годинник2.png"], 
        colors: [
            { name: "Чорний", hex: "#000000", imageIndex: 1 }, 
            { name: "Білий", hex: "#FFFFFF", imageIndex: 0 }
        ], 
        desc: "Спортивний розумний годинник з тренувальними режимами та вимірюванням пульсу." 
    },
    "3": { 
        title: "Настільна LED-лампа з акумулятором", price: 320, 
        images: ["img/лампа.png", "img/лампа2.png"], 
        colors: [
            { name: "Білий", hex: "#FFFFFF", imageIndex: 0 }, 
            { name: "Чорний", hex: "#000000", imageIndex: 1 }
        ], 
        desc: "Гнучка ніжка, три режими яскравості, працює від акумулятора." 
    },
    "4": { 
        title: "Органайзер для сумочки", price: 180, 
        images: ["img/органайзер4.png", "img/органайзер2.png", "img/органайзер3.png", "img/органайзер.png"], 
        colors: [
            { name: "Сірий", hex: "#757575", imageIndex: 3 }, 
            { name: "Коричневий", hex: "#403533", imageIndex: 0 }, 
            { name: "Бежевий", hex: "#E8C5C8", imageIndex: 2 }, 
            { name: "Червоний", hex: "#b11f22", imageIndex: 1 }
        ], 
        desc: "Зручний та місткий органайзер для зберігання дрібниць." 
    },
    "5": { 
        title: "Міні Bluetooth-колонка", price: 550, 
        images: ["img/мініколонка.png"], 
        colors: [{ name: "Чорний", hex: "#000000", imageIndex: 0 }], 
        desc: "Компактна портативна колонка з чистим та гучним звуком." 
    },
    "6": { 
        title: "LED-стрічка RGB", price: 290, 
        images: ["img/лєд-лєнта.png"], 
        colors: [{ name: "Багатоколірний", hex: "#800020", imageIndex: 0 }],
        isModels: true, 
        models: ["5м", "10м", "15м", "20м"], 
        desc: "Багатоколірна світлодіодна стрічка для створення затишного підсвічування." 
    },
    "7": { 
        title: "Рюкзак міський", price: 720, 
        images: ["img/рюкзак.png"], 
        colors: [{ name: "Чорний", hex: "#000000", imageIndex: 0 }], 
        desc: "Стильний та ергономічний міський рюкзак із захистом від вологи." 
    },
    "8": { 
        title: "Чохол для смартфона", price: 150, 
        images: ["img/чохол.png"], 
        isModels: true, 
        models: ["iPhone 7", "iPhone 8", "iPhone X", "iPhone 11", "iPhone 12", "iPhone 13", "iPhone 14", "iPhone 15", "iPhone 16", "iPhone 17"], 
        desc: "Міцний та приємний на дотик чохол, який надійно захищає ваш смартфон від падінь та подряпин." 
    },
    "9": { 
        title: "Бездротова зарядка", price: 380, 
        images: ["img/павербанк.png"], 
        colors: [{ name: "Білий", hex: "#FFFFFF", imageIndex: 0 }], 
        desc: "Швидка бездротова зарядна станція, сумісна з гаджетами." 
    }
};

function getProductsData() {
    const stored = localStorage.getItem('niaraProductsDatabase');
    if (!stored) {
        localStorage.setItem('niaraProductsDatabase', JSON.stringify(defaultProductsDatabase));
        return defaultProductsDatabase;
    }
    return JSON.parse(stored);
}

const productsData = getProductsData();
const urlParams = new URLSearchParams(window.location.search);
const productId = urlParams.get('id') || "1";

const rawProduct = productsData[productId] || {
    title: "Трендовий товар",
    price: 300,
    images: ["img/маршали.png"],
    desc: "Якісний товар із Китаю з доставкою по Україні."
};

// Нормалізуємо дані товару (якщо додано через адмінку, у нього може не бути складних масивів кольорів, створюємо безпечні заглушки)
const product = {
    title: rawProduct.title,
    price: Number(rawProduct.price),
    images: rawProduct.images || [rawProduct.img || "img/placeholder.png"],
    colors: rawProduct.colors || null,
    desc: rawProduct.desc || "Якісний товар із каталогу Niara.",
    isModels: rawProduct.isModels || false,
    models: rawProduct.models || []
};

let productImages = product.images;
let currentImageIndex = 0;

let selectedModelOrSize = (product.isModels) ? product.models[0] : null;
let selectedColor = product.colors ? product.colors[0].name : null;
let selectedQuantity = 1;

function updateImage() {
    const imgEl = document.getElementById('prodImg');
    if (imgEl) imgEl.src = productImages[currentImageIndex];
    
    const leftArrow = document.querySelector('.arrow-left');
    const rightArrow = document.querySelector('.arrow-right');
    const dotsContainer = document.getElementById('galleryDots');

    if (productImages.length <= 1) {
        if (leftArrow) leftArrow.style.display = 'none';
        if (rightArrow) rightArrow.style.display = 'none';
        if (dotsContainer) dotsContainer.style.display = 'none';
    } else {
        if (leftArrow) leftArrow.style.display = 'flex';
        if (rightArrow) rightArrow.style.display = 'flex';
        if (dotsContainer) {
            dotsContainer.style.display = 'flex';
            dotsContainer.innerHTML = productImages.map((_, index) => `
                <div class="dot ${index === currentImageIndex ? 'active' : ''}" onclick="setGalleryImage(${index})"></div>
            `).join('');
        }
    }
}

function changeImage(direction) {
    currentImageIndex += direction;
    if (currentImageIndex < 0) {
        currentImageIndex = productImages.length - 1;
    } else if (currentImageIndex >= productImages.length) {
        currentImageIndex = 0;
    }
    updateImage();
}

function setGalleryImage(index) {
    currentImageIndex = index;
    updateImage();
}

function renderOptions() {
    const sectionElement = document.getElementById('optionSection');
    if (!sectionElement) return;

    let html = '';

    if (product.isModels && product.models.length > 0) {
        html += `
            <div style="margin-bottom: 15px;">
                <div style="font-weight: bold; margin-bottom: 8px;">Оберіть варіант:</div>
                <div class="model-options">
                    ${product.models.map((item, index) => `
                        <div class="model-pill ${index === 0 ? 'selected' : ''}" onclick="selectModelOrSize(this, '${item}')">${item}</div>
                    `).join('')}
                </div>
            </div>
        `;
    }

    if (product.colors && product.colors.length > 0) {
        html += `
            <div style="margin-bottom: 15px;">
                <div style="font-weight: bold; margin-bottom: 8px;">Оберіть колір: <span id="selectedColorLabel" style="font-weight: normal; color: #666;">${product.colors[0].name}</span></div>
                <div class="color-options">
                    ${product.colors.map((color, index) => `
                        <div class="color-circle ${index === 0 ? 'selected' : ''}" style="background-color: ${color.hex};${color.hex === '#FFFFFF' ? 'border: 1px solid #ccc;' : ''}" onclick="selectColor(this, '${color.name}', ${color.imageIndex !== undefined ? color.imageIndex : 'null'})" title="${color.name}"></div>
                    `).join('')}
                </div>
            </div>
        `;
    }

    html += `
        <div style="margin-bottom: 15px;">
            <div style="font-weight: bold; margin-bottom: 8px;">Кількість:</div>
            <div style="display: flex; align-items: center; gap: 10px;">
                <button type="button" onclick="changeQuantity(-1)" style="width: 35px; height: 35px; border: 1px solid #ccc; background: #f8f8f8; border-radius: 6px; font-size: 18px; font-weight: bold; cursor: pointer;">-</button>
                <input type="number" id="quantityInput" value="1" min="1" onchange="updateQuantityInput(this.value)" style="width: 50px; height: 35px; text-align: center; border: 1px solid #ccc; border-radius: 6px; font-size: 15px; font-weight: bold;">
                <button type="button" onclick="changeQuantity(1)" style="width: 35px; height: 35px; border: 1px solid #ccc; background: #f8f8f8; border-radius: 6px; font-size: 18px; font-weight: bold; cursor: pointer;">+</button>
            </div>
        </div>
    `;

    sectionElement.innerHTML = html;
}

function selectModelOrSize(element, value) {
    document.querySelectorAll('.model-pill').forEach(c => c.classList.remove('selected'));
    element.classList.add('selected');
    selectedModelOrSize = value;
}

function selectColor(element, colorName, imageIndex = null) {
    document.querySelectorAll('.color-circle').forEach(c => c.classList.remove('selected'));
    element.classList.add('selected');
    selectedColor = colorName;

    const colorLabel = document.getElementById('selectedColorLabel');
    if (colorLabel) colorLabel.textContent = colorName;

    if (imageIndex !== null && imageIndex !== undefined && productImages[imageIndex]) {
        setGalleryImage(imageIndex);
    }
}

function changeQuantity(delta) {
    const qtyInput = document.getElementById('quantityInput');
    let currentVal = parseInt(qtyInput.value) || 1;
    currentVal += delta;
    if (currentVal < 1) currentVal = 1;
    qtyInput.value = currentVal;
    selectedQuantity = currentVal;
}

function updateQuantityInput(value) {
    let val = parseInt(value) || 1;
    if (val < 1) val = 1;
    document.getElementById('quantityInput').value = val;
    selectedQuantity = val;
}

function updateHeaderCartCount() {
    let cart = JSON.parse(localStorage.getItem('niaraCart')) || [];
    let totalCount = cart.reduce((sum, item) => sum + item.quantity, 0);
    const cartLink = document.getElementById('cart-link');
    if (cartLink) {
        cartLink.textContent = `🛒 Кошик (${totalCount})`;
    }
}

function showAnimatedToast(message) {
    let toast = document.getElementById('toast');
    if (!toast) {
        toast = document.createElement('div');
        toast.id = 'toast';
        toast.className = 'toast-notification';
        document.body.appendChild(toast);
    }

    toast.innerHTML = `
        <div style="width: 16px; height: 16px; border: 2px solid #800020; border-top-color: transparent; border-radius: 50%; animation: spin 0.8s linear infinite;"></div>
        <span>${message}</span>
    `;
    toast.classList.add('show');

    setTimeout(() => {
        toast.innerHTML = `<span>✓ ${message}</span>`;
    }, 700);

    setTimeout(() => {
        toast.classList.remove('show');
    }, 2800);
}

function initLiveSearch() {
    const searchInput = document.getElementById('searchInput');
    const searchResults = document.getElementById('searchResults');
    const searchBtn = document.getElementById('searchBtn');

    if (!searchInput) return;

    searchInput.addEventListener('input', (e) => {
        const query = e.target.value.toLowerCase().trim();
        const currentProducts = getProductsData();

        if (query.length === 0) {
            searchResults.style.display = 'none';
            searchResults.innerHTML = '';
            return;
        }

        const matches = Object.entries(currentProducts).filter(([id, prod]) => 
            prod.title.toLowerCase().includes(query)
        );

        if (matches.length > 0) {
            searchResults.style.display = 'block';
            searchResults.innerHTML = matches.map(([id, prod]) => `
                <a href="product.html?id=${id}" style="display: flex; align-items: center; gap: 10px; padding: 10px 15px; text-decoration: none; color: #333; border-bottom: 1px solid #F4F4F6;">
                    <img src="${prod.images ? prod.images[0] : prod.img}" alt="" style="width: 35px; height: 35px; object-fit: cover; border-radius: 4px;">
                    <div style="flex: 1; font-size: 13px;">
                        <div style="font-weight: bold; color: #333;">${prod.title}</div>
                        <div style="color: #800020; font-size: 12px; font-weight: bold;">${prod.price} грн</div>
                    </div>
                </a>
            `).join('');
        } else {
            searchResults.style.display = 'block';
            searchResults.innerHTML = `<div style="padding: 15px; font-size: 13px; color: #666; text-align: center;">Нічого не знайдено 😔</div>`;
        }
    });

    document.addEventListener('click', (e) => {
        if (!searchInput.contains(e.target) && !searchResults.contains(e.target)) {
            searchResults.style.display = 'none';
        }
    });

    searchBtn.addEventListener('click', () => {
        const query = searchInput.value.toLowerCase().trim();
        const currentProducts = getProductsData();
        if (query.length > 0) {
            const found = Object.entries(currentProducts).find(([id, prod]) => 
                prod.title.toLowerCase().includes(query)
            );
            if (found) {
                window.location.href = `product.html?id=${found[0]}`;
            }
        }
    });
}

document.addEventListener('DOMContentLoaded', () => {
    const titleEl = document.getElementById('prodTitle');
    const breadcrumbEl = document.getElementById('breadcrumbTitle');
    const priceEl = document.getElementById('prodPrice');
    const descEl = document.getElementById('prodDesc');

    if (titleEl) titleEl.textContent = product.title;
    if (breadcrumbEl) breadcrumbEl.textContent = product.title;
    if (priceEl) priceEl.textContent = product.price + " грн";
    if (descEl) descEl.textContent = product.desc;
    
    renderOptions();
    updateImage();
    updateHeaderCartCount();
    initLiveSearch();

    const addBtn = document.getElementById('addToCartBtn');
    if (addBtn) {
        addBtn.addEventListener('click', () => {
            const qtyInput = document.getElementById('quantityInput');
            if (qtyInput) {
                selectedQuantity = parseInt(qtyInput.value, 10) || 1;
            }

            let cart = JSON.parse(localStorage.getItem('niaraCart')) || [];
            
            let optionsArr = [];
            if (selectedModelOrSize) optionsArr.push(selectedModelOrSize);
            if (selectedColor) optionsArr.push(selectedColor);

            let optionsStr = optionsArr.length > 0 ? ` (${optionsArr.join(', ')})` : '';
            let fullTitle = product.title + optionsStr;
            let itemId = `${productId}-${optionsArr.join('-')}`;
            
            let existingItem = cart.find(i => i.id === itemId);

            if (existingItem) {
                existingItem.quantity += selectedQuantity;
            } else {
                cart.push({
                    id: itemId,
                    title: fullTitle,
                    price: product.price,
                    img: productImages[currentImageIndex],
                    quantity: selectedQuantity
                });
            }

            localStorage.setItem('niaraCart', JSON.stringify(cart));
            updateHeaderCartCount();

            addBtn.disabled = true;
            showAnimatedToast('Товар успішно додано!');

            setTimeout(() => {
                addBtn.textContent = 'Додано ✓';
                addBtn.classList.add('added');
            }, 700);
        });
    }
});