// Product: Computer
class Computer {
	private motherboard: string;
	private processor: string;
	private memory: number;
	private storage: number;
	private graphicsCard: string;
	private monitor: string;

	constructor(builder: ComputerBuilder) {
		this.motherboard = builder.motherboard;
		this.processor = builder.processor;
		this.memory = builder.memory;
		this.storage = builder.storage;
		this.graphicsCard = builder.graphicsCard;
		this.monitor = builder.monitor;
	}

	display(): void {
		console.log([
			'Computer Configuration:',
			`Motherboard: ${this.motherboard}`,
			`Processor: ${this.processor}`,
			`Memory: ${this.memory} GB`,
			`Storage: ${this.storage} GB`,
			`Graphics Card: ${this.graphicsCard}`,
			`Monitor: ${this.monitor}`,
		].join('\n\t'));
	}
}

// Builder: ComputerBuilder
class ComputerBuilder {
	motherboard: string;
	processor: string;
	memory: number = 4;
	storage: number = 256;
	graphicsCard: string = "";
	monitor: string = "";

	constructor(motherboard: string, processor: string) {
		this.motherboard = motherboard;
		this.processor = processor;
	}

	setMemory(memory: number): ComputerBuilder {
		this.memory = memory;
		return this;
	}

	setStorage(storage: number): ComputerBuilder {
		this.storage = storage;
		return this;
	}

	setGraphicsCard(graphicsCard: string): ComputerBuilder {
		this.graphicsCard = graphicsCard;
		return this;
	}

	setMonitor(monitor: string): ComputerBuilder {
		this.monitor = monitor;
		return this;
	}

	build(): Computer {
		return new Computer(this);
	}
}

export default () => {
	if (false) {
		// Example usage
		const gamingComputer = new ComputerBuilder("Gaming Motherboard", "Intel i7")
			.setMemory(16)
			.setStorage(1000)
			.setGraphicsCard("NVIDIA RTX 3080")
			.setMonitor("27-inch 4K")
			.build();

		const officeComputer = new ComputerBuilder("Office Motherboard", "Intel i5")
			.setMemory(8)
			.setStorage(500)
			.setGraphicsCard("Integrated")
			.setMonitor("24-inch 1080p")
			.build();

		// Display computer configurations
		console.log("Gaming Computer:");
		gamingComputer.display();

		console.log("Office Computer:");
		officeComputer.display();
	}
}
