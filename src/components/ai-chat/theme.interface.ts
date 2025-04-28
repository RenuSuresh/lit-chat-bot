export interface Theme {
	fontFamily: string;
	headerBgColor: string; // Header and main elements
	headerTitleColor: string; // Title elements
	headerSubtitleColor: string; // Subtitles elements
	messageContainerBgColor: string; // Overall background
	loaderColor: string; // Loader color
	botMsgBgColor: string; // Bot message background color
	botMsgBorderColor: string; // Borders
	botMsgTextColor: string; // Bot message text color
	userMsgBgColor: string; // User message background color
	userMsgTextColor: string; // User message text color
	userMsgBorderColor: string; // User message border color
	inputBackgroundColor: string; // Input area background color
	inputBorderColor: string; // Input field border color
	inputTextColor: string; // Input text color
	placeholderTextColor: string; // Placeholder text color
}

export interface ChatMessage {
	type: "user" | "bot" | "query" | "answer";
	text: string;
	time: string;
}

export interface ChatApiBody {
	chatAPI: {
		body?: Record<string, unknown>;
		headers?: any;
	};
	customerCareNumber: string;
}
