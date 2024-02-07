type HttpRequest = any; // For simplicity

type RequestFn = (request: HttpRequest) => void;

// Real service function
const realRequestFn: RequestFn = (request: HttpRequest): void => {
	console.log(`Sending ${request}`);
};

// Proxy service function
const proxyRequestFn = (realRequestFn: RequestFn): RequestFn => {
	const checkAccess = (): boolean => {
		return true; // For simplicity
	};

	const logAccess = (): void => {
		console.log("ProxyRequestManager: Access allowed.");
	};

	return (request: HttpRequest): void => {
		if (checkAccess()) {
			logAccess();
			realRequestFn(request);
		} else {
			console.log("ProxyRequestManager: Access denied.");
		}
	};
};




export default () => {
	if (false) {
		// Example usage
		const proxy: RequestFn = proxyRequestFn(realRequestFn);

		proxy({});
	}
}