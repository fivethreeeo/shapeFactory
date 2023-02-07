- 클래스 상속(확장) 연습

#### 실행

```js
node app
```

<br>

#### 구조

- `app.js` : 프로그램 실행
- `class: Console` : 프로그램을 돌리는 콘솔. 입력된 명령어를 `ShapeFactory`에게 실행 요청, 결과 값을 `printer`로 출력 요청
- `class: ShapeFactory` : `Console`에서 요청받은 명령어를 실행.
- `class: Shape` : shape의 최상위 클래스. `Point`, `Line`, `Triangle`, `Rectangle`, `Polygon` 을 자식 클래스 갖는다.
- `printer.js` : 출력기 모음
