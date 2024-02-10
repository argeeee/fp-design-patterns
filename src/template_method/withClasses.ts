// Abstract class defining the template method for generating documents
abstract class DocumentGenerator {
  // The template method defines the document generation process.
  public generateDocument(): void {
    this.prepareTemplate();
    this.fillContent();
    this.finalizeDocument();
  }

  // These methods are common across all documents.
  protected prepareTemplate(): void {
    console.log("Preparing document template.");
  }

  protected finalizeDocument(): void {
    console.log("Finalizing the generated document.");
  }

  // This method is abstract and must be implemented by concrete subclasses.
  protected abstract fillContent(): void;
}

// Concrete subclass for generating reports
class ReportGenerator extends DocumentGenerator {
  protected fillContent(): void {
    console.log("Filling content for the report.");
  }
}

// Concrete subclass for generating invoices
class InvoiceGenerator extends DocumentGenerator {
  protected fillContent(): void {
    console.log("Filling content for the invoice.");
  }
}

// Concrete subclass for generating contracts
class ContractGenerator extends DocumentGenerator {
  protected fillContent(): void {
    console.log("Filling content for the contract.");
  }
}

export default () => {
	if (false) {
		// Example usage
    const reportGenerator = new ReportGenerator();
    console.log("Generating Report:");
    reportGenerator.generateDocument();

    console.log("---------------");

    const invoiceGenerator = new InvoiceGenerator();
    console.log("Generating Invoice:");
    invoiceGenerator.generateDocument();

    console.log("---------------");

    const contractGenerator = new ContractGenerator();
    console.log("Generating Contract:");
    contractGenerator.generateDocument();
	}
}