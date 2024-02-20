// Interface for the common payment gateway
interface PaymentGateway {
  processPayment(amount: number): void;
}

// Implementation of a payment gateway with a legacy interface
class LegacyPaymentGateway {
  makePayment(totalAmount: number): void {
    console.log(`Legacy Payment Gateway: Processing payment of ${totalAmount} USD (cents).`);
  }
}

// Adapter for the LegacyPaymentGateway to adapt it to the PaymentGateway interface
class LegacyPaymentGatewayAdapter implements PaymentGateway {
  private legacyGateway: LegacyPaymentGateway;

  constructor(legacyGateway: LegacyPaymentGateway) {
    this.legacyGateway = legacyGateway;
  }

  processPayment(amount: number): void {
    // The legacy gateway expects the total amount, but our application expects the amount in cents.
    const totalAmountInCents = amount * 100;
    this.legacyGateway.makePayment(totalAmountInCents);
  }
}

// Implementation of a payment gateway with a modern interface
class ModernPaymentGateway {
  pay(amount: number): void {
    console.log(`Modern Payment Gateway: Processing payment of ${amount} USD.`);
  }
}

// Adapter for the ModernPaymentGateway to adapt it to the PaymentGateway interface
class ModernPaymentGatewayAdapter implements PaymentGateway {
  private modernGateway: ModernPaymentGateway;

  constructor(modernGateway: ModernPaymentGateway) {
    this.modernGateway = modernGateway;
  }

  processPayment(amount: number): void {
    this.modernGateway.pay(amount);
  }
}

function processPaymentUsingGateway(paymentGateway: PaymentGateway, amount: number) {
  paymentGateway.processPayment(amount);
}

export default () => {
  if (false) {
    // Example usage

    // Using the LegacyPaymentGatewayAdapter to process payment
    const legacyGateway = new LegacyPaymentGateway();
    const legacyAdapter = new LegacyPaymentGatewayAdapter(legacyGateway);
    processPaymentUsingGateway(legacyAdapter, 50);

    console.log("---------------");

    // Using the ModernPaymentGatewayAdapter to process payment
    const modernGateway = new ModernPaymentGateway();
    const modernAdapter = new ModernPaymentGatewayAdapter(modernGateway);
    processPaymentUsingGateway(modernAdapter, 75);
  }
}