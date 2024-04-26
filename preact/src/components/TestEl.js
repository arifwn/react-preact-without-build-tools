import { render } from 'preact';
import { useReducer } from 'preact/hooks';
import { html } from 'htm/preact';

export function TestEl(props) {
  return html`<div>Hello World! ${props.ok}</div>`;
}
