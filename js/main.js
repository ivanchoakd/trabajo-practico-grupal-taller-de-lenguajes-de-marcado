const boton_modo_oscuro = document.getElementById("btn_modo_oscuro");

boton_modo_oscuro.addEventListener("click", () => {
  document.body.classList.toggle("oscuro");

  if (document.body.classList.contains("oscuro")) {
    boton_modo_oscuro.textContent = "☀️";
  } else {
    boton_modo_oscuro.textContent = "🌙";
  }
});
