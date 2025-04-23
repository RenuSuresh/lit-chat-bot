declare class ApiService {
    private static instance;
    private baseUrl;
    private token;
    private requestTimeout;
    private requestInterceptors;
    private cache;
    private cacheTTL;
    private constructor();
    static getInstance(config?: {
        baseUrl?: string;
        token?: string;
    }): ApiService;
    setToken(token: string | null): void;
    addRequestInterceptor(interceptor: (req: RequestInit) => RequestInit): void;
    private applyInterceptors;
    get<T>(endpoint: string, options?: {
        timeout?: number;
        cache?: boolean;
    }): Promise<T>;
    post<T>(endpoint: string, body: object, options?: {
        headers?: Record<string, string>;
        timeout?: number;
    }): Promise<T>;
    private handleResponse;
}
export declare const api: ApiService;
export {};
