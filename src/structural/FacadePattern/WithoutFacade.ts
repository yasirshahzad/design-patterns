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
