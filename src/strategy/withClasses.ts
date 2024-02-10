// Define a set of strategy interfaces
interface PaymentStrategy {
  pay(amount: number): void;
}

class CreditCardPayment implements PaymentStrategy {
  constructor(private cardNumber: string, private name: string) {}

  pay(amount: number): void {
    console.log(`Paid $${amount} with credit card ${this.cardNumber} of ${this.name}`);
  }
}

class PayPalPayment implements PaymentStrategy {
  constructor(private email: string) {}

  pay(amount: number): void {
    console.log(`Paid $${amount} with PayPal account ${this.email}`);
  }
}

class CashPayment implements PaymentStrategy {
  pay(amount: number): void {
    console.log(`Paid $${amount} in cash`);
  }
}

// Context that uses the selected payment strategy
class ShoppingCart {
  private paymentStrategy: PaymentStrategy;

  constructor(strategy: PaymentStrategy) {
    this.paymentStrategy = strategy;
  }

  checkout(amount: number) {
    this.paymentStrategy.pay(amount);
  }
}

export default () => {
	if (false) {
		// Example usage
		const creditCardStrategy = new CreditCardPayment("1111-1111-1111-1111", "John Doe");
		const cartWithCreditCard = new ShoppingCart(creditCardStrategy);
		cartWithCreditCard.checkout(100); // Pays with the credit card passed in the constructor

		const payPalStrategy = new PayPalPayment("john.doe@example.com");
		const cartWithPayPal = new ShoppingCart(payPalStrategy);
		cartWithPayPal.checkout(50); // Pays with PayPal

		const cashStrategy = new CashPayment();
		const cartWithCash = new ShoppingCart(cashStrategy);
		cartWithCash.checkout(75); // Pays in cash
	}
}