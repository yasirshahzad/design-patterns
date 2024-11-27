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
