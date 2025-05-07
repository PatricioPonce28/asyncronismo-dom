// Async - Await 

const conexionBDDExterna = async (datosConexion) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            datosConexion ? resolve("Conexión satisfactoria") : reject("Conexión rechazada");
        }, 3000);
    });
};

const obtenerCancionesAPI = async () => {
    try {
        const respuesta = await fetch('https://developers.deezer.com/login?redirect=/api');
        const datos = await respuesta.json();
        console.log(datos[0].name);
    } catch (error) {
        console.log(error);
    }
};

const ejecutarConexion = async () => {
    try {
        const respuesta = await conexionBDDExterna(true);
        console.log(respuesta);
    } catch (error) {
        console.log(error);
    }
};

// Ejecutando las funciones
ejecutarConexion();
obtenerCancionesAPI();
