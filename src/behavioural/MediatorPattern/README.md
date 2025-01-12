# Mediator Pattern

The **Mediator Pattern** defines an object (called a Mediator) that encapsulates how a set of objects interact. It promotes loose coupling by preventing objects from referring to each other directly.

The Mediator Pattern is like a *central controller* that helps multiple components (or objects) communicate with each other without knowing about each other's details. This helps reduce the *complex web of connections* between components and makes the system more manageable.

---

## Key Components

1. **Mediator:** The interface or abstract class that defines how components communicate.
2. **Concrete Mediator:** The actual implementation of the mediator that handles communication.
3. **Colleagues:** The components or objects that interact through the mediator.

---

## Intent

1. When you have many **interconnected components** (e.g., a UI with multiple buttons, sliders, and text fields).
2. When adding or changing communication logic between objects becomes difficult due to **tight coupling.**
3. When you want to centralize and **simplify interactions** between component.

---

## Software Example: Chat Room

Imagine a chat room where users send messages to each other. Instead of each user knowing about all other users, they send messages to the chat room (mediator), which delivers the messages to the intended recipients.

```ts

interface Mediator {
  sendMessage(message: string, sender: Colleague): void;
  addColleague(colleague: Colleague): void;
}


class ChatRoom implements Mediator {
  private colleagues: Colleague[] = [];

  public addColleague(colleague: Colleague): void {
    this.colleagues.push(colleague);
  }

  public sendMessage(message: string, sender: Colleague): void {
    for (const colleague of this.colleagues) {
      if (colleague !== sender) {
        colleague.receiveMessage(message);
      }
    }
  }
}


abstract class Colleague {
  constructor(protected mediator: Mediator) {}

  public abstract sendMessage(message: string): void;
  public abstract receiveMessage(message: string): void;
}


class User extends Colleague {
  constructor(mediator: Mediator, private name: string) {
    super(mediator);
  }

  public sendMessage(message: string): void {
    console.log(`${this.name} sends: ${message}`);
    this.mediator.sendMessage(message, this);
  }

  public receiveMessage(message: string): void {
    console.log(`${this.name} receives: ${message}`);
  }
}

const chatRoom = new ChatRoom();

const user1 = new User(chatRoom, "Alice");
const user2 = new User(chatRoom, "Bob");
const user3 = new User(chatRoom, "Charlie");

chatRoom.addColleague(user1);
chatRoom.addColleague(user2);
chatRoom.addColleague(user3);

user1.sendMessage("Hello, everyone!");
user2.sendMessage("Hi, Alice!");

```

```plaintext
Alice sends: Hello, everyone!
Bob receives: Hello, everyone!
Charlie receives: Hello, everyone!

Bob sends: Hi, Alice!
Alice receives: Hi, Alice!
Charlie receives: Hi, Alice!

```

## More Examples

1. **UI Components in a Form:**

- A form mediator coordinates interactions between a button, text field, and dropdown.
- Example: Enabling the "Submit" button only if all fields are valid.

2. **Event Management System:**

- A central event mediator handles subscriptions and notifications.
- Example: A notification system that informs all subscribers of an event.

3. **Game Development:**

- A game mediator manages interactions between players, enemies, and objects.
- Example: Ensuring only one player holds a shared item at a time.

---

## Key Benefits

1. **Reduces Coupling:** Colleagues don't directly refer to each other.
2. **Centralized Logic:** Communication logic is centralized in the mediator.
3. **Scalability:** Adding or removing colleagues becomes easier.
