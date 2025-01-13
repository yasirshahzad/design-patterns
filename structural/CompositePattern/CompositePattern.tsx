import { useEffect } from "react";

interface OrderItem {
  getPrice(): number;
}

class Order implements OrderItem {
  items: OrderItem[] = [];
  add(item: OrderItem): void {
    this.items.push(item);
  }
  getPrice(): number {
    return this.items.reduce((acc, item) => acc + item.getPrice(), 0);
  }
}

interface Composite {
  add(item: OrderItem): void;
  remove(item: OrderItem): void;
  getItems(): OrderItem[];
}

class CompositeOrder implements Composite, OrderItem {
  items: OrderItem[] = [];
  add(item: OrderItem): void {
    this.items.push(item);
  }
  remove(item: OrderItem): void {
    this.items = this.items.filter((i) => i !== item);
  }
  getItems(): OrderItem[] {
    return this.items;
  }

  getPrice(): number {
    return this.items.reduce((acc, item) => acc + item.getPrice(), 0);
  }
}

class Product implements OrderItem {
  price: number;
  constructor(price: number) {
    this.price = price;
  }
  getPrice(): number {
    return this.price;
  }
}

class Service implements OrderItem {
  price: number;
  constructor(price: number) {
    this.price = price;
  }
  getPrice(): number {
    return this.price;
  }
}

class Delivery implements OrderItem {
  price: number;
  constructor(price: number) {
    this.price = price;
  }
  getPrice(): number {
    return this.price;
  }
}

export default function CompositePattern() {
  useEffect(() => {
    const order = new Order();
    order.add(new Product(100));
    order.add(new Service(50));
    order.add(new Delivery(10));

    const compositeOrder = new CompositeOrder();
    compositeOrder.add(new Product(100));
    compositeOrder.add(new Service(50));
    compositeOrder.add(new Delivery(10));

    console.log(order.getPrice());
    console.log(compositeOrder.getPrice());
  }, []);
  return <div>CompositePattern</div>;
}
