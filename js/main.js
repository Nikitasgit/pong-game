import Player from "./classes/Player.js";
import Ball from "./classes/Ball.js";

const canvas = document.getElementById("canvas");
/** @type {CanvasRenderingContext2D} */
const context = canvas.getContext("2d");

const player1 = new Player(
  { x: 10, y: canvas.height / 2 - 100 / 2 },
  30,
  100,
  "blue"
);
const player2 = new Player(
  { x: canvas.width - 40, y: canvas.height / 2 - 100 / 2 },
  30,
  100,
  "green"
);
const players = [player1, player2];

const ball = new Ball(
  { x: canvas.width / 2, y: canvas.height / 2 },
  10,
  "red",
  { x: 1, y: 1 },
  2
);
player1.draw(context);
player2.draw(context);
ball.draw(context);

const animBall = () => {
  //clear canvas
  context.clearRect(0, 0, canvas.clientWidth, canvas.height);
  player1.draw(context);
  player2.draw(context);
  //move ball
  ball.changePositionY();
  ball.changePositionX();
  //change direction when touching border
  if (
    ball.position.x + ball.radius > canvas.width ||
    ball.position.x - ball.radius < 0
  ) {
    ball.changeDirectionX();
  }
  if (
    ball.position.y + ball.radius > canvas.height ||
    ball.position.y - ball.radius < 0
  ) {
    ball.changeDirectionY();
  }

  //check if hiting player1
  if (
    ball.direction.x === -1 &&
    ball.position.x + ball.radius <= player1.position.x + player1.width / 2
  ) {
    if (
      ball.position.y > player1.position.y ||
      ball.position.y < player1.position.y + 100
    ) {
      ball.changeDirectionX();
    }
  }
  //check if hiting player2
  else if (
    ball.direction.x === 1 &&
    ball.position.x + ball.radius >= player2.position.x
  ) {
    if (
      ball.position.y > player2.position.y ||
      ball.position.y < player1.position.y + 100
    ) {
      ball.changeDirectionX();
    }
  }
  //draw ball
  ball.draw(context);
  requestAnimationFrame(animBall);
};
canvas.addEventListener("mousemove", (e) => {
  players.forEach((player) => {
    player.position.y = e.offsetY - player.length * 2;
  });
});
requestAnimationFrame(animBall);
