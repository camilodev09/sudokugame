
const phoneNumberMovil = '51966301171'; // Reemplaza con el número de teléfono deseado
const encodedMessage = encodeURIComponent('I want more information. I´m interested.');

const whatsappButton = document.getElementById('whatsappButtonBanner');

whatsappButton.href = `https://api.whatsapp.com/send?phone=${phoneNumberMovil}&text=${encodedMessage}`;