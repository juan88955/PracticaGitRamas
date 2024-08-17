const elementosNav = [
    { href: "https://music.youtube.com/watch?v=L5joywlq9B4", texto: "YouTube 1" },
    { href: "https://music.youtube.com/watch?v=zNVo24P_KLU", texto: "YouTube 2" },
    { href: "https://66c07fc951ea824f996ba2d0--teal-gumption-ca80a6.netlify.app/", texto: "MiSitio Gabriel" },
    { href: "https://github.com/juan88955/PracticaGitRamas.git", texto: "Enlace GIT" }
];

let indiceNavActual = 0;

function actualizarNav() {
    const listaNav = document.getElementById('listaNav');
    listaNav.innerHTML = '';

    for (let i = 0; i < 3; i++) {
        const indice = (indiceNavActual + i) % elementosNav.length;
        const elemento = elementosNav[indice];
        
        const li = document.createElement('li');
        li.className = 'nav-item';

        const a = document.createElement('a');
        a.href = elemento.href;
        a.className = 'nav-link';
        a.textContent = elemento.texto;

        li.appendChild(a);
        listaNav.appendChild(li);
    }

    indiceNavActual = (indiceNavActual + 1) % elementosNav.length;
}

function agregarNuevoElementoNav() {
    const nuevoTexto = prompt("Introduce el texto para el nuevo elemento de navegación:");
    const nuevoHref = prompt("Introduce la URL para el nuevo elemento de navegación:");
    
    if (nuevoTexto && nuevoHref) {
        elementosNav.push({ href: nuevoHref, texto: nuevoTexto });
        actualizarNav();
    }
}

setInterval(actualizarNav, 5000);

actualizarNav();

document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('agregarElementoNav').addEventListener('click', agregarNuevoElementoNav);
});
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

function addDynamicShapes() {
    const shapeTres = document.getElementById('shapeTres');
    const shapes = ['triangle', 'diamond', 'star'];
    const colors = ['#FF6B6B', '#4ECDC4', '#45B7D1'];

    shapes.forEach((shape, index) => {
        const div = document.createElement('div');
        div.className = `col-md-2 m-2`;
        
        const shapeDiv = document.createElement('div');
        shapeDiv.className = shape;
        shapeDiv.style.backgroundColor = colors[index];
        shapeDiv.style.width = '100px';
        shapeDiv.style.height = '100px';
        
        div.appendChild(shapeDiv);
        shapeTres.appendChild(div);

        shapeDiv.addEventListener('click', () => {
            shapeDiv.style.transform = shapeDiv.style.transform === 'scale(1.2)' ? 'scale(1)' : 'scale(1.2)';
        });
    });
}

document.addEventListener('DOMContentLoaded', addDynamicShapes);
