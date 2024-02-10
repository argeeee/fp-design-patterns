// Abstract syntax tree nodes
type Expression = {
  accept(visitor: ExpressionVisitor): void;
};

type NumberExpression = Expression & { value: number };

type AdditionExpression = Expression & {
  left: Expression;
  right: Expression;
};

// Visitors
type ExpressionVisitor = {
  visitNumberExpression(expression: NumberExpression): void;
  visitAdditionExpression(expression: AdditionExpression): void;
};

type Evaluator = ExpressionVisitor & { getResult(): number };
type Stringifier = ExpressionVisitor & { getResult(): string };

const createEvaluator = (): Evaluator => {
  let result: number = 0;

  const visitNumberExpression = (expression: NumberExpression): void => {
    result = expression.value;
  };

  const visitAdditionExpression = (expression: AdditionExpression): void => {
    expression.left.accept(visitor);
    const leftValue = result;
    expression.right.accept(visitor);
    const rightValue = result;
    result = leftValue + rightValue;
  };

  const getResult = (): number => result;

  const visitor = { visitNumberExpression, visitAdditionExpression };
  return { ...visitor, getResult };
};

const createStringifier = (): Stringifier => {
  let result: string = '';

  const visitNumberExpression = (expression: NumberExpression): void => {
    result += expression.value.toString();
  };

  const visitAdditionExpression = (expression: AdditionExpression): void => {
    result += '(';
    expression.left.accept(visitor);
    result += ' + ';
    expression.right.accept(visitor);
    result += ')';
  };

  const getResult = (): string => result;

  const visitor = { visitNumberExpression, visitAdditionExpression };
  return { ...visitor, getResult };
};

const createAdditionExpression = (left: Expression, right: Expression): AdditionExpression => ({
  accept(visitor: ExpressionVisitor) {
    visitor.visitAdditionExpression(this);
  },
  left, right,
});

const createNumberExpression = (value: number): NumberExpression => ({
  accept(visitor: ExpressionVisitor) {
    visitor.visitNumberExpression(this);
  },
  value
});

export default () => {
  if (false) {
		const expression = createAdditionExpression(
			createNumberExpression(5),
			createAdditionExpression(
				createNumberExpression(3),
				createNumberExpression(2)
			)
		);

    const evaluator = createEvaluator();
    expression.accept(evaluator);
    console.log('Result:', evaluator.getResult()); // Output: Result: 10

    const stringifier = createStringifier();
    expression.accept(stringifier);
    console.log('Stringified expression:', stringifier.getResult()); // Output: Stringified expression: (5 + (3 + 2))
  }
};
