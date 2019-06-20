const primeraSeccion=document.getElementById("primera-seccion");
const botonAcceso=document.getElementById("boton-acceso");

const segundaSeccion=document.getElementById("segunda-seccion");

const botonCifrar=document.getElementById("boton-cifrar");
const botonDescifrar=document.getElementById("boton-descifrar");



let seccionBienvenida = () => {
  primeraSeccion.classList.add("disappear");
  segundaSeccion.classList.remove("disappear");
};

botonAcceso.addEventListener("click", seccionBienvenida);



botonCifrar.addEventListener("click", () => {
   let numeroOffset=document.getElementById("numero-offset").value;
   let mensajeACifrar=document.getElementById("mensaje-a-cifrar-arriba").value;
   const result = window.cipher.encode(numeroOffset, mensajeACifrar)
   let mensajeDescifrado=document.getElementById("mensaje-descifrado-abajo")
   mensajeDescifrado.value = result
})



botonDescifrar.addEventListener("click", () => {
  let numeroOffset=document.getElementById("numero-offset").value;
  let mensajeDescifrado=document.getElementById("mensaje-a-cifrar-arriba").value;
  const result = window.cipher.decode(numeroOffset, mensajeDescifrado)
  let mensajeACifrar=document.getElementById("mensaje-descifrado-abajo")
  mensajeACifrar.value = result
})
