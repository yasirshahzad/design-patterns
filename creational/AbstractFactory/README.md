# **Abstract Factory Pattern**

The Abstract Factory pattern is a creational design pattern that provides an interface for creating families of related or dependent objects without specifying their concrete classes.



**Key Points to Memorize:**

**Intent:**

- To create families of related objects without being tied to their concrete classes.
- Ensures consistency among related objects.

**Components:**

- AbstractFactory: Declares methods to create abstract products.
- ConcreteFactory: Implements the creation methods to produce concrete products.

- AbstractProduct: Declares an interface for a type of product.
- ConcreteProduct: Implements the AbstractProduct interface
- Client: Uses only the AbstractFactory and AbstractProduct interfaces.

**When to Use:**

1. You need to ensure that a family of products are used together.
2. You want to enforce product consistency across a family.
3. The system should be independent of how the products are created.



## **Practice Example: GUI Toolkit**

```pseudo
// Abstract Product Interface
interface ProductA {
    methodA()
}

interface ProductB {
    methodB()
}

// Concrete Products
class ProductA1 implements ProductA {
    methodA() { // Implementation for Product A1 }
}

class ProductA2 implements ProductA {
    methodA() { // Implementation for Product A2 }
}

class ProductB1 implements ProductB {
    methodB() { // Implementation for Product B1 }
}

class ProductB2 implements ProductB {
    methodB() { // Implementation for Product B2 }
}

// Abstract Factory Interface
interface AbstractFactory {
    createProductA(): ProductA
    createProductB(): ProductB
}

// Concrete Factories
class ConcreteFactory1 implements AbstractFactory {
    createProductA() { return new ProductA1() }
    createProductB() { return new ProductB1() }
}

class ConcreteFactory2 implements AbstractFactory {
    createProductA() { return new ProductA2() }
    createProductB() { return new ProductB2() }
}

// Client
class Client {
    constructor(factory: AbstractFactory) {
        this.productA = factory.createProductA()
        this.productB = factory.createProductB()
    }
}
```



## Real-World Examples:

1. UI Themes:

- Factories produce families of UI components (buttons, textboxes, dropdowns) specific to a theme (e.g., DarkTheme, LightTheme).

2. Operating Systems:

- Factories create system-specific components, such as WindowsFactory or MacOSFactory, for dialogs, menus, or file systems.

3. Car Manufacturing:

- Factories for different car brands producing components like engines, tires, and bodies for their specific models.

4. Database Drivers:

- Factories that produce connections, commands, and transactions for databases like MySQL, SQL Server, or PostgreSQL.

5. Cross-Platform Games:

- Factories produce game elements (UI, sprites, sounds) for platforms like PC, console, or mobile.



## Common Interview Questions on the Abstract Factory

### Conceptual Questions

1. What is the purpose of the Abstract Factory Pattern?
2. How does the Abstract Factory Pattern differ from the Factory Method Pattern?
3. What are the key benefits of using the
4. Abstract Factory Pattern?
5. When would you choose to use this pattern in an application?
6. What is the relationship between Abstract Factory and Dependency Injection?

### Implementation Questions

1. How can you implement the Abstract Factory Pattern in ReactJS?
2. How would you extend the Abstract Factory to support new families of objects?
3. Can Abstract Factory be used with other patterns like Singleton or Prototype?
4. What are the challenges of using Abstract
5. Factory in large-scale applications?
6. How can you ensure consistency across objects in Abstract Factory?

### Code-Based Questions

1. Write a React implementation of the Abstract Factory Pattern for UI themes.
2. How would you use the Abstract Factory Pattern to manage multiple database connections?
3. Implement a Notification System using Abstract Factory with Email, SMS, and Push notifications.
