import { useEffect } from "react";

class Singleton {
  private static instance: Singleton; // Static instance property
  private constructor() {}

  public static getInstance(): Singleton {
    if (!Singleton.instance) {
      Singleton.instance = new Singleton();
    }
    return Singleton.instance;
  }

  /**
   * Adds a message to the logger
   * @param msg - The message to add
   */
  public addMessage(msg: string): void {
    console.log("Added message to logger: " + msg);
  }
}

export default function SingletonPattern() {
  useEffect(() => {
    const logger1 = Singleton.getInstance();
    const logger2 = Singleton.getInstance();

    // Adding messages using both instances
    logger1.addMessage("First message");
    logger2.addMessage("Second message");

    // Confirming both instances are the same
    console.log(
      "Are logger1 and logger2 the same instance? ",
      logger1 === logger2
    );
  }, []);

  return (
    <div>
      <h1>Singleton Pattern</h1>
      <p>Check the console for testing results.</p>
    </div>
  );
}
