import { LitElement } from "lit";
import { ChatContext } from "./chat-context.interface";
export declare const withChatContext: <T extends Constructor<LitElement>>(superClass: T) => Constructor<LitElement & {
    chatContext: ChatContext;
}> & T;
type Constructor<T = {}> = new (...args: any[]) => T;
export {};
