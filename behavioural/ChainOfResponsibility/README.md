# Chain of Responsibility Pattern

The **Chain of Responsibility** is a behavioral design pattern that allows you to pass requests along a chain of handlers. Each handler in the chain processes the request or forwards it to the next handler until it's handled or the end of the chain is reached.

---

## Key Components

1. **Handler Interface:**
    Defines a method to handle the request and a way to set the next handler in the chain.
2. **Concrete Handlers:**
    Implement the handler interface. Process the request if they can; otherwise, pass it to the next handler.
3. **Client:**
    Creates the chain and sends the request to the first handler.

```ts
interface IRequest { username: string, password: string };


abstract class Handler {
    private next: Handler | null = null;

    public setNext(handler: Handler): Handler {
        this.next = handler;
        return handler;
    }

    protected handleNext(request: IRequest): boolean {
        // Forward the request to the next handler if it exists
        if (this.next) {
            return this.next.handle(request); // Fix: Call `next.handle` instead of `this.handle`
        }

        // No more handlers in the chain
        return true;
    }

    public abstract handle(request: IRequest): boolean;
}



class LoginHandler extends Handler {
    public handle(request: IRequest) {
        if (request.username !== 'admin' || request.password !== '1234') {
            console.log('Login failed');
            return false;
        } else {
            console.log('Login Success');
            return super.handleNext(request);
        }
    }
}

class AdminHandler extends Handler {
    public handle(request: IRequest) {
        if (request.username !== 'admin') {
            console.log('User is not admin');
            return false;
        } else {
            console.log('Admin access granted');
            return super.handleNext(request);
        }
    }
}


const baseHandler = new LoginHandler().setNext(new AdminHandler());
baseHandler.handle({ username: 'admin', password: '1234' });

```

## Second Use Case

```ts
interface Handler {
  setNext(handler: Handler): Handler;
  handle(request: string): void;
}


abstract class AbstractHandler implements Handler {
  private nextHandler: Handler;

  setNext(handler: Handler): Handler {
    this.nextHandler = handler;
    return handler;
  }

  handle(request: string): void {
    if (this.nextHandler) {
      this.nextHandler.handle(request);
    } else {
      console.log("No handler could process the request.");
    }
  }
}

class InfoLogger extends AbstractHandler {
  handle(request: string): void {
    if (request === "INFO") {
      console.log("InfoLogger: Handling INFO level log.");
    } else {
      console.log("InfoLogger: Passing to the next handler.");
      super.handle(request);
    }
  }
}

class WarningLogger extends AbstractHandler {
  handle(request: string): void {
    if (request === "WARNING") {
      console.log("WarningLogger: Handling WARNING level log.");
    } else {
      console.log("WarningLogger: Passing to the next handler.");
      super.handle(request);
    }
  }
}

class ErrorLogger extends AbstractHandler {
  handle(request: string): void {
    if (request === "ERROR") {
      console.log("ErrorLogger: Handling ERROR level log.");
    } else {
      console.log("ErrorLogger: Passing to the next handler.");
      super.handle(request);
    }
  }
}

// Create Handlers
const infoLogger = new InfoLogger();
const warningLogger = new WarningLogger();
const errorLogger = new ErrorLogger();

// Build the Chain: Info → Warning → Error
infoLogger.setNext(warningLogger).setNext(errorLogger);

// Client sends requests to the first handler
console.log("Sending INFO request:");
infoLogger.handle("INFO");

console.log("\nSending WARNING request:");
infoLogger.handle("WARNING");

console.log("\nSending ERROR request:");
infoLogger.handle("ERROR");

console.log("\nSending UNKNOWN request:");
infoLogger.handle("UNKNOWN");


// Output 

Sending INFO request:
InfoLogger: Handling INFO level log.

Sending WARNING request:
InfoLogger: Passing to the next handler.
WarningLogger: Handling WARNING level log.

Sending ERROR request:
InfoLogger: Passing to the next handler.
WarningLogger: Passing to the next handler.
ErrorLogger: Handling ERROR level log.

Sending UNKNOWN request:
InfoLogger: Passing to the next handler.
WarningLogger: Passing to the next handler.
ErrorLogger: Passing to the next handler.
No handler could process the request.


```

---

## Intent

- When multiple objects can handle a request, but the handler is not known in advance.
- To decouple the sender of a request from its potential receivers.
- To dynamically configure the processing chain.

---

## Real-World Examples

1. Customer Support:
    A customer inquiry starts with a chatbot → forwarded to a junior agent → escalated to a manager.
2. Approval Process:
    A budget request goes to a team lead → department head → CEO.
3. Authentication Pipeline:
    A request passes through different validation steps: token validation → role verification → permissions check.