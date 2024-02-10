// Enum for logic type
enum LogicType {
  AND = "AND",
  OR = "OR"
}

// Type alias for Rule
type Rule = (data: any) => boolean;

// Concrete rules
const createAgeRule = (ageLimit: number): Rule => 
  (data: any): boolean => data.age >= ageLimit;

const createNameRule = (validNames: string[]): Rule =>
  (data: any): boolean => validNames.includes(data.name);

// Rules Engine
type RulesEngine = {
  addRule(rule: Rule): void;
  executeRules(data: any): void;
};

const createRulesEngine = (logic: LogicType = LogicType.AND): RulesEngine => {
  const rules: Rule[] = [];

  return {
		addRule: (rule: Rule): void => {
			rules.push(rule);
		},
		executeRules: (data: any): boolean => {
			let passed = false;

			if (logic === LogicType.AND) {
				passed = rules.every(rule => rule(data));
			} else if (logic === LogicType.OR) {
				passed = rules.some(rule => rule(data));
			}

			return passed;
		},
	}
};

export default () => {
	if (false) {
		// Example usage
		const rulesEngine = createRulesEngine(LogicType.AND);

		rulesEngine.addRule(createAgeRule(18));
		rulesEngine.addRule(createNameRule(["Alice", "Bob"]));

		const testData1 = { name: "Alice", age: 20 };
		const testData2 = { name: "Bob", age: 16 };
		const testData3 = { name: "Charlie", age: 25 };

		console.log("Test Data 1:", rulesEngine.executeRules(testData1));
		console.log("Test Data 2:", rulesEngine.executeRules(testData2));
		console.log("Test Data 3:", rulesEngine.executeRules(testData3));
	}
}