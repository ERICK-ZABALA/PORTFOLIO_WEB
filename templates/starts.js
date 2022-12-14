// Obtener una referencia al elemento canvas y obtener un contexto de dibujo
const canvas = document.getElementById('my-canvas');
const ctx = canvas.getContext('2d');

// Función para actualizar la simulación
function update() {
  // Mover los elementos en el canvas
  // ...

  // Redibujar el campo de fondo
  ctx.fillRect(0, 0, canvas.width, canvas.height);
}

// Actualizar la simulación cada 10 milisegundos
setInterval(update, 10);
