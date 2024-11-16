import { useMemo, useState } from "react";

// abstract class / interface for payment method shape
interface PaymentMethod {
  charge: (amount: number) => void;
}

// concrete class implements that PaymentMethod shape
class Cash implements PaymentMethod {
  charge(amount: number): void {
    console.log("Charging cash payment: ", amount);
  }
}

// concrete class implements that PaymentMethod shape
class PayPal implements PaymentMethod {
  charge(amount: number): void {
    console.log("Charging PayPal payment: ", amount);
  }
}

// concrete class implements that PaymentMethod shape
class Card implements PaymentMethod {
  charge(amount: number): void {
    console.log("Charging card payment: ", amount);
  }
}

// abstract creator, default paymentMethod is cash
// extend class and then create an object
// you may override the createPaymentMethod in subclass which shows the Factory Method Pattern
abstract class PaymentFactory {
  paymentMethod: PaymentMethod = this.createPaymentMethod();

  processPayment(amount: number) {
    this.paymentMethod.charge(amount);
  }

  createPaymentMethod(): PaymentMethod {
    return new Cash();
  }
}

// Concrete Creator
class PaypalService extends PaymentFactory {
  // overriding the default payment method
  createPaymentMethod(): PaymentMethod {
    return new PayPal();
  }
}

// Concrete Creator
class CardService extends PaymentFactory {
  // overriding the default payment method
  createPaymentMethod(): PaymentMethod {
    return new Card();
  }
}

// Concrete Creator
class CashService extends PaymentFactory {
  // overriding the default payment method
  createPaymentMethod(): PaymentMethod {
    return new Cash();
  }
}

export default function FactoryMethod() {
  const cost = 45;
  const [method, setMethod] = useState<"cash" | "paypal" | "card">("cash");

  const paymentServices = useMemo(
    () => ({
      cash: CashService,
      paypal: PaypalService,
      card: CardService,
    }),
    []
  );

  const handleOrder = () => {
    const PaymentService = paymentServices[method];
    const paymentService = PaymentService ? new PaymentService() : null;

    paymentService?.processPayment(cost);
  };

  return (
    <div>
      <h1>Product: Hair Dryer</h1>
      <h3>Cost: ${cost}</h3>
      <label>Payment Method</label>
      <br />
      <input
        onChange={(e) => setMethod(e.target.value as "paypal")}
        type="radio"
        id="paypal"
        name="payment-method"
        value="paypal"
        checked={method == "paypal"}
      />
      <label htmlFor="paypal">PayPal</label>
      <br />
      <input
        onChange={(e) => setMethod(e.target.value as "card")}
        type="radio"
        id="cash"
        name="payment-method"
        value="cash"
        checked={method == "cash"}
      />
      <label htmlFor="cash">Cash</label>
      <br />
      <input
        onChange={(e) => setMethod(e.target.value as "card")}
        type="radio"
        id="card"
        name="payment-method"
        value="card"
        checked={method == "card"}
      />
      <label htmlFor="card">Card</label>
      <br />
      <br />
      <button onClick={handleOrder}>Submit order</button>
    </div>
  );
}
