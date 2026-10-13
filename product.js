const productsData = {
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
            models: [
                "5м", "10м", "15м", "20м", 
            ], 
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
            models: [
                "iPhone 7", "iPhone 8", "iPhone X", "iPhone 11", 
                "iPhone 12", "iPhone 13", "iPhone 14", "iPhone 15", 
                "iPhone 16", "iPhone 17"
            ], 
            desc: "Міцний та приємний на дотик чохол, який надійно захищає ваш смартфон від падінь та подряпин." 
        },
        "9": { 
            title: "Бездротова зарядка", price: 380, 
            images: ["img/павербанк.png"], 
            colors: [{ name: "Білий", hex: "#FFFFFF", imageIndex: 0 }], 
            desc: "Швидка бездротова зарядна станція, сумісна з гаджетами." 
        },
        "clothes-1": { title: "Базова чоловіча футболка", price: 350, images: ["img/футболка.png", "img/футболка2.png"], colors: [{ name: "Чорний", hex: "#000000", imageIndex: 0 }, { name: "Бежевий", hex: "#fae3cc", imageIndex: 1 }], desc: "Натуральна 100% бавовна, приємна до тіла.", isModels: true, models: ["XS", "S", "M", "L"] },
        "clothes-2": { title: "Спортивні штани", price: 590, images: ["img/штани.png", "img/штани2.png"], colors: [{ name: "Чорний", hex: "#000000", imageIndex: 0 }, { name: "Сірий", hex: "#757575", imageIndex: 1 }], desc: "Зручні спортивні штани з манжетами.", isModels: true, models: ["XS", "S", "M", "L", "XL", "XXL"] },
        "clothes-3": { title: "Кросівки Sport Edition", price: 990, images: ["img/кросівки.png"], colors: [{ name: "Білий", hex: "#FFFFFF", imageIndex: 0 }], desc: "Легкі дихаючі кросівки з амортизуючою підошвою.", isModels: true, models: ["36", "37", "38", "39", "40", "41", "42", "43", "44", "45"] },
        "clothes-4": { title: "Жіноча худі", price: 720, images: ["img/худі.png"], colors: [{ name: "Чорний", hex: "#000000", imageIndex: 0 }], desc: "Затишне оверсайз худі з капюшоном.", isModels: true, models: ["XS", "S", "M", "L", "XL"]},
        "clothes-5": { title: "Джинси Classic", price: 800, images: ["img/джинси.png"], colors: [{ name: "Чорний", hex: "#000000", imageIndex: 0 }], desc: "Класичні сині джинси з якісного деніму.", isModels: true, models: ["XS", "S", "M", "L", "XL", "XXL"] },
        "clothes-6": { title: "Чоловічі кеди", price: 750, images: ["img/кєди.png"], colors: [{ name: "Білий", hex: "#FFFFFF", imageIndex: 0 }], desc: "Стильні повсякденні кеди на гнучкій підошві.", isModels: true, models: ["36", "37", "38", "39", "40", "41", "42", "43", "44", "45", "46"] },
        "clothes-7": { title: "Легка куртка", price: 1250, images: ["img/легка куртка.png"], colors: [{ name: "Хакі", hex: "#01520c", imageIndex: 0 }], desc: "Вітрозахисна демісезонна куртка із водовідштовхувальним просоченням.", isModels: true, models: ["XS", "S", "M", "L", "XL"] },
        "clothes-8": { title: "Жіночі кросівки", price: 1100, images: ["img/кросівочки.png"], colors: [{ name: "Білий", hex: "#FFFFFF", imageIndex: 0 }], desc: "Трендові жіночі кросівки на масивній підошві.", isModels: true, models: ["36", "37", "38", "39", "40", "41", "42", "43", "44"] },
        "elec-2": { title: "Механічна клавіатура", price: 1200, images: ["img/клавіатура.png", "img/клавіатура2.png"], colors: [{ name: "Чорний", hex: "#000000", imageIndex: 0 }, { name: "Рожевий", hex: "#E8C5C8", imageIndex: 1 }], desc: "Ігрова механічна клавіатура з яскравим RGB-підсвічуванням." },
        "elec-3": { title: "Ігрова мишка", price: 750, images: ["img/мишка.png", "img/мишка2.jpg"], colors: [{ name: "Чорний", hex: "#000000", imageIndex: 0 }, { name: "Білий", hex: "#FFFFFF", imageIndex: 1 }], desc: "Ергономічна оптична мишка із налаштовуваним DPI." },
        "elec-4": { title: "USB-C кабель", price: 250, images: ["img/тпс.png"], colors: [{ name: "Білий", hex: "#FFFFFF", imageIndex: 0 }], desc: "Міцний кабель у нейлоновому обплетенні." },
        "elec-6": { title: "Power Bank", price: 650, images: ["img/ПВ.png"], colors: [{ name: "Білий", hex: "#FFFFFF", imageIndex: 0 }], desc: "Портативний акумулятор ємністю 20000 mAh." },
        "elec-7": { title: "Вебкамера", price: 900, images: ["img/веб-кам.png"], colors: [{ name: "Чорний", hex: "#000000", imageIndex: 0 }], desc: "Full HD вебкамера зі вбудованим мікрофоном." },
        "elec-8": { title: "Ігровий жойстик", price: 1100, images: ["img/жойстік1.png", "img/жойстік2.png"], colors: [{ name: "Чорний", hex: "#000000", imageIndex: 0 }, { name: "Білий", hex: "#FFFFFF", imageIndex: 1 }], desc: "Бездротовий геймпад із подвійною вібрацією." },
        "home-1": { title: "Декоративна подушка", price: 350, images: ["img/дек-подушка.png", "img/подушка2.png"], colors: [{ name: "Білий", hex: "#FFFFFF", imageIndex: 0 }, { name: "Рожевий", hex: "#E8C5C8", imageIndex: 1 }], desc: "М'яка подушка із приємним чохлом для затишку." },
        "home-2": { title: "органайзер для речей", price: 180, images: ["img/для речей.png"], colors: [{ name: "Сірий", hex: "#757575", imageIndex: 0 }], desc: "Зручний та місткий органайзер для зберігання дрібниць.", isSizes: true, models: ["Малий", "Середній", "Великий"] },
        "home-3": { title: "Набір кухонного посуду", price: 850, images: ["img/посуда.png", "img/посуда2.png", "img/посуда1.png"], colors: [{ name: "Бежевий", hex: "#fae3cc", imageIndex: 1 }, { name: "Синій", hex: "#1976D2", imageIndex: 2 }, { name: "Різнокольоровий", hex: "#800020", imageIndex: 0}], desc: "Якісний набір кухонного приладдя з силікону та дерева." },
        "home-5": { title: "Ароматична свічка", price: 220, images: ["img/свічка.png"], desc: "Натуральна соєва свічка із розслаблюючим ароматом.", isFragrance: true, models: ["Vanilla", "Lavender", "Rose", "Citrus", "Fruity"] },
        "home-6": { title: "Килимок для ванної", price: 420, images: ["img/килими.png"], colors: [{ name: "Чорний", hex: "#000000", imageIndex: 0 }], desc: "М'який килимок, що швидко вбирає вологу." },
        "home-7": { title: "Ковдра", price: 590, images: ["img/ковдра.png"], colors: [{ name: "Сірий", hex: "#757575", imageIndex: 0 }], desc: "Тепла та гіпоалергенна ковдра для комфортного сну." },
        "home-8": { title: "Настінний годинник", price: 480, images: ["img/настінний-годинник.png"], colors: [{ name: "Сірий", hex: "#757575", imageIndex: 0 }], desc: "Сучасний безшумний настінний годинник." },
        "beauty-1": { title: "Зволожуючий крем для обличчя", price: 420, images: ["img/крем.png"], desc: "Легкий крем із гіалуроновою кислотою.", isVolume: true, volumes: ["50 мл", "75 мл", "100 мл"] },
        "beauty-2": { title: "Набір пензлів для макіяжу", price: 350, images: ["img/пензли.png"], desc: "Професійний набір м'яких пензлів." },
        "beauty-3": { title: "Шампунь для волосся", price: 280, images: ["img/шампунь.png"], desc: "Безсульфатний шампунь для дбайливого очищення.", isVolume: true, volumes: ["300 мл", "400 мл", "500 мл"] },
        "beauty-4": { title: "Набір для манікюру", price: 550, images: ["img/для-маніка.png"], desc: "Повний комплект інструментів з нержавіючої сталі." },
        "beauty-5": { title: "Маска для обличчя", price: 240, images: ["img/маска.png"], desc: "Живильна маска, яка освіжає шкіру." },
        "beauty-6": { title: "Олія для волосся", price: 320, images: ["img/олія.png"], desc: "Арганова олія для розгладження кінчиків.",isVolume: true, volumes: ["100 мл", "150 мл", "250 мл"] },
        "beauty-7": { title: "Парфумований спрей", price: 480, images: ["img/лост-чері.png"], desc: "Легкий мист для тіла із соковитим ароматом вишні.", isVolume: true, volumes: ["50 мл", "100 мл", "150 мл"] },
        "beauty-8": { title: "Набір косметики", price: 750, images: ["img/дек-косметика.png"], desc: "Універсальний подарунковий набір декоративної косметики." },
        "new-3": { title: "Зволожувач повітря з LED-підсвіткою", price: 390, images: ["img/освіжитель.png"], colors: [{ name: "Білий", hex: "#FFFFFF", imageIndex: 0 }, { name: "Рожевий", hex: "#E8C5C8", imageIndex: 1 }], desc: "Безшумний ультразвуковий зволожувач повітря." },
        "sale-7": { title: "USB-хаб для комп'ютера", price: 298, images: ["img/юсб-с.png"], colors: [{ name: "Сірий", hex: "#757575", imageIndex: 0 }, { name: "Чорний", hex: "#000000", imageIndex: 1 }], desc: "Компактний розгалужувач портів USB." },
        "sale-8": { title: "Бездротова зарядна станція", price: 675, images: ["img/станція.png"], colors: [{ name: "Білий", hex: "#FFFFFF", imageIndex: 0 }, { name: "Чорний", hex: "#000000", imageIndex: 1 }], desc: "Заряджайте смартфон, навушники та годинник одночасно." }
    };

    const urlParams = new URLSearchParams(window.location.search);
    const productId = urlParams.get('id') || "1";
    
    const product = productsData[productId] || {
        title: "Трендовий товар",
        price: 300,
        images: ["img/маршали.png"],
        desc: "Якісний товар із Китаю з доставкою по Україні."
    };

    let productImages = product.images;
    let currentImageIndex = 0;
    
    // Змінні для збереження обраного розміру/моделі, кольору та кількості (1 за замовчуванням)
    let selectedModelOrSize = (product.isModels || product.isSizes) ? product.models[0] : (product.isVolume ? product.volumes[0] : null);
    let selectedColor = product.colors ? product.colors[0].name : null;
    let selectedQuantity = 1; // Виправлено: кількість за замовчуванням завжди 1

    function updateImage() {
        document.getElementById('prodImg').src = productImages[currentImageIndex];
        
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

        // 1. Модель / розмір / об'єм / аромат
        if (product.isModels || product.isSizes || product.isVolume || product.isFragrance) {
            let label = "Оберіть варіант:";
            if (productId === "8") {
                label = "Оберіть модель iPhone:";
            } else if (product.isFragrance) {
                label = "Оберіть аромат:";
            } else if (product.isVolume) {
                label = "Оберіть об'єм:";
            } else if (product.isSizes || product.isModels) {
                label = "Оберіть розмір:";
            }

            let list = (product.isModels || product.isSizes || product.isFragrance) ? product.models : product.volumes;

            html += `
                <div style="margin-bottom: 15px;">
                    <div style="font-weight: bold; margin-bottom: 8px;">${label}</div>
                    <div class="model-options">
                        ${list.map((item, index) => `
                            <div class="model-pill ${index === 0 ? 'selected' : ''}" 
                                 onclick="selectModelOrSize(this, '${item}')">
                                ${item}
                            </div>
                        `).join('')}
                    </div>
                </div>
            `;
        }

        // 2. Кольори
        if (product.colors && product.colors.length > 0) {
            html += `
                <div style="margin-bottom: 15px;">
                    <div style="font-weight: bold; margin-bottom: 8px;">Оберіть колір: <span id="selectedColorLabel" style="font-weight: normal; color: #666;">${product.colors[0].name}</span></div>
                    <div class="color-options">
                        ${product.colors.map((color, index) => `
                            <div class="color-circle ${index === 0 ? 'selected' : ''}" 
                                 style="background-color: ${color.hex};${color.hex === '#FFFFFF' ? 'border: 1px solid #ccc;' : ''}" 
                                 onclick="selectColor(this, '${color.name}',${color.imageIndex !== undefined ? color.imageIndex : 'null'})" 
                                 title="${color.name}">
                            </div>
                        `).join('')}
                    </div>
                </div>
            `;
        }

        // 3. Перемикач кількості
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

    // Зміна кількості кнопками - / +
    function changeQuantity(delta) {
        const qtyInput = document.getElementById('quantityInput');
        let currentVal = parseInt(qtyInput.value) || 1;
        currentVal += delta;
        if (currentVal < 1) currentVal = 1;
        
        qtyInput.value = currentVal;
        selectedQuantity = currentVal;
    }

    // Ручне введення кількості
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
            <div class="toast-spinner"></div>
            <span>Додаємо товар...</span>
        `;
        toast.classList.add('show');

        setTimeout(() => {
            toast.innerHTML = `
                <div class="toast-success-icon">✓</div>
                <span>${message}</span>
            `;
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

            if (query.length === 0) {
                searchResults.style.display = 'none';
                searchResults.innerHTML = '';
                return;
            }

            const matches = Object.entries(productsData).filter(([id, prod]) => 
                prod.title.toLowerCase().includes(query)
            );

            if (matches.length > 0) {
                searchResults.style.display = 'block';
                searchResults.innerHTML = matches.map(([id, prod]) => `
                    <a href="product.html?id=${id}" style="display: flex; align-items: center; gap: 10px; padding: 10px 15px; text-decoration: none; color: #333; border-bottom: 1px solid #F4F4F6; transition: background 0.2s;" onmouseover="this.style.background='#F4F4F6'" onmouseout="this.style.background='#fff'">
                        <img src="${prod.images[0]}" alt="" style="width: 35px; height: 35px; object-fit: cover; border-radius: 4px;">
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
            if (query.length > 0) {
                const found = Object.entries(productsData).find(([id, prod]) => 
                    prod.title.toLowerCase().includes(query)
                );
                if (found) {
                    window.location.href = `product.html?id=${found[0]}`;
                }
            }
        });
    }

    document.addEventListener('DOMContentLoaded', () => {
        document.getElementById('prodTitle').textContent = product.title;
        document.getElementById('breadcrumbTitle').textContent = product.title;
        document.getElementById('prodPrice').textContent = product.price + " грн";
        document.getElementById('prodDesc').textContent = product.desc;
        
        renderOptions();
        updateImage();
        updateHeaderCartCount();
        initLiveSearch();

        const addBtn = document.getElementById('addToCartBtn');
        if (addBtn) {
            addBtn.addEventListener('click', () => {
                // Додатково підтягуємо актуальне значення з інпуту на момент кліку
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
