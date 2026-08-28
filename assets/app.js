// Lista de productos de ejemplo
const productos = [
    { nombre: "Auriculares VR", precio: 120 },
    { nombre: "Reloj Inteligente", precio: 80 },
    { nombre: "Dron Futurista", precio: 250 },
    { nombre: "Lámpara LED Inteligente", precio: 40 },
    { nombre: "Robot Asistente", precio: 500 }
];


// Carrusel de imágenes para el inicio
const imagenesCarrusel = [
    'assets/img/img1.jpg',
    'assets/img/img2.jpg',
    'assets/img/img3.png',
    'assets/img/img4.jpg',
    'assets/img/img5.png',
    'assets/img/img6.jpg'
];
let idxCarrusel = 0;
const carouselImg = document.getElementById('carousel-img');
function cambiarImagenCarrusel() {
    if (!carouselImg) return;
    idxCarrusel = (idxCarrusel + 1) % imagenesCarrusel.length;
    carouselImg.classList.remove('slide');
    carouselImg.src = imagenesCarrusel[idxCarrusel];
    // Forzar reflow para reiniciar animación
    void carouselImg.offsetWidth;
    carouselImg.classList.add('slide');
}
if (carouselImg) {
    setInterval(cambiarImagenCarrusel, 2000);
}

const listaProductos = document.getElementById('lista-productos');
const listaPedido = document.getElementById('lista-pedido');
const enviarPedidoBtn = document.getElementById('enviar-pedido');
let pedido = [];

function renderProductos() {
    productos.forEach((producto, idx) => {
        const li = document.createElement('li');
        li.innerHTML = `
            <span>${producto.nombre} - $${producto.precio}</span>
            <button onclick="agregarAlPedido(${idx})">Agregar</button>
        `;
        listaProductos.appendChild(li);
    });
}

function renderPedido() {
    listaPedido.innerHTML = '';
    pedido.forEach((item, idx) => {
        const li = document.createElement('li');
        li.innerHTML = `
            <span>${item.nombre} - $${item.precio}</span>
            <button onclick="quitarDelPedido(${idx})">Quitar</button>
        `;
        listaPedido.appendChild(li);
    });
}

window.agregarAlPedido = function(idx) {
    pedido.push(productos[idx]);
    renderPedido();
};

window.quitarDelPedido = function(idx) {
    pedido.splice(idx, 1);
    renderPedido();
};

enviarPedidoBtn.addEventListener('click', () => {
    if (pedido.length === 0) {
        alert('Agrega productos a tu pedido antes de enviarlo.');
        return;
    }
    let mensaje = 'Hola, quiero pedir:\n';
    pedido.forEach(item => {
        mensaje += `- ${item.nombre} ($${item.precio})\n`;
    });
    const url = `https://wa.me/XXXXXXXXXXX?text=${encodeURIComponent(mensaje)}`;
    window.open(url, '_blank');
});

renderProductos();
