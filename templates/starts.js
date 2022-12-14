// Create a new canvas element and append it to the page
var canvas = document.createElement("canvas");
document.body.appendChild(canvas);

// Set the width and height of the canvas to match the window
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

// Get the drawing context from the canvas
var ctx = canvas.getContext("2d");

// Create a function that draws a star at a random position on the canvas
function drawStar() {
  // Generate a random number between 0 and 1
  var x = Math.random();
  var y = Math.random();

  // Use the random numbers to calculate the position of the star
  var starX = x * canvas.width;
  var starY = y * canvas.height;

  // Draw a small circle at the calculated position
  ctx.beginPath();
  ctx.arc(starX, starY, 2, 0, 2 * Math.PI);
  ctx.fill();
}

// Draw 1000 stars on the canvas
for (var i = 0; i < 1000; i++) {
  drawStar();
}
