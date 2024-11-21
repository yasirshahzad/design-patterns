// Abstract Factories
interface Engine {
  start(): void;
  stop(): void;
}

interface Tyre {
  inflate(): void;
}

interface AbstractFactory {
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

class SUVFactory implements AbstractFactory {
  createEngine(): Engine {
    return new SUVEngine();
  }
  createTyre(): Tyre {
    return new SUVTyre();
  }
}

class SedanFactory implements AbstractFactory {
  createEngine(): Engine {
    return new SedanEngine();
  }
  createTyre(): Tyre {
    return new SedansTyre();
  }
}
