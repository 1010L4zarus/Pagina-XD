/*
  En tu script principal si quieres proteger codigo
  para que al inspeccionarlo no se pueda ver, deberas hacer
  exports en otro archivo e importar los metodos, propiedades,
  clases y constantes que quieras que no sean visibles en
  view:source.
*/
//import nuestrasFuncionesInvisibles from './Alguna ruta.js';

//Por ejemplo esto de aquí supongamos que este en ./invisible.js:

export default function fetchImagen(){
  const url = 
        encodeURI("https://img.freepik.com/vector-gratis/fondo-azul-clasico-estilo-abstracto_23-2148427983.jpg?size=626&ext=jpg");
    const img = new Image();
    img.download = "";

    img.onload = ()=>{
        img.setAttribute("href", img.src);
        URL.revokeObjectURL(img.src);
        document.body.appendChild(img);
    }

    fetch(url, { method: 'GET'})
    .then(res => res.blob())
    .then(blob =>{
        img.src = URL.createObjectURL(blob);
    });
}


import fetchImagen from "index.html";

window.onload = ()=>{
  fetchImagen();
}
