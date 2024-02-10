// Interface for the prototype
type Graphic = {
  clone(): Graphic;
  draw(): void;
};

// Concrete prototype: Rectangle
const createRectangle = (width: number, height: number): Graphic => ({
  clone: () => createRectangle(width, height),
  draw: () => console.log(`Drawing a Rectangle with width ${width} and height ${height}`)
});

// Concrete prototype: Circle
const createCircle = (radius: number): Graphic => ({
  clone: () => createCircle(radius),
  draw: () => console.log(`Drawing a Circle with radius ${radius}`)
});

const prototypeRegistry: { [key: string]: Graphic } = {
  rectangle: createRectangle(100, 50),
  circle: createCircle(30)
};

const createAndDrawGraphic = (type: string): void => {
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
