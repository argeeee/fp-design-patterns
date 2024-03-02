// Component: Service
type Service = (input: string) => string;

// Concrete Component: ConcreteService
const createConcreteService = (): Service => (
  (input: string): string => {
    // Simulate a time-consuming operation
    return `Result of operation with input: ${input}`;
  }
);
// In this case you can don't need a function to construct the
// service, because it does not need any parameter.
// You can write also:
/**
const service: Service = (input) => {
  // Simulate a time-consuming operation
  return `Result of operation with input: ${input}`;
};
*/

// Concrete Decorator: CacheDecorator
const createCacheDecorator: (service: Service) => Service = (
  (service) => {
    const cache: Map<string, string> = new Map();
    
    return (input: string): string => {
      if (cache.has(input)) {
        console.log(`Cache hit for input: ${input}`);
        return cache.get(input)!;
      } else {
        const result = service(input);
        cache.set(input, result);
        console.log(`Result cached for input: ${input}`);
        return result;
      }
    };
  });

// Concrete Decorator: LogDecorator
const createLogDecorator: (service: Service) => Service = (
  (service) => {
    return (input: string): string => {
      console.log(`Operation called with input: ${input}`);
      return service(input);
    };
  });

export default () => {
  if (false) {
    // Example usage
    const service = createConcreteService();
    const cachedService = createCacheDecorator(service);
    const loggedAndCachedService = createLogDecorator(cachedService);

    console.log(loggedAndCachedService("input1")); // Logs operation with input and caches the result
    console.log(loggedAndCachedService("input2")); // Logs operation with input and caches the result
    console.log(loggedAndCachedService("input1")); // Logs cache hit for input1 and returns the cached result
    console.log(loggedAndCachedService("input3")); // Logs operation with input and caches the result
  }
};
