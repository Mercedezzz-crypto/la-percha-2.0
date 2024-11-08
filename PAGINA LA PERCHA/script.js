// Array para almacenar los productos en el carrito
let carrito = [];

// Función para agregar un producto al carrito
function agregarAlCarrito(nombre, precio) {
    // Crear un objeto con el nombre y precio del producto
    const producto = {
        nombre: nombre,
        precio: precio
    };
    
    // Agregar el producto al carrito
    carrito.push(producto);
    
    // Actualizar el carrito en la interfaz de usuario
    actualizarCarrito();
}

// Función para actualizar el carrito (mostrar productos y total)
function actualizarCarrito() {
    const listaCarrito = document.getElementById('lista-carrito');
    const totalElemento = document.getElementById('total');
    
    // Limpiar la lista de productos en el carrito
    listaCarrito.innerHTML = '';
    
    // Variable para el total del carrito
    let total = 0;
    
    // Mostrar los productos en el carrito
    carrito.forEach(producto => {
        const li = document.createElement('li');
        li.textContent = `${producto.nombre} - ${producto.precio} USD`;
        listaCarrito.appendChild(li);
        
        // Sumar el precio del producto al total
        total += producto.precio;
    });
    
    // Mostrar el total en la interfaz de usuario
    totalElemento.textContent = total.toFixed(2); // Mostrar con 2 decimales
}

// Función para vaciar el carrito
function vaciarCarrito() {
    carrito = [];
    actualizarCarrito();
}
