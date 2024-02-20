// Implementor: FileAccess
type FileAccess = {
  readFile: (path: string) => string;
  writeFile: (path: string, content: string) => void;
  deleteFile: (path: string) => void;
};

// Implementors: Local and Cloud File Access functions
const createLocalFileAccess = (): FileAccess => ({
  readFile: (path: string): string => {
    console.log(`Reading file from local disk: ${path}`);
    return `Content of ${path}`;
  },
  writeFile: (path: string, content: string): void => {
    console.log(`Writing file to local disk: ${path}`);
  },
  deleteFile: (path: string): void => {
    console.log(`Deleting file from local disk: ${path}`);
  }
});

const createCloudFileAccess = (): FileAccess => ({
  readFile: (path: string): string => {
    console.log(`Downloading file from cloud storage: ${path}`);
    return `Content of ${path}`;
  },
  writeFile: (path: string, content: string): void => {
    console.log(`Uploading file to cloud storage: ${path}`);
  },
  deleteFile: (path: string): void => {
    console.log(`Deleting file from cloud storage: ${path}`);
  }
});

// Abstraction: FileManager
type FileManagerFuncs = {
  readFile: (path: string) => string;
  writeFile: (path: string, content: string) => void;
  deleteFile: (path: string) => void;
};

// Refined Abstraction: (Basic)FileManager
const createFileManager = (fileAccess: FileAccess): FileManagerFuncs => ({
  readFile: (path: string): string => fileAccess.readFile(path),
  writeFile: (path: string, content: string): void => fileAccess.writeFile(path, content),
  deleteFile: (path: string): void => fileAccess.deleteFile(path)
});

// Refined Abstraction: EncryptedFileManager
const createEncryptedFileManager = (fileAccess: FileAccess): FileManagerFuncs => ({
  readFile: (path: string): string => {
    const encryptedContent = fileAccess.readFile(path);
    return decryptContent(encryptedContent);
  },
  writeFile: (path: string, content: string): void => {
    const encryptedContent = encryptContent(content);
    fileAccess.writeFile(path, encryptedContent);
  },
  deleteFile: (path: string): void => fileAccess.deleteFile(path)
});

// Utils
const encryptContent = (content: string): string => {
  console.log("Encrypting content...");
  return `Encrypted: ${content}`;
};

const decryptContent = (encryptedContent: string): string => {
  console.log("Decrypting content...");
  return encryptedContent.replace("Encrypted: ", "");
};

export default () => {
  if (false) {
    // Example usage
    const localFileAccess = createLocalFileAccess();
    const cloudFileAccess = createCloudFileAccess();

    const localFileManager = createFileManager(localFileAccess);
    localFileManager.writeFile("/path/to/local/file.txt", "New content");
    console.log(localFileManager.readFile("/path/to/local/file.txt"));
    localFileManager.deleteFile("/path/to/local/file.txt");

    console.log("---------------");

    const cloudFileManager = createFileManager(cloudFileAccess);
    cloudFileManager.writeFile("/path/to/cloud/file.txt", "New content");
    console.log(cloudFileManager.readFile("/path/to/cloud/file.txt"));
    cloudFileManager.deleteFile("/path/to/cloud/file.txt");

    console.log("---------------");

    const encryptedCloudFileManager = createEncryptedFileManager(cloudFileAccess);
    encryptedCloudFileManager.writeFile("/path/to/cloud/file.txt", "New content");
    console.log(encryptedCloudFileManager.readFile("/path/to/cloud/file.txt"));
    encryptedCloudFileManager.deleteFile("/path/to/cloud/file.txt");
  }
}
