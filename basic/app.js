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

    this.ctx.beginPath();
    this.ctx.moveTo(600, 50);
    this.ctx.lineTo(720, 230);
    this.ctx.lineTo(700, 50);
    this.ctx.lineTo(600, 250);
    this.ctx.lineTo(650, 50);
    this.ctx.lineTo(750, 200);
    this.ctx.lineTo(600, 180);
    this.ctx.closePath();
    this.ctx.stroke();
    //this.ctx.fill("evenodd");
  }
}

window.onload = () => {
  const app = new App();
  app.drawRect(50, 50, 100, 100);
  app.drawLine();
};
