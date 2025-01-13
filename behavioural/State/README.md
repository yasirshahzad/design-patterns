# State Pattern

The **State Pattern** is a behavioral design pattern that allows an object to alter its behavior when its internal state changes. The object will appear to change its class.

## Key Components

1. Context:

   - Maintains a reference to the current state object.
   - Delegates state-specific behavior to the current state.

2. State Interface:

   - Defines the interface for all concrete states.

3. Concrete States:
   - Implement specific behavior associated with a state.

## Example 01: Document State

Here an example of the State Pattern, involving a document workflow system where a document moves through various states (**Draft, Moderation, Published**).

```ts
interface DocumentState {
    publish(doc: Document): void;
    reject(doc: Document): void;
}

class Document {
    private currentState: DocumentState;

    constructor(initialState: DocumentState) {
        this.currentState = initialState;
    }

    setState(state: DocumentState): void {
        this.currentState = state;
    }

    publish(): void {
        this.currentState.publish(this);
    }

    reject(): void {
        this.currentState.reject(this);
    }
}

class DraftState implements DocumentState {
    publish(doc: Document): void {
        console.log("Draft: Submitting for moderation");
        doc.setState(new ModerationState());
    }

    reject(): void {
        console.log("Draft: Document is rejected");
    }
}

class ModerationState implements DocumentState {
    publish(doc: Document): void {
        console.log("Moderation: Document is published");
        doc.setState(new PublishedState());
    }

    reject(doc: Document): void {
        console.log("Moderation: Document is rejected");
        doc.setState(new DraftState());
    }
}

class PublishedState implements DocumentState {
    publish(): void {
        console.log("Published: Document is already published");

    }

    reject(): void {
        console.log("Published: Document is already published");
    }
}


// Example Usage
const document = new Document(new DraftState());

console.log("Document Workflow:");
document.publish(); // Draft -> Moderation
document.publish(); // Moderation -> Published
document.reject();  // Cannot reject in Published state
document.publish(); // Already published

```

### Results

```plaintext

Document Workflow:
Draft: Sending to moderation.
Moderation: Approved and published.
Published: Cannot reject after publication.
Published: Already published.

```

## Example 02: Task Workflow in a Project Management System

```ts 
// State Interface
interface TaskState {
    start(task: Task): void;
    complete(task: Task): void;
}

// Context
class Task {
    private currentState: TaskState;

    constructor(initialState: TaskState) {
        this.currentState = initialState;
    }

    setState(state: TaskState): void {
        this.currentState = state;
    }

    start(): void {
        this.currentState.start(this);
    }

    complete(): void {
        this.currentState.complete(this);
    }
}

// Concrete States
class ToDoState implements TaskState {
    start(task: Task): void {
        console.log("Task is now In Progress.");
        task.setState(new InProgressState());
    }

    complete(task: Task): void {
        console.log("Cannot complete a task that hasn’t started yet!");
    }
}

class InProgressState implements TaskState {
    start(task: Task): void {
        console.log("Task is already in progress.");
    }

    complete(task: Task): void {
        console.log("Task is now marked as Done.");
        task.setState(new DoneState());
    }
}

class DoneState implements TaskState {
    start(task: Task): void {
        console.log("Cannot start a task that is already completed.");
    }

    complete(task: Task): void {
        console.log("Task is already completed.");
    }
}

// Example Usage
const task = new Task(new ToDoState());

console.log("Task Workflow:");
task.complete(); // Cannot complete a task in To Do state
task.start();    // Task -> In Progress
task.start();    // Task is already in progress
task.complete(); // Task -> Done
task.start();    // Cannot start a task that is already completed


```

### Results

```plaintext

Task Workflow:
Cannot complete a task that hasn’t started yet!
Task is now In Progress.
Task is already in progress.
Task is now marked as Done.
Cannot start a task that is already completed.

```