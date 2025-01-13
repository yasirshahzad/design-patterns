# Factory Method Pattern: Key Points and Interview Questions

## Key Points to Remember about the Factory Method Pattern

### Purpose

- The Factory Method pattern defines an interface for creating objects but allows subclasses to alter the type of objects that will be created.
- It helps in creating objects without specifying their concrete classes.

### When to Use

- When you need flexibility in deciding which class to instantiate.
- When the exact types of objects to be created are determined at runtime.
- When you want to delegate the responsibility of object creation to subclasses.

### Key Components

1. **Product**  
   The interface or abstract class that defines the type of objects the factory method creates.
2. **Concrete Product**  
   Concrete implementations of the `Product` interface.
3. **Creator**  
   An abstract class or interface declaring the factory method.
4. **Concrete Creator**  
   Subclasses of `Creator` that override the factory method to return instances of `Concrete Product`.

## Basic Pseudo Code for Factory Method Pattern

```
// 1. Define a Product interface
interface Product {
    method();
}

// 2. Concrete Products implement the Product interface
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

// 3. Creator declares the factory method
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
- **Extensibility**: New product types can be added without modifying existing code (follows the Open-Closed Principle).
- **Flexibility**: Concrete implementation can be decided at runtime.

### Drawbacks

- Can add complexity with extra classes and inheritance.
- Can lead to harder-to-read code if overused or misapplied in simple cases.

### Examples in Real-World Applications

- **Scenario 1: Database Connections**: You have multiple database engines (MySQL, MongoDB, PostgreSQL). Use the factory method to dynamically choose which database client to connect to.
- **Scenario 2: Game Development**: In a game, you have different enemy types (e.g., Orcs, Trolls, Dragons). Use the factory method to create enemies dynamically based on game level.
- **Scenario 3: File Parsers**: Create parsers for different file formats (JSON, XML, CSV). Depending on the file extension, the factory method returns the correct parser implementation.
- **Scenario 4: UI Components**: Generate platform-specific UI components (e.g., Windows buttons, macOS buttons). The factory method creates components based on the platform.



## Practice Exercise

1. **Implement the Factory Method for a transportation system:** E.g., Car, Bike, or Bus based on travel distance.
2. **Create an e-commerce product display system:** Dynamically generate different product views (e.g., list view, grid view).
3. **Build a logging system:** Log to console, file, or remote server depending on configuration.



## Common Interview Questions on the Factory Method Pattern

1. **What is the Factory Method pattern?**  
   Describe the Factory Method pattern and explain its purpose in object-oriented design.

2. **How is the Factory Method pattern different from the Abstract Factory pattern?**  
   The Factory Method focuses on a single product type with subclasses creating variations, whereas the Abstract Factory is about creating families of related products.

3. **Why would you choose the Factory Method pattern over simple object instantiation?**  
   Emphasize flexibility, loose coupling, and runtime subclass selection.

4. **What are some real-world scenarios where the Factory Method pattern would be beneficial?**  
   Examples: logging frameworks, database connections, notification systems, or cross-platform UI creation.

5. **Can you walk me through an example of the Factory Method pattern in a project you worked on?**  
   Be prepared to discuss a concrete example and how the pattern improved maintainability or flexibility.

6. **How does the Factory Method pattern adhere to SOLID principles?**  
   The pattern supports:

   - **Open-Closed Principle**: Adding new products without changing existing code.
   - **Single Responsibility Principle**: Each class has one responsibility (creating or using products, not both).

7. **What are some drawbacks of using the Factory Method pattern?**  
   Potential over-complexity, readability issues, and additional overhead with extra classes.

8. **How would you implement the Factory Method pattern in TypeScript (or any specific language)?**  
   Be ready to discuss language-specific features, such as TypeScript's abstract classes and interfaces.

9. **How would you convert a simple Factory Method implementation to support multiple product families?**  
   Explain how to evolve the Factory Method pattern into an Abstract Factory if there's a need for product families, e.g., different types of notifications across various communication channels.

10. **What are some alternatives to the Factory Method pattern?**  
    Alternatives include simple factory functions, dependency injection, or Prototype patterns for cases where object creation doesn't require much flexibility.



## Tips for Answering Interview Questions

- **Be Specific**: Provide examples when explaining the pattern and its benefits.
- **Draw Comparisons**: Compare it with other patterns (e.g., Abstract Factory) to show deeper understanding.
- **Mention SOLID Principles**: Explain how the pattern aligns with SOLID principles to demonstrate knowledge of design best practices.
- **Understand Pros and Cons**: Discuss the trade-offs of using the Factory Method to show balanced decision-making.
