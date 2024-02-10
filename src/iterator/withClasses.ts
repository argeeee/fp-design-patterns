// Iterator interface
interface Iterator<T> {
  hasNext(): boolean;
  next(): T;
}

// Concrete iterator
class ArrayIterator<T> implements Iterator<T> {
  private index: number = 0;

  constructor(private array: T[]) {}

  hasNext(): boolean {
    return this.index < this.array.length;
  }

  next(): T {
    if (this.hasNext()) {
      return this.array[this.index++];
    } else {
      throw new Error("End of collection reached.");
    }
  }
}

// Aggregate interface
interface IterableCollection<T> {
  createIterator(): Iterator<T>;
}

// Concrete aggregate
class ArrayCollection<T> implements IterableCollection<T> {
  constructor(private array: T[]) {}

  createIterator(): Iterator<T> {
    return new ArrayIterator<T>(this.array);
  }
}


export default () => {
  if (false) {
		const collection: ArrayCollection<number> = new ArrayCollection([1, 2, 3, 4, 5]);
		const iterator: Iterator<number> = collection.createIterator();

		while (iterator.hasNext()) {
			console.log(iterator.next());
		}
  }
};
