import { Arc } from "./Arc.js";
import { Rectangle } from "./Rectangle.js";

class App {
  constructor() {
    // canvas 요소 생성
    this.canvas = document.createElement("canvas");

    // canvas 요소로부터 2d context 얻기
    this.ctx = this.canvas.getContext("2d");

    // html에 생성한 canvas를 넣기
    document.body.appendChild(this.canvas);

    // 화면 사이즈 설정
    window.addEventListener("resize", this.resize.bind(this), false);
    this.resize();
  }

  resize() {
    // 레티나 디스플레이에서 선명하게 보이기 위해 canvas의 크기를 body의 두배씩으로 잡는다.
    this.stageWidth = document.body.clientWidth;
    this.stageHeight = document.body.clientHeight;

    this.canvas.width = this.stageWidth * 2;
    this.canvas.height = this.stageHeight * 2;
    this.ctx.scale(2, 2);
  }

  // 직사각형 그리기
  drawRect(x, y, width, height) {
    const firstRect = new Rectangle(
      this.ctx,
      x,
      y,
      width,
      height,
      "rgba(200, 0, 0, 0.8)"
    );

    const secondRect = new Rectangle(
      this.ctx,
      x + width,
      y + height,
      width,
      height,
      "rgba(0, 0, 200, 0.5)"
    );

    firstRect.draw();
    secondRect.draw();
    Rectangle.clear(this.ctx, x + width / 2, y + height / 2, width, height);
  }

  drawLine() {
    this.ctx.lineWidth = 3;
    this.ctx.strokeStyle = "rgba(200, 0, 0, 0.8)";
    this.ctx.fillStyle = "rgba(200, 0, 0, 0.8)";

    // Stroke without closePath method
    this.ctx.beginPath();
    this.ctx.moveTo(300, 100);
    this.ctx.lineTo(380, 50);
    this.ctx.lineTo(380, 150);
    this.ctx.stroke();

    // Stroke with closePath method
    this.ctx.beginPath();
    this.ctx.moveTo(400, 100);
    this.ctx.lineTo(480, 50);
    this.ctx.lineTo(480, 150);
    this.ctx.closePath();
    this.ctx.stroke();

    // Fill method
    this.ctx.beginPath();
    this.ctx.moveTo(500, 100);
    this.ctx.lineTo(580, 50);
    this.ctx.lineTo(580, 150);
    this.ctx.fill(); // closePath method called before fill inner area
  }

  drawArc(x, y, radius, startAngle, endAngle, counterclockwise) {
    const firstArc = new Arc(radius, startAngle, endAngle, counterclockwise);
    firstArc.drawStroke(this.ctx, x, y, "rgba(200, 0, 0, 0.8)");
    firstArc.drawFill(this.ctx, x + radius * 2 + 50, y, "rgba(0, 200, 0, 0.8)");

    this.ctx.beginPath();
    this.ctx.strokeStyle = "black";
    this.ctx.lineWidth = 2;
    this.ctx.moveTo(500, 400);
    this.ctx.arcTo(600, 400, 600, 500, 200);
    this.ctx.stroke();

    /*
    this.ctx.beginPath();
    this.ctx.strokeStyle = "blue";
    this.ctx.lineWidth = 2;
    this.ctx.moveTo(300, 400);
    this.ctx.lineTo(400, 400);
    this.ctx.lineTo(400, 500);
    this.ctx.stroke();
*/
    this.ctx.beginPath();
    this.ctx.fillStyle = "rgba(200, 0, 0, 1)";
    this.ctx.lineWidth = 5;
    this.ctx.arc(500, 400, 3, 0, 2 * Math.PI);
    this.ctx.fill();

    this.ctx.beginPath();
    this.ctx.fillStyle = "rgba(200, 0, 0, 1)";
    this.ctx.lineWidth = 5;
    this.ctx.arc(600, 400, 3, 0, 2 * Math.PI);
    this.ctx.fill();

    this.ctx.beginPath();
    this.ctx.fillStyle = "rgba(200, 0, 0, 1)";
    this.ctx.lineWidth = 5;
    this.ctx.arc(600, 500, 3, 0, 2 * Math.PI);
    this.ctx.fill();

    this.ctx.beginPath();
    this.ctx.fillStyle = "green";
    this.ctx.lineWidth = 5;
    this.ctx.arc(400, 400, 3, 0, 2 * Math.PI);
    this.ctx.fill();
  }

