class Player {
  #position;
  #length;
  #width;
  #color;

  constructor(position, length, width, color) {
    this.position = position;
    this.color = color;
    this.length = length;
    this.width = width;
  }
  draw(context) {
    context.beginPath();
    context.rect(this.position.x, this.position.y, this.length, this.width);
    context.fillStyle = this.color;
    context.fill();
  }
  changePosition() {
    this.position.y += this.direction * this.velocity;
  }
  get position() {
    return this.#position;
  }

  set position(position) {
    if (
      !position ||
      typeof position.x !== "number" ||
      typeof position.y !== "number"
    ) {
      throw new Error("must have x and y properties of type number");
    }
    this.#position = position;
  }
  get color() {
    return this.#color;
  }

  set color(color) {
    if (typeof color !== "string" || !color.trim()) {
      throw new Error("must be of type string");
    }
    this.#color = color;
  }

  get length() {
    return this.#length;
  }
  set length(length) {
    if (length <= 0 || !Number) {
      throw new Error("length can't be less than 0 and must be a number");
    }
    return (this.#length = length);
  }
  get width() {
    return this.#width;
  }
  set width(width) {
    if (width <= 0 || !Number) {
      throw new Error("width can't be less than 0 and must be an number");
    }
    return (this.#width = width);
  }
}

export default Player;
