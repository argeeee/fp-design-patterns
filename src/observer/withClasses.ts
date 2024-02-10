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
class ConcreteSubject implements Subject {
  private observers: Observer[] = [];

  attach(observer: Observer): void {
    this.observers.push(observer);
  }

  detach(observer: Observer): void {
    const index = this.observers.indexOf(observer);
    if (index !== -1) {
      this.observers.splice(index, 1);
    }
  }

  notify(message: any): void {
    this.observers.forEach(observer => observer.update(message));
  }

  someBusinessLogic(): void {
    console.log("ConcreteSubject: Performing some business logic.");
    // After performing some business logic, notify observers.
    this.notify("Some message to notify observers.");
  }
}

// Concrete Observers
class FirstConcreteObserver implements Observer {
  private name: string;

  constructor(name: string) {
    this.name = name;
  }

  update(message: any): void {
    console.log(`(First) ${this.name} received message:`, message);
  }
}

class SecondConcreteObserver implements Observer {
  private name: string;

  constructor(name: string) {
    this.name = name;
  }

  update(message: any): void {
    console.log(`(Second) ${this.name} received message:`, message);
  }
}

export default () => {
	if (false) {
		// Example usage
		const subject = new ConcreteSubject();

    const observer1 = new FirstConcreteObserver("Observer 1");
    const observer2 = new SecondConcreteObserver("Observer 2");

    subject.attach(observer1);
    subject.attach(observer2);

    subject.someBusinessLogic();

    subject.detach(observer1);

    subject.someBusinessLogic();
	}
}