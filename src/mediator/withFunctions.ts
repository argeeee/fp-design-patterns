type Mediator = {
  addColleague(colleague: Colleague): void;
  sendMessage(message: string, sender: Colleague): void;
};

type Colleague = {
  send(message: string): void;
  receive(message: string): void;
};

const createMediator = (): Mediator => {
  const colleagues: Colleague[] = [];

  return {
		addColleague: (colleague) => colleagues.push(colleague),
		sendMessage: (message, sender) => {
			colleagues.forEach(colleague => colleague !== sender && colleague.receive(message));
		}
	};
};

const createColleague = (mediator: Mediator, name: string): Colleague => ({
  send(message) {
		console.log(`${name} sends: ${message}`);
		mediator.sendMessage(message, this);
	},
  receive: (message)=> console.log(`${name} received: ${message}`)
});

export default () => {
  if (false) {
    const mediator = createMediator();

		const colleague1 = createColleague(mediator, "Colleague 1");
		const colleague2 = createColleague(mediator, "Colleague 2");
		const colleague3 = createColleague(mediator, "Colleague 3");

		mediator.addColleague(colleague1);
		mediator.addColleague(colleague2);
		mediator.addColleague(colleague3);

		colleague1.send("Hello, everyone!");
  }
};
