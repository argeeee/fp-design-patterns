type HttpRequest = any; // For simplicity

// Service
interface IRequestManager {
	send(request: HttpRequest): void;
}

// Real service
class RequestManager implements IRequestManager {
	send(request: HttpRequest): void {
		console.log(`Sending ${request}`);
	}
}

// Proxy service
class ProxyRequestManager implements IRequestManager {
	private requestManager: RequestManager;

	constructor(requestManager: RequestManager) {
		this.requestManager = requestManager;
	}

	send(request: HttpRequest): void {
		if (this.checkAccess()) {
			this.logAccess();
			this.requestManager.send(request);
		} else {
			console.log("ProxyRequestManager: Access denied.");
		}
	}

	private checkAccess(): boolean {
		return true; // For simplicity
	}

	private logAccess(): void {
		console.log("ProxyRequestManager: Access allowed.");
	}
}

export default () => {
	if (false) {
		// Example usage
		const requestManager = new RequestManager();
		const proxy = new ProxyRequestManager(requestManager);

		proxy.send({});
	}
}