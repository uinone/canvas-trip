export class Arc {
  constructor(radius, startAngle, endAngle, counterclockwise) {
    this.radius = radius;
    this.startAngle = startAngle;
    this.endAngle = endAngle;
    this.counterclockwise = counterclockwise;
  }

  drawStroke(ctx, x, y, strokeStyle) {
    ctx.strokeStyle = strokeStyle;
    ctx.beginPath();
    ctx.arc(
      x,
      y,
      this.radius,
      this.startAngle,
      this.endAngle,
      this.counterclockwise
    );
    ctx.stroke();
  }

  drawFill(ctx, x, y, fillStyle) {
    ctx.fillStyle = fillStyle;
    ctx.beginPath();
    ctx.arc(
      x,
      y,
      this.radius,
      this.startAngle,
      this.endAngle,
      this.counterclockwise
    );

    ctx.arc(
      x,
      y,
      this.radius / 2,
      this.startAngle,
      this.endAngle,
      !this.counterclockwise
    );
    ctx.fill();
  }
}
