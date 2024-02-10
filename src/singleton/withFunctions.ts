type Config = { [key: string]: string };

const createConfigurationManager = () => {
  let instance: Config | null = null;

  return () => {
    if (instance === null) {
      instance = {
        apiKey: "your-api-key",
        apiUrl: "https://api.example.com",
        maxConnections: "10",
      };
    }
    return instance;
  };
};

export default () => {
	if (false) {
		// Example usage
		const getConfigManager = createConfigurationManager();

		console.log(getConfigManager() === getConfigManager()); // Output will be true, as both instances are the same


		const apiKey = getConfigManager()["apiKey"];
		const apiUrl = getConfigManager()["apiUrl"];

		console.log("API Key:", apiKey);
		console.log("API URL:", apiUrl);
	}
}