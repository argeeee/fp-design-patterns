// Component: Service
interface Service {
  operation(input: string): string;
}

// Concrete Component: ConcreteService
class ConcreteService implements Service {
  operation(input: string): string {
    // Simulate a time-consuming operation
    return `Result of operation with input: ${input}`;
  }
}

// Decorator: ServiceDecorator
abstract class ServiceDecorator implements Service {
  protected service: Service;

  constructor(service: Service) {
    this.service = service;
  }

  operation(input: string): string {
    return this.service.operation(input);
  }
}

// Concrete Decorator: CacheDecorator
class CacheDecorator extends ServiceDecorator {
  private cache: Map<string, string>;

  constructor(service: Service) {
    super(service);
    this.cache = new Map();
  }

  operation(input: string): string {
    if (this.cache.has(input)) {
      console.log(`Cache hit for input: ${input}`);
      return this.cache.get(input)!;
    } else {
      const result = this.service.operation(input);
      this.cache.set(input, result);
      console.log(`Result cached for input: ${input}`);
      return result;
    }
  }
}

// Concrete Decorator: LogDecorator
class LogDecorator extends ServiceDecorator {
  operation(input: string): string {
    console.log(`Operation called with input: ${input}`);
    return this.service.operation(input);
  }
}

export default () => {
  if (false) {
    // Example usage
    const service = new ConcreteService();
    const cachedService = new CacheDecorator(service);
    const loggedAndCachedService = new LogDecorator(cachedService);

    console.log(loggedAndCachedService.operation("input1")); // Logs operation with input and caches the result
    console.log(loggedAndCachedService.operation("input2")); // Logs operation with input and caches the result
    console.log(loggedAndCachedService.operation("input1")); // Logs cache hit for input1 and returns the cached result
    console.log(loggedAndCachedService.operation("input3")); // Logs operation with input and caches the result
  }
}