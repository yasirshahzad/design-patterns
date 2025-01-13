# Decorator Pattern

The **Decorator Pattern** is a structural design pattern that allows you to dynamically add new behavior or functionality to an object without altering its structure or code. It involves wrapping an object in a chain of decorators, each adding its own unique behavior.



### Definition

The decorator pattern provides a flexible way to extend an object's functionality by enclosing it in "decorator" objects, rather than modifying the original object's code.



### Intent

The intent of the decorator pattern is to allow for adding additional responsibilities to objects at runtime in a flexible and reusable way.



### Key Components

1. **Component Interface:** Defines the basic structure or operations that both the base object and decorators will follow.

2. **Concrete Component:** The actual object to which functionalities will be added dynamically.

3. **Decorator:** An abstract class or interface that wraps the component and follows the same interface.

4. **Concrete Decorators:** Subclasses of the decorator that add specific functionality to the component while preserving the existing structure.



### When to Use

1. When you want to add behavior to individual objects at runtime without modifying their class.
2. When a static inheritance approach (subclassing) leads to a large number of subclasses for different behaviors.
3. When you want to follow the Open-Closed Principle (open for extension, closed for modification).



### Code

```ts
// Component: Base interface for Coffee
interface Coffee {
  cost(): number;
  description(): string;
}

// Concrete Component: Plain Coffee
class PlainCoffee implements Coffee {
  cost(): number {
    return 5; // Base price for plain coffee
  }

  description(): string {
    return "Plain Coffee";
  }
}

// Decorator: Abstract class that implements Coffee and wraps a Coffee object
abstract class CoffeeDecorator implements Coffee {
  protected coffee: Coffee;

  constructor(coffee: Coffee) {
    this.coffee = coffee;
  }

  cost(): number {
    return this.coffee.cost();
  }

  description(): string {
    return this.coffee.description();
  }
}

// Concrete Decorators: Add extra functionality to the coffee
class MilkDecorator extends CoffeeDecorator {
  cost(): number {
    return this.coffee.cost() + 1.5; // Adding milk costs $1.5
  }

  description(): string {
    return this.coffee.description() + ", Milk";
  }
}

class SugarDecorator extends CoffeeDecorator {
  cost(): number {
    return this.coffee.cost() + 0.5; // Adding sugar costs $0.5
  }

  description(): string {
    return this.coffee.description() + ", Sugar";
  }
}

class WhippedCreamDecorator extends CoffeeDecorator {
  cost(): number {
    return this.coffee.cost() + 2; // Adding whipped cream costs $2
  }

  description(): string {
    return this.coffee.description() + ", Whipped Cream";
  }
}

// Usage
const coffee = new PlainCoffee();
console.log(`${coffee.description()} costs $${coffee.cost()}`);

const coffeeWithMilk = new MilkDecorator(coffee);
console.log(`${coffeeWithMilk.description()} costs $${coffeeWithMilk.cost()}`);

const coffeeWithMilkAndSugar = new SugarDecorator(coffeeWithMilk);
console.log(
  `${coffeeWithMilkAndSugar.description()} costs $${coffeeWithMilkAndSugar.cost()}`
);

const fullyLoadedCoffee = new WhippedCreamDecorator(coffeeWithMilkAndSugar);
console.log(
  `${fullyLoadedCoffee.description()} costs $${fullyLoadedCoffee.cost()}`
);
```

### Real-World Applications

1. **Graphical User Interfaces (GUIs):** In GUI frameworks, decorators are used to add functionalities like scrollbars, borders, or resizing to UI components dynamically.

2. **File I/O Streams:** In Java, classes like BufferedInputStream and DataInputStream are decorators that add functionality (buffering, data conversion) to basic file streams.

3. **Logging:** Middleware in web frameworks (like Flask/Django) uses decorators to add behaviors like logging, authentication, or caching to HTTP request handlers.

4. **Analytics and Metrics:** Wrapping a function in a decorator can help track performance or add analytics without modifying the original function code.
