# Memento Pattern

The Memento Pattern is a behavioral design pattern that provides a way to capture and restore an object's internal state without exposing its implementation details. This is useful for implementing undo/redo functionality.

---

## Key Components

1. **Originator:** The object whose state needs to be saved and restored.
2. **Memento:** Stores the internal state of the Originator. It's a snapshot of the state at a specific moment in time.
3. **Caretaker:** Manages the memento objects, ensuring the correct state is restored when needed.

## Implementation Example: Text Editor Undo/Redo

```ts
// Memento: Stores the state of the editor
class Memento {
  constructor(private state: string) {}

  getState(): string {
    return this.state;
  }
}

// Originator: The text editor that creates and restores mementos
class TextEditor {
  private content: string = "";

  setState(content: string): void {
    this.content = content;
  }

  getState(): string {
    return this.content;
  }

  save(): Memento {
    return new Memento(this.content);
  }

  restore(memento: Memento): void {
    this.content = memento.getState();
  }
}

// Caretaker: Manages mementos
class Caretaker {
  private mementos: Memento[] = [];
  private current: number = -1;

  addMemento(memento: Memento): void {
    // Discard redo history when a new action is performed
    this.mementos = this.mementos.slice(0, this.current + 1);
    this.mementos.push(memento);
    this.current++;
  }

  undo(): Memento | null {
    if (this.current > 0) {
      this.current--;
      return this.mementos[this.current];
    }
    return null;
  }

  redo(): Memento | null {
    if (this.current < this.mementos.length - 1) {
      this.current++;
      return this.mementos[this.current];
    }
    return null;
  }
}

// Example Usage
const editor = new TextEditor();
const caretaker = new Caretaker();

editor.setState("State 1");
caretaker.addMemento(editor.save());

editor.setState("State 2");
caretaker.addMemento(editor.save());

editor.setState("State 3");
caretaker.addMemento(editor.save());

console.log("Current State:", editor.getState()); // Output: "State 3"

const undoState = caretaker.undo();
if (undoState) {
  editor.restore(undoState);
  console.log("Undo State:", editor.getState()); // Output: "State 2"
}

const redoState = caretaker.redo();
if (redoState) {
  editor.restore(redoState);
  console.log("Redo State:", editor.getState()); // Output: "State 3"
}

```
