const formulario = document.getElementById("loginForm");

formulario.addEventListener("submit", async (e) => {
    e.preventDefault();

    const usuario = formulario.usuario.value;
    const password = formulario.password.value;

    const datos = {
        usuario,
        password
    };

    try {

        const respuesta = await fetch("http://localhost:3000/guardar", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(datos)
        });

        if (respuesta.ok) {
            alert("Datos enviados correctamente.");
            formulario.reset();
        } else {
            alert("Error al enviar los datos.");
        }

    } catch (error) {
        console.error(error);
        alert("No se pudo conectar con el servidor.");
    }
});