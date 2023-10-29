class ConfigManager {
  private static instance: ConfigManager | null = null;
  private config: { [key: string]: string } = {};

  private constructor() {
    // Private constructor to prevent external instantiation
    // Simulating loading configuration settings from a file or other source
    this.config = {
      apiKey: "your-api-key",
      apiUrl: "https://api.example.com",
      maxConnections: "10",
    };
  }

  static getInstance(): ConfigManager {
    if (ConfigManager.instance === null) {
      ConfigManager.instance = new ConfigManager();
    }
    return ConfigManager.instance;
  }

  getConfig(key: string): string | undefined {
    return this.config[key];
  }
}

export default () => {
	if (false) {
		// Example usage
		const configManager1 = ConfigManager.getInstance();
		const configManager2 = ConfigManager.getInstance();

		console.log(configManager1 === configManager2); // Output will be true, as both instances are the same

		const apiKey = configManager1.getConfig("apiKey");
		const apiUrl = configManager2.getConfig("apiUrl");

		console.log("API Key:", apiKey);
		console.log("API URL:", apiUrl);
	}
}
