// Abstract Product: Document
interface Document {
  open(): void;
  save(): void;
}

// Concrete Products: Report, Presentation, Spreadsheet
class Report implements Document {
  open(): void {
    console.log('Opening report...');
  }

  save(): void {
    console.log('Saving report...');
  }
}

class Presentation implements Document {
  open(): void {
    console.log('Opening presentation...');
  }

  save(): void {
    console.log('Saving presentation...');
  }
}

class Spreadsheet implements Document {
  open(): void {
    console.log('Opening spreadsheet...');
  }

  save(): void {
    console.log('Saving spreadsheet...');
  }
}

// Creator (Abstract Factory): DocumentFactory
abstract class DocumentFactory {
  abstract createDocument(): Document;

  // Common functionality for all creators
  abstract getDocumentType(): string;

  // Factory method in action
  createAndManageDocument(): void {
    const document = this.createDocument();
    console.log(this.getDocumentType());
    document.open();
    document.save();
  }
}

// Concrete Creators: ReportFactory, PresentationFactory, SpreadsheetFactory
class ReportFactory extends DocumentFactory {
  createDocument(): Document {
    return new Report();
  }

  getDocumentType(): string {
    return 'report';
  }
}

class PresentationFactory extends DocumentFactory {
  createDocument(): Document {
    return new Presentation();
  }

  getDocumentType(): string {
    return 'presentation';
  }
}

class SpreadsheetFactory extends DocumentFactory {
  createDocument(): Document {
    return new Spreadsheet();
  }

  getDocumentType(): string {
    return 'spreadsheet';
  }
}

export default () => {
	if (false) {
		// Example usage
		console.log('Creating and managing a report document...');
		const reportFactory = new ReportFactory();
		reportFactory.createAndManageDocument();

		console.log('');

		console.log('Creating and managing a presentation document...');
		const presentationFactory = new PresentationFactory();
		presentationFactory.createAndManageDocument();

		console.log('');

		console.log('Creating and managing a spreadsheet document...');
		const spreadsheetFactory = new SpreadsheetFactory();
		spreadsheetFactory.createAndManageDocument();
	}
}
