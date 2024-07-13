import { LitElement, css, html } from "lit";
import { customElement } from "lit/decorators.js";

@customElement("extra-life-overlay")
export class ExtraLifeOverlay extends LitElement {
  static styles = css`
    :host {
      max-width: 1280px;
      margin: 0 auto;
      padding: 2rem;
      text-align: center;
    }
  `;

  render() {
    return html`
      <div data-testid="root-element">
        <p>Hello, world!</p>
      </div>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "extra-life-overlay": ExtraLifeOverlay;
  }
}
