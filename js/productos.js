const listaProductos = [];

const cargarProductos = () => {   
    for (let i = 0; i <= 10; i++) {
        const nuevoProducto = {
            id: "PROD" + i,
            descripcion: faker.commerce.productName(),
            precio: Math.floor(Math.random() * (150 - 0) + 0)
        };
        listaProductos.push(nuevoProducto);
    }    
}

const crearProducto = () => {
    const idsInput = document.getElementById('idProducto');
    const desInput = document.getElementById('despProducto');
    const precioInput = document.getElementById('precioProducto');

    const idp = idsInput.value;
    const desc = desInput.value;
    const precio = precioInput.value;

    const nuevoProducto = {
        id: idp,
        descripcion: desc,
        precio: precio
    }

    // ingreso los valores que cogí del formulario a la lista
    listaProductos.push(nuevoProducto);

    // reinicio valores en el formulario
    idsInput.value = '';
    desInput.value = '';
    precioInput.value = '';

    alert('Producto creado con éxito!');
    actualizarProductosEnFacturas();

    return nuevoProducto;
}

const mostrarListado1 = () => {
    const productosForm = document.getElementById('productos-form');
    const listadoProductos = document.getElementById('listado-productos');
    
    productosForm.style.display = 'none';
    listadoProductos.style.display = 'block';

    const ul = document.createElement('ul');

    for (const producto of listaProductos) {
        const li = document.createElement('li');
        li.textContent = `ID: ${producto.id}, Descripción: ${producto.descripcion}, Precio: ${producto.precio}`;
        ul.appendChild(li);
    }

    listadoProductos.innerHTML = '';
    listadoProductos.appendChild(ul);

    const volverButton = document.createElement('button');
    volverButton.textContent = 'Volver al Formulario';
    volverButton.addEventListener('click', volverFormulario1);
    listadoProductos.appendChild(volverButton);
}

const volverFormulario1 = () => {
    const productosForm = document.getElementById('productos-form');
    const listadoProductos = document.getElementById('listado-productos');

    listadoProductos.style.display = 'none';
    productosForm.style.display = 'block';
}

