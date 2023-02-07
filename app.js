import Console from './console.js';
import ShapeFactory from './shapeFactory.js';

const shapeConsole = new Console(ShapeFactory);
shapeConsole.onConsole();

/*
- (10,10)-(14,15)
- (10,10)-(14,15)-(20,8)
- (10,10)-(22,10)-(22,18)-(10,18)
- (0,0)-(6,0)-(6,6)-(3,12)-(0,6)

- 다각형, 직사각형의 예외처리 x

*/
