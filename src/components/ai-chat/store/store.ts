import { ReactiveController, ReactiveControllerHost } from "lit";
import { chatReducer } from "./reducer";
import { ChatState, ChatAction } from "./types";
import { DEFAULT_VALUES } from "../constants";

export class ChatStore implements ReactiveController {
	private state: ChatState = {
		messages: [],
		isLoading: false,
		conversationId: "",
		showChatInput: true,
		chatbotData: {
			chatAPI: { body: {} },
			customerCareNumber: DEFAULT_VALUES.CUSTOMER_CARE_NUMBER,
		},
	};

	private subscribers = new Set<ReactiveControllerHost>();

	constructor(private host: ReactiveControllerHost) {
		this.host.addController(this);
	}

	hostConnected() {
		this.subscribers.add(this.host);
	}

	hostDisconnected() {
		this.subscribers.delete(this.host);
	}

	dispatch(action: ChatAction) {
		const newState = chatReducer(this.state, action);
		if (newState !== this.state) {
			this.state = newState;
			this.notifySubscribers();
		}
	}

	private notifySubscribers() {
		this.subscribers.forEach((host) => host.requestUpdate());
	}

	getState(): ChatState {
		return this.state;
	}
}
