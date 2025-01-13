// Abstract Factories
interface Engine {
  start(): void;
  stop(): void;
}

interface Tyre {
  inflate(): void;
}

interface CarFactory {
  createEngine(): Engine;
  createTyre(): Tyre;
}

class SUVTyre implements Tyre {
  inflate(): void {
    console.log("Inflating SUV tyre");
  }
}

class SUVEngine implements Engine {
  start(): void {
    console.log("StartingUV engine");
  }
  stop(): void {
    console.log("StoppingUV engine");
  }
}

class SedansTyre implements Tyre {
  inflate(): void {
    console.log("Inflating sedan tyre");
  }
}

class SedanEngine implements Engine {
  start(): void {
    console.log("Starting sedan engine");
  }
  stop(): void {
    console.log("Stopping sedan engine");
  }
}

class SUVFactory implements CarFactory {
  createEngine(): Engine {
    return new SUVEngine();
  }
  createTyre(): Tyre {
    return new SUVTyre();
  }
}

class SedanFactory implements CarFactory {
  createEngine(): Engine {
    return new SedanEngine();
  }
  createTyre(): Tyre {
    return new SedansTyre();
  }
}
class Car {
  private engine: Engine;
  private tires: Tyre;

  constructor(factory: CarFactory) {
    this.engine = factory.createEngine();
    this.tires = factory.createTyre();
  }

  assemble() {
    this.tires.inflate();
    this.engine.start();
  }
}

// Usage
const suvFactory = new SUVFactory();
const suvCar = new Car(suvFactory);
suvCar.assemble();

const sedanFactory = new SedanFactory();
const sedanCar = new Car(sedanFactory);
sedanCar.assemble();
