# **Visitor Pattern**

In Object Oriented Programming, visitor pattern help to separates the algorithms from the objects on which they operate on, allowing to add new operations without modifying the object's structure.  

---

## **Intent**

This pattern is ideal to use when you want to add new functionalities to objects without modifying their structure. It's particularly useful in scenarios where the object structure is stable, but new operations are frequently needed.

---

## **Key Components to Remember**

1. **Visitor:** The interface or abstract class that defines operations for all object types (e.g., "Explain this section").
2. **Concrete Visitor:** A specific visitor that performs a particular operation (e.g., a guide for kids or adults).
3. **Element:** The interface or abstract class for objects that can accept a visitor (e.g., museum sections).
4. **Concrete Element:** The actual objects that the visitor interacts with (e.g., Art, History, Science sections).
5. **Accept Method:** Each element has an accept method that takes a visitor and lets it perform its operation. It uses ***Double Dispatch*** technique.

---

```ts
// Visitor Interface
interface AnimalVisitor {
  visitCat(cat: Cat): void;
  visitDog(dog: Dog): void;
  visitBird(bird: Bird): void;
}

// Concrete Visitor 1
class Veterinarian implements AnimalVisitor {
  visitCat(cat: Cat): void {
    console.log("Checking the cat's health.");
  }

  visitDog(dog: Dog): void {
    console.log("Checking the dog's health.");
  }

  visitBird(bird: Bird): void {
    console.log("Checking the bird's health.");
  }
}

// Concrete Visitor 2
class Jump implements AnimalVisitor {
  visitCat(cat: Cat): void {
    console.log("Jumping cat.");
  }

  visitDog(dog: Dog): void {
    console.log("Jumping dog.");
  }

  visitBird(bird: Bird): void {
    console.log("Jumping bird.");
  }

}
// Concrete Visitor 3
class Speak implements AnimalVisitor {
  visitCat(cat: Cat): void {
    console.log("Say the voice of cat.");
  }

  visitDog(dog: Dog): void {
    console.log("Say the voice of dog.");
  }

  visitBird(bird: Bird): void {
    console.log("Say the voice of bird.");
  }
}

// Element Interface
interface Animal {
  accept(visitor: AnimalVisitor): void;
}


// Concrete Elements
class Cat implements Animal {
  accept(visitor: AnimalVisitor): void {
    visitor.visitCat(this);
  }
}

class Dog implements Animal {
  accept(visitor: AnimalVisitor): void {
    visitor.visitDog(this);
  }
}

class Bird implements Animal {
  accept(visitor: AnimalVisitor): void {
    visitor.visitBird(this);
  }
}


// Test the Visitor Pattern
const cat = new Cat();
const dog = new Dog();
const bird = new Bird();

const veterinarian = new Veterinarian();

cat.accept(veterinarian);  // Output: "Checking the cat's health."
dog.accept(veterinarian);  // Output: "Checking the dog's health."
bird.accept(veterinarian); // Output: "Checking the bird's health."

```

## **Summary:**

The visitor pattern introduces a visitor object that enables you to add new functionalities to the objects without modifying their structure. In real-world development, visitor pattern helps maintain the Open/Closed principle, enhancing the system's extensibility and maintainability.

---

### **Other things to Remember**

**Double Dispatch**: *delegates* choosing the proper method to the *object itself* instead of letting the client select a method.