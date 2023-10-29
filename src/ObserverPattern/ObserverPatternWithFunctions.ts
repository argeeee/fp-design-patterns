// Observer (Subscriber) function contract
type Observer = (message: string) => void;

// Subject (observable)
function createNewsPublisher() {
  const observers: Observer[] = [];
  let latestNews: string = "";

  function registerObserver(observer: Observer) {
    observers.push(observer);
  }

  function removeObserver(observer: Observer) {
    const index = observers.indexOf(observer);
    if (index !== -1) {
      observers.splice(index, 1);
    }
  }

  function notifyObservers() {
    for (const observer of observers) {
      observer(latestNews);
    }
  }

  function setLatestNews(news: string) {
    latestNews = news;
    notifyObservers();
  }

  return { registerObserver, removeObserver, setLatestNews };
}

// Concrete Observer (Subscriber) function
function createNewsSubscriber(name: string): Observer {
  return (message: string) => {
    console.log(`${name} received news: ${message}`);
  };
}

export default () => {
	if (false) {
		// Example usage
		const newsPublisher = createNewsPublisher();

		const subscriber1 = createNewsSubscriber("Subscriber 1");
		const subscriber2 = createNewsSubscriber("Subscriber 2");

		newsPublisher.registerObserver(subscriber1);
		newsPublisher.registerObserver(subscriber2);

		newsPublisher.setLatestNews("Breaking news: no, just joking!");
	}
}