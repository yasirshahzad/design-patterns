interface DocumentState {
    publish(doc: Document): void;
    reject(doc: Document): void;
}

class Document {
    private currentState: DocumentState;

    constructor(initialState: DocumentState) {
        this.currentState = initialState;
    }

    setState(state: DocumentState): void {
        this.currentState = state;
    }

    publish(): void {
        this.currentState.publish(this);
    }

    reject(): void {
        this.currentState.reject(this);
    }
}

class DraftState implements DocumentState {
    publish(doc: Document): void {
        console.log("Draft: Submitting for moderation");
        doc.setState(new ModerationState());
    }

    reject(): void {
        console.log("Draft: Document is rejected");
    }
}

class ModerationState implements DocumentState {
    publish(doc: Document): void {
        console.log("Moderation: Document is published");
        doc.setState(new PublishedState());
    }

    reject(doc: Document): void {
        console.log("Moderation: Document is rejected");
        doc.setState(new DraftState());
    }
}

class PublishedState implements DocumentState {
    publish(): void {
        console.log("Published: Document is already published");

    }

    reject(): void {
        console.log("Published: Document is already published");
    }
}


// Example Usage
const document = new Document(new DraftState());

console.log("Document Workflow:");
document.publish(); // Draft -> Moderation
document.publish(); // Moderation -> Published
document.reject();  // Cannot reject in Published state
document.publish(); // Already published