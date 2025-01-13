# Strategy Pattern

The Strategy Pattern is a behavioral design pattern that lets you define a family of algorithms, put each of them into a separate class, and make their objects interchangeable.



## **Key Components:**

1. **Context:** The object that uses a strategy to perform a behavior.
2. **Strategy Interface:** Defines a common interface for all supported algorithms.
3. **Concrete Strategies:** The implementations of the various algorithms.
4. **Client:** Chooses and assigns a strategy to the context on runtime.



## **Intent:**

1. To allow switching between different algorithms dynamically.
2. You have multiple ways to achieve a behavior, and the exact way can change at runtime.
3. You want to remove conditional logic (if-else or switch-case) from your code by delegating the behavior to separate classes.
4. To avoid tightly coupling algorithms to the context.
5. To adhere to the Open/Closed Principle (adding new algorithms without modifying existing code).

## Scenario 1

**Payment Method Selection:** Imagine a checkout system where a customer can pay using different methods: Credit Card, PayPal, or Cash. The system selects a payment method based on the customer's choice and processes it accordingly.

```ts
interface PaymentStrategy {
  pay(amount: number): void;
}

class CreditCardPayment implements PaymentStrategy {
  pay(amount: number): void {
    console.log(`Paid $${amount} using Credit Card.`);
  }
}

class PayPalPayment implements PaymentStrategy {
  pay(amount: number): void {
    console.log(`Paid $${amount} using PayPal.`);
  }
}

class CashPayment implements PaymentStrategy {
  pay(amount: number): void {
    console.log(`Paid $${amount} using Cash.`);
  }
}

class PaymentService {
  private strategy: PaymentStrategy;

  constructor(strategy: PaymentStrategy) { 
    this.strategy = strategy;
  }

  setStrategy(strategy: PaymentStrategy): void {
    this.strategy = strategy;
  }

  executePayment(amount: number): void {
    this.strategy.pay(amount);
  }
}

// Client Code
const paymentContext = new PaymentService(new CreditCardPayment());
paymentContext.executePayment(100); // Paid $100 using Credit Card.

paymentContext.setStrategy(new PayPalPayment());
paymentContext.executePayment(200); // Paid $200 using PayPal.

paymentContext.setStrategy(new CashPayment());
paymentContext.executePayment(50); // Paid $50 using Cash.

```

## Scenario 2

**Sorting:** A program requires sorting data, but the algorithm should be flexible (e.g., QuickSort, MergeSort, or BubbleSort) depending on the data or performance requirements.

```ts
interface SortStrategy {
  sort(data: number[]): number[];
}

class QuickSort implements SortStrategy {
  sort(data: number[]): number[] {
    console.log("Using QuickSort...");
    return data.sort((a, b) => a - b); // Simplified for demo purposes
  }
}

class MergeSort implements SortStrategy {
  sort(data: number[]): number[] {
    console.log("Using MergeSort...");
    // Simplified merge sort logic here
    return data.sort((a, b) => a - b); // Placeholder
  }
}

class BubbleSort implements SortStrategy {
  sort(data: number[]): number[] {
    console.log("Using BubbleSort...");
    // Simplified bubble sort logic
    for (let i = 0; i < data.length; i++) {
      for (let j = 0; j < data.length - i - 1; j++) {
        if (data[j] > data[j + 1]) {
          [data[j], data[j + 1]] = [data[j + 1], data[j]];
        }
      }
    }
    return data;
  }
}

class SortContext {
  private strategy: SortStrategy;

  constructor(strategy: SortStrategy) {
    this.strategy = strategy;
  }

  setStrategy(strategy: SortStrategy): void {
    this.strategy = strategy;
  }

  executeSort(data: number[]): number[] {
    return this.strategy.sort(data);
  }
}

const data = [5, 3, 8, 4, 2];

const sortContext = new SortContext(new QuickSort());
console.log(sortContext.executeSort(data)); // Using QuickSort...

sortContext.setStrategy(new MergeSort());
console.log(sortContext.executeSort(data)); // Using MergeSort...

sortContext.setStrategy(new BubbleSort());
console.log(sortContext.executeSort(data)); // Using BubbleSort...

```