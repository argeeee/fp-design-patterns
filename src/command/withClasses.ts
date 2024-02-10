// Command interface
interface Command {
  execute(): void;
  undo(): void;
}

// Receiver: TextEditor
class TextEditor {
  private text: string = '';

  insertText(text: string): void {
    this.text += text;
  }

  deleteText(length: number): void {
    this.text = this.text.slice(0, -length);
  }

  getText(): string {
    return this.text;
  }
}

// Concrete Command: InsertCommand
class InsertCommand implements Command {
  constructor(private editor: TextEditor, private text: string) {}

  execute(): void {
    this.editor.insertText(this.text);
  }

  undo(): void {
    this.editor.deleteText(this.text.length);
  }
}

// Concrete Command: DeleteCommand
class DeleteCommand implements Command {
  private deletedText: string = '';

  constructor(private editor: TextEditor, private length: number) {}

  execute(): void {
    this.deletedText = this.editor.getText().slice(-this.length);
    this.editor.deleteText(this.length);
  }

  undo(): void {
    this.editor.insertText(this.deletedText);
  }
}

// Invoker: CommandInvoker
class CommandInvoker {
  private history: Command[] = [];

  executeCommand(command: Command): void {
    command.execute();
    this.history.push(command);
  }

  undoLastCommand(): void {
    const lastCommand = this.history.pop();
    if (lastCommand) {
      lastCommand.undo();
    }
  }
}

export default () => {
  if (false) {
		// Usage
		const textEditor = new TextEditor();
		const commandInvoker = new CommandInvoker();

		// Insert text
		const insertCommand1 = new InsertCommand(textEditor, 'Hello, ');
		commandInvoker.executeCommand(insertCommand1);

		const insertCommand2 = new InsertCommand(textEditor, 'world! ');
		commandInvoker.executeCommand(insertCommand2);

		console.log('Current text:', textEditor.getText()); // Output: Hello, world!

		// Delete text
		const deleteCommand = new DeleteCommand(textEditor, 6);
		commandInvoker.executeCommand(deleteCommand);

		console.log('Current text:', textEditor.getText()); // Output: Hello,

		// Undo last command
		commandInvoker.undoLastCommand();

		console.log('Current text after undo:', textEditor.getText()); // Output: Hello, world!
  }
};
