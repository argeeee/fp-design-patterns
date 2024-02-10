// Originator class
class Editor {
  private content: string;

  constructor() {
    this.content = "";
  }

  getContent(): string {
    return this.content;
  }

  setContent(content: string): void {
    this.content = content;
  }

  createMemento(): Memento {
    return new ConcreteMemento(this.content);
  }

  restoreMemento(memento: Memento): void {
    this.content = memento.getContent();
  }
}

// Memento interface
interface Memento {
  getContent(): string;
  getDate(): string;
}

// Concrete Memento
class ConcreteMemento implements Memento {
  constructor(private state: string) {}

  getContent(): string {
    return this.state;
  }

  getDate(): string {
    return new Date().toString(); // For semplicity
  }
}

// Caretaker
class History {
  private mementos: Memento[] = [];

  addMemento(memento: Memento): void {
    this.mementos.push(memento);
  }

  getMemento(index: number): Memento {
    return this.mementos[index];
  }
}

export default () => {
  if (false) {
		// Example usage
		const editor = new Editor();
		const history = new History();

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
