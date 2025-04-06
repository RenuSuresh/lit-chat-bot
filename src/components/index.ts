// Export all components from your library
export * from "./ai-chat-bot/ai-chat-bot";
export * from "./my-button/my-button";

// Optionally register components automatically
import { AIChatBot } from "./ai-chat-bot/ai-chat-bot";
import { MyButton } from "./my-button/my-button";

customElements.define("ai-chat-bot", AIChatBot);
customElements.define("my-button", MyButton);
