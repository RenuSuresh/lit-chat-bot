# Chat Context Provider System

## Overview

The Chat Context Provider is a state management system built using Lit's Reactive Controllers. It provides a centralized way to manage and share state across multiple components in the chat application.

## Architecture

### 1. Context Provider (`ChatContextProvider`)

The `ChatContextProvider` is a reactive controller that manages the shared state and provides methods to update it.

#### Key Features:

- Manages chat state (messages, loading state, theme, etc.)
- Provides reactive updates to all connected components
- Implements a singleton pattern to ensure single source of truth
- Uses Lit's `ReactiveController` for reactivity

#### State Management:

```typescript
interface ChatContext {
	messages: ChatMessage[];
	loading: boolean;
	theme: Theme;
	chatbotData: ChatbotData;
	conversationId: string;
}
```

### 2. Higher-Order Component (`withChatContext`)

A higher-order component that connects components to the context provider.

#### Implementation:

```typescript
export const withChatContext = <T extends Constructor<LitElement>>(
	superClass: T
) => {
	class WithChatContext extends superClass {
		chatContext = new ChatContextProvider(this);
	}
	return WithChatContext as T;
};
```

## Usage Guide

### 1. Connecting Components to Context

To connect a component to the chat context:

```typescript
@customElement("my-component")
export class MyComponent extends withChatContext(LitElement) {
	// Component now has access to this.chatContext
}
```

### 2. Accessing Context State

Access state from any connected component:

```typescript
// Reading state
const messages = this.chatContext.messages;
const isLoading = this.chatContext.loading;

// Reacting to state changes
willUpdate() {
  if (this.chatContext.messages.length > 0) {
    // Handle new messages
  }
}
```

### 3. Updating Context State

Update state using provided methods:

```typescript
// Adding a message
this.chatContext.addMessage({
	sender: "user",
	text: "Hello",
	time: new Date().toISOString(),
});

// Updating theme
this.chatContext.updateTheme({
	fontFamily: "Inter, sans-serif",
	// ... other theme properties
});

// Setting loading state
this.chatContext.setLoading(true);
```

### 4. Best Practices

1. **State Updates**

   - Always use provided methods to update state
   - Avoid direct mutation of context properties
   - Batch related updates together

2. **Performance**

   - Use `willUpdate` for reacting to state changes
   - Implement proper cleanup in `disconnectedCallback`
   - Avoid unnecessary re-renders

3. **Error Handling**
   - Always handle potential errors in state updates
   - Provide fallback values for required state
   - Log errors appropriately

## Example Implementation

### Basic Component Usage

```typescript
@customElement("chat-message-list")
export class ChatMessageList extends withChatContext(LitElement) {
	render() {
		return html`
			<div class="chat-container">
				${this.chatContext.messages.map(
					(message) => html`
						<div class="message ${message.sender}">${message.text}</div>
					`
				)}
			</div>
		`;
	}
}
```

### State Updates

```typescript
@customElement("chat-input")
export class ChatInput extends withChatContext(LitElement) {
	private handleSend() {
		this.chatContext.addMessage({
			sender: "user",
			text: this.inputValue,
			time: new Date().toISOString(),
		});
		this.chatContext.setLoading(true);
	}
}
```

## Common Patterns

### 1. Message Handling

```typescript
// Adding messages
this.chatContext.addMessage(newMessage);

// Reacting to messages
willUpdate() {
  if (this.chatContext.messages.length > 0) {
    this.scrollToBottom();
  }
}
```

### 2. Theme Management

```typescript
// Updating theme
this.chatContext.updateTheme(newTheme);

// Using theme in styles
static styles = css`
  .container {
    font-family: ${this.chatContext.theme.fontFamily};
    background-color: ${this.chatContext.theme.backgroundColor};
  }
`;
```

### 3. Loading States

```typescript
// Setting loading state
this.chatContext.setLoading(true);

// Showing loading indicator
render() {
  return html`
    ${this.chatContext.loading ? html`<loading-spinner></loading-spinner>` : ''}
    ${this.renderContent()}
  `;
}
```

## Troubleshooting

### Common Issues

1. **State Not Updating**

   - Ensure component is connected to context using `withChatContext`
   - Verify state updates are using provided methods
   - Check for proper cleanup in `disconnectedCallback`

2. **Performance Issues**

   - Review component update cycles
   - Implement proper state batching
   - Use `willUpdate` efficiently

3. **Type Errors**
   - Verify correct type imports
   - Check context property types
   - Ensure proper interface implementations

## Security Considerations

1. **Data Validation**

   - Validate all incoming state updates
   - Sanitize user input
   - Implement proper error boundaries

2. **Access Control**
   - Restrict state modifications to authorized components
   - Implement proper authentication checks
   - Secure sensitive data

## Future Improvements

1. **Potential Enhancements**

   - Add state persistence
   - Implement undo/redo functionality
   - Add state debugging tools
   - Implement state versioning

2. **Performance Optimizations**
   - Add state memoization
   - Implement selective updates
   - Add state batching
   - Optimize re-render cycles
