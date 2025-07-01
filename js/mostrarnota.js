document.addEventListener('DOMContentLoaded', function() {
    // Función para descargar la imagen (ruta relativa desde el HTML, no desde el JS)
    document.querySelector('.download-btn').addEventListener('click', function() {
        const link = document.createElement('a');
        link.href = '../imagenes/Quizccs1Katherine.png'; // Sube un nivel y entra a /imagenes/
        link.download = 'QuizCSS_Katherine.png';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    });

    // Función para volver atrás
    document.querySelector('.return-btn').addEventListener('click', function() {
        window.location.href = '../index.html'; // Ajusta según tu estructura
    });
});