import { ReactiveController, ReactiveControllerHost } from "lit";
import { ChatContext, MessageGroup } from "./chat-context.interface";
import { safeJsonParse, safeJsonStringify } from "../utils/json.util";
import { ChatMessage } from "../components/ai-chat/theme.interface";

export class ChatContextSingleton {
	private static instance: ChatContextSingleton;
	private _context: ChatContext;

	private constructor() {
		this._context = {
			messages: [],
			messagesData: [],
			isLoading: false,
			conversationId: "",
			lastHistoryConversationId: "",
			chatbotData: {
				chatAPI: {
					body: {},
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

			addMessages: (messages) => {
				this._context.messagesData = [...this._context.messagesData, messages];
				ChatContextSingleton.notifyListeners();
			},
			appendMessage: (message) => {
				if (this._context.messagesData.length === 0) {
					// If no messages exist, create a new message group
					this._context.messagesData = [
						{
							type: message.type,
							text: message.text,
							time: message.time,
							messages: safeJsonStringify([message]),
						},
					];
				} else {
					// Get the last message group
					const lastMessageGroup =
						this._context.messagesData[this._context.messagesData.length - 1];
					const parsedMessages = safeJsonParse<ChatMessage[]>(
						lastMessageGroup.messages
					);
					const messagesArray = Array.isArray(parsedMessages)
						? parsedMessages
						: [];

					// Add the new message to the group
					messagesArray.push(message);

					// Update the last message group with the new messages
					this._context.messagesData[this._context.messagesData.length - 1] = {
						...lastMessageGroup,
						messages: safeJsonStringify(messagesArray),
					};
				}
				ChatContextSingleton.notifyListeners();
			},
			setLoading: (loading) => {
				this._context.isLoading = loading;
				ChatContextSingleton.notifyListeners();
			},
			setCurrentSessionConversationId: (id) => {
				this._context.conversationId = id;
				ChatContextSingleton.notifyListeners();
			},
			setLastHistoryConversationId: (id) => {
				this._context.lastHistoryConversationId = id;
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
			prependMessages: (messages) => {
				this._context.messagesData = [messages, ...this._context.messagesData];
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
