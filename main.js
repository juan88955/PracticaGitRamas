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

function renderShapeDos(page) {
    page.innerHTML = '';

    for (let i = 0; i < 10; i++) {
        const shape = document.createElement("div");
        shape.className = "p-0 m-2 col-6 col-sm-4 col-md-2";
        shape.innerHTML = `
            <div class="square">
            </div>`;

        shape.addEventListener('mouseover', function () {
            this.classList.add("squareGrow")
        });
        shape.addEventListener('mouseout', function () {
            this.classList.remove("squareGrow")
        });
        page.appendChild(shape);
    };
}

document.addEventListener('DOMContentLoaded', function () {
    const pageElement = document.getElementById('shapeDos');
    renderShapeDos(pageElement);
});

