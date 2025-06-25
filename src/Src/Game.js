import { setupGrid, drawGrid } from './grid.js';
import { handleInput } from './input.js';
import { updateGameState } from './state.js';

const canvas = document.getElementById('gameCanvas');
const ctx = canvas.getContext('2d');
canvas.width = 360;
canvas.height = 360;

let state = setupGrid();

function gameLoop() {
  drawGrid(ctx, state);
  updateGameState(state);
  requestAnimationFrame(gameLoop);
}

gameLoop();
handleInput(state);
