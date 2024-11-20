import React from "react";

type Props = {};

interface Button {
  render: () => void;
}
interface Textbox {
  render: () => void;
}
interface UIFactory {
  createButton(): Button;
  createTextBox(): Button;
}

// Concrete Products
class LightButton implements Button {
  render() {
    console.log("Rendering light button");
  }
}
class LightTextbox implements Textbox {
  render() {
    console.log("Rendering light textbox");
  }
}

class DarkButton implements Button {
  render() {
    console.log("Rendering dark button");
  }
}
class DarkTextbox implements Textbox {
  render() {
    console.log("Rendering dark textbox");
  }
}

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
  return <div>AbstractFactory</div>;
}
