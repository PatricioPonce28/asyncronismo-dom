document.addEventListener('DOMContentLoaded', function () {
    // Obtener elementos
    const buscador = document.querySelector('#search-178');
    const icono = document.getElementsByClassName('uk-icon-institution')[1];
    const iconos = document.getElementsByClassName('custom-logo')[1];
    const tarjeta1 = document.querySelector('.uk-width-medium-1-3');
    const tarjeta = document.querySelector('.uk-width-medium-1-3:nth-child(2)');
    const enlace = document.querySelector('a');
    const tarjetas = document.querySelectorAll('.uk-width-medium-1-3');
    const imagen = document.querySelector('.uk-overlay-toggle img');
    const enlaces = document.querySelector('.uk-panel p');
  
    // Modificar contenido
    document.querySelector('.tm-heading-large').textContent = "Prueba-Contenido";
    imagen.src = "https://r-charts.com/es/miscelanea/procesamiento-imagenes-magick_files/figure-html/color-fondo-imagen-r.png";
  
    // Modificar estilo
    buscador.style.border = "10px green solid";
  
    // Agregar elementos (no lo agregues a un input, mejor a su contenedor)
    const button = document.createElement("button");
    button.innerText = "Wow Mor";
    buscador.parentElement.appendChild(button);
  
    const enlaceNuevo = document.createElement('a');
    enlaceNuevo.textContent = "Meta";
    enlaceNuevo.style.color = "blue";
    enlaces.insertBefore(enlaceNuevo, enlaces.children[1]);
  
    // Agregar eventos
    button.addEventListener('click', function () {
      alert("Abrir Popup");
    });
  
    buscador.addEventListener('mouseenter', function () {
      buscador.style.border = "10px green solid";
    });
  
    buscador.addEventListener('mouseout', function () {
      buscador.style.border = "";
    });
  
    buscador.addEventListener('input', function (e) {
      if (e.target.value === "") {
        buscador.style.border = "10px red solid";
      } else {
        buscador.style.border = "";
        console.log(e.target.value);
      }
    });
  
    buscador.addEventListener('keypress', function (e) {
      if (e.key === "6") {
        e.preventDefault();
        console.log("Enviando el formulario");
      }
    });
  });
  