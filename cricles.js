// We'll start with a big circle in the center and draw smaller ones around it.
function setup() {
  createCanvas(600, 600); 
  noFill();             
  stroke(0);             
  drawCircles(width / 2, height / 2, 200, 4); // A big circle in the center
}

function drawCircles(x, y, radius, depth) {
  if (depth === 0) return;

  // Draw the current circle
  ellipse(x, y, radius * 2);

  // Now draw smaller circles in all four directions
  // Right Circlee
  drawCircles(x + radius / 2, y, radius / 2, depth - 1);
  
  // Left Circle
  drawCircles(x - radius / 2, y, radius / 2, depth - 1);
  
  // Down Circle
  drawCircles(x, y + radius / 2, radius / 2, depth - 1);
  
  // Up Circle 
  drawCircles(x, y - radius / 2, radius / 2, depth - 1);
}

