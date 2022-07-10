# [Canvas API] 1. 기본 사용

Canvas API는 canvas 태그를 통해 사용 가능합니다.

canvas요소에는 width와 height 두 속성만 있으며 DOM 프로퍼티를 사용하여 설정할 수도 있습니다.

기본적으로 너비는 300px, 높이는 150px입니다.

css를 통해 임의로 크기를 정할 수 있지만 렌더링하는 동안 이미지는 레이아웃 크기에 맞춰 조정되므로

**css 크기 지정이 초기 캔버스의 비율을 고려하지 않으면 왜곡되어 나타날 수 있습니다.**

mdn 사이트에서는 왜곡이 발생했다면 canvas 속성에서 width와 height 속성을 명시적으로 지정하라고 되어있습니다.

**또한 닫는 태그(<\/canvas>)가 필수입니다!!** 닫는 태그가 없다면 나머지 부분이 보이지 않습니다.

## 설정

먼저 html파일에 css와 js파일을 연결해줍니다.

이후 css파일에는 [reset.css](https://meyerweb.com/eric/tools/css/reset/)를 적용시키고

app.js는 다음과 같이 설정을 완료합니다.

설정은 [Interactive Developer]()님의 영상을 참고했습니다.

```js
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
}

window.onload = () => {
  new App();
};
```

## 그리드

<div style="display:flex; flex-direction: column; align-items: center;">
<img src="https://mdn.mozillademos.org/files/224/Canvas_default_grid.png" />

<span>출처 : mdn</span>

</div>

위 사진과 같이 canvas의 기본 그리드의 원점(0, 0)은 좌측 상단입니다.

모든 요소들은 이 원점을 기준으로 위치됩니다.

## 직사각형을 그리기 위한 메서드

canvas는 오직 직사각형 도형만 제공합니다.

이외의 다른 도형들은 무조건 하나 혹은 하나 이상의 path와 여러 저믕로 이어진 선으로 만들어집니다.

1. `fillRect(x, y, width, height)`

[reference](https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/fillRect)

> 현재 설정된 fillStyle에 따라 정해진 크기의 직사각형 내부를 채웁니다.

x, y는 그리드상의 좌표이며

width는 양수라면 오른쪽 방향, 음수면 왼쪽 방향입니다.

height는 양수라면 아래쪽 방향, 음수면 위쪽 방향입니다.

크기는 |width| \* |height|가 됩니다.

<br/>

<br/>

2. `strokeRect(x, y, width, height)`

[reference](https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/strokeRect)

> 현재 설정된 strokeStyle에 따라 직사각형의 테두리를 그립니다.

x, y는 그리드상의 좌표이며

width는 양수라면 오른쪽 방향, 음수면 왼쪽 방향입니다.

height는 양수라면 아래쪽 방향, 음수면 위쪽 방향입니다.

크기는 |width| \* |height|가 됩니다.

<br/>

<br/>

3. `clearRect(x, y, width, height)`

[reference](https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/clearRect)

> 지정된 좌표에서 지정된 크기만큼의 직사각형 영역을 투명하게( transparent black, rgba(0,0,0,0) ) 만듭니다.

x, y는 그리드상의 좌표이며

width는 양수라면 오른쪽 방향, 음수면 왼쪽 방향입니다.

height는 양수라면 아래쪽 방향, 음수면 위쪽 방향입니다.

크기는 |width| \* |height|가 됩니다.
