import Point from './point.js';
import { Line, Triangle, Rectangle, Polygon } from './shape.js';

export default class ShapeFactory {
  static run(commandLine) {
    if (!this.isValid(commandLine)) throw Error('format');

    const points = this.getPoints(commandLine);
    const shape = this.getShape(points);
    return shape;
  }

  static isValid(line) {
    const pattern = /^\(([0-9]{1}|1[0-9]{1}|2[0-4]{1})\,([0-9]{1}|1[0-9]{1}|2[0-4]{1})\)$/;
    const splited = line.split('-');
    const boolean = splited.every((value) => value.match(pattern));

    return boolean;
  }

  static getPoints(line) {
    const points = line
      .replace(/\(|\)/g, '')
      .split('-')
      .map((coordinate) => coordinate.split(','));

    return points.map((coordinate) => new Point(coordinate[0], coordinate[1]));
  }

  static getShape(points) {
    if (points.length === 1) throw Error('one points');
    if (points.length > 5) throw Error('over points');

    if (points.length === 2) return new Line(points);
    if (points.length === 3) return new Triangle(points);
    if (points.length === 4) return new Rectangle(points);
    if (points.length === 5) return new Polygon(points);
  }
}
