# Template Method

The **Template Method** is a behavioral design pattern that defines the skeleton of an algorithm in a base class and allows derived classes to override specific steps of the algorithm without changing its structure.

---

## Key Components

1. **Abstract Class:**
    Contains the template method, which defines the algorithm's structure.
    Implements the common steps and delegates specific steps to subclasses.

2. **Concrete Classes:**
    Provide the implementation for the specific steps of the algorithm.
 
## Example Code

```ts
// Abstract class
abstract class Beverage {
    // Template method
    prepareRecipe(): void {
        this.boilWater();
        this.brewOrSteep();
        this.pourInCup();
        
        if (this.customerWantsCondiments()) {
            this.addCondiments();
        }
    }

    private boilWater(): void {
        console.log("Boiling water");
    }

    private pourInCup(): void {
        console.log("Pouring into cup");
    }

    // Abstract methods for subclasses to implement
    protected abstract brewOrSteep(): void;
    protected abstract addCondiments(): void;

    // Hook: Subclasses can override this to add behavior
    protected customerWantsCondiments(): boolean {
        return true; // Default behavior
    }
}

// Concrete class: Tea
class Tea extends Beverage {
    protected brewOrSteep(): void {
        console.log("Steeping the tea");
    }

    protected addCondiments(): void {
        console.log("Adding lemon");
    }

    // Optional override of the hook
    protected customerWantsCondiments(): boolean {
        return true;
    }
}

// Concrete class: Coffee
class Coffee extends Beverage {
    protected brewOrSteep(): void {
        console.log("Brewing the coffee");
    }

    protected addCondiments(): void {
        console.log("Adding sugar and milk");
    }

    // Optional override of the hook
    protected customerWantsCondiments(): boolean {
        const wantsCondiments = prompt("Would you like sugar and milk with your coffee? (yes/no)")?.toLowerCase();
        return wantsCondiments === "yes";
    }
}

// Example usage
const tea = new Tea();
console.log("Making tea...");
tea.prepareRecipe();

const coffee = new Coffee();
console.log("\nMaking coffee...");
coffee.prepareRecipe();


```

```plaintext
Making tea...
Boiling water
Steeping the tea
Pouring into cup
Adding lemon

Making coffee...
Boiling water
Brewing the coffee
Pouring into cup
Would you like sugar and milk with your coffee? (yes/no)
Adding sugar and milk
```

**Explanation:**

1. Template Method (prepareRecipe):
    - Defines the steps for preparing a beverage.
    - Ensures the algorithm structure is consistent across all subclasses.

2. Common Steps:
    - `boilWater` and `pourInCup` are shared by all beverages and implemented in the base class.

3. Variable Steps:
    - `brewOrSteep` and `addCondiments` are abstract and implemented differently by subclasses (`Tea` and `Coffee`).

4. Hook Method:
    - `customerWantsCondiments` provides a way to modify the algorithm's behavior optionally.

---

## Benefits

- Promotes code reuse by placing common behavior in the base class.
- Enforces a consistent algorithm structure while allowing flexibility in specific steps.
- Reduces duplication across subclasses.