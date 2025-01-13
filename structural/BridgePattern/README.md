# The Bridge Pattern

### Definition

The Bridge pattern is a structural design pattern that decouples an abstraction from its implementation so that the two can vary independently. It provides a way to split a class into two separate hierarchies: one for abstraction and another for implementation.



### Intent

To avoid a permanent binding between an abstraction and its implementation and allow them to evolve independently without breaking the code.



### Key Components

1. **Abstraction:** The high-level control layer that defines the main functionality. It delegates implementation details to the Implementor.
2. **Refined Abstraction:** A specialized version of the Abstraction.
3. **Implementor (Interface):** Declares the methods that the Concrete Implementors must implement.
4. **Concrete Implementor:** Provides a specific implementation of the Implementor interface.



### When to Use

1. When you want to avoid a strong dependency between abstraction and implementation.
2. When both the abstraction and the implementation can have multiple variations, and you don't want an explosion of subclasses.
3. When you need to switch implementations dynamically at runtime.



### Programming Example in TypeScript

Scenario: A device control system where we control multiple devices (TV, Radio) using different types of remotes (Basic Remote, Advanced Remote).

#### Step 1: Define the Implementor Interface

```ts
interface Device {
  turnOn(): void;
  turnOff(): void;
  setVolume(volume: number): void;
}
```

#### Step 2: Create Concrete Implementors

```ts
class TV implements Device {
  turnOn(): void {
    console.log("TV is now ON");
  }

  turnOff(): void {
    console.log("TV is now OFF");
  }

  setVolume(volume: number): void {
    console.log(`TV volume set to ${volume}`);
  }
}

class Radio implements Device {
  turnOn(): void {
    console.log("Radio is now ON");
  }

  turnOff(): void {
    console.log("Radio is now OFF");
  }

  setVolume(volume: number): void {
    console.log(`Radio volume set to ${volume}`);
  }
}
```

#### Step 3: Define the Abstraction

```ts
abstract class RemoteControl {
  protected device: Device;

  constructor(device: Device) {
    this.device = device;
  }

  turnOn(): void {
    this.device.turnOn();
  }

  turnOff(): void {
    this.device.turnOff();
  }
}
```

#### Step 4: Create Refined Abstraction

```ts
class BasicRemoteControl extends RemoteControl {
  setVolume(volume: number): void {
    this.device.setVolume(volume);
  }
}

class AdvancedRemoteControl extends RemoteControl {
  mute(): void {
    console.log("Muting the device");
    this.device.setVolume(0);
  }
}
```

### Step 5: Usage

```ts
// Create devices
const tv = new TV();
const radio = new Radio();

// Create remotes
const basicRemote = new BasicRemoteControl(tv);
const advancedRemote = new AdvancedRemoteControl(radio);

// Use remotes with devices
basicRemote.turnOn();
basicRemote.setVolume(10);
basicRemote.turnOff();

advancedRemote.turnOn();
advancedRemote.mute();
advancedRemote.turnOff();
```

### Examples

1. **Extend the Pattern**
   Task: Add a new type of device, like a Smart Light, and a new type of remote, like a Voice-Controlled Remote. Use the Bridge pattern to integrate them.

2. **Dynamic Switching**
   Task: Modify the example so that you can switch between devices at runtime using the same remote control.



### Scenarios to Apply the Bridge Pattern

1. Cross-platform GUIs: Abstraction (UI controls) and Implementation (specific platform like Windows, macOS).
2. Payment Systems: Abstraction (Payment Processor) and Implementation (Stripe, PayPal).
3. Document Management: Abstraction (Document Viewer) and Implementation (PDF, Word, Image viewers).



### Summary

Bridge Pattern is ideal when you want to decouple abstraction and implementation.
Use it when both abstraction and implementation may have multiple variations.
It promotes flexibility and scalability in your design.
By solving the exercises and experimenting with variations, you'll understand when and how to use the Bridge pattern effectively.
