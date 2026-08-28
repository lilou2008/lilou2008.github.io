    // Ejemplo de productos por categoría
    const productosPorCategoria = {
    'Cámaras de Seguridad': [
        { nombre: 'Cámara 1', descripcion: 'Imagen de cámara de seguridad 1', imagen: 'assets/productos_img/Cámara de Seguridad/camara1.jpg' },
        { nombre: 'Cámara 2', descripcion: 'Imagen de cámara de seguridad 2', imagen: 'assets/productos_img/Cámara de Seguridad/camara2.png' }
    ],
        'Pantallas TFT': [
            { nombre: 'TFT 2.4 Táctil', descripcion: 'Pantalla TFT táctil 2.4 pulgadas', imagen: 'assets/productos_img/Pantallas TFT/TFT.2.4.Tactil.2.webp' },
            { nombre: 'TFT 3.2', descripcion: 'Pantalla TFT 3.2 pulgadas', imagen: 'assets/productos_img/Pantallas TFT/TFT3.2.1-1.webp' }
        ],
    'Módulos Relay': [
        { nombre: 'Relay de Estado Sólido SSR 8CH', descripcion: 'Módulo relay de estado sólido SSR 8 canales 5V-240V', imagen: 'assets/productos_img/Módulos Relay/RELAY DE ESTADO SOLIDO SSR 8CH 5V-240V.jpg' }
    ],
    'Matriz de LEDs': [
        { nombre: 'Matriz MAX7221', descripcion: 'Matriz de LEDs con controlador MAX7221', imagen: 'assets/productos_img/Matriz de LEDs/Matriz.MAX7221.4.webp' }
    ],
    'Arduino': [
        { nombre: 'Arduboard Due 2', descripcion: 'Placa compatible Arduino Due', imagen: 'assets/productos_img/Arduino/arduboard-due-2.jpg' },
        { nombre: 'Arduboard Due R3', descripcion: 'Placa compatible Arduino Due R3', imagen: 'assets/productos_img/Arduino/arduboard-due-r3.jpg' },
        { nombre: 'Arduboard Nano CH340G Mini USB', descripcion: 'Placa Arduino Nano con chip CH340G y Mini USB', imagen: 'assets/productos_img/Arduino/arduboard-nano-ch340g-mini-usb.jpg' },
        { nombre: 'Arduino 1', descripcion: 'Placa Arduino modelo 1', imagen: 'assets/productos_img/Arduino/ARDUINO 1.jpg' },
        { nombre: 'Arduino 2', descripcion: 'Placa Arduino modelo 2', imagen: 'assets/productos_img/Arduino/ARDUINO 2.jpg' },
        { nombre: 'ESP32 DevKit V1', descripcion: 'Placa ESP32 DevKit V1 NodeMCU 32 30 pin WiFi', imagen: 'assets/productos_img/Arduino/esp32-devkit-v1-nodemcu-32-30-pin-esp32-wifi-micro-usb.jpg' },
        { nombre: 'NodeMCU V2 ESP8266', descripcion: 'Placa NodeMCU V2 ESP8266 WiFi Micro USB', imagen: 'assets/productos_img/Arduino/nodemcu-v2-esp8266-wifi-micro-usb.jpg' },
        { nombre: 'Pro Mini 328 5V/16MHz', descripcion: 'Placa Pro Mini 328 5V 16MHz', imagen: 'assets/productos_img/Arduino/pro-mini-328-5v16mhz.jpg' },
        { nombre: 'Raspberry Pi Pico', descripcion: 'Placa Raspberry Pi Pico', imagen: 'assets/productos_img/Arduino/raspberry-pi-pico.jpg' }
    ],
    'Raspberry Pi': [
        { nombre: 'Raspberry Pi Pico (1)', descripcion: 'Placa Raspberry Pi Pico versión 1', imagen: 'assets/productos_img/Raspberry Pi/raspberry-pi-pico (1).jpg' },
        { nombre: 'Raspberry Pi Imagen', descripcion: 'Imagen genérica de Raspberry Pi', imagen: 'assets/productos_img/Raspberry Pi/images.jpg' }
    ],
    'FPGA Lógica Digital': [
        { nombre: 'Programador USB Blaster', descripcion: 'Programador para FPGA Lógica Digital', imagen: 'assets/productos_img/FPGA Lógica Digital/Programador.USB_.Blaster.1.webp' }
    ],
    'STM32 ARM Cortex': [
        { nombre: 'STM32 Imagen 1', descripcion: 'Microcontrolador STM32 ARM Cortex', imagen: 'assets/productos_img/STM32 ARM Cortex/imagen1.jpg' },
        { nombre: 'STM32 Imagen 2', descripcion: 'Microcontrolador STM32 ARM Cortex', imagen: 'assets/productos_img/STM32 ARM Cortex/imagen2.jpg' },
        { nombre: 'STM32 Imagen 3', descripcion: 'Microcontrolador STM32 ARM Cortex', imagen: 'assets/productos_img/STM32 ARM Cortex/imagen3.jpg' },
        { nombre: 'STM32 Imagen 4', descripcion: 'Microcontrolador STM32 ARM Cortex', imagen: 'assets/productos_img/STM32 ARM Cortex/imagen4.jpg' },
        { nombre: 'STM32 Imagen 5', descripcion: 'Microcontrolador STM32 ARM Cortex', imagen: 'assets/productos_img/STM32 ARM Cortex/imagen5.jpg' }
    ],
    'PLC Siemens': [
        { nombre: 'PLC Siemens 6ed1052', descripcion: 'Controlador lógico programable Siemens modelo 6ed1052', imagen: 'assets/productos_img/PLC Siemens/6ed1052_1md08_0ba1_1615354455.png' },
        { nombre: 'PLC Siemens 6ES7214', descripcion: 'Controlador Siemens 6ES7214-1AG40-0XB0', imagen: 'assets/productos_img/PLC Siemens/6ES7214-1AG40-0XB0.png' },
        { nombre: 'PLC Siemens 6ES7222', descripcion: 'Módulo Siemens 6ES7222-1HF32-0XB0', imagen: 'assets/productos_img/PLC Siemens/6ES7222-1HF32-0XB0-1-430x502.png' },
        { nombre: 'PLC Siemens P129784', descripcion: 'Controlador lógico programable Siemens modelo P129784', imagen: 'assets/productos_img/PLC Siemens/P129784.jpg' },
        { nombre: 'PLC Siemens S7-200 Smart', descripcion: 'Módulo RTD 2 entradas analógicas', imagen: 'assets/productos_img/PLC Siemens/siemens-s7-200-smart-rtd-2-analog-input-module.jpg' },
        { nombre: 'PLC Siemens S7-1200', descripcion: 'Entrada digital SM 1221 16DI 24V DC', imagen: 'assets/productos_img/PLC Siemens/simatic-s7-1200-entrada-digital-sm-1221-16di-24v-dc.jpg' },
        { nombre: 'PLC Siemens 6ES7223', descripcion: 'Módulo Siemens 6ES7223-1BH32-0XB0', imagen: 'assets/productos_img/PLC Siemens/t_productos_6es7223-1bh32-0xb0_41f7ce.jpg' }
    ],
    'Cargador de Baterías': [
        { nombre: 'Cargador 3.7V', descripcion: 'Cargador para baterías de 3.7V', imagen: 'assets/productos_img/Cargador de Baterías/Cargador.3.7V.1.webp' },
        { nombre: 'Cargador Batería', descripcion: 'Cargador universal de batería', imagen: 'assets/productos_img/Cargador de Baterías/Cargador.Bateria.1.webp' },
        { nombre: 'Cargador Litio TP4056', descripcion: 'Cargador de baterías de litio TP4056', imagen: 'assets/productos_img/Cargador de Baterías/Cargador.Baterias.Litio_.TP4056.1.webp' }
    ],
    'Conectores y Cables': [
        { nombre: 'Cable Dupont H-H', descripcion: 'Cable Dupont hembra a hembra', imagen: 'assets/productos_img/Conectores y Cables/Dupont.H-H.1.webp' },
        { nombre: 'Cable Dupont H-M', descripcion: 'Cable Dupont hembra a macho', imagen: 'assets/productos_img/Conectores y Cables/Dupont.H-M.1.webp' },
        { nombre: 'Cable Dupont M-M', descripcion: 'Cable Dupont macho a macho', imagen: 'assets/productos_img/Conectores y Cables/Dupont.M-M.1.webp' }
    ],
    // ...agrega más categorías y productos
};

