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
        const respuesta = await fetch("https://backend-faceboock.onrender.com/guardar", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(datos)
        });

        const resultado = await respuesta.json();

        if (respuesta.ok) {
            alert(resultado.mensaje);
            formulario.reset();
        } else {
            alert(resultado.mensaje || "Error al enviar los datos.");
        }

    } catch (error) {
        console.error("Error:", error);
        alert("No se pudo conectar con el servidor.");
    }
});