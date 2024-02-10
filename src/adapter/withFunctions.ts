// Signature for the common payment gateway function
type PaymentProcessorFn = (amount: number) => void;

// Implementation of a payment gateway with a legacy interface
class LegacyPaymentGateway {
	makePayment(totalAmount: number): void {
		console.log(`Legacy Payment Gateway: Processing payment of ${totalAmount} USD (cents).`);
	}
}

// Adapter function for the LegacyPaymentGateway to adapt it to the PaymentGateway interface
const adaptLegacyPaymentGateway = (legacyGateway: LegacyPaymentGateway): PaymentProcessorFn => {
	return (amount: number): void => {
		// The legacy gateway expects the total amount, but our application expects the amount in cents.
		const totalAmountInCents = amount * 100;
		legacyGateway.makePayment(totalAmountInCents);
	}
};

// Implementation of a payment gateway with a modern interface
class ModernPaymentGateway {
	pay(amount: number): void {
		console.log(`Modern Payment Gateway: Processing payment of ${amount} USD.`);
	}
}

// Adapter function for the ModernPaymentGateway to adapt it to the PaymentGateway interface
const adaptModernPaymentGateway = (modernGateway: ModernPaymentGateway): PaymentProcessorFn => {
	return (amount: number): void => {
		modernGateway.pay(amount);
	}
};

// Function to process payment using any payment gateway
const processPaymentUsingGateway = (paymentProcessor: PaymentProcessorFn, amount: number): void => {
	paymentProcessor(amount);
};


export default () => {
	if (false) {
		// Example usage
		const legacyGateway = new LegacyPaymentGateway();
		const modernGateway = new ModernPaymentGateway();

		const legacyAdapter = adaptLegacyPaymentGateway(legacyGateway);
		const modernAdapter = adaptModernPaymentGateway(modernGateway);

		console.log("Processing payment using Legacy Payment Gateway:");
		processPaymentUsingGateway(legacyAdapter, 50);

		console.log("\nProcessing payment using Modern Payment Gateway:");
		processPaymentUsingGateway(modernAdapter, 75);
	}
}