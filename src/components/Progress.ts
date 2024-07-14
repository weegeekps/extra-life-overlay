import { html, LitElement } from "lit";
import { customElement } from "lit/decorators.js";

@customElement("progress-bar")
export class ProgressBar extends LitElement {
  render() {
    return html`<div data-testid="progress-element">Progress Bar goes here.</div>`;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "progress-bar": ProgressBar;
  }
}
