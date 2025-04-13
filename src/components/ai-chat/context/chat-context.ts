import { ReactiveController, ReactiveControllerHost } from "lit";
import { ChatContext } from "./chat-context.interface";

class ChatContextSingleton {
	private static instance: ChatContextSingleton;
	private _context: ChatContext;

	private constructor() {
		this._context = {
			messages: [],
			isLoading: false,
			conversationId: "4bb91e16-7a12-44ee-9b16-25c9bddeb2da", // Default conversation ID
			chatbotData: {
				chatAPI: {
					body: {
						inputs: {
							user_id: "",
							session_id: "",
						},
					},
				},
				customerCareNumber: "",
			},
			theme: {
				fontFamily: "Inter, sans-serif",
				headerBgColor: "#3e415b",
				headerTitleColor: "#ffffff",
				headerSubtitleColor: "#f5f8fc",
				messageContainerBgColor: "#ffffff",
				loaderColor: "#3e415b",
				botMsgBgColor: "#ffffff",
				botMsgBorderColor: "#e6ebf4",
				botMsgTextColor: "#30363c",
				userMsgBgColor: "#EBF2FF",
				userMsgTextColor: "#30363c",
				userMsgBorderColor: "#B5CDF7",
				inputBackgroundColor: "#ebf2ff",
				inputBorderColor: "#e6ebf4",
				inputTextColor: "#30363c",
				placeholderTextColor: "#8897a2",
			},
			addMessage: (message) => {
				this._context.messages = [...this._context.messages, message];
				ChatContextSingleton.notifyListeners();
			},
			setLoading: (loading) => {
				this._context.isLoading = loading;
				ChatContextSingleton.notifyListeners();
			},
			setConversationId: (id) => {
				this._context.conversationId = id;
				ChatContextSingleton.notifyListeners();
			},
			setChatbotData: (data) => {
				this._context.chatbotData = data;
				ChatContextSingleton.notifyListeners();
			},
			updateTheme: (theme) => {
				this._context.theme = { ...this._context.theme, ...theme };
				ChatContextSingleton.notifyListeners();
			},
		};
	}

	private static listeners: Set<ReactiveControllerHost> = new Set();

	static getInstance(): ChatContextSingleton {
		if (!ChatContextSingleton.instance) {
			ChatContextSingleton.instance = new ChatContextSingleton();
		}
		return ChatContextSingleton.instance;
	}

	static addListener(host: ReactiveControllerHost) {
		ChatContextSingleton.listeners.add(host);
	}

	static removeListener(host: ReactiveControllerHost) {
		ChatContextSingleton.listeners.delete(host);
	}

	static notifyListeners() {
		ChatContextSingleton.listeners.forEach((listener) =>
			listener.requestUpdate()
		);
	}

	get context(): ChatContext {
		return this._context;
	}
}

export class ChatContextProvider implements ReactiveController {
	private host: ReactiveControllerHost;
	private _context: ChatContext;

	constructor(host: ReactiveControllerHost) {
		this.host = host;
		host.addController(this);
		this._context = ChatContextSingleton.getInstance().context;
		ChatContextSingleton.addListener(host);
	}

	hostConnected() {
		// Initialize any necessary setup when the host connects
	}

	hostDisconnected() {
		ChatContextSingleton.removeListener(this.host);
	}

	get context(): ChatContext {
		return this._context;
	}
}
