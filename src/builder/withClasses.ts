// Product: Computer
class Computer {
	constructor(
		private motherboard: string,
		private processor: string,
		private memory: number,
		private storage: number,
		private graphicsCard: string,
		private monitor: string,
	) {}

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

	withMemory(memory: number): ComputerBuilder {
		this.memory = memory;
		return this;
	}

	withStorage(storage: number): ComputerBuilder {
		this.storage = storage;
		return this;
	}

	withGraphicsCard(graphicsCard: string): ComputerBuilder {
		this.graphicsCard = graphicsCard;
		return this;
	}

	withMonitor(monitor: string): ComputerBuilder {
		this.monitor = monitor;
		return this;
	}

	build(): Computer {
		return new Computer(
			this.motherboard,
			this.processor,
			this.memory,
			this.storage,
			this.graphicsCard,
			this.monitor,
		);
	}
}

export default () => {
	if (true) {
		// Example usage
		const gamingComputer = new ComputerBuilder("Gaming Motherboard", "Intel i7")
			.withMemory(16)
			.withStorage(1000)
			.withGraphicsCard("NVIDIA RTX 3080")
			.withMonitor("27-inch 4K")
			.build();

		const officeComputer = new ComputerBuilder("Office Motherboard", "Intel i5")
			.withMemory(8)
			.withStorage(500)
			.withGraphicsCard("Integrated")
			.withMonitor("24-inch 1080p")
			.build();

		// Display computer configurations
		console.log("Gaming Computer:");
		gamingComputer.display();

		console.log("Office Computer:");
		officeComputer.display();
	}
}
