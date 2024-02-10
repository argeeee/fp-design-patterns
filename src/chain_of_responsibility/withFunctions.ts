// Handler interface
type CodeReviewHandler = (code: string, aspect: string) => void;

// Concrete Handlers
const createSyntaxReviewHandler = (nextHandler: CodeReviewHandler | null = null): CodeReviewHandler => 
  (code: string, aspect: string): void => {
    if (aspect === 'syntax') {
      console.log('Syntax review passed.');
    } else if (nextHandler) {
      console.log('Syntax review failed. Escalating to next handler...');
      nextHandler(code, aspect);
    } else {
      console.log('No more handlers to escalate to. Review failed.');
    }
	};

const createArchitectureReviewHandler = (nextHandler: CodeReviewHandler | null = null): CodeReviewHandler =>
  (code: string, aspect: string): void => {
    if (aspect === 'architecture') {
      console.log('Architecture review passed.');
    } else if (nextHandler) {
      console.log('Architecture review failed. Escalating to next handler...');
      nextHandler(code, aspect);
    } else {
      console.log('No more handlers to escalate to. Review failed.');
    }
	};

const createSecurityReviewHandler = (nextHandler: CodeReviewHandler | null = null): CodeReviewHandler =>
  (code: string, aspect: string): void => {
    if (aspect === 'security') {
      console.log('Security review passed.');
    } else if (nextHandler) {
      console.log('Security review failed. Escalating to next handler...');
      nextHandler(code, aspect);
    } else {
      console.log('Security review failed. No more handlers to escalate to');
    }
  };

export default () => {
  if (false) {
    // Example code to review
    const codeSnippet = `
    function add(a, b) {
      return a + b;
    }
    `;

    // Perform code reviews
    console.log('Performing code reviews...');

    const syntaxHandler = createSyntaxReviewHandler(createArchitectureReviewHandler(createSecurityReviewHandler()));
    syntaxHandler(codeSnippet, 'syntax');
    console.log();
    syntaxHandler(codeSnippet, 'architecture');
    console.log();
    syntaxHandler(codeSnippet, 'security');
  }
};
