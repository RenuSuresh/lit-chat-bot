import { LitElement } from "lit";

class ApiService {
	private static instance: ApiService;
	private baseUrl = "https://bot.in/";
	private token: string | null = "appabcdefgh";

	private constructor() {
		// Private constructor for singleton
	}

	public static getInstance(): ApiService {
		if (!ApiService.instance) {
			ApiService.instance = new ApiService();
		}
		return ApiService.instance;
	}

	async get<T>(endpoint: string): Promise<T> {
		const response = await fetch(`${this.baseUrl}${endpoint}`, {
			headers: {
				Authorization: `Bearer ${this.token}`,
			},
		});
		return this.handleResponse<T>(response);
	}

	async post<T>(endpoint: string, body: object, headers: object): Promise<T> {
		const response = await fetch(`${this.baseUrl}${endpoint}`, {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
				Authorization: `Bearer ${this.token}`,
				...headers,
			},
			body: JSON.stringify(body),
		});
		return this.handleResponse<T>(response);
	}

	private async handleResponse<T>(response: Response): Promise<T> {
		if (!response.ok) {
			const error = await response.json().catch(() => ({}));
			throw new Error(error.message || "Request failed");
		}
		return response.json() as Promise<T>;
	}
}

export const api = ApiService.getInstance();
