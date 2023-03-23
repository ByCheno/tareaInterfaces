/**
 * Utilizo canvas para crear el logotipo de la pagina web
 */
const canvas = document.getElementById('logo');
const ctx = canvas.getContext('2d');

// Dibuja un rectángulo como fondo del logotipo
ctx.fillStyle = 'rgba(0, 0, 0, 0.1)';
ctx.fillRect(0, 0, 150, 50);

// Establece el estilo de texto y escribe el nombre del restaurante
ctx.font = '20px Arial';
ctx.fillStyle = 'black';
ctx.textAlign = 'center';
ctx.textBaseline = 'middle';
ctx.fillText('CONDE', canvas.width / 2, canvas.height / 2);

