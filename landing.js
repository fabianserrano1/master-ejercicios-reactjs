const enlaceEjercicios = document.getElementById("enlace-ejercicios");
const enlaceGatos = document.getElementById("enlace-gatos");

const estamosEnLocal =
  window.location.hostname === "localhost" ||
  window.location.hostname === "127.0.0.1";

if (estamosEnLocal) {
  enlaceEjercicios.href = "http://localhost:5173/";
  enlaceGatos.href = "http://localhost:5174/";
} else {
  enlaceEjercicios.href = "./ejercicio-1/";
  enlaceGatos.href = "./proyecto-final/";
}
