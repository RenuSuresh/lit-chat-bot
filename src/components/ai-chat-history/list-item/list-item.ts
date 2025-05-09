interface ChatHistoryItem {
	id: string;
	question: string;
	orderId: string;
	time: string;
	status?: "active" | "closed";
}
