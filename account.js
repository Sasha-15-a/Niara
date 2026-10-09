
document.addEventListener('DOMContentLoaded', () => {
    const registerForm = document.getElementById('registerForm');
    const loginForm = document.getElementById('loginForm');
    const toLoginBtn = document.getElementById('toLoginBtn');
    const toRegisterBtn = document.getElementById('toRegisterBtn');
    const toast = document.getElementById('toast');

    let toastTimer;

    // Красивые уведомления
    function showToast(message, type = '') {
        toast.textContent = message;
        toast.className = 'toast-notification show ' + type;

        clearTimeout(toastTimer);

        toastTimer = setTimeout(() => {
            toast.className = 'toast-notification';
        }, 3500);
    }

    // Переключение между регистрацией и входом
    function showForm(form) {
        registerForm.classList.toggle('active', form === 'register');
        loginForm.classList.toggle('active', form === 'login');

        const card = document.querySelector('.auth-card');

        card.style.animation = 'none';
        void card.offsetWidth;
        card.style.animation = 'cardAppear 0.4s ease';
    }

    toLoginBtn.addEventListener('click', (e) => {
        e.preventDefault();
        showForm('login');
    });

    toRegisterBtn.addEventListener('click', (e) => {
        e.preventDefault();
        showForm('register');
    });

    // Добавление кнопок показа пароля
    document.querySelectorAll(
        '#registerForm input[type="password"], #loginForm input[type="password"]'
    ).forEach(input => {
        const wrapper = document.createElement('div');
        wrapper.className = 'password-wrap';

        input.parentNode.insertBefore(wrapper, input);
        wrapper.appendChild(input);

        const toggle = document.createElement('button');
        toggle.type = 'button';
        toggle.className = 'password-toggle';
        toggle.textContent = '👁';
        toggle.title = 'Показати або приховати пароль';
        toggle.setAttribute('aria-label', 'Показати пароль');

        toggle.addEventListener('click', () => {
            const visible = input.type === 'password';

            input.type = visible ? 'text' : 'password';
            toggle.textContent = visible ? '🙈' : '👁';
            toggle.setAttribute(
                'aria-label',
                visible ? 'Приховати пароль' : 'Показати пароль'
            );
        });

        wrapper.appendChild(toggle);
    });

    // Индикатор сложности пароля
    const password = document.getElementById('password');
    const passwordGroup = password.closest('.form-row');

    const strength = document.createElement('div');
    strength.className = 'password-strength';
    strength.innerHTML = `
        <span class="strength-label">Надійність пароля: не вказано</span>
        <div class="strength-track">
            <div class="strength-fill"></div>
        </div>
    `;

    passwordGroup.insertAdjacentElement('afterend', strength);

    password.addEventListener('input', () => {
        const value = password.value;
        let score = 0;

        if (value.length >= 8) score++;
        if (/[a-z]/.test(value) && /[A-Z]/.test(value)) score++;
        if (/\d/.test(value)) score++;
        if (/[^a-zA-Z0-9]/.test(value)) score++;

        const fill = strength.querySelector('.strength-fill');
        const label = strength.querySelector('.strength-label');

        const levels = [
            { text: 'Слабкий', width: '25%', color: '#d33' },
            { text: 'Середній', width: '50%', color: '#e5a000' },
            { text: 'Хороший', width: '75%', color: '#4b9c55' },
            { text: 'Надійний', width: '100%', color: '#27864a' }
        ];

        if (!value) {
            label.textContent = 'Надійність пароля: не вказано';
            fill.style.width = '0';
            return;
        }

        const level = Math.max(
            0,
            Math.min(3, score - (value.length < 8 ? 1 : 0))
        );

        label.textContent = 'Надійність пароля: ' + levels[level].text;
        fill.style.width = levels[level].width;
        fill.style.backgroundColor = levels[level].color;
    });

    // Получение демонстрационных аккаунтов
    function getAccounts() {
        try {
            return JSON.parse(
                localStorage.getItem('niara_demo_accounts') || '[]'
            );
        } catch {
            return [];
        }
    }

    // Регистрация
    registerForm.addEventListener('submit', (e) => {
        e.preventDefault();

        const login = document.getElementById('login').value.trim();
        const pass = password.value;
        const confirm = document.getElementById('confirm-password').value;
        const email = document.getElementById('email').value.trim().toLowerCase();

        if (pass.length < 8) {
            showToast('Пароль має містити щонайменше 8 символів.', 'error');
            return;
        }

        if (pass !== confirm) {
            showToast('Паролі не збігаються!', 'error');
            document.getElementById('confirm-password').classList.add('invalid');
            return;
        }

        const accounts = getAccounts();

        if (accounts.some(account =>
            account.login.toLowerCase() === login.toLowerCase() ||
            account.email === email
        )) {
            showToast('Цей логін або Email вже зареєстрований.', 'error');
            return;
        }

        const account = {
            login: login,
            password: pass,
            email: email,
            fullname: document.getElementById('fullname').value.trim()
        };

        try {
            accounts.push(account);
            localStorage.setItem(
                'niara_demo_accounts',
                JSON.stringify(accounts)
            );
        } catch {
            showToast('Не вдалося зберегти акаунт у браузері.', 'error');
            return;
        }

        showToast('Акаунт створено! Тепер можна увійти.', 'success');

        registerForm.reset();
        strength.querySelector('.strength-fill').style.width = '0';
        strength.querySelector('.strength-label').textContent =
            'Надійність пароля: не вказано';

        showForm('login');
        document.getElementById('login-email').value = login;
    });

    // Удаляем подсветку ошибки при вводе
    document.querySelectorAll('.form-group input').forEach(input => {
        input.addEventListener('input', () => {
            input.classList.remove('invalid');
        });
    });

    // Вход
    loginForm.addEventListener('submit', (e) => {
        e.preventDefault();

        const identity = document.getElementById('login-email')
            .value.trim().toLowerCase();

        const pass = document.getElementById('login-password').value;

        const account = getAccounts().find(account =>
            account.login.toLowerCase() === identity ||
            account.email === identity
        );

        if (!account || account.password !== pass) {
            showToast('Неправильний логін, Email або пароль.', 'error');
            return;
        }

        showToast(
            'Вітаємо, ' + (account.fullname || account.login) + '!',
            'success'
        );

        // Демонстрационная сессия
        sessionStorage.setItem('niara_demo_user', account.login);

        loginForm.reset();
    });

    // Демонстрационное восстановление пароля
    document.querySelector('.forgot-pass').addEventListener('click', (e) => {
        e.preventDefault();

        showToast(
            'Для відновлення пароля потрібна справжня серверна система.',
            'error'
        );
    });
});
