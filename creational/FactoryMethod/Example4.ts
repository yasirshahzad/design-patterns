// Abstract/interface Product
interface UIComponent {
  render(): void;
  enable(): void;
  disable(): void;
}

// Concrete Product
class Button implements UIComponent {
  render(): void {
    console.log("Rendering a button");
  }
  enable(): void {
    console.log("Enabling a button");
  }
  disable(): void {
    console.log("Disabling a button");
  }
}

// Concrete Product
class TextBox implements UIComponent {
  render(): void {
    console.log("Rendering a text box");
  }
  enable(): void {
    console.log("Enabling a text box");
  }
  disable(): void {
    console.log("Disabling a text box");
  }
}

// Concrete Product
class Checkbox implements UIComponent {
  render(): void {
    console.log("Rendering a checkbox");
  }
  enable(): void {
    console.log("Enabling a checkbox");
  }
  disable(): void {
    console.log("Disabling a checkbox");
  }
}

// Abstract factory

abstract class UIComponentFactory {
  abstract createComponent(): UIComponent;
}

// Concrete factory
class ButtonFactory extends UIComponentFactory {
  createComponent(): UIComponent {
    return new Button();
  }
}

// Concrete factory
class TextBoxFactory extends UIComponentFactory {
  createComponent(): UIComponent {
    return new TextBox();
  }
}

function renderComponent(factory: UIComponentFactory) {
  const component = factory.createComponent();
  component.render();
  component.enable();
}

// Usage/Client/Driver code
const buttonFactory = new ButtonFactory();
renderComponent(buttonFactory);
// Output:
// Rendering a Button
// Button enabled

const textBoxFactory = new TextBoxFactory();
renderComponent(textBoxFactory);
// Output:
// Rendering a TextBox
// TextBox enabled
