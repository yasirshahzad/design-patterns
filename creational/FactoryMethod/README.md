# Factory Method Pattern

### Purpose

- The Factory Method pattern defines an interface for creating objects but allows subclasses to alter the type of objects that will be made.
- It helps in creating objects without specifying their concrete classes.

### When to Use

- When you need flexibility in deciding which class to instantiate.
- When the exact types of objects to be created are determined at runtime.
- When you want to delegate the responsibility of object creation to subclasses.

### Key Components

1. **Product**  
   The interface or abstract class defines the type of objects the factory method creates.
2. **Concrete Product**  
   Concrete implementations of the `Product` interface.
3. **Creator**  
   An abstract class declaring the factory method.
4. **Concrete Creator**  
   Subclasses of `Creator` that override the factory method to return instances of `Concrete Product`.

## Basic Pseudo Code for Factory Method Pattern

```
// 1. Define a Product interface
interface Product {
    method();
}

// 2. Concrete Products implements the Product interface
class ConcreteProductA implements Product {
    method() {
        // Implementation of method specific to ConcreteProductA
    }
}

class ConcreteProductB implements Product {
    method() {
        // Implementation of method specific to ConcreteProductB
    }
}

// 3. The creator declares the factory method
abstract class Creator {
    factoryMethod(): Product;

    someOperation() {
        // Call the factory method to create a Product object
        product = this.factoryMethod();
        product.method();
    }
}

// 4. Concrete Creators implement the factory method
class ConcreteCreatorA extends Creator {
    factoryMethod(): Product {
        return new ConcreteProductA();
    }
}

class ConcreteCreatorB extends Creator {
    factoryMethod(): Product {
        return new ConcreteProductB();
    }
}

// Client code
function clientCode(creator: Creator) {
    creator.someOperation();
}
```

### Benefits

- **Loose Coupling**: The client code depends on abstractions rather than concrete classes.
- **Extensibility**: New product types can be added without modifying existing code (following the Open-Closed Principle).
- **Flexibility**: Concrete implementation can be decided at runtime.

### Examples in Real-World Applications

- **Scenario 1: Database Connections**: You have multiple database engines (MySQL, MongoDB, PostgreSQL). Use the factory method to dynamically choose which database client to connect to.
- **Scenario 2: Game Development**: In a game, you have different enemy types (e.g., Orcs, Trolls, Dragons). Use the factory method to create enemies dynamically based on game level.
- **Scenario 3: File Parsers**: Create parsers for different file formats (JSON, XML, CSV). Depending on the file extension, the factory method returns the correct parser implementation.
- **Scenario 4: UI Components**: Generate platform-specific UI components (e.g., Windows buttons, macOS buttons). The factory method creates components based on the platform.


## Practice Exercise

1. **Implement the Factory Method for a transportation system:** E.g., Car, Bike, or Bus based on travel distance.
2. **Create an e-commerce product display system:** Dynamically generate different product views (e.g., list view, grid view).
3. **Build a logging system:** Log to console, file, or remote server depending on configuration.
