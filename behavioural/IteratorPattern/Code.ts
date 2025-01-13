interface IAggregator<T> {
    createIterator(): IIterator<T>
}

interface IIterator<T> {
    hasNext(): boolean;
    next(): T;
}


class Book {
    constructor(public title: string, public author: string, public genre: string) {
    }
}


class Library implements IAggregator<Book> {
    private books: Book[] = [
        new Book("The Great Gatsby", "F. Scott Fitzgerald", "Classic"),
        new Book("To Kill a Mockingbird", "Harper Lee", "Classic"),
        new Book("1984", "George Orwell", "Dystopian"),
        new Book("Pride and Prejudice", "Jane Austen", "Romance"),
        new Book("The Catcher in the Rye", "J.D. Salinger", "Coming-of-age"),
    ];

    createIterator(): IIterator<Book> {
        return new BookIterator(this.books);
    }

}

class BookIterator implements IIterator<Book> {
    private books: Book[] = [];
    private index: number = -1;

    constructor(books: Book[]) {
        this.books = books;
    }

    hasNext(): boolean {
        return this.index < this.books.length;
    }

    next(): Book {
        return this.books[this.index++];
    }
}

const library = (new Library()).createIterator(); 

while(library.hasNext()){
    console.log(library.next());
}