# **Relation Between Abstract Factory and Factory Method**

The **Abstract Factory** and **Factory Method** patterns are both creational design patterns aimed at abstracting the instantiation process, but they differ in scope and usage. Here's how they are related and how they differ:

---

## **Relation Between Abstract Factory and Factory Method**

1. **Factory Method is Often a Building Block for Abstract Factory**

   - The Abstract Factory pattern typically uses **Factory Methods** internally to create products.
   - For example, in an Abstract Factory implementation, each method in the factory interface (like `createButton` or `createTextbox`) can be implemented as a Factory Method in the concrete factories.

2. **Both Abstract Instantiation Logic**
   - Both patterns aim to abstract object creation to promote loose coupling, ensuring that the client code does not need to know the specific classes of the objects being created.

---

## **Differences Between Abstract Factory and Factory Method**

| Feature                | Abstract Factory                                                                  | Factory Method                                                     |
| ---------------------- | --------------------------------------------------------------------------------- | ------------------------------------------------------------------ |
| **Purpose**            | Creates families of related objects.                                              | Creates a single product at a time.                                |
| **Scope**              | Works with multiple Factory Methods to produce a set of products.                 | Focuses on a single method to create a product.                    |
| **Client Interaction** | The client interacts with a factory interface to get objects.                     | The client either extends or calls a Factory Method.               |
| **Complexity**         | More complex as it involves multiple factories and product hierarchies.           | Simpler, focuses on a single product creation.                     |
| **Example**            | A UI factory that creates buttons, textboxes, and dropdowns for a specific theme. | A logger factory that creates file-based or console-based loggers. |

---

## **When to Use Which?**

- **Use Abstract Factory** when:

  - You need to create families of related or dependent objects.
  - Consistency between related objects is required.

- **Use Factory Method** when:
  - You need to delegate the instantiation of a single object to subclasses.
  - The creation process involves some complex logic.

---

## **Example to Highlight the Relation**

#### **Abstract Factory with Factory Method Inside**

```tsx
// Abstract Factory
interface UIFactory {
  createButton(): Button;
  createTextbox(): Textbox;
}

// Abstract Product Interfaces
interface Button {
  render(): void;
}
interface Textbox {
  render(): void;
}

// Factory Method in Concrete Factory
class LightThemeFactory implements UIFactory {
  createButton(): Button {
    return new LightButton(); // Factory Method
  }
  createTextbox(): Textbox {
    return new LightTextbox(); // Factory Method
  }
}

class DarkThemeFactory implements UIFactory {
  createButton(): Button {
    return new DarkButton(); // Factory Method
  }
  createTextbox(): Textbox {
    return new DarkTextbox(); // Factory Method
  }
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

// Client
function renderUI(factory: UIFactory) {
  const button = factory.createButton();
  const textbox = factory.createTextbox();

  button.render();
  textbox.render();
}

// Usage
const lightThemeFactory = new LightThemeFactory();
const darkThemeFactory = new DarkThemeFactory();

renderUI(lightThemeFactory); // Renders light-themed UI
renderUI(darkThemeFactory); // Renders dark-themed UI
```

---

# Key Takeaways

1. **Factory Method** is a fundamental pattern that focuses on creating one type of product and is often used as a component within the Abstract Factory.
2. **Abstract Factory** is broader, focusing on creating families of related objects while ensuring their consistency.
3. The **Abstract Factory** Pattern can use multiple Factory Methods to implement its product creation logic.
   In essence, Abstract Factory builds upon Factory Method, making it more powerful for creating object families.
