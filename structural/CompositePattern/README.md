# Composite Pattern

### Definition

The **Composite Pattern** is a structural design pattern that allows you to compose objects into tree-like structures to represent part-whole hierarchies. It enables you to treat both individual objects and composite objects (collections of objects) in a uniform way.

---

### Intent

- To **compose objects** into tree structures to represent part-whole hierarchies.
- To allow clients to treat individual **objects and composite objects** uniformly.
- To simplify the client code by ensuring the same interface is used for individual and composite objects.

---

### Key Components

- **Component:** An abstract base class or interface that defines the common interface for all objects in the composition, including both leaf and composite objects.

- **Leaf:** Represents individual objects that don't have any children. They implement the `Component` interface and typically have no children.

- **Composite:** A container object that holds other components (which could be either Leaf objects or other Composite `objects`). It implements the `Component` interface and typically has methods to add, remove, and retrieve child components.

---

### When to Use

- When you need to represent hierarchies of objects (e.g., file systems, organizational structures, UI components).
- When both individual objects and groups of objects need to be treated in the same way.
- When the object structure is recursive, and you want to treat all objects uniformly without distinguishing between leaf and composite elements.

### Example Scenario

Consider a file system where there are individual files and folders. A folder can contain files and other folders. By using the Composite Pattern, both files and folders can be treated as FileSystemItem objects, making it easy to calculate the total size of a directory, regardless of whether it contains individual files or other subfolders.

```ts
// Component Interface
interface FileSystemItem {
  getSize(): number;
}

// Leaf (File)
class File implements FileSystemItem {
  constructor(private name: string, private size: number) {}
  getSize(): number {
    return this.size;
  }
}

// Composite (Folder)
class Folder implements FileSystemItem {
  private items: FileSystemItem[] = [];

  constructor(private name: string) {}

  add(item: FileSystemItem): void {
    this.items.push(item);
  }

  getSize(): number {
    return this.items.reduce((total, item) => total + item.getSize(), 0);
  }
}

// Usage
const file1 = new File("File1.txt", 10);
const file2 = new File("File2.txt", 20);
const folder = new Folder("Folder1");

folder.add(file1);
folder.add(file2);

console.log(`Total Size: ${folder.getSize()} bytes`); // Output: 30 bytes
```

---

### Real-World Applications

1. **File Systems:** In file systems, folders and files can be modeled using the Composite Pattern. A folder can contain files or other folders (subdirectories).

2. **GUI Components:** In GUI systems, containers like panels and windows can contain buttons, text fields, or even other panels, allowing you to treat both individual UI elements and complex layouts in the same way.

3. **Organization Hierarchy:** In organizations, managers can have employees (leaf), and managers themselves can be grouped into teams (composite). The Composite Pattern can model such hierarchies where individuals and groups of individuals (managers) are treated uniformly.

4. **Graphics and Drawing Tools:** In a graphic drawing application, shapes like circles, squares, or lines (leaves) can be grouped together into complex shapes (composites). Both individual and grouped shapes can be drawn using the same interface.

5. **Menus in Software:** Menus often contain submenus (composite), and each menu item (leaf) can have actions. Treating all menu components as a unified structure simplifies menu rendering and event handling.
