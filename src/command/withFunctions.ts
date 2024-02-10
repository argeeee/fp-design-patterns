// Type definition for TextEditor
type TextEditor = {
  insertText(text: string): void;
  deleteText(length: number): void;
  getText(): string;
};

// Command interface
type Command = {
  execute(): void;
  undo(): void;
};

// Type definition for CommandInvoker
type CommandInvoker = {
  executeCommand(command: Command): void;
  undoLastCommand(): void;
};

// Receiver: TextEditor
const createTextEditor = (): TextEditor => {
  let text: string = '';

  return {
		insertText: (newText) => text += newText,
		deleteText: (length) => (text = text.slice(0, -length)),
		getText: () => text,
	};
};

// Concrete Command: InsertCommand
const createInsertCommand = (editor: TextEditor, text: string): Command => ({
  execute: () => editor.insertText(text),
  undo: () => editor.deleteText(text.length),
});

// Concrete Command: DeleteCommand
const createDeleteCommand = (editor: TextEditor, length: number): Command => {
  let deletedText: string = '';
  return {
    execute: () => {
      deletedText = editor.getText().slice(-length);
      editor.deleteText(length);
    },
    undo: () => editor.insertText(deletedText),
  };
};

// Invoker: CommandInvoker
const createCommandInvoker = (): CommandInvoker => {
  const history: Command[] = [];

	return {
		executeCommand: (command: Command): void => {
			command.execute();
			history.push(command);
		},
		undoLastCommand: (): void => {
			const lastCommand = history.pop();
			if (lastCommand) {
				lastCommand.undo();
			}
		},
	};

};

export default () => {
  if (false) {
    // Usage
    const textEditor = createTextEditor();
    const commandInvoker = createCommandInvoker();

    // Insert text
    const insertCommand1 = createInsertCommand(textEditor, 'Hello, ');
    commandInvoker.executeCommand(insertCommand1);

    const insertCommand2 = createInsertCommand(textEditor, 'world! ');
    commandInvoker.executeCommand(insertCommand2);

    console.log('Current text:', textEditor.getText()); // Output: Hello, world!

    // Delete text
    const deleteCommand = createDeleteCommand(textEditor, 6);
    commandInvoker.executeCommand(deleteCommand);

    console.log('Current text:', textEditor.getText()); // Output: Hello,

    // Undo last command
    commandInvoker.undoLastCommand();

    console.log('Current text after undo:', textEditor.getText()); // Output: Hello, world!
  }
};
