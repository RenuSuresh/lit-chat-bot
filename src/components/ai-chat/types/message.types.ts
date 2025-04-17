export interface ChatMessage {
	text: string;
	sender: "user" | "bot";
	time: string;
	type?: MessageType;
	metadata?: Record<string, any>;
}

export enum MessageType {
	INFO = "info",
}

export interface MessageMetadata {
	orderId?: string;
	date?: string;
	time?: string;
	executive?: string;
}

export interface ChatInfo {
	type: MessageType;
	message: string;
	metadata?: MessageMetadata;
}
