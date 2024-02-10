// Abstract Product: Document
type Document = {
  open(): void;
  save(): void;
};

// Concrete Products: Report, Presentation, Spreadsheet
const createReport = (): Document => ({
  open: () => console.log('Opening report...'),
  save: () => console.log('Saving report...')
});

const createPresentation = (): Document => ({
  open: () => console.log('Opening presentation...'),
  save: () => console.log('Saving presentation...')
});

const createSpreadsheet = (): Document => ({
  open: () => console.log('Opening spreadsheet...'),
  save: () => console.log('Saving spreadsheet...')
});

// Creator (Abstract Factory): DocumentFactory
interface DocumentFactory {
  createDocument: () => Document;
  getDocumentType: () => string;
}

// Factory function in action
const createAndManageDocument = (factory: DocumentFactory): void => {
  const document = factory.createDocument();
  console.log(factory.getDocumentType());
  document.open();
  document.save();
}

// Concrete Creators: ReportFactory, PresentationFactory, SpreadsheetFactory
const createReportFactory = (): DocumentFactory => ({
  createDocument: () => createReport(),
  getDocumentType: () => 'report'
});

const createPresentationFactory = (): DocumentFactory => ({
  createDocument: () => createPresentation(),
  getDocumentType: () => 'presentation'
});

const createSpreadsheetFactory = (): DocumentFactory => ({
  createDocument: () => createSpreadsheet(),
  getDocumentType: () => 'spreadsheet'
});

export default () => {
  if (false) {
    // Example usage
    console.log('Creating and managing a report document...');
    const reportFactory = createReportFactory();
    createAndManageDocument(reportFactory);

    console.log('');

    console.log('Creating and managing a presentation document...');
    const presentationFactory = createPresentationFactory();
    createAndManageDocument(presentationFactory);

    console.log('');

    console.log('Creating and managing a spreadsheet document...');
    const spreadsheetFactory = createSpreadsheetFactory();
    createAndManageDocument(spreadsheetFactory);
  }
}
