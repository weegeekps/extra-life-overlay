import { html, LitElement } from "lit";
import { customElement } from "lit/decorators.js";

@customElement("extra-life-logo")
export class ExtraLifeLogo extends LitElement {
  render() {
    return html`<div data-testid="logo-element">Logo Goes Here.</div>`;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "extra-life-logo": ExtraLifeLogo;
  }
}
