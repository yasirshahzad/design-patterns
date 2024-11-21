import { useState } from "react";

interface Button {
  render: () => React.ReactNode;
}
interface Textbox {
  render: () => React.ReactNode;
}

// Concrete Products
class LightButton implements Button {
  render() {
    return (
      <button style={{ backgroundColor: "lightblue" }}>
        Rendering light button
      </button>
    );
  }
}

class LightTextbox implements Textbox {
  render() {
    return <input type="text" style={{ backgroundColor: "lightblue" }} />;
  }
}

class DarkButton implements Button {
  render() {
    return (
      <button style={{ backgroundColor: "darkblue" }}>
        Rendering dark button
      </button>
    );
  }
}
class DarkTextbox implements Textbox {
  render() {
    return <input type="text" style={{ backgroundColor: "darkblue" }} />;
  }
}

// Abstract factory
interface UIFactory {
  createButton(): Button;
  createTextBox(): Textbox;
}

// Concrete factories
class LightFactory implements UIFactory {
  createButton(): Button {
    return new LightButton();
  }
  createTextBox(): Textbox {
    return new LightTextbox();
  }
}
class DarkFactory implements UIFactory {
  createButton(): Button {
    return new DarkButton();
  }
  createTextBox(): Textbox {
    return new DarkTextbox();
  }
}

export default function AbstractFactory({}: Props) {
  const [dark, setDark] = useState(false);
  const [factory, setFactory] = useState<UIFactory>(new LightFactory());

  const toggle = () => {
    if (dark) {
      setDark(false);
      setFactory(new LightFactory());
    } else {
      setDark(true);
      setFactory(new DarkFactory());
    }
  };

  return (
    <div>
      <button onClick={toggle}>Change Theme</button>
      <div>
        {factory.createButton().render()}
        {factory.createTextBox().render()}
      </div>
    </div>
  );
}
