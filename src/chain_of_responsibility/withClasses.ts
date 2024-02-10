// Handler interface
interface CodeReviewHandler {
  setNextHandler(handler: CodeReviewHandler): CodeReviewHandler;
  reviewCode(code: string, aspect: string): void;
}

// Concrete Handlers
class SyntaxReviewHandler implements CodeReviewHandler {
  private nextHandler: CodeReviewHandler | null = null;

  setNextHandler(handler: CodeReviewHandler): CodeReviewHandler {
    this.nextHandler = handler;
    return handler;
  }

  reviewCode(code: string, aspect: string): void {
    if (aspect === 'syntax') {
      console.log('Syntax review passed.');
    } else if (this.nextHandler) {
      console.log('Syntax review failed. Escalating to next handler...');
      this.nextHandler.reviewCode(code, aspect);
    } else {
      console.log('Syntax review failed. No more handlers to escalate to');
    }
  }
}

class ArchitectureReviewHandler implements CodeReviewHandler {
  private nextHandler: CodeReviewHandler | null = null;

  setNextHandler(handler: CodeReviewHandler): CodeReviewHandler {
    this.nextHandler = handler;
    return handler;
  }

  reviewCode(code: string, aspect: string): void {
    if (aspect === 'architecture') {
      console.log('Architecture review passed.');
    } else if (this.nextHandler) {
      console.log('Architecture review failed. Escalating to next handler...');
      this.nextHandler.reviewCode(code, aspect);
    } else {
      console.log('Architecture review failed. No more handlers to escalate to');
    }
  }
}

class SecurityReviewHandler implements CodeReviewHandler {
	private nextHandler: CodeReviewHandler | null = null;

  setNextHandler(handler: CodeReviewHandler): CodeReviewHandler {
    this.nextHandler = handler;
    return handler;
  }

  reviewCode(code: string, aspect: string): void {
    if (aspect === 'security') {
      console.log('Security review passed.');
    } else if (this.nextHandler) {
      console.log('Security review failed. Escalating to next handler...');
      this.nextHandler.reviewCode(code, aspect);
    } else {
      console.log('Security review failed. No more handlers to escalate to');
    }
  }
}

export default () => {
	if (false) {
		const syntaxHandler = new SyntaxReviewHandler();
		const architectureHandler = new ArchitectureReviewHandler();
		const securityHandler = new SecurityReviewHandler();

		syntaxHandler.setNextHandler(architectureHandler).setNextHandler(securityHandler);
		// Example code to review
		const codeSnippet = `
		function add(a, b) {
			return a + b;
		}
		`;

		// Perform code reviews
		console.log('Performing code reviews...');
		syntaxHandler.reviewCode(codeSnippet, 'syntax');
		console.log();
		syntaxHandler.reviewCode(codeSnippet, 'architecture');
		console.log();
		syntaxHandler.reviewCode(codeSnippet, 'security');
	}
};
