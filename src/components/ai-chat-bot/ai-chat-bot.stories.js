import { html } from 'lit';
import '../my-element.js';

export default {
  title: 'MyElement',  // Storybook sidebar title
  component: 'my-element', // Matches your custom element tag
};

// Default story
export const Default = () => html`<my-element></my-element>`;

// Story with props
export const WithProp = () => html`<my-element .name=${'World'}></my-element>`;