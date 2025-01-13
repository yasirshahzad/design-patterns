# Flyweight Pattern

### Definition

The Flyweight pattern is a structural design pattern that reduces memory usage by sharing common parts of objects instead of storing them repeatedly. It ensures efficient object management, especially when creating a large number of similar objects.

---

### Intent

To minimize memory consumption and improve performance by sharing as much data as possible among objects, especially when objects are numerous and resource-intensive to instantiate.

---

### Components

1. **Flyweight Interface:** Defines the common interface for shared objects.

2. **Concrete Flyweight:** Implements the Flyweight interface and stores shared intrinsic state.

3. **Unshared Flyweight:** Objects that are not shared but can work with shared Flyweights.

4. **Flyweight Factory:** Manages Flyweight instances and ensures proper sharing.

5. **Client:** Uses Flyweight objects and provides the extrinsic state when needed.

---

### When to Use

1. When you have a large number of similar objects.
   Memory consumption is critical.
2. Objects can have a shared intrinsic state (common data) and a unique extrinsic state (context-specific data).
3. Examples include graphical elements in a game, font rendering, or caching repeated data.

---

### TypeScript Code Example

Scenario: A text editor that needs to render characters. Characters share the same font but have different positions.

```ts
// Flyweight Interface
interface Character {
  render(positionX: number, positionY: number): void;
}

// Concrete Flyweight
class SharedCharacter implements Character {
  constructor(
    private readonly character: string,
    private readonly font: string
  ) {}

  render(positionX: number, positionY: number): void {
    console.log(
      `Rendering character '${this.character}' with font '${this.font}' at (${positionX}, ${positionY})`
    );
  }
}

// Flyweight Factory
class CharacterFactory {
  private characters: Map<string, SharedCharacter> = new Map();

  getCharacter(character: string, font: string): Character {
    const key = `${character}-${font}`;
    if (!this.characters.has(key)) {
      this.characters.set(key, new SharedCharacter(character, font));
    }
    return this.characters.get(key)!;
  }
}

// Client Code
const factory = new CharacterFactory();
const documentContent = [
  { char: "H", font: "Arial", x: 10, y: 20 },
  { char: "e", font: "Arial", x: 20, y: 20 },
  { char: "l", font: "Arial", x: 30, y: 20 },
  { char: "l", font: "Arial", x: 40, y: 20 },
  { char: "o", font: "Arial", x: 50, y: 20 },
];

documentContent.forEach((content) => {
  const character = factory.getCharacter(content.char, content.font);
  character.render(content.x, content.y);
});
```

#### Output:

```console
Rendering character 'H' with font 'Arial' at (10, 20)
Rendering character 'e' with font 'Arial' at (20, 20)
Rendering character 'l' with font 'Arial' at (30, 20)
Rendering character 'l' with font 'Arial' at (40, 20)
Rendering character 'o' with font 'Arial' at (50, 20)
```

---

### Key Takeaways

- **Intrinsic State:** Shared, immutable data stored in the Flyweight.
- **Extrinsic State:** Unique, provided by the client when needed.
- **Flyweight** is highly useful in optimizing large-scale applications with repeated objects.
