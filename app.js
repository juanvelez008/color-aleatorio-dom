//Creacion de las variables con los selectores //
const boton = document.querySelector(`button`);
const color = document.getElementById(`color`);

// logica para generar el cambio de color//
function generarColorHexAleatorio () {
  let digitos = `0123456789ABCDEF`;
  let colorHex = `#`;

  for (let i = 0 ; i < 6; i++) {
    let indiceAleatorio = Math.floor(Math.random() * 16);
    colorHex += digitos[indiceAleatorio];
  }
  return colorHex
}

// relaciona logica con el boton//
boton.addEventListener(`click`, function() {
  let colorAleatorio = generarColorHexAleatorio ();
  //Actualizar texto//
  color.textContent = colorAleatorio;
  //Actualizar fondo//
  document.body.style.backgroundColor = colorAleatorio;
})
