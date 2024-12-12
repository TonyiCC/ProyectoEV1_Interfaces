document.addEventListener("DOMContentLoaded", function () {
    // Usamos fetch para obtener el archivo JSON de los productos
    fetch('./productos.json')
        .then(response => response.json()) // Convertimos la respuesta en formato JSON
        .then(productosJSON => {
            // Seleccionamos el contenedor de los productos
            const contenedorProductos = document.getElementById('contenedor-productos');

            // Recorrer el array de productos y crear el HTML para cada uno
            productosJSON.forEach(producto => {
                // Crear el contenedor para cada producto
                const productoDiv = document.createElement('div');
                productoDiv.classList.add('producto');

                // Crear la imagen del producto
                const img = document.createElement('img');
                img.classList.add('producto-imagen');
                img.src = producto.imagen;
                img.alt = `Imagen de ${producto.titulo}`;

                // Crear los detalles del producto
                const detallesDiv = document.createElement('div');
                detallesDiv.classList.add('producto-detalles');

                // Crear el título del producto
                const titulo = document.createElement('h3');
                titulo.classList.add('producto-titulo');
                titulo.textContent = producto.titulo;

                // Crear el precio del producto
                const precio = document.createElement('p');
                precio.classList.add('producto-precio');
                precio.textContent = `$${producto.precio}`;

                // Crear el botón para agregar el producto
                const botonAgregar = document.createElement('button');
                botonAgregar.classList.add('producto-agregar');
                botonAgregar.textContent = 'Agregar';

                // Añadir los elementos a los contenedores
                detallesDiv.appendChild(titulo);
                detallesDiv.appendChild(precio);
                detallesDiv.appendChild(botonAgregar);

                productoDiv.appendChild(img);
                productoDiv.appendChild(detallesDiv);

                // Añadir el producto al contenedor principal
                contenedorProductos.appendChild(productoDiv);
            });
        })
        .catch(error => {
            console.error("Error al cargar el archivo JSON: ", error);
        });
});
