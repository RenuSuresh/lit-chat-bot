import { LitElement } from "lit";

class HttpError extends Error {
	constructor(public status: number, message: string, public details?: any) {
		super(message);
		this.name = "HttpError";
	}
}

class ApiService {
	private static instance: ApiService;
	private baseUrl: string;
	private token: string | null;
	private requestTimeout = 10000;
	private requestInterceptors: Array<(req: RequestInit) => RequestInit> = [];
	private cache = new Map<string, { data: any; timestamp: number }>();
	private cacheTTL = 300000;

	private constructor(config: { baseUrl?: string; token?: string } = {}) {
		this.baseUrl =
			config.baseUrl || "https://easybot.private.dataplatform.link/";
		this.token = config.token || "app-YX12rgf0CVRSXdtd4txQNOjy";
	}

	public static getInstance(config?: {
		baseUrl?: string;
		token?: string;
	}): ApiService {
		if (!ApiService.instance) {
			ApiService.instance = new ApiService(config);
		}
		return ApiService.instance;
	}

	public setToken(token: string | null): void {
		this.token = token;
	}

	public addRequestInterceptor(
		interceptor: (req: RequestInit) => RequestInit
	): void {
		this.requestInterceptors.push(interceptor);
	}

	private applyInterceptors(request: RequestInit): RequestInit {
		return this.requestInterceptors.reduce(
			(acc, interceptor) => interceptor(acc),
			request
		);
	}

	async get<T>(
		endpoint: string,
		options?: {
			timeout?: number;
			cache?: boolean;
		}
	): Promise<T> {
		// Cache logic
		if (options?.cache && this.cache.has(endpoint)) {
			const cached = this.cache.get(endpoint)!;
			if (Date.now() - cached.timestamp < this.cacheTTL) {
				return cached.data as T;
			}
		}

		// Timeout logic
		const controller = new AbortController();
		const timeoutId = setTimeout(
			() => controller.abort(),
			options?.timeout || this.requestTimeout
		);

		try {
			let request: RequestInit = {
				signal: controller.signal,
				headers: {
					Authorization: `Bearer ${this.token}`,
				},
			};

			request = this.applyInterceptors(request);

			const response = await fetch(`${this.baseUrl}${endpoint}`, request);
			const data = await this.handleResponse<T>(response);

			if (options?.cache) {
				this.cache.set(endpoint, { data, timestamp: Date.now() });
			}

			return data;
		} catch (error) {
			if (error instanceof DOMException && error.name === "AbortError") {
				throw new HttpError(408, "Request timeout");
			}
			throw error;
		} finally {
			clearTimeout(timeoutId);
		}
	}

	async post<T>(
		endpoint: string,
		body: object,
		options?: {
			headers?: Record<string, string>;
			timeout?: number;
		}
	): Promise<T> {
		const controller = new AbortController();
		const timeoutId = setTimeout(
			() => controller.abort(),
			options?.timeout || this.requestTimeout
		);

		try {
			let request: RequestInit = {
				method: "POST",
				signal: controller.signal,
				headers: {
					"Content-Type": "application/json",
					Authorization: `Bearer ${this.token}`,
					...options?.headers,
				},
				body: JSON.stringify(body),
			};

			request = this.applyInterceptors(request);

			const response = await fetch(`${this.baseUrl}${endpoint}`, request);
			return this.handleResponse<T>(response);
		} catch (error) {
			if (error instanceof DOMException && error.name === "AbortError") {
				throw new HttpError(408, "Request timeout");
			}
			throw error;
		} finally {
			clearTimeout(timeoutId);
		}
	}

	private async handleResponse<T>(response: Response): Promise<T> {
		if (!response.ok) {
			const error = await response.json().catch(() => ({
				status: response.status,
				statusText: response.statusText,
			}));

			throw new HttpError(
				response.status,
				error.message || response.statusText,
				error.errors || undefined
			);
		}
		return response.json() as Promise<T>;
	}
}

export const api = ApiService.getInstance();
