import { ReactiveController, ReactiveControllerHost } from "lit";
import { ChatContext } from "./chat-context.interface";
export declare class ChatContextProvider implements ReactiveController {
    private host;
    private _context;
    constructor(host: ReactiveControllerHost);
    hostConnected(): void;
    hostDisconnected(): void;
    get context(): ChatContext;
}
