import { useEffect } from "react";

interface Cloneable {
  clone(): this;
}

// Base Class
class MapFeature implements Cloneable {
  protected x: number;
  protected y: number;

  constructor(x: number, y: number) {
    this.x = x;
    this.y = y;
  }

  clone(): this {
    return Object.create(this);
  }

  getCoordinates(): { x: number; y: number } {
    return { x: this.x, y: this.y };
  }

  moveTo(newX: number, newY: number): void {
    this.x = newX;
    this.y = newY;
  }

  describe(): string {
    return `Feature at (${this.x}, ${this.y})`;
  }
}

// Subclass: Tree
class Tree extends MapFeature {
  private name: string;
  private height: number;

  constructor(name: string, height: number, x: number, y: number) {
    super(x, y);
    this.name = name;
    this.height = height;
  }

  describe(): string {
    return `Tree: ${this.name}, Height: ${this.height}m at (${this.x}, ${this.y})`;
  }
}

// Subclass: Building
class Building extends MapFeature {
  private name: string;
  private floors: number;

  constructor(name: string, floors: number, x: number, y: number) {
    super(x, y);
    this.name = name;
    this.floors = floors;
  }

  describe(): string {
    return `Building: ${this.name}, Floors: ${this.floors} at (${this.x}, ${this.y})`;
  }
}

// Subclass: Road
class Road extends MapFeature {
  private length: number;

  constructor(length: number, x: number, y: number) {
    super(x, y);
    this.length = length;
  }

  describe(): string {
    return `Road: Length: ${this.length}m at (${this.x}, ${this.y})`;
  }
}

export default function PrototypePattern() {
  useEffect(() => {
    // Create initial features
    const tree1 = new Tree("Oak", 15, 10, 20);
    const building1 = new Building("Skyscraper", 50, 30, 40);
    const road1 = new Road(100, 50, 60);

    // Clone features to place multiple objects
    const tree2 = tree1.clone();
    tree2.moveTo(15, 25);

    const building2 = building1.clone();
    building2.moveTo(35, 45);

    const road2 = road1.clone();
    road2.moveTo(55, 65);

    // Display features
    console.log(tree1.describe()); // Tree: Oak, Height: 15m at (10, 20)
    console.log(tree2.describe()); // Tree: Oak, Height: 15m at (15, 25)

    console.log(building1.describe()); // Building: Skyscraper, Floors: 50 at (30, 40)
    console.log(building2.describe()); // Building: Skyscraper, Floors: 50 at (35, 45)

    console.log(road1.describe()); // Road: Length: 100m at (50, 60)
    console.log(road2.describe()); // Road: Length: 100m at (55, 65)
  }, []);

  return <div>PrototypePattern</div>;
}
