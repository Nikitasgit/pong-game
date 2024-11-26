class Ball {
  #position;
  #radius;
  #color;
  #direction;
  #velocity;

  constructor(position, radius, color, direction, velocity) {
    this.position = position;
    this.radius = radius;
    this.color = color;
    this.direction = direction;
    this.velocity = velocity;
  }

  draw(context) {
    context.beginPath();
    context.arc(this.position.x, this.position.y, this.radius, 0, Math.PI * 2);
    context.fillStyle = this.color;
    context.fill();
  }

  changeDirectionY() {
    this.direction.y *= -1;
  }
  changeDirectionX() {
    this.direction.x *= -1;
  }

  changePositionY() {
    this.position.y += this.direction.y * this.velocity;
  }
  changePositionX() {
    this.position.x += this.direction.x * this.velocity;
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

  get radius() {
    return this.#radius;
  }

  set radius(radius) {
    if (typeof radius !== "number" || radius <= 0) {
      throw new Error("Radius must be a positive number");
    }
    this.#radius = radius;
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

  get direction() {
    return this.#direction;
  }
  s;
  set direction(direction) {
    if (typeof direction.x !== "number" || typeof direction.y !== "number") {
      throw new Error("must have x and y properties of type number");
    }
    this.#direction = direction;
  }

  get velocity() {
    return this.#velocity;
  }

  set velocity(velocity) {
    if (typeof velocity !== "number" || velocity <= 0) {
      throw new Error("Velocity must be a positive number");
    }
    this.#velocity = velocity;
  }
}

export default Ball;
