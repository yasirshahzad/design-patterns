# Factory Method Pattern: Key Points and Interview Questions

## Key Points to Remember about the Factory Method Pattern

### Purpose

- The Factory Method pattern defines an interface for creating objects but allows subclasses to alter the type of objects that will be created.
- It helps in creating objects without specifying their concrete classes.

### When to Use

- When you need flexibility in deciding which class to instantiate.
- When the exact types of objects to be created are determined at runtime.
- When you want to delegate the responsibility of object creation to subclasses.

### Components

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

In this example, `ConcreteCreatorA` and `ConcreteCreatorB` implement the `factoryMethod` to create different `Product` objects. The client uses `Creator`, but the actual product creation is handled by subclasses, promoting loose coupling.

#### Real-World Examples in Pseudo Code

- Transportation Booking System (e.g., Taxi, Bike, Bus)

```
// Product Interface
interface Transport {
    book();
}

// Concrete Products
class Taxi implements Transport {
    book() {
        // Booking process for taxi
    }
}

class Bike implements Transport {
    book() {
        // Booking process for bike
    }
}

// Creator
abstract class TransportService {
    createTransport(): Transport;

    bookTransport() {
        transport = this.createTransport();
        transport.book();
    }
}

// Concrete Creators
class TaxiService extends TransportService {
    createTransport(): Transport {
        return new Taxi();
    }
}

class BikeService extends TransportService {
    createTransport(): Transport {
        return new Bike();
    }
}

// Client code
function main(service: TransportService) {
    service.bookTransport();
}

```

- Document Creation (e.g., Word, PDF)

```
// Product Interface
interface Document {
    open();
}

// Concrete Products
class WordDocument implements Document {
    open() {
        // Code to open a Word document
    }
}

class PDFDocument implements Document {
    open() {
        // Code to open a PDF document
    }
}

// Creator
abstract class Application {
    createDocument(): Document;

    openDocument() {
        document = this.createDocument();
        document.open();
    }
}

// Concrete Creators
class WordApplication extends Application {
    createDocument(): Document {
        return new WordDocument();
    }
}

class PDFApplication extends Application {
    createDocument(): Document {
        return new PDFDocument();
    }
}

// Client code
function main(app: Application) {
    app.openDocument();
}
```

- Food Delivery (e.g., Pizza, Sushi)

```
// Product Interface
interface Food {
    prepare();
}

// Concrete Products
class Pizza implements Food {
    prepare() {
        // Preparation steps for Pizza
    }
}

class Sushi implements Food {
    prepare() {
        // Preparation steps for Sushi
    }
}

// Creator
abstract class FoodDelivery {
    createFood(): Food;

    orderFood() {
        food = this.createFood();
        food.prepare();
    }
}

// Concrete Creators
class PizzaDelivery extends FoodDelivery {
    createFood(): Food {
        return new Pizza();
    }
}

class SushiDelivery extends FoodDelivery {
    createFood(): Food {
        return new Sushi();
    }
}

// Client code
function main(delivery: FoodDelivery) {
    delivery.orderFood();
}
```

- Notification System (e.g., SMS, Email)

```
// Product Interface
interface Notification {
    send();
}

// Concrete Products
class SMSNotification implements Notification {
    send() {
        // Code to send SMS notification
    }
}

class EmailNotification implements Notification {
    send() {
        // Code to send email notification
    }
}

// Creator
abstract class NotificationService {
    createNotification(): Notification;

    notifyUser() {
        notification = this.createNotification();
        notification.send();
    }
}

// Concrete Creators
class SMSService extends NotificationService {
    createNotification(): Notification {
        return new SMSNotification();
    }
}

class EmailService extends NotificationService {
    createNotification(): Notification {
        return new EmailNotification();
    }
}

// Client code
function main(service: NotificationService) {
    service.notifyUser();
}

```

- Payment Processing System (e.g., Credit Card, PayPal)

```
// Product Interface
interface PaymentMethod {
    process();
}

// Concrete Products
class CreditCardPayment implements PaymentMethod {
    process() {
        // Processing steps for credit card payment
    }
}

class PayPalPayment implements PaymentMethod {
    process() {
        // Processing steps for PayPal payment
    }
}

// Creator
abstract class PaymentProcessor {
    createPaymentMethod(): PaymentMethod;

    processPayment() {
        paymentMethod = this.createPaymentMethod();
        paymentMethod.process();
    }
}

// Concrete Creators
class CreditCardProcessor extends PaymentProcessor {
    createPaymentMethod(): PaymentMethod {
        return new CreditCardPayment();
    }
}

class PayPalProcessor extends PaymentProcessor {
    createPaymentMethod(): PaymentMethod {
        return new PayPalPayment();
    }
}

// Client code
function main(processor: PaymentProcessor) {
    processor.processPayment();
}

```

Each of these examples follows the Factory Method pattern, where the base Creator (e.g., TransportService, Application, etc.) defines the method for creating an object, while specific subclasses decide what exact product to create. This provides flexibility and extensibility, making it easier to add new product types without altering the client code.

### Benefits

- **Loose Coupling**: The client code depends on abstractions rather than concrete classes.
- **Extensibility**: New product types can be added without modifying existing code (follows the Open-Closed Principle).
- **Flexibility**: Concrete implementation can be decided at runtime.

### Drawbacks

- Can add complexity with extra classes and inheritance.
- Can lead to harder-to-read code if overused or misapplied in simple cases.

### Examples in Real-World Applications

- **Logging Frameworks**: Different logging providers (e.g., console, file, database) can be created via factory methods.
- **Database Connections**: Instantiating connections to different databases (e.g., MySQL, PostgreSQL) based on configuration.
- **UI Libraries**: Creating different UI elements (e.g., buttons, text boxes) based on the platform (web, mobile).

---

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

---

## Tips for Answering Interview Questions

- **Be Specific**: Provide examples when explaining the pattern and its benefits.
- **Draw Comparisons**: Compare it with other patterns (e.g., Abstract Factory) to show deeper understanding.
- **Mention SOLID Principles**: Explain how the pattern aligns with SOLID principles to demonstrate knowledge of design best practices.
- **Understand Pros and Cons**: Discuss the trade-offs of using the Factory Method to show balanced decision-making.
