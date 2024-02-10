// Define a function to generate documents
type DocumentGeneratorFn = () => void;

// Function to create document generator with common steps
const createDocumentGenerator = (fillContentFn: () => void): DocumentGeneratorFn => {
  const prepareTemplate = (): void => {
    console.log("Preparing document template.");
  };

  const finalizeDocument = (): void => {
    console.log("Finalizing the generated document.");
  };

  return (): void => {
    prepareTemplate();
    fillContentFn();
    finalizeDocument();
  };
};

// Functions to generate different types of documents
const generateReport: DocumentGeneratorFn = createDocumentGenerator(() => {
  console.log("Filling content for the report.");
});

const generateInvoice: DocumentGeneratorFn = createDocumentGenerator(() => {
  console.log("Filling content for the invoice.");
});

const generateContract: DocumentGeneratorFn = createDocumentGenerator(() => {
  console.log("Filling content for the contract.");
});


export default () => {
	if (false) {
    // Example usage
    console.log("Generating Report:");
    generateReport();

    console.log("---------------");

    console.log("Generating Invoice:");
    generateInvoice();

    console.log("---------------");
    
    console.log("Generating Contract:");
    generateContract();
	}
}

