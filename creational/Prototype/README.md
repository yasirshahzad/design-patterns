# Prototype Pattern

The Prototype pattern is a creational design pattern that allows objects to be cloned rather than created from scratch. It enables the creation of new objects by copying an existing object, known as the prototype.

---

### Intent

- To reduce the cost of creating objects by cloning an existing object.
- To simplify object creation when object initialization is expensive or complex.

---

### Key Components

1. **Prototype Interface:** Defines the clone method for duplicating objects.
2. **Concrete Prototype:** Implements the clone method and defines how the object should be duplicated.
3. **Client:** Uses the clone method to create new objects based on existing ones.

### When to Use

1. When object creation is resource-intensive or time-consuming.
2. When initializing an object involves multiple configuration steps.
3. When you want to decouple object creation from its specific classes.

## Basic Code example

Imagine a document editor where users can duplicate shapes (circle, rectangle, etc.):

```ts
// Prototype Interface
interface Shape {
  clone(): this;
}

// Concrete Prototype
class Circle implements Shape {
  radius: number;

  constructor(radius: number) {
    this.radius = radius;
  }

  clone(): Shape {
    return new Circle(this.radius);
  }
}

class Rectangle implements Shape {
  width: number;
  height: number;

  constructor(width: number, height: number) {
    this.width = width;
    this.height = height;
  }

  clone(): Shape {
    return new Rectangle(this.width, this.height);
  }
}

// Client Code
const circle = new Circle(5);
const clonedCircle = circle.clone();

const rectangle = new Rectangle(10, 20);
const clonedRectangle = rectangle.clone();

console.log(clonedCircle); // Circle with radius 5
console.log(clonedRectangle); // Rectangle with width 10 and height 20
```

## Practice Exercise

1. **Clone Animal Objects**
   - Implement the Prototype pattern to create clones of animals (e.g., Cat, Dog).
   - Each animal should have unique properties like name and sound.
2. **Product Duplication**
   - Create a Product class with properties like name, price, and SKU.
   - Use the Prototype pattern to duplicate products in an inventory system.
3. **Map with Clonable Features**
   - Build a MapFeature prototype class with subtypes like Tree, Building, and Road.
   - Clone features to simulate placing multiple objects on a map.

---

## Scenarios

**Scenario 1: Game Development**

You are developing a game where characters, vehicles, or buildings have complex configurations. Instead of creating each one from scratch, you can use the Prototype pattern to clone them.

**Scenario 2: Document Editor**

In a document editor, users often duplicate elements like text boxes, images, or shapes. The Prototype pattern simplifies this operation.

**Scenario 3: Object Pool**

In performance-critical applications, objects are reused from a pool. Using the Prototype pattern, you can clone a pre-configured object from the pool when needed.
