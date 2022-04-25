// Menú adaptativo según viewport como apps en celulares
function menuMovil() {
var x = document.getElementById("mylinks");
if (x.className === "links") {
  x.className += "responsive";
} else {
  x.className = "links";
}
}

// Cerrar menú
function cerrar() {
var y = document.getElementById("mylinks");
if (y.className === "responsive") {
  y.className -= "responsive";
} else {
  y.className = "links";
}
}

//-----------------------------------------------------------------------------
