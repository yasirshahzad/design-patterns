# Design Pattern Preparation

**Design patterns** are tried and tested solutions to common problems in software design. They act like templates or guides to help developers solve issues they frequently face while writing code. Instead of figuring out everything from scratch, you can use a design pattern to handle common situations effectively. They are like blueprints that provide templates for solving specific design issues, making it easier for developers to write flexible, reusable, and maintainable code. Instead of reinventing the wheel, developers can apply design patterns to address common challenges effectively.

## Why are Design Patterns Important?

1. **Save Time and Effort**
   You don't need to reinvent the wheel. Patterns provide ready-made solutions that work well.

2. **Make Code Easier to Understand**
   Using patterns gives your code a clear structure, making it easier for others (and you!) to read and understand later.

3. **Encourage Reusable Solutions**
   Patterns can be used in different projects, saving time and improving consistency.

4. **Improve Team Communication**
   Developers often use pattern names like "Singleton" or "Observer." These names explain complex ideas quickly without long explanations.

5. **Help Build Better Software**
   Patterns guide you to write flexible, scalable, and maintainable code, reducing bugs and making future updates easier.

## Categories of Design Patterns

Design patterns are grouped into three main categories based on what they solve and how they help in structuring your code. Here’s a breakdown with simple explanations and examples:

### 1. **Creational Patterns**

These patterns focus on **how objects are created**. They provide ways to create objects while hiding the complexity of the creation process and ensuring the created objects are appropriate for the situation.

**Key Features:**

- Deal with object creation.
- Help make systems independent of how objects are constructed.

#### **Creational Patterns:**

1. **Singleton:** Ensures only one instance of a class exists throughout the application. For an instance, a single database connection shared by the whole app.

2. **Factory Method:** Provides a way to create objects without specifying the exact class. For an instance, a shape factory that creates circles, squares, or triangles based on input.

3. **Abstract Factory:** Creates families of related objects without specifying their concrete classes. For an instance, a factory for UI components like buttons and checkboxes that can produce Windows-style or Mac-style components.

4. **Builder:** Constructs complex objects step by step, often with a fluent interface. For example, building a custom pizza by choosing toppings, size, and crust type.

5. **Prototype:** Creates new objects by copying existing ones. For example, cloning a character in a game with the same properties.

### **2. Structural Patterns:**

These patterns focus on **how objects and classes are organized** to form larger structures. They help ensure that different parts of a system work together seamlessly.

**Key Features:**

- Deal with object composition and relationships.
- Simplify the design by using interfaces and abstract classes.

#### **Structural Patterns:**

1. **Adapter:** Helps incompatible interfaces work together. For example, a power adapter that allows an American plug to work in a European socket.

2. **Bridge:** Separates an abstraction from its implementation so they can vary independently. For example, A drawing application where shapes (abstraction) can be drawn using different devices (implementations like a printer or screen).

3. **Composite:** Lets you treat a group of objects like a single object. For example, folder containing files and other folders in a file system.

4. **Decorator:** Dynamically adds new behaviors to objects without altering their structure. For example, Adding scrollbars or borders to a window in a graphical user interface.

5. **Facade:** Provides a simplified interface to a complex subsystem. For example, a universal remote control that operates multiple devices with a single interface.

6. **Proxy:** Provides a placeholder or surrogate to control access to another object. For example, a credit card acting as a proxy for your bank account.

7. **Flyweight:** Reduces memory usage by sharing common data between multiple objects. For example, a text editor reusing character objects for common letters.