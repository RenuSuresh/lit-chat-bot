export enum ChatInfoType {
	TRANSFER = "transfer",
	ORDER_STATUS = "order_status",
	CONVERSATION_CLOSED = "conversation_closed",
	SYSTEM = "system",
}

export interface ChatInfo {
	type: ChatInfoType;
	message: string;
	data?: Record<string, any>; // For any additional data
}

// Predefined messages/templates
export const ChatInfoTemplates = {
	transfer: (executive?: string) =>
		`Transferring your call to one of our\n${executive || "support executive"}`,

	orderStatus: (orderId: string, date: string, time: string) =>
		`I see that your order id ${orderId} is shipped and will be delivered to you by ${date}, ${time}`,

	conversationClosed: () => "This conversation has been closed",

	system: (message: string) => message,
} as const;
