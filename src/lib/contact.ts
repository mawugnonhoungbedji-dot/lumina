export const WHATSAPP_NUMBER = '+2290168844875';
export const CONTACT_EMAIL = 'hello.luminacontact@gmail.com';

export const getWhatsAppLink = (message?: string) => {
    const encodedMessage = message ? encodeURIComponent(message) : encodeURIComponent("Bonjour Lumina ! J'aimerais discuter d'un projet.");
    return `https://wa.me/${WHATSAPP_NUMBER.replace(/\+/g, '').replace(/\s/g, '')}?text=${encodedMessage}`;
};
