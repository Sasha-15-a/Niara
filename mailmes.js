
const EMAILJS_SERVICE_ID = 'service_e2e1bl7';
const EMAILJS_PUBLIC_KEY = 'xdyrg19YDZVHUX4Nu';

// ID твоїх шаблонів в EmailJS
const EMAILJS_TEMPLATES = {
    AUTH_CODE: 'template_qdic74m',      // Шаблон для коду реєстрації
    STATUS_UPDATE: 'template_lm1nmbh'   // Шаблон для зміни статусу замовлення
};

/**
 * Автоматична ініціалізація EmailJS при завантаженні скрипта
 */
(function initMailService() {
    if (window.emailjs) {
        emailjs.init(EMAILJS_PUBLIC_KEY);
    }
})();

/**
 * 1. Відправка коду підтвердження на пошту (при реєстрації)
 * @param {string} toEmail - Email отримувача
 * @param {string} code - 4-значний код
 * @param {string} fullname - ПІБ користувача
 * @param {string} phone - Телефон користувача
 */
async function sendAuthCodeEmail(toEmail, code, fullname, phone) {
    try {
        const response = await emailjs.send(
            EMAILJS_SERVICE_ID, 
            EMAILJS_TEMPLATES.AUTH_CODE, 
            {
                to_email: toEmail,
                code: code,
                fullname: fullname || 'Користувач',
                phone: phone || ''
            }, 
            EMAILJS_PUBLIC_KEY
        );
        
        console.log('[mailmes] Код підтвердження успішно надіслано на:', toEmail);
        return { success: true, response };
    } catch (error) {
        console.error('[mailmes Error] Помилка надсилання коду:', error);
        return { success: false, error };
    }
}

/**
 * 2. Відправка сповіщення про зміну або скасування статусу замовлення
 * @param {number|string} orderId - ID замовлення
 * @param {string} newStatus - Новий статус (наприклад, "Складений", "У дорозі", "Скасовано")
 * @param {string} clientEmail - Email клієнта
 * @param {string} clientName - Ім'я клієнта
 */
async function sendOrderStatusEmail(orderId, newStatus, clientEmail, clientName) {
    // Перевірка на гостьовий або порожній email
    if (!clientEmail || clientEmail === 'guest@niara.com' || clientEmail === 'user@gmail.com') {
        console.warn('[mailmes] Лист про статус не надіслано: вказано гостьову або невалідну пошту.');
        return { success: false, reason: 'Invalid email' };
    }

    try {
        const response = await emailjs.send(
            EMAILJS_SERVICE_ID, 
            EMAILJS_TEMPLATES.STATUS_UPDATE, 
            {
                to_email: clientEmail,
                client_name: clientName || 'Шановний клієнте',
                order_id: orderId,
                status: newStatus
            }, 
            EMAILJS_PUBLIC_KEY
        );

        console.log(`[mailmes] Статус "${newStatus}" для замовлення #${orderId} успішно надіслано на: ${clientEmail}`);
        return { success: true, response };
    } catch (error) {
        console.error('[mailmes Error] Помилка надсилання статусу замовлення:', error);
        return { success: false, error };
    }
}