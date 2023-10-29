abstract class DataProcessorTemplate {
  abstract readData(): string[];
  abstract processData(data: string[]): void;

  templateMethod(): void {
    const data = this.readData();
    this.processData(data);
  }
}

class CSVDataProcessor extends DataProcessorTemplate {
  readData(): string[] {
    console.log("Reading data from a CSV file...");
    return ["John, Doe", "Jane, Smith", "Alice, Johnson"];
  }

  processData(data: string[]): void {
    console.log("Processing CSV data:");
    data.forEach((line) => {
      const [firstName, lastName] = line.split(", ");
      console.log(` - First Name: ${firstName}, Last Name: ${lastName}`);
    });
  }
}

class JSONDataProcessor extends DataProcessorTemplate {
  readData(): string[] {
    console.log("Reading data from a JSON file...");
    return ['{"name": "John", "age": 30}', '{"name": "Alice", "age": 25}'];
  }

  processData(data: string[]): void {
    console.log("Processing JSON data:");
    data.forEach((json) => {
      const obj = JSON.parse(json);
      console.log(` - Name: ${obj.name}, Age: ${obj.age}`);
    });
  }
}

export default () => {
	if (false) {
		// Example usage
    const csvProcessor = new CSVDataProcessor();
    console.log("Processing CSV Data:");
    csvProcessor.templateMethod();

    const jsonDataProcessor = new JSONDataProcessor();
    console.log("\nProcessing JSON Data:");
    jsonDataProcessor.templateMethod();
	}
}
