export function setupGrid() {
  const cols = 6;
  const rows = 6;
  const grid = [];

  for (let y = 0; y < rows; y++) {
    const row = [];
    for (let x = 0; x < cols; x++) {
      row.push({
        x,
        y,
        color: '#444',
        unit: null
      });
    }
    grid.push(row);
  }

  return { grid, cols, rows };
}

export function drawGrid(ctx, state) {
  const hexSize = 30;
  const { grid } = state;
  ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);

  grid.forEach((row, y) => {
    row.forEach((cell, x) => {
      const posX = x * hexSize * 1.5 + 20;
      const posY = y * hexSize * 1.3 + 20;
      ctx.beginPath();
      ctx.arc(posX, posY, hexSize / 2, 0, Math.PI * 2);
      ctx.fillStyle = cell.color;
      ctx.fill();
      ctx.strokeStyle = "#999";
      ctx.stroke();
    });
  });
}
