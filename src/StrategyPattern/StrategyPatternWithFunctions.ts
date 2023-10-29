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

const createCashPayment: PaymentStrategy = (amount: number) => {
  console.log(`Paid $${amount} in cash`);
};

const checkout = (amount: number, paymentStrategy: PaymentStrategy) => {
  paymentStrategy(amount);
};

export default () => {
	// Example usage
	const creditCardPayment = createCreditCardPayment("1234-5678-9876-5432", "John Doe");
	checkout(100, creditCardPayment);

	const payPalPayment = createPayPalPayment("john.doe@example.com");
	checkout(50, payPalPayment);

	checkout(75, createCashPayment);
}
