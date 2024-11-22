import { useState } from "react";

class Pizza {
  public size: string = "";
  public crust: string = "";
  public toppings: string[] = [];

  explainProductWeBuilt() {
    return `Pizza with ${this.size} size, ${
      this.crust
    } crust, and toppings: ${this.toppings.join(", ")}`;
  }
}

interface PizzaBuilder {
  setCrust(crust: string): this;
  setSize(size: string): this;
  setToppings(toppings: string[]): this;
  build(): Pizza;
}

class CustomPizzaBuilder implements PizzaBuilder {
  private pizza: Pizza;
  constructor() {
    this.pizza = new Pizza();
  }

  setCrust(crust: string): this {
    this.pizza.crust = crust;
    return this;
  }

  setSize(size: string): this {
    this.pizza.size = size;
    return this;
  }

  setToppings(toppings: string[]): this {
    this.pizza.toppings = toppings;
    return this;
  }

  build(): Pizza {
    return this.pizza;
  }
}

class PizzaChef {
  builder: PizzaBuilder;
  constructor(builder: PizzaBuilder) {
    this.builder = builder;
  }

  buildSimplePizza(): Pizza {
    return this.builder
      .setCrust("thin")
      .setSize("small")
      .setToppings(["pepperoni"])
      .build();
  }

  buildSpicyPizza(): Pizza {
    return this.builder
      .setCrust("thick")
      .setSize("large")
      .setToppings(["Red Chilli", "Extra Cheese"])
      .build();
  }

  buildCustomPizza(size: string, crust: string, toppings: string[]): Pizza {
    return this.builder
      .setSize(size)
      .setCrust(crust)
      .setToppings(toppings)
      .build();
  }
}

export default function BuilderPattern() {
  const [pizzaDescription, setPizzaDescription] = useState("");

  const handleBuildSimplePizza = () => {
    const pizzaBuilder = new CustomPizzaBuilder();
    const chef = new PizzaChef(pizzaBuilder);
    const pizza = chef.buildSimplePizza();
    setPizzaDescription(pizza.explainProductWeBuilt());
  };

  const handleBuildSpicyPizza = () => {
    const pizzaBuilder = new CustomPizzaBuilder();
    const chef = new PizzaChef(pizzaBuilder);
    const pizza = chef.buildSpicyPizza();
    setPizzaDescription(pizza.explainProductWeBuilt());
  };

  const handleBuildCustomPizza = () => {
    const pizzaBuilder = new CustomPizzaBuilder();
    const chef = new PizzaChef(pizzaBuilder);
    const pizza = chef.buildCustomPizza("medium", "stuffed", [
      "Mushrooms",
      "Olives",
    ]);
    setPizzaDescription(pizza.explainProductWeBuilt());
  };

  return (
    <div
      style={{
        textAlign: "center",
        padding: "20px",
        fontFamily: "Arial, sans-serif",
      }}
    >
      <h1>Pizza Builder</h1>
      <div style={{ marginBottom: "20px" }}>
        <button
          onClick={handleBuildSimplePizza}
          style={{
            margin: "0 10px",
            padding: "10px 20px",
            backgroundColor: "#4CAF50",
            color: "#fff",
            border: "none",
            borderRadius: "5px",
            cursor: "pointer",
          }}
        >
          Build Simple Pizza
        </button>
        <button
          onClick={handleBuildSpicyPizza}
          style={{
            margin: "0 10px",
            padding: "10px 20px",
            backgroundColor: "#FF5722",
            color: "#fff",
            border: "none",
            borderRadius: "5px",
            cursor: "pointer",
          }}
        >
          Build Spicy Pizza
        </button>
        <button
          onClick={handleBuildCustomPizza}
          style={{
            margin: "0 10px",
            padding: "10px 20px",
            backgroundColor: "#2196F3",
            color: "#fff",
            border: "none",
            borderRadius: "5px",
            cursor: "pointer",
          }}
        >
          Build Custom Pizza
        </button>
      </div>
      <div style={{ marginTop: "30px", fontSize: "18px", fontWeight: "bold" }}>
        {pizzaDescription || "Click a button to build a pizza!"}
      </div>
    </div>
  );
}
