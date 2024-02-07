// Observer interface
interface Observer {
  update(message: any): void;
}

// Subject interface
interface Subject {
  attach(observer: Observer): void;
  detach(observer: Observer): void;
  notify(message: any): void;
  someBusinessLogic(): void;
}

// Concrete Subject
const createConcreteSubject = (): Subject => {
  let observers: Observer[] = [];

  const attach = (observer: Observer): void => {
    observers.push(observer);
  };

  const detach = (observer: Observer): void => {
    observers = observers.filter(obs => obs !== observer);
  };

  const notify = (message: any): void => {
    observers.forEach(observer => observer.update(message));
  };

  const someBusinessLogic = (): void => {
    console.log("ConcreteSubject: Performing some business logic.");
    // After performing some business logic, notify observers.
    notify("Some message to notify observers.");
  };

  return { attach, detach, notify, someBusinessLogic };
};

// Concrete Observers
const createFirstConcreteObserver = (name: string): Observer => ({
  update: (message: any): void => {
    console.log(`(First) ${name} received message:`, message);
  }
});

const createSecondConcreteObserver = (name: string): Observer => ({
  update: (message: any): void => {
    console.log(`(Second) ${name} received message:`, message);
  }
});

export default () => {
	if (false) {
		// Example usage
    const subject = createConcreteSubject();

    const observer1 = createFirstConcreteObserver("Observer 1");
    const observer2 = createSecondConcreteObserver("Observer 2");

    subject.attach(observer1);
    subject.attach(observer2);

    subject.someBusinessLogic();

    subject.detach(observer1);

    subject.someBusinessLogic();
	}
}