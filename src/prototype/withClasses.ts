// Interface for the prototype
interface Graphic {
  clone(): Graphic;
  draw(): void;
}

// Concrete prototype: Rectangle
class Rectangle implements Graphic {
  constructor(private width: number, private height: number) {}

  clone(): Graphic {
    return new Rectangle(this.width, this.height);
  }

  draw(): void {
    console.log(`Drawing a Rectangle with width ${this.width} and height ${this.height}`);
  }
}

// Concrete prototype: Circle
class Circle implements Graphic {
  constructor(private radius: number) {}

  clone(): Graphic {
    return new Circle(this.radius);
  }

  draw(): void {
    console.log(`Drawing a Circle with radius ${this.radius}`);
  }
}

const prototypeRegistry: { [key: string]: Graphic } = {
  rectangle: new Rectangle(100, 50),
  circle: new Circle(30)
};

function createAndDrawGraphic(type: string): void {
  const prototype = prototypeRegistry[type];
  if (prototype) {
    const graphic = prototype.clone();
    graphic.draw();
  } else {
    console.log(`Graphic of type '${type}' not found in the registry.`);
  }
}

export default () => {
	if (false) {
		// Example usage
		createAndDrawGraphic('rectangle');
		createAndDrawGraphic('circle');
	}
}