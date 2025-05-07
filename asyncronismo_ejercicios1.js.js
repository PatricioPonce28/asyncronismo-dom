// Asyncronismo con Lark Player 

console.log("Iniciando reproductor de canciones...");
console.log("Cargando lista de reproducción...");

setTimeout(function() {
    console.log("Reproduciendo: 'Feid - El Padrino'");
}, 5000);

console.log("📀 Mostrando carátula del álbum...");

// Síncrono vs Asíncrono
"use strict";

// Ejemplo sincrónico
let nombreCancion = "Polaris Remix"
function descargarCancion(nombreCancion) {
    for (let i = 0; i < 1000000000; i++) {}  
    return `✅ Canción '${nombreCancion}' descargada.`;
}

console.log("Buscando canción: Chorrito pa' las animas");
const resultadoDescarga = descargarCancion("Chorrito pa' las animas");
console.log(resultadoDescarga);
console.log("Reproduciendo desde Lark Player------Chorrito pa' las animas");

// Ejemplo asincrónico
let cancion = "COMMENT"
function notificarDescarga(cancion) {
    console.log(`¡'${cancion}' lista para reproducirse!`);
}

console.log("⏳ Esperando descarga de 'Chorrito pa' las animas'");
setTimeout(() => notificarDescarga("Chorrito pa' las animas"), 5000);
console.log("Mostrando recomendaciones mientras tanto..." , cancion);

// Promesas - Simulando conexión a API de canciones
"use strict";
const conexionBDDExterna = (datosConexion)=>{
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            datosConexion ? resolve("Conexión satisfactoria") : reject("Conexión rechazada")
        },3000)
    })
};

const cancionesAPI = fetch('https://developers.deezer.com/login?redirect=/api');

conexionBDDExterna(true)
    .then(respuesta => console.log(respuesta))
    .catch(error=>console.log(error))



cancionesAPI
    .then(peticion=>peticion.json())
    .then(respuesta=>console.log(respuesta[0].name))
    .catch(error=>console.log(error))
