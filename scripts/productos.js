const productos = [
    {
        categoria: "procesadores",
        etiqueta: "Procesadores",
        titulo: "AMD Ryzen 5 5600G",
        descripcion: "Procesador de 6 núcleos con gráficos integrados.",
        precio: "$180.000",
        imagen: "../assets/img/amd-ryzen5-5600g.webp"
    },
    {
        categoria: "procesadores",
        etiqueta: "Procesadores",
        titulo: "AMD Ryzen 5 5600X",
        descripcion: "Procesador de 6 núcleos y 12 hilos para gaming.",
        precio: "$210.000",
        imagen: "../assets/img/amd-ryzen5-5600x.webp"
    },
    {
        categoria: "procesadores",
        etiqueta: "Procesadores",
        titulo: "AMD Ryzen 7 5700X",
        descripcion: "Procesador de 8 núcleos para tareas exigentes.",
        precio: "$290.000",
        imagen: "../assets/img/amd-ryzen7-5700x.webp"
    },
    {
        categoria: "procesadores",
        etiqueta: "Procesadores",
        titulo: "Intel Core i3-12100F",
        descripcion: "Procesador de 4 núcleos ideal para equipos de entrada.",
        precio: "$140.000",
        imagen: "../assets/img/intel-i3-12100f.webp"
    },
    {
        categoria: "procesadores",
        etiqueta: "Procesadores",
        titulo: "Intel Core i5-12400F",
        descripcion: "Procesador de 6 núcleos con excelente rendimiento.",
        precio: "$230.000",
        imagen: "../assets/img/intel-i5-12400f.webp"
    },
    {
        categoria: "procesadores",
        etiqueta: "Procesadores",
        titulo: "Intel Core i7-12700K",
        descripcion: "Procesador de alto rendimiento para gaming y edición.",
        precio: "$430.000",
        imagen: "../assets/img/intel-i7-12700k.webp"
    },
    {
        categoria: "placas-video",
        etiqueta: "Placas de video",
        titulo: "GeForce RTX 4060",
        descripcion: "Placa de video de 8 GB para gaming y diseño.",
        precio: "$520.000",
        imagen: "../assets/img/rtx4060.webp"
    },
    {
        categoria: "placas-video",
        etiqueta: "Placas de video",
        titulo: "GeForce GTX 1650",
        descripcion: "Placa de video de 4 GB para gaming en Full HD.",
        precio: "$260.000",
        imagen: "../assets/img/gtx1650.webp"
    },
    {
        categoria: "placas-video",
        etiqueta: "Placas de video",
        titulo: "GeForce RTX 3060",
        descripcion: "Placa de video de 12 GB con tecnología Ray Tracing.",
        precio: "$460.000",
        imagen: "../assets/img/rtx3060.webp"
    },
    {
        categoria: "placas-video",
        etiqueta: "Placas de video",
        titulo: "GeForce RTX 4070",
        descripcion: "Placa potente para jugar en alta resolución.",
        precio: "$890.000",
        imagen: "../assets/img/rtx4070.webp"
    },
    {
        categoria: "placas-video",
        etiqueta: "Placas de video",
        titulo: "AMD Radeon RX 6600",
        descripcion: "Placa de video de 8 GB con gran rendimiento en Full HD.",
        precio: "$390.000",
        imagen: "../assets/img/rx6600.webp"
    },
    {
        categoria: "placas-video",
        etiqueta: "Placas de video",
        titulo: "AMD Radeon RX 7600",
        descripcion: "Placa de video de 8 GB para gaming de nueva generación.",
        precio: "$510.000",
        imagen: "../assets/img/rx7600.webp"
    },
    {
        categoria: "memorias-ram",
        etiqueta: "Memorias RAM",
        titulo: "Kingston Fury Beast 16 GB",
        descripcion: "Memoria DDR4 de 3200 MHz para alto rendimiento.",
        precio: "$65.000",
        imagen: "../assets/img/kingston-fury-beast-16gb.webp"
    },
    {
        categoria: "memorias-ram",
        etiqueta: "Memorias RAM",
        titulo: "Corsair Vengeance LPX 16 GB",
        descripcion: "Kit DDR4 de 3200 MHz con disipador de calor.",
        precio: "$72.000",
        imagen: "../assets/img/corsair-vengeance-lpx-16gb.webp"
    },
    {
        categoria: "memorias-ram",
        etiqueta: "Memorias RAM",
        titulo: "Crucial 8 GB DDR4",
        descripcion: "Memoria de 3200 MHz ideal para actualizar tu equipo.",
        precio: "$38.000",
        imagen: "../assets/img/crucial-8gb-ddr4.webp"
    },
    {
        categoria: "memorias-ram",
        etiqueta: "Memorias RAM",
        titulo: "HyperX Fury 16 GB",
        descripcion: "Memoria DDR4 de 3200 MHz con diseño de bajo perfil.",
        precio: "$68.000",
        imagen: "../assets/img/hyperx-fury-16gb.webp"
    },
    {
        categoria: "memorias-ram",
        etiqueta: "Memorias RAM",
        titulo: "TeamGroup T-Force Delta 16 GB",
        descripcion: "Memoria DDR4 de 3200 MHz con iluminación RGB.",
        precio: "$79.000",
        imagen: "../assets/img/teamgroup-tforce-delta-16gb.webp"
    },
    {
        categoria: "memorias-ram",
        etiqueta: "Memorias RAM",
        titulo: "Kingston Fury Beast 32 GB",
        descripcion: "Kit DDR4 de 3200 MHz para gaming y edición.",
        precio: "$125.000",
        imagen: "../assets/img/kingston-fury-beast-32gb.webp"
    },
    {
        categoria: "almacenamiento",
        etiqueta: "Almacenamiento",
        titulo: "Kingston NV2 1 TB",
        descripcion: "Unidad SSD NVMe rápida para sistema y archivos.",
        precio: "$95.000",
        imagen: "../assets/img/kingston-nv2-1tb.webp"
    },
    {
        categoria: "almacenamiento",
        etiqueta: "Almacenamiento",
        titulo: "Samsung 980 Pro 1 TB",
        descripcion: "Unidad SSD NVMe de alto rendimiento.",
        precio: "$165.000",
        imagen: "../assets/img/samsung-980-pro-1tb.webp"
    },
    {
        categoria: "almacenamiento",
        etiqueta: "Almacenamiento",
        titulo: "Crucial BX500 480 GB",
        descripcion: "Unidad SSD SATA ideal para acelerar tu computadora.",
        precio: "$52.000",
        imagen: "../assets/img/crucial-bx500-480gb.webp"
    },
    {
        categoria: "almacenamiento",
        etiqueta: "Almacenamiento",
        titulo: "WD Blue SN570 1 TB",
        descripcion: "Unidad SSD NVMe confiable para uso diario.",
        precio: "$110.000",
        imagen: "../assets/img/wd-blue-sn570-1tb.webp"
    },
    {
        categoria: "almacenamiento",
        etiqueta: "Almacenamiento",
        titulo: "Seagate Barracuda 2 TB",
        descripcion: "Disco rígido para guardar juegos y archivos.",
        precio: "$98.000",
        imagen: "../assets/img/seagate-barracuda-2tb.webp"
    },
    {
        categoria: "almacenamiento",
        etiqueta: "Almacenamiento",
        titulo: "WD Blue 1 TB",
        descripcion: "Disco rígido confiable para almacenamiento general.",
        precio: "$72.000",
        imagen: "../assets/img/wd-blue-1tb.webp"
    }
];

