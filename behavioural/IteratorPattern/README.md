# Iterator Pattern

The **Iterator Pattern** is a behavioral design pattern that provides a way to access elements of a collection (like lists, arrays, or custom data structures) sequentially, without exposing the underlying representation of the collection.

---

## Key Components

1. **Iterator Interface**:
    - Defines methods for traversing the elements, such as `next()`, `hasNext()`, and sometimes `current()`.
2. **Concrete Iterator**:
    - Implements the iterator interface and maintains the current traversal state.
3. **Aggregate (Collection)**:
    - Defines a method for creating an iterator.
4. **Concrete Aggregate**:
    - Implements the collection and provides an iterator for its elements.
5. **Client**:
    - Uses the iterator to access elements of the collection sequentially.

---

## Intent

- When you need to traverse a collection without knowing its internal structure.
- When you want to provide multiple traversal strategies for a collection.

---

## Real-World Examples

1. **Bookshelf:**
    You can browse books sequentially on a shelf without knowing how they are physically stored.
2. **Photo Album:**
    Flip through photos one by one, without worrying about how they are arranged internally.
3. **TV Remote:**
    Pressing the "Next Channel" button cycles through channels without knowing the internal order. 

---

## Software Scenario: Social Media Feed

Imagine you're implementing a social media feed. Posts are stored in a collection, but you want to let users scroll through them one by one.

```ts

interface Iterator<T> {
  next(): T | null; // Get the next element
  hasNext(): boolean; // Check if there are more elements
}

interface Aggregate<T> {
  createIterator(): Iterator<T>;
}

class SocialMediaFeed implements Aggregate<string> {
  private posts: string[];

  constructor(posts: string[]) {
    this.posts = posts;
  }

  public createIterator(): Iterator<string> {
    return new FeedIterator(this.posts);
  }
}

class FeedIterator implements Iterator<string> {
  private posts: string[];
  private position: number = 0;

  constructor(posts: string[]) {
    this.posts = posts;
  }

  public next(): string | null {
    
    if (this.hasNext()) {
      return this.posts[this.position++];
    }

    return null; // No more elements
  }

  public hasNext(): boolean {
    return this.position < this.posts.length;
  }
}

const posts = [
  "Post 1: Hello World!",
  "Post 2: Iterator Pattern Rocks!",
  "Post 3: Design Patterns are awesome!",
];

const feed = new SocialMediaFeed(posts);
const iterator = feed.createIterator();

while (iterator.hasNext()) {
  console.log(iterator.next());
}

```

```plaintext

Post 1: Hello World!
Post 2: Iterator Pattern Rocks!
Post 3: Design Patterns are awesome!

```

---

## Advantages

1. **Encapsulation:** Hides the internal structure of the collection.
2. **Multiple Iterators:** Allows different ways to traverse the same collection (e.g., forward, backward, by filter).
3. **Decoupling:** Decouples traversal logic from the collection's implementation.
