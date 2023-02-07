class Shape {
  constructor(points) {
    this.points = points;
    this.valueName = null;
    this.value = null;
  }
}

class Line extends Shape {
  constructor(points) {
    super(points);
    this.valueName = '두 점 사이의 거리';
    this.value = this.calculate();
  }

  calculate() {
    const [pointA, pointB] = this.points;
    return Line.getLength(pointA, pointB);
  }

  static getLength(a, b) {
    return Math.sqrt((a.X - b.X) ** 2 + (a.Y - b.Y) ** 2);
  }
}

class Triangle extends Shape {
  constructor(points) {
    super(points);
    this.valueName = '삼각형 넓이';
    this.value = this.calculate();
  }

  calculate() {
    const [pointA, pointB, pointC] = this.points;
    return Triangle.getArea(pointA, pointB, pointC);
  }

  static getArea(a, b, c) {
    const lengthA = Line.getLength(a, b);
    const lengthB = Line.getLength(b, c);
    const lengthC = Line.getLength(a, c);

    const s = (lengthA + lengthB + lengthC) / 2;
    return Math.sqrt(s * (s - lengthA) * (s - lengthC) * (s - lengthB));
  }
}

class Rectangle extends Shape {
  constructor(points) {
    super(points);
    this.valueName = '직사각형 넓이';
    this.value = this.calculate();
  }

  calculate() {
    const [pointA, pointB, pointC, pointD] = this.points;
    return Rectangle.getArea(pointA, pointB, pointC, pointD);
  }

  static getArea(a, b, c, d) {
    const lengthA = Line.getLength(a, b);
    const lengthB = Line.getLength(b, c);

    return lengthA * lengthB;
  }
}

class Polygon extends Shape {
  constructor(points) {
    super(points);
    this.valueName = '다각형 넓이';
    this.value = this.calculate();
  }

  calculate() {
    const [pointA, pointB, pointC, pointD, pointE] = this.points;
    return Rectangle.getArea(pointA, pointB, pointC, pointD, pointE);
  }

  static getArea(a, b, c, d, e) {
    const triangleAreaA = Triangle.getArea(a, b, c);
    const triangleAreaB = Triangle.getArea(a, b, d);
    const triangleAreaC = Triangle.getArea(a, d, e);

    return triangleAreaA + triangleAreaB + triangleAreaC;
  }
}

export { Shape, Line, Triangle, Rectangle, Polygon };
