// Flyweight: GraphicElement
type GraphicElement = {
	draw: (x: number, y: number) => void;
};

// Concrete Flyweight: Circle
const createCircle = (radius: number, color: string): GraphicElement => ({
	draw: (x: number, y: number): void => {
		console.log(`Drawing circle at (${x}, ${y}) with radius ${radius} and color ${color}`);
	}
});

// Concrete Flyweight: Square
const createSquare = (sideLength: number, color: string): GraphicElement => ({
	draw: (x: number, y: number): void => {
		console.log(`Drawing square at (${x}, ${y}) with side length ${sideLength} and color ${color}`);
	}
});

// FlyweightFactory: GraphicFactory
const createGraphicFactory = () => {
	const graphics: { [key: string]: GraphicElement } = {};

	const getCircle = (radius: number, color: string): GraphicElement => {
		const key = `Circle-${radius}-${color}`;
		if (!graphics[key]) {
			console.log(`Creating new circle with radius ${radius} and color ${color}`);
			graphics[key] = createCircle(radius, color);
		}
		return graphics[key];
	};

	const getSquare = (sideLength: number, color: string): GraphicElement => {
		const key = `Square-${sideLength}-${color}`;
		if (!graphics[key]) {
			console.log(`Creating new square with side length ${sideLength} and color ${color}`);
			graphics[key] = createSquare(sideLength, color);
		}
		return graphics[key];
	};

	return { getCircle, getSquare };
};

export default () => {
	if (false) {
		// Example usage
		const graphicFactory = createGraphicFactory();

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
};
