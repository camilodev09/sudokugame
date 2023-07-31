
const phoneNumber = '51966301171'; // Reemplaza con el número de teléfono deseado
const encodedMessage = encodeURIComponent('I want more information. I am interested.');

const whatsappButton = document.getElementById('whatsappButton');

whatsappButton.href = `https://api.whatsapp.com/send?phone=${phoneNumber}&text=${encodedMessage}`;