# Observer Pattern

Notifies multiple objects, or *subscribers* about any events that happen to the object they are observing or publisher. 

The Observer Pattern defines a one-to-many dependency between objects, so when one object (the Subject) changes state, all its dependents (the Observers) are notified and updated automatically.

---

## **Key Components:**

1. **Subject:** The object being observed. Maintains a list of observers and notifies them of state changes.
2. **Observer:** An interface or abstract class for objects that should be notified of changes in the subject.
3. **ConcreteSubject:** The implementation of the subject.
4. **ConcreteObserver:** The implementation of the observer.

---

## **Intent:**

1. To decouple objects so that changes in one object (the subject) can be communicated to multiple other objects (observers) without the subject knowing details about the observers.
2. Enables a publish/subscribe mechanism.
3. When one object's state changes and other objects need to be notified automatically.
4. When the number of observers or the nature of their updates can vary dynamically.

---

## **Scenario: Weather Station System**

A weather station provides updates (temperature, humidity, etc.) to multiple devices (mobile app, website, and display screens).

```ts 
interface Observer {
  update(temperature: number, humidity: number): void;
}

interface Subject {
  addObserver(observer: Observer): void;
  removeObserver(observer: Observer): void;
  notifyObservers(): void;
}

class WeatherStation implements Subject {
  private observers: Observer[] = [];
  private temperature: number = 0;
  private humidity: number = 0;

  addObserver(observer: Observer): void {
    this.observers.push(observer);
  }

  removeObserver(observer: Observer): void {
    this.observers = this.observers.filter(o => o !== observer);
  }

  notifyObservers(): void {
    for (const observer of this.observers) {
      observer.update(this.temperature, this.humidity);
    }
  }

  setWeatherData(temperature: number, humidity: number): void {
    this.temperature = temperature;
    this.humidity = humidity;
    this.notifyObservers();
  }
}


class MobileApp implements Observer {
  update(temperature: number, humidity: number): void {
    console.log(`MobileApp: Temperature is ${temperature}°C, Humidity is ${humidity}%.`);
  }
}

class Website implements Observer {
  update(temperature: number, humidity: number): void {
    console.log(`Website: Temperature is ${temperature}°C, Humidity is ${humidity}%.`);
  }
}


```