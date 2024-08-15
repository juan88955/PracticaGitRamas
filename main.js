document.addEventListener('DOMContentLoaded', function() {
    const greeting = document.getElementById('greeting');
    greeting.addEventListener('click', function() {
        this.textContent = '¡Hola! Ahora soy interactivo.';
    });

    const shapes = ['circulo', 'cuadrado', 'rectangulo', 'rombo', 'hexagono', 'pentagono'];
    shapes.forEach(shape => {
        const element = document.getElementById(shape);
        element.addEventListener('mouseover', function() {
            this.style.backgroundColor = getRandomColor();
        });
        element.addEventListener('mouseout', function() {
            this.style.backgroundColor = '';
        });
    });

    const links = document.querySelectorAll('nav a');
    links.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            this.style.color = getRandomColor();
        });
    });

    function getRandomColor() {
        return '#' + Math.floor(Math.random()*16777215).toString(16);
    }
});