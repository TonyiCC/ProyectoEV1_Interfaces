const nombreInput = document.getElementById('nombre');
const passwordInput = document.getElementById('password');
const errorNombre = document.getElementById('error-nombre');
const errorPassword = document.getElementById('error-password');
const formulario = document.getElementById('formulario');
const limpiarButton = document.getElementById('limpiar');

// Nombre
function validarNombre() {
    const nombre = nombreInput.value.trim();

    if (nombre === '') {
        errorNombre.textContent = 'Nombre obligatorio.';
        return false;
    }

    const nombreValido = /^[a-zA-ZÁÉÍÓÚÜÑáéíóúüñ\s]+$/;
    if (!nombreValido.test(nombre)) {
        errorNombre.textContent = 'Nombre inválido.';
        return false;
    }

    if (nombre.length > 20) {
        errorNombre.textContent = 'El nombre no puede tener más de 20 caracteres.';
        return false;
    }

    errorNombre.textContent = '';
    return true;
}

// Contraseña
function validarPassword() {
    const password = passwordInput.value.trim();

    if (password === '') {
        errorPassword.textContent = 'La contraseña es obligatoria.';
        return false;
    }

    const passwordValida = /^[a-zA-Z0-9\$%&\/\(\)\.]{8,16}$/;
    if (!passwordValida.test(password)) {
        errorPassword.textContent = 'La contraseña debe tener entre 8 y 16 caracteres y solo puede contener letras, números y los caracteres ·$%&/().';
        return false;
    }

    errorPassword.textContent = '';
    return true;
}

//Envío del formulario
formulario.addEventListener('submit', function (e) {
    e.preventDefault();

    const nombreEsValido = validarNombre();
    const passwordEsValida = validarPassword();

    if (nombreEsValido && passwordEsValida) {
        window.location.href = '../main.html';
    }
});

// Validar en tiempo real mientras el usuario escribe
nombreInput.addEventListener('input', validarNombre);
passwordInput.addEventListener('input', validarPassword);

// Limpiar datos al presionar el botón Limpiar
limpiarButton.addEventListener('click', function () {
    nombreInput.value = '';
    passwordInput.value = '';
    errorNombre.textContent = '';
    errorPassword.textContent = '';
});
