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

  const withMemory = (memorySize: number) => {
    memory = memorySize;
    return builder;
  };

  const withStorage = (storageSize: number) => {
    storage = storageSize;
    return builder;
  };

  const withGraphicsCard = (card: string) => {
    graphicsCard = card;
    return builder;
  };

  const withMonitor = (monitorSpec: string) => {
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
    withMemory,
    withStorage,
    withGraphicsCard,
    withMonitor,
    build
  };

  return builder;
};

export default () => {
  if (false) {
    // Example usage
    const gamingComputer = createComputerBuilder("Gaming Motherboard", "Intel i7")
      .withMemory(16)
      .withStorage(1000)
      .withGraphicsCard("NVIDIA RTX 3080")
      .withMonitor("27-inch 4K")
      .build();

    const officeComputer = createComputerBuilder("Office Motherboard", "Intel i5")
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
};
