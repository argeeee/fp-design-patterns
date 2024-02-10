// Originator interface
interface Editor {
  getContent(): string;
  setContent(content: string): void;
  createMemento(): Memento;
  restoreMemento(memento: Memento): void;
}

// Originator function
const createEditor = (): Editor => {
  let content: string = "";

  return {
		getContent: (): string => content,
		setContent: (newContent: string): void => {
			content = newContent;
		},
		createMemento: (): Memento => createMemento(content),
		restoreMemento: (memento: Memento): void => {
			content = memento.getContent();
		},
	};
};

// Memento interface
interface Memento {
  getContent(): string;
  getDate(): string;
}

// Memento function
const createMemento = (state: string): Memento => ({
  getContent: (): string => state,
  getDate: (): string => new Date().toString()
});

// History interface
interface History {
  addMemento(memento: Memento): void;
  getMemento(index: number): Memento;
}

// History function
const createHistory = (): History => {
  const mementos: Memento[] = [];

  return {
		addMemento: (memento: Memento): void => {
			mementos.push(memento);
		},
		getMemento: (index: number): Memento => mementos[index],
	};
};

export default () => {
  if (false) {
    // Example usage
    const editor = createEditor();
    const history = createHistory();

    // Type some content and save it to the history
    editor.setContent("First content");
    history.addMemento(editor.createMemento());

    // Type some new content and save it to the history
    editor.setContent("Second content");
    history.addMemento(editor.createMemento());

    // Type some more new content
    editor.setContent("Third content");

    // Restore to the first saved state
    editor.restoreMemento(history.getMemento(0));

    console.log(editor.getContent()); // Output: First content
  }
};
