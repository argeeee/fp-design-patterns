// Flyweight: GraphicElement
interface GraphicElement {
	draw(x: number, y: number): void;
}

// Concrete Flyweight: Circle
class Circle implements GraphicElement {
	private radius: number;
	private color: string;

	constructor(radius: number, color: string) {
		this.radius = radius;
		this.color = color;
	}

	draw(x: number, y: number): void {
		console.log(`Drawing circle at (${x}, ${y}) with radius ${this.radius} and color ${this.color}`);
	}
}

// Concrete Flyweight: Square
class Square implements GraphicElement {
	private sideLength: number;
	private color: string;

	constructor(sideLength: number, color: string) {
		this.sideLength = sideLength;
		this.color = color;
	}

	draw(x: number, y: number): void {
		console.log(`Drawing square at (${x}, ${y}) with side length ${this.sideLength} and color ${this.color}`);
	}
}

// FlyweightFactory: GraphicFactory
class GraphicFactory {
	private graphics: { [key: string]: GraphicElement } = {};

	getCircle(radius: number, color: string): GraphicElement {
		const key = `Circle-${radius}-${color}`;
		if (!this.graphics[key]) {
			console.log(`Creating new circle with radius ${radius} and color ${color}`);
			this.graphics[key] = new Circle(radius, color);
		}
		return this.graphics[key];
	}

	getSquare(sideLength: number, color: string): GraphicElement {
		const key = `Square-${sideLength}-${color}`;
		if (!this.graphics[key]) {
			console.log(`Creating new square with side length ${sideLength} and color ${color}`);
			this.graphics[key] = new Square(sideLength, color);
		}
		return this.graphics[key];
	}
}

export default () => {
	if (false) {
		// Example usage
    const graphicFactory = new GraphicFactory();

		// Using flyweight to create and draw graphics
		const circle1 = graphicFactory.getCircle(5, "red");
		circle1.draw(10, 10);

		const circle2 = graphicFactory.getCircle(5, "red"); // Reusing existing flyweight object
		circle2.draw(20, 20);

		const square1 = graphicFactory.getSquare(10, "blue");
		square1.draw(30, 30);

		const square2 = graphicFactory.getSquare(10, "blue"); // Reusing existing flyweight object
		square2.draw(40, 40);
	}
}