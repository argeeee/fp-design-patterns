// Context
class Context {
  private variables: { [key: string]: number } = {};

  setVariable(name: string, value: number): void {
    this.variables[name] = value;
  }

  getVariable(name: string): number {
    return this.variables[name];
  }
}

// Abstract Expression
interface Expression {
  interpret(context: Context): number;
}

// Terminal Expression: NumberExpression
class NumberExpression implements Expression {
  constructor(private value: number) {}

  interpret(context: Context): number {
    return this.value;
  }
}

// Non-terminal Expression: AdditionExpression
class AdditionExpression implements Expression {
  constructor(private left: Expression, private right: Expression) {}

  interpret(context: Context): number {
    return this.left.interpret(context) + this.right.interpret(context);
  }
}

// Non-terminal Expression: SubtractionExpression
class SubtractionExpression implements Expression {
  constructor(private left: Expression, private right: Expression) {}

  interpret(context: Context): number {
    return this.left.interpret(context) - this.right.interpret(context);
  }
}

// Non-terminal Expression: VariableExpression
class VariableExpression implements Expression {
  constructor(private name: string) {}

  interpret(context: Context): number {
    return context.getVariable(this.name);
  }
}

export default () => {
	if (false) {
		const context = new Context();
		context.setVariable('x', 10);
		context.setVariable('y', 5);

		// Expression: x + y
		const expression1: Expression = new AdditionExpression(
			new VariableExpression('x'),
			new VariableExpression('y')
		);
		console.log('x + y =', expression1.interpret(context)); // Output: x + y = 15

		// Expression: x - y
		const expression2: Expression = new SubtractionExpression(
			new VariableExpression('x'),
			new VariableExpression('y')
		);
		console.log('x - y =', expression2.interpret(context)); // Output: x - y = 5

		// Expression: (x + y) - 2
		const expression3: Expression = new SubtractionExpression(
			new AdditionExpression(
				new VariableExpression('x'),
				new VariableExpression('y')
			),
			new NumberExpression(2)
		);
		console.log('(x + y) - 2 =', expression3.interpret(context)); // Output: (x + y) - 2 = 13
	}
};
