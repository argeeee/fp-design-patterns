// Component: GraphicElement
interface GraphicElement {
	render(indentation?: number): void;
}

// Leaf: Button
class Button implements GraphicElement {
	private label: string;

	constructor(label: string) {
		this.label = label;
	}

	render(indentation: number = 0): void {
		console.log(`${" ".repeat(indentation)}Button(label: ${this.label})`);
	}
}

// Leaf: TextBox
class TextBox implements GraphicElement {
	private placeholder: string;

	constructor(placeholder: string) {
		this.placeholder = placeholder;
	}

	render(indentation: number = 0): void {
		console.log(`${" ".repeat(indentation)}TextBox(placeholder: ${this.placeholder})`);
	}
}

// Composite: Panel
class Panel implements GraphicElement {
	private children: GraphicElement[];

	constructor() {
		this.children = [];
	}

	add(element: GraphicElement): void {
		this.children.push(element);
	}

	remove(element: GraphicElement): void {
		const index = this.children.indexOf(element);
		if (index !== -1) {
			this.children.splice(index, 1);
		}
	}

	render(indentation: number = 0): void {
		console.log(`${" ".repeat(indentation)}Panel`);
		for (const child of this.children) {
			child.render(indentation + 2);
		}
	}
}

// Composite: Window
class Window implements GraphicElement {
	private title: string;
	private children: GraphicElement[];

	constructor(title: string) {
		this.title = title;
		this.children = [];
	}

	add(element: GraphicElement): void {
		this.children.push(element);
	}

	remove(element: GraphicElement): void {
		const index = this.children.indexOf(element);
		if (index !== -1) {
			this.children.splice(index, 1);
		}
	}

	render(indentation: number = 0): void {
		console.log(`${" ".repeat(indentation)}Window(title: ${this.title})`);
		for (const child of this.children) {
			child.render(indentation + 2);
		}
	}
}

export default () => {
	if (false) {
		// Example
		const mainWindow = new Window("Main Window");
		const loginPanel = new Panel();
		const usernameTextBox = new TextBox("Username");
		const passwordTextBox = new TextBox("Password");
		const loginButton = new Button("Login");

		loginPanel.add(usernameTextBox);
		loginPanel.add(passwordTextBox);
		loginPanel.add(loginButton);
		mainWindow.add(loginPanel);

		mainWindow.render();
	}
}
