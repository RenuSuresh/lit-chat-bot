// Export all components from your library
// export * from "./ai-chat-bot/ai-chat-bot";
// export * from "./my-button/my-button";
export * from "./ai-chat";
export * from "./ai-chat-history";

// Optionally register components automatically
// import { AIChatBot } from "./ai-chat-bot/ai-chat-bot";
// import { MyButton } from "./my-button/my-button";
import { AIChat } from "./ai-chat";
import { AIChatHistory } from "./ai-chat-history";

// customElements.define("ai-chat-bot", AIChatBot);
// customElements.define("my-button", MyButton);
customElements.define("ai-chat", AIChat);
customElements.define("ai-chat-history", AIChatHistory);
