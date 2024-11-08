// Selecciona el formulario y el mensaje de éxito
const registroForm = document.getElementById('registroForm');
const mensaje = document.getElementById('mensaje');

// Agrega un evento al formulario para manejar el envío
registroForm.addEventListener('submit', (e) => {
    e.preventDefault();  // Previene la recarga de la página

    // Obtén los valores del formulario
    const nombre = document.getElementById('nombre').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    // Simula el registro del usuario (aquí podrías enviar los datos a un servidor)
    if (nombre && email && password) {
        mensaje.textContent = `¡Cuenta creada exitosamente, ${nombre}! Bienvenido a LA PERCHA.`;
        mensaje.style.color = 'green';
        registroForm.reset();  // Limpia el formulario
    } else {
        mensaje.textContent = "Por favor, completa todos los campos.";
        mensaje.style.color = 'red';
    }
});
