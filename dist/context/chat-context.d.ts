import { ReactiveController, ReactiveControllerHost } from "lit";
import { ChatContext } from "./chat-context.interface";
export declare class ChatContextSingleton {
    private static instance;
    private _context;
    private constructor();
    private static listeners;
    static getInstance(): ChatContextSingleton;
    static addListener(host: ReactiveControllerHost): void;
    static removeListener(host: ReactiveControllerHost): void;
    static notifyListeners(): void;
    get context(): ChatContext;
}
export declare class ChatContextProvider implements ReactiveController {
    private host;
    private _context;
    constructor(host: ReactiveControllerHost);
    hostConnected(): void;
    hostDisconnected(): void;
    get context(): ChatContext;
}