  drawQuadCurve() {
    const startX = 800;
    const startY = 50;
    const controlX = 900;
    const controlY = 140;
    const endX = 1000;
    const endY = 50;

    this.ctx.beginPath();
    this.ctx.strokeStyle = "green";
    this.ctx.lineWidth = 2;
    this.ctx.moveTo(startX, startY);
    this.ctx.quadraticCurveTo(controlX, controlY, endX, endY);
    this.ctx.stroke();

    this.ctx.beginPath();
    this.ctx.strokeStyle = "rgba(0,0,0,0)";
    this.ctx.lineWidth = 2;
    this.ctx.moveTo(startX, startY);
    this.ctx.lineTo(controlX, controlY);
    this.ctx.lineTo(endX, endY);
    this.ctx.stroke();

    this.ctx.beginPath();
    this.ctx.fillStyle = "red";
    this.ctx.lineWidth = 5;
    this.ctx.arc(startX, startY, 3, 0, 2 * Math.PI);
    this.ctx.fill();

    this.ctx.beginPath();
    this.ctx.fillStyle = "blue";
    this.ctx.lineWidth = 5;
    this.ctx.arc(controlX, controlY, 3, 0, 2 * Math.PI);
    this.ctx.fill();

    this.ctx.beginPath();
    this.ctx.fillStyle = "red";
    this.ctx.lineWidth = 5;
    this.ctx.arc(endX, endY, 3, 0, 2 * Math.PI);
    this.ctx.fill();
  }

  drawCubicCurve() {
    const startX = 800;
    const startY = 500;
    const firstControlX = 900;
    const firstControlY = 800;
    const secondControlX = 1000;
    const secondControlY = 200;
    const endX = 1100;
    const endY = 500;

    this.ctx.beginPath();
    this.ctx.strokeStyle = "green";
    this.ctx.lineWidth = 2;
    this.ctx.moveTo(startX, startY);
    this.ctx.bezierCurveTo(
      firstControlX,
      firstControlY,
      secondControlX,
      secondControlY,
      endX,
      endY
    );
    this.ctx.stroke();

    this.ctx.beginPath();
    this.ctx.strokeStyle = "rgba(0,0,0,0)";
    this.ctx.lineWidth = 2;
    this.ctx.moveTo(startX, startY);
    this.ctx.lineTo(firstControlX, firstControlY);
    this.ctx.lineTo(secondControlX, secondControlY);
    this.ctx.lineTo(endX, endY);
    this.ctx.stroke();

    this.ctx.beginPath();
    this.ctx.fillStyle = "red";
    this.ctx.lineWidth = 5;
    this.ctx.arc(startX, startY, 3, 0, 2 * Math.PI);
    this.ctx.fill();

    this.ctx.beginPath();
    this.ctx.fillStyle = "blue";
    this.ctx.lineWidth = 5;
    this.ctx.arc(firstControlX, firstControlY, 3, 0, 2 * Math.PI);
    this.ctx.fill();

    this.ctx.beginPath();
    this.ctx.fillStyle = "blue";
    this.ctx.lineWidth = 5;
    this.ctx.arc(secondControlX, secondControlY, 3, 0, 2 * Math.PI);
    this.ctx.fill();
    /*
    this.ctx.beginPath();
    this.ctx.fillStyle = "blue";
    this.ctx.lineWidth = 5;
    this.ctx.arc((startX + endX) / 2, endY, 3, 0, 2 * Math.PI);
    this.ctx.fill();
    */
    this.ctx.beginPath();
    this.ctx.fillStyle = "red";
    this.ctx.lineWidth = 5;
    this.ctx.arc(endX, endY, 3, 0, 2 * Math.PI);
    this.ctx.fill();
  }

  drawPath() {
    const a = new Path2D();
    a.moveTo(200, 500);
    a.lineTo(300, 500);

    const b = new Path2D();
    b.arc(200, 500, 2, 0, 2 * Math.PI, false);
    b.arc(300, 500, 2, 0, 2 * Math.PI, false);

    this.ctx.strokeStyle = "aqua";
    this.ctx.fillStyle = "aqua";
    this.ctx.lineWidth = 4;
    this.ctx.stroke(a);
    this.ctx.fill(b);
  }
}

window.onload = () => {
  const app = new App();
  app.drawRect(50, 50, 100, 100);
  app.drawLine();
  app.drawArc(100, 400, 40, 0, 2 * Math.PI, false);
  app.drawQuadCurve();
  app.drawCubicCurve();
  app.drawPath();
};