const serviciosList = document.querySelectorAll('.productos-servicios li');
const productosContent = document.querySelector('.productos-content');


// Función para normalizar texto (sin tildes, minúsculas, sin espacios extras)
function normalizarTexto(texto) {
    return texto
        .normalize('NFD')
        .replace(/[\u0300-\u036f]/g, '') // Quita tildes
        .replace(/\s+/g, ' ') // Espacios simples
        .trim()
        .toLowerCase();
}

serviciosList.forEach(item => {
    item.style.cursor = 'pointer';
    item.addEventListener('click', () => {
        const categoria = item.textContent.trim();
        // Buscar la clave que coincida normalizada
        const clave = Object.keys(productosPorCategoria).find(
            k => normalizarTexto(k) === normalizarTexto(categoria)
        );
        mostrarProductosCategoria(clave || categoria);
    });
});

function mostrarProductosCategoria(categoria) {
    productosContent.innerHTML = `<h2>${categoria}</h2>`;
    const productos = productosPorCategoria[categoria] || [];
    if (productos.length === 0) {
        productosContent.innerHTML += '<p>No hay productos disponibles en esta categoría.</p>';
        return;
    }
    const grid = document.createElement('div');
    grid.className = 'productos-grid';
    productos.forEach(prod => {
        const card = document.createElement('div');
        card.className = 'producto-card';
        card.innerHTML = `
            <img src="${prod.imagen}" alt="${prod.nombre}" />
            <h3>${prod.nombre}</h3>
            <p>${prod.descripcion}</p>
        `;
        grid.appendChild(card);
    });
    productosContent.appendChild(grid);
}
