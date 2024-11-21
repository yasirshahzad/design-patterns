interface TextContent {
  formatText(): void;
}
interface Image {
  formatImage(): void;
}

class PDFTextContent implements TextContent {
  formatText() {
    console.log("Formatting text for a PDF.");
  }
}
class WordTextContent implements TextContent {
  formatText() {
    console.log("Formatting text for a Word document.");
  }
}
class PDFImage implements Image {
  formatImage() {
    console.log("Formatting image for a PDF.");
  }
}
class WordImage implements Image {
  formatImage() {
    console.log("Formatting image for a Word document.");
  }
}

interface DocumentFactory {
  createTextContent(): TextContent;
  createImage(): Image;
}

class PDFDocumentFactory implements DocumentFactory {
  createTextContent(): TextContent {
    return new PDFTextContent();
  }
  createImage(): Image {
    return new PDFImage();
  }
}
class WordDocumentFactory implements DocumentFactory {
  createTextContent(): TextContent {
    return new WordTextContent();
  }
  createImage(): Image {
    return new WordImage();
  }
}

class Document {
  private textContent: TextContent;
  private image: Image;

  constructor(factory: DocumentFactory) {
    this.textContent = factory.createTextContent();
    this.image = factory.createImage();
  }

  generate() {
    this.textContent.formatText();
    this.image.formatImage();
  }
}

// Usage
const pdfFactory = new PDFDocumentFactory();
const pdfDocument = new Document(pdfFactory);
pdfDocument.generate();

const wordFactory = new WordDocumentFactory();
const wordDocument = new Document(wordFactory);
wordDocument.generate();
