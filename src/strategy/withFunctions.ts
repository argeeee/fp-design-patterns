type PaymentStrategy = (amount: number) => void;

const createCreditCardPayment = (cardNumber: string, name: string): PaymentStrategy => {
  return (amount: number) => {
    console.log(`Paid $${amount} with credit card ${cardNumber} of ${name}`);
  };
};

const createPayPalPayment = (email: string): PaymentStrategy => {
  return (amount: number) => {
    console.log(`Paid $${amount} with PayPal account ${email}`);
  };
};

const cashPayment: PaymentStrategy = (amount: number) => {
  console.log(`Paid $${amount} in cash`);
};

const checkout = (amount: number, paymentStrategy: PaymentStrategy) => {
  paymentStrategy(amount);
};

export default () => {
	if (false) {
		// Example usage
		const creditCardPayment = createCreditCardPayment("1111-1111-1111-1111", "John Doe");
		checkout(100, creditCardPayment);

		const payPalPayment = createPayPalPayment("john.doe@example.com");
		checkout(50, payPalPayment);

		checkout(75, cashPayment);
	}
}
