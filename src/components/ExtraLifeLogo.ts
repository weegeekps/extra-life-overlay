import { html, LitElement } from "lit";
import { customElement, property } from "lit/decorators.js";
import { ILogoChoice } from "../models/ILogoChoice";

@customElement("extra-life-logo")
export class ExtraLifeLogo extends LitElement {
  @property()
  choice: ILogoChoice = ILogoChoice.Wings2021;

  render() {
    return html`<div data-testid="logo-element">Logo Goes Here.</div>`;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "extra-life-logo": ExtraLifeLogo;
  }
}
