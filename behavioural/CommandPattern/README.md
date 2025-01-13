# Command Pattern

The command pattern is a behavioral design pattern in which an object is used to encapsulate all the information needed to perform an action or trigger an event at a later time. This information includes the method name, the object that owns the method, and the parameters for the method.

The Command Pattern encapsulates a request as an object, allowing you to parameterize objects with different requests, delay the execution of a request, or queue them for later execution.

It ***decouples*** the sender (who requests the action) from the receiver (who performs the action)



## Key Components

1. **Command Interface:** Declares an execute() method for executing requests.
2. **ConcreteCommand:** Implements the execute() method and calls specific actions on the receiver.
3. **Receiver:** The object that knows how to perform the operations associated with the request.
4. **Invoker:** Holds a command and triggers its execution.
5. **Client:** Creates concrete command objects and assigns them to the invoker.



## Intent

- To decouple the object that issues a request from the objects that perform the actions.
- To enable undo/redo functionality.
- To support queuing and scheduling requests.



## Scenario 1: Home Automation System

A smart home system can perform actions like turning lights on/off, starting the air conditioner, and locking the doors. Each device has its own logic.

```ts
interface Command {
  execute(): void;
}

class LightOnCommand implements Command {
  private light: Light;

  constructor(light: Light) {
    this.light = light;
  }

  execute(): void {
    this.light.turnOn();
  }
}

class LightOffCommand implements Command {
  private light: Light;

  constructor(light: Light) {
    this.light = light;
  }

  execute(): void {
    this.light.turnOff();
  }
}

class Light {
  turnOn(): void {
    console.log("The light is ON.");
  }

  turnOff(): void {
    console.log("The light is OFF.");
  }
}

class RemoteControl {
  private command: Command;

  setCommand(command: Command): void {
    this.command = command;
  }

  pressButton(): void {
    this.command.execute();
  }
}


// Create Receiver
const livingRoomLight = new Light();

// Create Commands
const lightOn = new LightOnCommand(livingRoomLight);
const lightOff = new LightOffCommand(livingRoomLight);

// Create Invoker
const remote = new RemoteControl();

// Turn Light ON
remote.setCommand(lightOn);
remote.pressButton(); // Output: The light is ON.

// Turn Light OFF
remote.setCommand(lightOff);
remote.pressButton(); // Output: The light is OFF.

```

## Scenario 2: Text Editor with Undo

Create a text editor where actions like typing and deleting text can be undone.

```ts
interface TextCommand {
  execute(): void;
  undo(): void;
}


class TypeTextCommand implements TextCommand {
  private editor: TextEditor;
  private text: string;

  constructor(editor: TextEditor, text: string) {
    this.editor = editor;
    this.text = text;
  }

  execute(): void {
    this.editor.addText(this.text);
  }

  undo(): void {
    this.editor.removeText(this.text);
  }
}

class TextEditor {
  private content: string = "";

  addText(text: string): void {
    this.content += text;
    console.log(`Current content: "${this.content}"`);
  }

  removeText(text: string): void {
    this.content = this.content.slice(0, -text.length);
    console.log(`Current content: "${this.content}"`);
  }
}

class Window {
  private history: TextCommand[] = [];

  executeCommand(command: TextCommand): void {
    command.execute();
    this.history.push(command);
  }

  undoCommand(): void {
    const lastCommand = this.history.pop();
    if (lastCommand) {
      lastCommand.undo();
    } else {
      console.log("No commands to undo.");
    }
  }
}


// Create Receiver
const editor = new TextEditor();

// Create Invoker
const history = new Window();

// Create and Execute Commands
const command1 = new TypeTextCommand(editor, "Hello ");
history.executeCommand(command1); // Output: Current content: "Hello "

const command2 = new TypeTextCommand(editor, "World!");
history.executeCommand(command2); // Output: Current content: "Hello World!"

// Undo Last Action
history.undoCommand(); // Output: Current content: "Hello "
history.undoCommand(); // Output: Current content: ""
history.undoCommand(); // Output: No commands to undo.


```


## Implementation: Light On/Off Commands for Multiple Lights

The Light class should have methods to turn the light on or off.

```ts
class Light {
  private id: string;

  constructor(id: string) {
    this.id = id;
  }

  turnOn(): void {
    console.log(`Light ${this.id} is ON.`);
  }

  turnOff(): void {
    console.log(`Light ${this.id} is OFF.`);
  }
}

class Room {
  private lights: Light[] = [];

  addLight(light: Light): void {
    this.lights.push(light);
  }

  getLights(): Light[] {
    return this.lights;
  }
}


class LightsOnCommand implements Command {
  private room: Room;

  constructor(room: Room) {
    this.room = room;
  }

  execute(): void {
    console.log("Turning on all lights...");
    this.room.getLights().forEach((light) => light.turnOn());
  }

  undo(): void {
    console.log("Undoing: Turning off all lights...");
    this.room.getLights().forEach((light) => light.turnOff());
  }
}

class LightsOffCommand implements Command {
  private room: Room;

  constructor(room: Room) {
    this.room = room;
  }

  execute(): void {
    console.log("Turning off all lights...");
    this.room.getLights().forEach((light) => light.turnOff());
  }

  undo(): void {
    console.log("Undoing: Turning on all lights...");
    this.room.getLights().forEach((light) => light.turnOn());
  }
}

class SmartHomeRemote {
  private commandHistory: Command[] = [];
  private command: Command;

  setCommand(command: Command): void {
    this.command = command;
  }

  pressButton(): void {
    this.command.execute();
    this.commandHistory.push(this.command);
  }

  pressUndo(): void {
    if (this.commandHistory.length > 0) {
      const lastCommand = this.commandHistory.pop();
      lastCommand.undo();
    } else {
      console.log("No commands to undo.");
    }
  }
}


// Create Room
const livingRoom = new Room();

// Add Lights to the Room
livingRoom.addLight(new Light("1"));
livingRoom.addLight(new Light("2"));
livingRoom.addLight(new Light("3"));

// Create Commands
const lightsOnCommand = new LightsOnCommand(livingRoom);
const lightsOffCommand = new LightsOffCommand(livingRoom);

// Create Remote
const remote = new SmartHomeRemote();

// Turn On All Lights
remote.setCommand(lightsOnCommand);
remote.pressButton(); 
// Output:
// Turning on all lights...
// Light 1 is ON.
// Light 2 is ON.
// Light 3 is ON.

// Turn Off All Lights
remote.setCommand(lightsOffCommand);
remote.pressButton(); 
// Output:
// Turning off all lights...
// Light 1 is OFF.
// Light 2 is OFF.
// Light 3 is OFF.

// Undo Last Action (Turn On All Lights Again)
remote.pressUndo(); 
// Output:
// Undoing: Turning on all lights...
// Light 1 is ON.
// Light 2 is ON.
// Light 3 is ON.


```
