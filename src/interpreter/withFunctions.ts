// Context
type Context = {
  variables: { [key: string]: number };
  setVariable(name: string, value: number): void;
  getVariable(name: string): number;
};

const createContext = (): Context => {
  const variables: { [key: string]: number } = {};

  const setVariable = (name: string, value: number): void => {
    variables[name] = value;
  };

  const getVariable = (name: string): number => {
    return variables[name];
  };

  return {
    variables,
    setVariable,
    getVariable
  };
};

// Abstract Expression
type Expression = {
  interpret(context: Context): number;
};

// Terminal Expression: NumberExpression
const createNumberExpression = (value: number): Expression => ({
  interpret: (context: Context): number => value
});

// Non-terminal Expression: AdditionExpression
const createAdditionExpression = (left: Expression, right: Expression): Expression => ({
  interpret: (context: Context): number => left.interpret(context) + right.interpret(context)
});

// Non-terminal Expression: SubtractionExpression
const createSubtractionExpression = (left: Expression, right: Expression): Expression => ({
  interpret: (context: Context): number => left.interpret(context) - right.interpret(context)
});

// Non-terminal Expression: VariableExpression
const createVariableExpression = (name: string): Expression => ({
  interpret: (context: Context): number => context.getVariable(name)
});

export default () => {
  if (false) {
    const context = createContext();
    context.setVariable('x', 10);
    context.setVariable('y', 5);

    // Expression: x + y
    const expression1 = createAdditionExpression(
      createVariableExpression('x'),
      createVariableExpression('y')
    );
    console.log('x + y =', expression1.interpret(context)); // Output: x + y = 15

    // Expression: x - y
    const expression2 = createSubtractionExpression(
      createVariableExpression('x'),
      createVariableExpression('y')
    );
    console.log('x - y =', expression2.interpret(context)); // Output: x - y = 5

    // Expression: (x + y) - 2
    const expression3 = createSubtractionExpression(
      createAdditionExpression(
        createVariableExpression('x'),
        createVariableExpression('y')
      ),
      createNumberExpression(2)
    );
    console.log('(x + y) - 2 =', expression3.interpret(context)); // Output: (x + y) - 2 = 13
  }
};
