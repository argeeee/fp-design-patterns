// Observer interface that concrete observers implement
interface Observer {
  update(message: string): void;
}

// Subject (observable) interface
interface Subject {
  registerObserver(observer: Observer): void;
  removeObserver(observer: Observer): void;
  notifyObservers(): void;
}

// Concrete Subject (observable)
class NewsPublisher implements Subject {
  private observers: Observer[] = [];
  private latestNews: string = "";

  registerObserver(observer: Observer): void {
    this.observers.push(observer);
  }

  removeObserver(observer: Observer): void {
    const index = this.observers.indexOf(observer);
    if (index !== -1) {
      this.observers.splice(index, 1);
    }
  }

  notifyObservers(): void {
    for (const observer of this.observers) {
      observer.update(this.latestNews);
    }
  }

  setLatestNews(news: string): void {
    this.latestNews = news;
    this.notifyObservers();
  }
}

// Concrete Observer
class NewsSubscriber implements Observer {
  constructor(private name: string) {}

  update(message: string): void {
    console.log(`${this.name} received news: ${message}`);
  }
}

export default () => {
	if (false) {
		// Example usage
		const newsPublisher = new NewsPublisher();

		const subscriber1 = new NewsSubscriber("Subscriber 1");
		const subscriber2 = new NewsSubscriber("Subscriber 2");

		newsPublisher.registerObserver(subscriber1);
		newsPublisher.registerObserver(subscriber2);

		newsPublisher.setLatestNews("Breaking news: no, just joking!");
	}
}