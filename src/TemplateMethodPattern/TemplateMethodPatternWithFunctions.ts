type DataReader = () => string[];
type DataProcessor = (data: string[]) => void;

function processDataTemplate(readData: DataReader, processData: DataProcessor) {
  const data = readData();
  processData(data);
}

const readCSVData: DataReader = () => {
  console.log("Reading data from a CSV file...");
  return ["John, Doe", "Jane, Smith", "Alice, Johnson"];
};

const processCSVData: DataProcessor = (data: string[]) => {
  console.log("Processing CSV data:");
  data.forEach((line) => {
    const [firstName, lastName] = line.split(", ");
    console.log(` - First Name: ${firstName}, Last Name: ${lastName}`);
  });
};

const readJSONData: DataReader = () => {
  console.log("Reading data from a JSON file...");
  return ['{"name": "John", "age": 30}', '{"name": "Alice", "age": 25}'];
};

const processJSONData: DataProcessor = (data: string[]) => {
  console.log("Processing JSON data:");
  data.forEach((json) => {
    const obj = JSON.parse(json);
    console.log(` - Name: ${obj.name}, Age: ${obj.age}`);
  });
};

export default () => {
	if (false) {
		// Example usage
		console.log("Processing CSV Data:");
		processDataTemplate(readCSVData, processCSVData);

		console.log("\nProcessing JSON Data:");
		processDataTemplate(readJSONData, processJSONData);
	}
}

