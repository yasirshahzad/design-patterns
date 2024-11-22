# **Builder Pattern**

The **Builder Pattern** is like having a step-by-step recipe for creating something complicated. Instead of dumping everything into one place and making a mess, you carefully add one part at a time in a specific order.

The **Builder Pattern** is a creational design pattern that provides a way to construct complex objects step by step. It separates the construction process from the representation so the same construction process can create different representations.

---

## **Intent**

Sometimes, making a big or complex object (like a pizza, a car, or a house) has a lot of steps. If you just throw everything into one big function, it becomes confusing. The Builder Pattern helps you:

- Make things step by step. To construct a complex object by specifying its type and content step by step.
- Reuse the same process to build different variations of the object. To allow a class to produce different types and representations of an object using the same building process.
- Keep your code neat and organized.

---

## Components

Here's how it works, step by step:

- **Product:** This is the final thing you're making (e.g., pizza, car, or house).
- **Builder:** This is the "plan" that lists all the steps for making the product.
- **Concrete Builder:** This is the actual worker who follows the plan to build the product.
- **Director:** This is like the "manager" who tells the builder which steps to follow and in what order.
- **Client:** This is you! You just tell the manager (Director) what you want, and they handle everything else.

---

## When to Use

- **Complex Objects:** When constructing objects requires multiple steps or involves conditional logic.
- **Multiple Representations:** When you want the same building process to produce different types or versions of the product.
- **Code Reusability:** To encapsulate complex construction logic in a single class.

---

## Example Scenarios

- **Pizza Builder:** Building a pizza with different ingredients (e.g., crust type, cheese, toppings).
- **Car Builder:** Building different car models with customizable features (engine type, seats, color).
- **Form Builder:** Dynamically building forms in a UI with various input fields.

---

## Code

```ts
// 1. Product
class Pizza {
  crust: string = "";
  size: string = "";
  toppings: string[] = [];

  describe() {
    return `Pizza with ${this.crust} crust, size ${
      this.size
    }, and toppings: ${this.toppings.join(", ")}.`;
  }
}

// 2. Builder Interface
interface PizzaBuilder {
  setCrust(crust: string): this;
  setSize(size: string): this;
  addTopping(topping: string): this;
  build(): Pizza;
}

// 3. Concrete Builder
class CustomPizzaBuilder implements PizzaBuilder {
  private pizza: Pizza;

  constructor() {
    this.pizza = new Pizza();
  }

  setCrust(crust: string): this {
    this.pizza.crust = crust;
    return this;
  }

  setSize(size: string): this {
    this.pizza.size = size;
    return this;
  }

  addTopping(topping: string): this {
    this.pizza.toppings.push(topping);
    return this;
  }

  build(): Pizza {
    return this.pizza;
  }
}

// 4. Director

class PizzaDirector {
  constructor(private builder: PizzaBuilder) {}

  buildMargherita(): Pizza {
    return this.builder
      .setCrust("Thin")
      .setSize("Medium")
      .addTopping("Cheese")
      .build();
  }

  buildPepperoni(): Pizza {
    return this.builder
      .setCrust("Thick")
      .setSize("Large")
      .addTopping("Pepperoni")
      .addTopping("Cheese")
      .build();
  }
}

// 4. Client
const builder = new CustomPizzaBuilder();
const director = new PizzaDirector(builder);

const margherita = director.buildMargherita();
console.log(margherita.describe()); // Pizza with Thin crust, size Medium, and toppings: Cheese.

const pepperoni = director.buildPepperoni();
console.log(pepperoni.describe()); // Pizza with Thick crust, size Large, and toppings: Pepperoni, Cheese.
```

---

## Practice Task

Now it's your turn! Try this:

- **Build a Car**
  - Features: Engine type (electric or petrol), color, and seats.
- **Build a Computer**
  - Features: CPU, RAM, and storage.
