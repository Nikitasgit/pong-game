class Shape {
  #y;
  #x;
  #color;
  constructor(x, y, color) {
    this.x = x;
    this.y = y;
    this.color = color;
  }
  get x() {
    return this.#x;
  }
  set x(x) {
    return (this.#x = x);
  }
  get y() {
    return this.#y;
  }
  set y(y) {
    return (this.#y = y);
  }
  get color() {
    return this.#color;
  }
  set color(color) {
    return (this.#color = color);
  }
}

export default Shape;
