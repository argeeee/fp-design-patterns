// Component: GraphicElement
interface GraphicElement {
  render(indentation?: number): void;
}

interface CompositeGraphicElement extends GraphicElement {
  add(element: GraphicElement): void;
  remove(element: GraphicElement): void
}

// Leaf: Button
const createButton = (label: string): GraphicElement => ({
  render: (indentation: number = 0): void => {
    console.log(`${" ".repeat(indentation)}Button(label: ${label})`);
  }
});

// Leaf: TextBox
const createTextBox = (placeholder: string): GraphicElement => ({
  render: (indentation: number = 0): void => {
    console.log(`${" ".repeat(indentation)}TextBox(placeholder: ${placeholder})`);
  }
});

// Composite: Panel
const createPanel = (): CompositeGraphicElement => {
  const children: GraphicElement[] = [];

  const add = (element: GraphicElement): void => {
    children.push(element);
  };

  const remove = (element: GraphicElement): void => {
    const index = children.indexOf(element);
    if (index !== -1) {
      children.splice(index, 1);
    }
  };

  const render = (indentation: number = 0): void => {
    console.log(`${" ".repeat(indentation)}Panel`);
    for (const child of children) {
      child.render(indentation + 2);
    }
  };

  return { add, remove, render };
};

// Composite: Window
const createWindow = (title: string): CompositeGraphicElement => {
  const children: GraphicElement[] = [];

  const add = (element: GraphicElement): void => {
    children.push(element);
  };

  const remove = (element: GraphicElement): void => {
    const index = children.indexOf(element);
    if (index !== -1) {
      children.splice(index, 1);
    }
  };

  const render = (indentation: number = 0): void => {
    console.log(`${" ".repeat(indentation)}Window(title: ${title})`);
    for (const child of children) {
      child.render(indentation + 2);
    }
  };

  return { add, remove, render };
};

export default () => {
  if (false) {
    // Example
    const mainWindow = createWindow("Main Window");
    const loginPanel = createPanel();
    const usernameTextBox = createTextBox("Username");
    const passwordTextBox = createTextBox("Password");
    const loginButton = createButton("Login");

    loginPanel.add(usernameTextBox);
    loginPanel.add(passwordTextBox);
    loginPanel.add(loginButton);
    mainWindow.add(loginPanel);

    mainWindow.render();
  }
};
