# Button Component

## Usage

```html
<my-button
	label="Click me"
	variant="primary"
	size="medium"
	@my-click="${handleClick}"
></my-button>
```

## Properties

| Property | Type    | Default   | Description                    |
| -------- | ------- | --------- | ------------------------------ |
| label    | String  | ''        | Button text                    |
| disabled | Boolean | false     | Disabled state                 |
| size     | String  | 'medium'  | 'small', 'medium', or 'large'  |
| variant  | String  | 'primary' | 'primary', 'secondary', 'text' |
| icon     | String  | ''        | Optional icon (HTML string)    |

## Events

- `my-click`: Fires when button is clicked

## CSS Custom Properties

```css
/* Example customization */
my-button {
	--button-bg-color: #ff5722;
	--button-hover-bg-color: #e64a19;
	--button-height: 48px;
}
```

## Examples

### Primary Button

```html
<my-button label="Submit"></my-button>
```

### Disabled Button

```html
<my-button label="Disabled" disabled></my-button>
```

### With Icon

```html
<my-button label="Search" icon="🔍"></my-button>
```
