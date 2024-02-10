// Product: Computer
type Computer = {
	motherboard: string;
	processor: string;
	memory: number;
	storage: number;
	graphicsCard: string;
	monitor: string;
	display(): void;
};

const createComputer = (
	motherboard: string,
	processor: string,
	memory: number,
	storage: number,
	graphicsCard: string,
	monitor: string,
): Computer => ({
	motherboard,
	processor,
	memory,
	storage,
	graphicsCard,
	monitor,
	display: function (): void {
		console.log([
			'Computer Configuration:',
			`Motherboard: ${motherboard}`,
			`Processor: ${processor}`,
			`Memory: ${memory} GB`,
			`Storage: ${storage} GB`,
			`Graphics Card: ${graphicsCard}`,
			`Monitor: ${monitor}`,
		].join('\n\t'));
	}
});

// Builder: ComputerBuilder
const createComputerBuilder = (motherboard: string, processor: string) => {
	let memory = 4;
	let storage = 256;
	let graphicsCard = "";
	let monitor = "";

	const setMemory = (memorySize: number) => {
		memory = memorySize;
		return builder;
	};

	const setStorage = (storageSize: number) => {
		storage = storageSize;
		return builder;
	};

	const setGraphicsCard = (card: string) => {
		graphicsCard = card;
		return builder;
	};

	const setMonitor = (monitorSpec: string) => {
		monitor = monitorSpec;
		return builder;
	};

	const build = (): Computer => createComputer(
		motherboard,
		processor,
		memory,
		storage,
		graphicsCard,
		monitor
	);

	const builder = {
		setMemory,
		setStorage,
		setGraphicsCard,
		setMonitor,
		build
	};

	return builder;
};

export default () => {
	if (false) {
		// Example usage
		const gamingComputer = createComputerBuilder("Gaming Motherboard", "Intel i7")
			.setMemory(16)
			.setStorage(1000)
			.setGraphicsCard("NVIDIA RTX 3080")
			.setMonitor("27-inch 4K")
			.build();

		const officeComputer = createComputerBuilder("Office Motherboard", "Intel i5")
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
};
