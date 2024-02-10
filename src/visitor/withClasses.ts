// Abstract syntax tree nodes
interface Expression {
  accept(visitor: ExpressionVisitor): void;
}

class NumberExpression implements Expression {
  constructor(private value: number) {}

  accept(visitor: ExpressionVisitor): void {
    visitor.visitNumberExpression(this);
  }

  getValue(): number {
    return this.value;
  }
}

class AdditionExpression implements Expression {
  constructor(private left: Expression, private right: Expression) {}

  accept(visitor: ExpressionVisitor): void {
    visitor.visitAdditionExpression(this);
  }

  getLeft(): Expression {
    return this.left;
  }

  getRight(): Expression {
    return this.right;
  }
}

// Visitors
interface ExpressionVisitor {
  visitNumberExpression(expression: NumberExpression): void;
  visitAdditionExpression(expression: AdditionExpression): void;
}

class Evaluator implements ExpressionVisitor {
  private result: number = 0;

  visitNumberExpression(expression: NumberExpression): void {
    this.result = expression.getValue();
  }

  visitAdditionExpression(expression: AdditionExpression): void {
    expression.getLeft().accept(this);
    const leftValue = this.result;
    expression.getRight().accept(this);
    const rightValue = this.result;
    this.result = leftValue + rightValue;
  }

  getResult(): number {
    return this.result;
  }
}

class Stringifier implements ExpressionVisitor {
  private result: string = '';

  visitNumberExpression(expression: NumberExpression): void {
    this.result += expression.getValue().toString();
  }

  visitAdditionExpression(expression: AdditionExpression): void {
    this.result += '(';
    expression.getLeft().accept(this);
    this.result += ' + ';
    expression.getRight().accept(this);
    this.result += ')';
  }

  getResult(): string {
    return this.result;
  }
}

export default () => {
	if (false) {
		const expression = new AdditionExpression(
			new NumberExpression(5),
			new AdditionExpression(
				new NumberExpression(3),
				new NumberExpression(2)
			)
		);

		const evaluator = new Evaluator();
		expression.accept(evaluator);
		console.log('Result:', evaluator.getResult()); // Output: Result: 10

		const stringifier = new Stringifier();
		expression.accept(stringifier);
		console.log('Stringified expression:', stringifier.getResult()); // Output: Stringified expression: (5 + (3 + 2))
	}
}
