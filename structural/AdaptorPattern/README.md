# Adapter Pattern: A Concise Lesson

### Definition

The Adapter Pattern is a structural design pattern used to bridge the gap between incompatible interfaces. It acts as a translator that makes one interface usable by another system or client.

---

### Intent

- **Goal:** Convert the interface of one class into another interface expected by the client.
- **Why?** To enable cooperation between classes that couldn’t otherwise work together due to incompatible interfaces.

---

### Components

1. **Target Interface:** The interface the client expects to interact with.

2. **Adaptee:** The existing class/interface you want to use but cannot because it's incompatible with the target interface.

3. **Adapter:** The intermediary class that implements the target interface and translates requests from the client to the adaptee.

4. **Client:** The entity that interacts with the target interface.

---

### When to Use

1. **Integrating third-party libraries:** You have a library with methods that don't match your application's expectations.
2. **Working with legacy code:** An old system's API doesn't match your new system's structure.
3. **Changing interfaces:** Two modules need to work together but their interfaces don't match.

---

### Example Scenario

Problem: Different logging systems
You want to switch to a third-party logging library (Adaptee) in your app. Your app expects a specific Logger interface (Target), but the third-party library has a different method signature.

#### Code Example

Without Adapter
Your app expects this logging interface:

```ts
interface Logger {
  logMessage(level: string, message: string): void;
}

class AppLogger implements Logger {
  logMessage(level: string, message: string): void {
    console.log(`[${level}] ${message}`);
  }
}

// The third-party library looks like this:
class ThirdPartyLogger {
  log(level: string, details: { msg: string }): void {
    console.log(`[${level}] ${details.msg}`);
  }
}

//They are incompatible.
```

**With Adapter**
Use an adapter to bridge the gap:

```ts
class LoggerAdapter implements Logger {
  private thirdPartyLogger: ThirdPartyLogger;

  constructor() {
    this.thirdPartyLogger = new ThirdPartyLogger();
  }

  logMessage(level: string, message: string): void {
    this.thirdPartyLogger.log(level, { msg: message });
  }
}

// Usage
const logger: Logger = new LoggerAdapter();
logger.logMessage("INFO", "Adapter Pattern Example Working!");
```

---

### Real-World Applications

1. Payment Gateways: Adapting a standard payment interface for multiple gateway providers.
2. API Integration: Harmonizing legacy or third-party APIs with your system's interface.
3. Data Conversion: Wrapping different data sources (like JSON, XML) to work with a uniform data-processing module.
