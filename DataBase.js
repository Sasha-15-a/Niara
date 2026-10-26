// Функция для вывода данных клиентов из Supabase
async function renderSupabaseUsersTable(tableBodyId) {
    const tableBody = document.getElementById(tableBodyId);
    if (!tableBody) return;

    tableBody.innerHTML = `<tr><td colspan="4" style="text-align: center; padding: 15px;">Завантаження з Supabase... ⏳</td></tr>`;

    try {
        const { data: users, error } = await supabaseClient.from('clients').select('*');

        if (error || !users || users.length === 0) {
            tableBody.innerHTML = `<tr><td colspan="4" style="text-align: center; padding: 15px; color: #777;">База даних порожня 📭</td></tr>`;
            return;
        }

        tableBody.innerHTML = users.map((u, index) => `
            <tr style="border-bottom: 1px solid #EEE; background: ${index % 2 === 0 ? '#FFF' : '#F9F9F9'};">
                <td style="padding: 10px; font-weight: bold;">${index + 1}</td>
                <td style="padding: 10px;">${u.full_name || '-'}</td>
                <td style="padding: 10px;">${u.phone || '-'}</td>
                <td style="padding: 10px; color: #777; font-size: 12px;">${u.email || '-'}</td>
            </tr>
        `).join('');
    } catch (err) {
        console.error('Помилка:', err);
    }
}
