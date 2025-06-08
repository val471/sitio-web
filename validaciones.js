document.getElementById("formulario").addEventListener("submit", function(event) {
    event.preventDefault();

    const nombre = document.getElementById("nombre").value.trim();
    const correo = document.getElementById("correo").value.trim();
    const motivo = document.getElementById("motivo").value.trim();
    const mensaje = document.getElementById("mensaje");

    if (nombre === "" || correo === "" || motivo === "") {
        mensaje.textContent = "Por favor, completa todos los campos.";
        mensaje.style.color = "red";
    } else if (!correo.includes("@") || !correo.includes(".")) {
        mensaje.textContent = "Por favor, introduce un correo electrónico válido.";
        mensaje.style.color = "red";
    } else {
        mensaje.textContent = "Formulario enviado correctamente. ¡Gracias!";
        mensaje.style.color = "green";

        // Aquí puedes enviar los datos a un servidor si se requiere
        // o simplemente limpiar los campos:
        document.getElementById("formulario").reset();
    }
});
