// Enum for logic type
enum LogicType {
  AND = "AND",
  OR = "OR"
}

// Rule interface
interface Rule {
  evaluate(data: any): boolean;
}

// Concrete rules
class AgeRule implements Rule {
  constructor(private ageLimit: number) {}

  evaluate(data: any): boolean {
    return data.age >= this.ageLimit;
  }
}

class NameRule implements Rule {
  constructor(private validNames: string[]) {}

  evaluate(data: any): boolean {
    return this.validNames.includes(data.name);
  }
}

// Rules Engine
class RulesEngine {
  private rules: Rule[];
	private logic: LogicType;

  constructor(logic: LogicType = LogicType.AND) {
    this.rules = [];
		this.logic = logic;
  }

  addRule(rule: Rule): void {
    this.rules.push(rule);
  }

  executeRules(data: any): boolean {
    let passed = false;

    if (this.logic === LogicType.AND) {
      passed = this.rules.every(rule => rule.evaluate(data));
    } else if (this.logic === LogicType.OR) {
      passed = this.rules.some(rule => rule.evaluate(data));
    }

    return passed;
  }
}

export default () => {
	if (false) {
		// Example usage
		const rulesEngine = new RulesEngine(LogicType.AND);

		rulesEngine.addRule(new AgeRule(18));
		rulesEngine.addRule(new NameRule(["Alice", "Bob"]));

		const testData1 = { name: "Alice", age: 20 };
		const testData2 = { name: "Bob", age: 16 };
		const testData3 = { name: "Charlie", age: 25 };

		console.log("Test Data 1:", rulesEngine.executeRules(testData1));
		console.log("Test Data 2:", rulesEngine.executeRules(testData2));
		console.log("Test Data 3:", rulesEngine.executeRules(testData3));
	}
}