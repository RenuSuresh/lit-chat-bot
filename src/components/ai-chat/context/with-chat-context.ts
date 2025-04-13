import { LitElement } from "lit";
import { ChatContext } from "./chat-context.interface";
import { ChatContextProvider } from "./chat-context";

export const withChatContext = <T extends Constructor<LitElement>>(
	superClass: T
) => {
	class WithChatContext extends superClass {
		private _contextProvider?: ChatContextProvider;

		connectedCallback() {
			super.connectedCallback();
			this._contextProvider = new ChatContextProvider(this);
		}

		disconnectedCallback() {
			super.disconnectedCallback();
			this._contextProvider = undefined;
		}

		get chatContext(): ChatContext {
			if (!this._contextProvider) {
				throw new Error(
					"Chat context not available. Make sure the component is connected to the DOM."
				);
			}
			return this._contextProvider.context;
		}
	}

	return WithChatContext as Constructor<
		LitElement & { chatContext: ChatContext }
	> &
		T;
};

type Constructor<T = {}> = new (...args: any[]) => T;
