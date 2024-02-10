// Iterator interface
interface Iterator<T> {
  hasNext(): boolean;
  next(): T;
}

// Concrete iterator
const createArrayIterator = <T>(array: T[]): Iterator<T> => {
  let index = 0;

  const hasNext = (): boolean => index < array.length;

  const next = (): T => {
    if (hasNext()) {
      return array[index++];
    } else {
      throw new Error("End of collection reached.");
    }
  };

  return { hasNext, next };
};

// Aggregate interface
interface IterableCollection<T> {
  createIterator(): Iterator<T>;
}

// Concrete aggregate
const createArrayCollection = <T>(array: T[]): IterableCollection<T> => ({
  createIterator: () => createArrayIterator(array)
});

export default () => {
  if (false) {
    const collection = createArrayCollection([1, 2, 3, 4, 5]);
    const iterator = collection.createIterator();

    while (iterator.hasNext()) {
      console.log(iterator.next());
    }
  }
};
