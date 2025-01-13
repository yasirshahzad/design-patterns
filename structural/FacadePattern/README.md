# Facade Pattern

### Definition

The Facade pattern provides a simplified interface to a complex subsystem, making it easier for clients to interact with it.



### Intent

- Simplify the usage of complex subsystems by offering a unified and user-friendly interface.
- Reduce coupling between clients and the subsystem by hiding implementation detail.



### Components

1. **Facade:** The unified interface that simplifies subsystem access.
2. **Subsystem:** The complex internal components that the Facade hides.
3. **Client:** The user of the Facade interface.



### When to Use

1. **Simplifying Complexity:** When a system is complex with many moving parts, and you need to provide a clean, easy-to-use API for it.
2. **Decoupling:** To reduce the dependency of the client on multiple subsystem classes.
3. **Legacy Code:** When working with an old system, the Facade can wrap it, making it easier to interact with modern code.



### TypeScript Example Scenario:

You are building a home automation system. The client wants to turn on the home theatre with a single command, but the system requires multiple steps (e.g., turning on the projector, setting the sound system, etc.).

#### Without Facade

```ts
class Projector {
  turnOn() {
    console.log("Projector is turned on.");
  }
}

class SoundSystem {
  setVolume(level: number) {
    console.log(`Sound system volume set to ${level}.`);
  }
}

class StreamingService {
  playMovie(movie: string) {
    console.log(`Playing movie: ${movie}`);
  }
}

// Client Code
const projector = new Projector();
const soundSystem = new SoundSystem();
const streamingService = new StreamingService();

projector.turnOn();
soundSystem.setVolume(20);
streamingService.playMovie("Inception");
```

#### With Facade

```ts
// Subsystem
class Projector {
  turnOn() {
    console.log("Projector is turned on.");
  }
}

class SoundSystem {
  setVolume(level: number) {
    console.log(`Sound system volume set to ${level}.`);
  }
}

class StreamingService {
  playMovie(movie: string) {
    console.log(`Playing movie: ${movie}`);
  }
}

// Facade
class HomeTheatreFacade {
  private projector: Projector;
  private soundSystem: SoundSystem;
  private streamingService: StreamingService;

  constructor() {
    this.projector = new Projector();
    this.soundSystem = new SoundSystem();
    this.streamingService = new StreamingService();
  }

  startMovie(movie: string) {
    console.log("Starting the home theatre system...");
    this.projector.turnOn();
    this.soundSystem.setVolume(20);
    this.streamingService.playMovie(movie);
    console.log("Enjoy your movie!");
  }
}

// Client Code
const homeTheatre = new HomeTheatreFacade();
homeTheatre.startMovie("Inception");
```

### Benefits

1. **Simplifies API:** Clients interact with a single interface instead of multiple classes.
2. **Hides Complexity:** Implementation details are hidden from the client.
3. **Improves Maintainability:** Changes in the subsystem don’t directly impact the client.

### Exercises

1. **Banking System**
   Create a Facade for a banking system where clients can transfer money. The subsystem should handle authentication, account validation, and transaction processing.

2. **Travel Booking**
   Implement a Facade for booking a trip. The subsystem should involve booking flights, hotels, and rental cars.

3. **Game Setup**
   Build a Facade for setting up a video game. The subsystem should include loading assets, setting up the game environment, and initializing the player character.
