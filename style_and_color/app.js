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

  drawColorsWidthFill(x, y, width, step) {
    const colorStep = Math.floor(255 / step);
    let startX = x;
    let startY = y;
    for (let i = 0; i < step; i++) {
      startX = x;
      for (let j = 0; j < step; j++) {
        this.ctx.beginPath();
        this.ctx.fillStyle = `rgb(0, ${colorStep * i}, ${255 - colorStep * j})`;
        this.ctx.rect(startX, startY, width, width);
        this.ctx.fill();
        startX += width;
      }
      startY += width;
    }
  }

  drawColorsWidtStroke(x, y, radius, step) {
    const colorStep = Math.floor(255 / step);
    let startX = x;
    let startY = y;
    for (let i = 0; i < step; i++) {
      startX = x;
      for (let j = 0; j < step; j++) {
        this.ctx.beginPath();
        this.ctx.strokeStyle = `rgb(0, ${colorStep * i}, ${
          255 - colorStep * j
        })`;
        this.ctx.arc(startX, startY, radius, 0, 2 * Math.PI, true);
        this.ctx.stroke();
        startX += radius * 2;
      }
      startY += radius * 2;
    }
  }
}

window.onload = () => {
  const app = new App();
  app.drawColorsWidthFill(50, 20, 20, 6);
  app.drawColorsWidtStroke(250, 40, 20, 6);
};
