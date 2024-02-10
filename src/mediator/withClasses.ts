// Define Mediator interface
interface Mediator {
  sendMessage(message: string, sender: Colleague): void;
}

// Define Colleague interface
interface Colleague {
  send(message: string): void;
  receive(message: string): void;
}

// Concrete Mediator
class ConcreteMediator implements Mediator {
  private colleagues: Colleague[] = [];

  addColleague(colleague: Colleague): void {
    this.colleagues.push(colleague);
  }

  sendMessage(message: string, sender: Colleague): void {
    this.colleagues.forEach(colleague => {
      if (colleague !== sender) {
        colleague.receive(message);
      }
    });
  }
}

// Concrete Colleague
class ConcreteColleague implements Colleague {
  constructor(private mediator: Mediator, private name: string) {
    this.mediator = mediator;
    this.name = name;
  }

  send(message: string): void {
    console.log(`${this.name} sends: ${message}`);
    this.mediator.sendMessage(message, this);
  }

  receive(message: string): void {
    console.log(`${this.name} received: ${message}`);
  }
}

export default () => {
  if (false) {
		// Example usage
		const mediator = new ConcreteMediator();

		const colleague1 = new ConcreteColleague(mediator, "Colleague 1");
		const colleague2 = new ConcreteColleague(mediator, "Colleague 2");
		const colleague3 = new ConcreteColleague(mediator, "Colleague 3");

		mediator.addColleague(colleague1);
		mediator.addColleague(colleague2);
		mediator.addColleague(colleague3);

		colleague1.send("Hello, everyone!");
  }
};