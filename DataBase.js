// Функция запроса списка клиентов из облачной базы Neon
async function fetchUsersFromNeon() {
    try {
        const response = await fetch('https://ep-jolly-glitter-b4ojt4zm.apirest.c-6.us-east-2.aws.neon.tech/neondb/rest/v1/clients?select=*', {
            method: 'GET',
            headers: {
                'Accept': 'application/json'
            }
        });

        if (!response.ok) {
            throw new Error('Помилка завантаження з бази Neon');
        }

        const users = await response.json();
        return users; // Возвращает массив объектов из базы данных
    } catch (err) {
        console.error('Помилка при отриманні даних з Neon:', err);
        return [];
    }
}

// Функция для вывода данных в HTML-таблицу
async function renderNeonUsersTable(tableBodyId) {
    const tableBody = document.getElementById(tableBodyId);
    if (!tableBody) return;

    tableBody.innerHTML = `<tr><td colspan="4" style="text-align: center; padding: 15px;">Завантаження з хмари Neon... ⏳</td></tr>`;

    // Загружаем данные из облака
    const users = await fetchUsersFromNeon();

    if (users.length === 0) {
        tableBody.innerHTML = `<tr><td colspan="4" style="text-align: center; padding: 15px; color: #777;">База даних порожня або немає зв'язку 📭</td></tr>`;
        return;
    }

    // Заполняем табличку данными из Neon (у тебя в таблице clients обычно поля id, full_name, phone, created_at)
    tableBody.innerHTML = users.map((u, index) => `
        <tr style="border-bottom: 1px solid #EEE; background: ${index % 2 === 0 ? '#FFF' : '#F9F9F9'};">
            <td style="padding: 10px; font-weight: bold;">${index + 1}</td>
            <td style="padding: 10px;">${u.full_name || '-'}</td>
            <td style="padding: 10px;">${u.phone || '-'}</td>
            <td style="padding: 10px; color: #777; font-size: 12px;">ID: ${u.id || '-'}</td>
        </tr>
    `).join('');
}
document.addEventListener('DOMContentLoaded', () => {
    // Передаем ID тега tbody из HTML выше
    renderNeonUsersTable('neonUsersTableBody');
});