function crearCardProducto(producto) {
    const card = document.createElement("article");
    card.classList.add("producto-card");

    card.innerHTML = `
        <img class="producto-imagen" src="${producto.imagen}" alt="${producto.titulo}">
        <span class="producto-categoria">${producto.etiqueta}</span>
        <h2>${producto.titulo}</h2>
        <p>${producto.descripcion}</p>
        <strong class="producto-precio">${producto.precio}</strong>
        <div class="cantidad-producto">
            <button class="cantidad-boton" type="button" data-accion="restar">−</button>
            <span class="cantidad-valor">1</span>
            <button class="cantidad-boton" type="button" data-accion="sumar">+</button>
        </div>
        <button type="button">Agregar al carrito</button>
    `;

    return card;
}

const contenedorProductos = document.querySelector("#contenedor-productos");

if (contenedorProductos) {
    const categoriaActual = contenedorProductos.dataset.categoria;
    const productosDeLaCategoria = productos.filter((producto) => {
        return producto.categoria === categoriaActual;
    });

    productosDeLaCategoria.forEach((producto) => {
        contenedorProductos.appendChild(crearCardProducto(producto));
    });

    contenedorProductos.addEventListener("click", (evento) => {
        const botonCantidad = evento.target.closest(".cantidad-boton");

        if (!botonCantidad) {
            return;
        }

        const card = botonCantidad.closest(".producto-card");
        const cantidadElemento = card.querySelector(".cantidad-valor");
        let cantidad = Number(cantidadElemento.textContent);

        if (botonCantidad.dataset.accion === "sumar") {
            cantidad++;
        }

        if (botonCantidad.dataset.accion === "restar" && cantidad > 1) {
            cantidad--;
        }

        cantidadElemento.textContent = cantidad;
    });
}
