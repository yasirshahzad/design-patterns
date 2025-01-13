# Singleton Pattern Lesson

## Definition

The Singleton pattern ensures that a class has only **one instance** and provides a **global access point** to that instance.



## Intent

- To **restrict multiple instances** of a class.
- To **control shared resources** (like database connections or configuration settings) efficiently.
- To provide **one centralized point of access** to a particular service or resource.



## Components

1. **Private Constructor**  
   Prevents external code from directly creating new instances.
2. **Static Instance Property**  
   Holds the single instance of the class.
3. **Public Accessor Method**  
   Provides a controlled way to access the single instance, often called `getInstance()`.



## When to Use

- **Resource Management**  
  When managing resources that are costly to create or maintain (e.g., database connections, loggers, or caching systems).
- **Global Access**  
  When you need to provide consistent access to a service throughout your application.
- **Controlled Access**  
  When the control of instance creation is critical, like managing thread safety in multi-threaded environments.



## Code Example

### Basic Singleton in TypeScript

```typescript
class Singleton {
  private static instance: Singleton; // Static instance property
  private constructor() {} // Private constructor

  // Public method to access the single instance
  public static getInstance(): Singleton {
    if (!Singleton.instance) {
      Singleton.instance = new Singleton();
    }
    return Singleton.instance;
  }

  public logMessage(message: string): void {
    console.log(message);
  }
}

// Usage
const singleton1 = Singleton.getInstance();
const singleton2 = Singleton.getInstance();

singleton1.logMessage("Singleton instance works!");
console.log(singleton1 === singleton2); // true
```



## Key Scenarios

- **Logging Service**

  - Ensure logs are written to a single file or stream without duplicating loggers.

- **Configuration Management**

  - Store application-wide settings in one place and make them accessible globally.

- **Database Connection**
  - Ensure there's only one connection object to manage interactions with the database.
