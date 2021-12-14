class Drop {
  constructor() {
    this.size = Math.random() * 5;
    this.posX = Math.random();
    this.delay = Math.random() * -20;
    this.animationDuration = 1.5 + Math.random() * 3;
    this.color = `linear-gradient(transparent, hsl(0, 0%, ${
      Math.random() * 100
    }%))`;
    this.element = null;
  }

  add(body) {
    if (this.element) return;
    this.element = document.createElement("i");
    this.element.classList.add("drop");
    this.element.style.zIndex = Math.random() > 0.5 ? -1 : 1;
    this.element.style.width = 0.2 + this.size + "px";
    this.element.style.left = this._computeLeft() + "px";
    this.element.style.animationDelay = this.delay + "s";
    this.element.style.animationDuration = this.animationDuration + "s";
    this.element.style.background = this.color;
    body.appendChild(this.element);
  }

  _computeLeft() {
    return Math.floor(this.posX * window.innerWidth);
  }

  update() {
    this.element.style.left = this._computeLeft() + "px";
  }

  static inside(body) {
    const d = new Drop();
    d.add(body);
    return d;
  }
}
