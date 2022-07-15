# [Canvas API] 2. 스타일 및 색상 적용하기

## 색상

도형에 색을 적용하는 경우 렌더링 하는 메서드에 따라 다른 스타일을 적용할 수 있습니다.

stroke 메서드를 사용한다면 strokeStyle에

fill 메서드를 사용한다면 fillStyle에 따로 색을 정해야합니다.

fillStyle과 strokeStyle의 기본 설정은 검은색입니다.

```js
ctx.fillStyle = color;

ctx.strokeStyle = color;
```

`color`가 될 수 있는 값은 [css의 color](https://developer.mozilla.org/ko/docs/Web/CSS/color_value), 그레디언트 객체 그리고 패턴 객체입니다.
