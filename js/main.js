const boton_modo_oscuro = document.getElementById("btn_modo_oscuro");

boton_modo_oscuro.addEventListener("click", () => {
  document.body.classList.toggle("oscuro");

  if (document.body.classList.contains("oscuro")) {
    boton_modo_oscuro.textContent = "☀️";
  } else {
    boton_modo_oscuro.textContent = "🌙";
  }
});

const formulario_contacto = document.querySelector(".formulario_contacto");

if (formulario_contacto) {
  formulario_contacto.addEventListener("submit", (evento) => {
    evento.preventDefault();
    document.getElementById("mensaje_confirmacion").textContent =
      "¡Gracias! Te vamos a contactar pronto.";
    formulario_contacto.reset();
  });
}
