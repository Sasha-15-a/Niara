// =========================================================
// МОДУЛЬ УПРАВЛЕНИЯ ПОЧТОВЫМИ УВЕДОМЛЕНИЯМИ (NIARA)
// =========================================================

const EMAILJS_SERVICE_ID = 'service_e2e1bl7';
const EMAILJS_PUBLIC_KEY = 'xdyrg19YDZVHUX4Nu';

// ID шаблонов в EmailJS
const EMAILJS_TEMPLATES = {
    AUTH_CODE: 'template_qdic74m',
    STATUS_UPDATE: 'template_3vr302c'
};

/**
 * Инициализация EmailJS при загрузке скрипта
 */
(function initMailService() {
    if (window.emailjs) {
        emailjs.init(EMAILJS_PUBLIC_KEY);
    }
})();

/**
 * 1. Отправка кода подтверждения
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
        
        console.log('[mailmes] Код успешно отправлен на:', toEmail);
        return { success: true, response };
    } catch (error) {
        console.error('[mailmes Error] Ошибка отправки кода:', error);
        return { success: false, error };
    }
}

/**
 * 2. Отправка уведомления о смене статуса заказа
 */
async function sendOrderStatusEmail(orderId, newStatus, clientEmail, clientName) {
    // Проверка на гостевой или невалидный email
    if (!clientEmail || clientEmail === 'guest@niara.com' || clientEmail === 'user@gmail.com') {
        console.warn('[mailmes] Отправка отменена: невалидный адрес электронной почты.');
        return { success: false, reason: 'Invalid email' };
    }

    try {
        const response = await emailjs.send(
            EMAILJS_SERVICE_ID, 
            EMAILJS_TEMPLATES.STATUS_UPDATE, 
            {
                to_email: clientEmail,
                client_name: clientName || 'Шановний клієнте', // Совпадает с {{client_name}}
                orders_id: orderId,                           // Совпадает с {{orders_id}}
                status: newStatus                             // Совпадает с {{status}}
            }, 
            EMAILJS_PUBLIC_KEY
        );

        console.log(`[mailmes] Статус "${newStatus}" для заказа #${orderId} успешно отправлен на: ${clientEmail}`);
        return { success: true, response };
    } catch (error) {
        console.error('[mailmes Error] Ошибка отправки статуса:', error);
        return { success: false, error };
    }
}
