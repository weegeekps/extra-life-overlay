import { css, html, LitElement } from "lit";
import { customElement, property } from "lit/decorators.js";
import { ILogoChoice } from "../models/ILogoChoice";
import controllerLogo2020 from "../logos/2020_controller_white.svg";
import wingsLogo2021 from "../logos/2021_wings_white.svg";
import diceLogo2021 from "../logos/2021_dice_white.svg";

const chooseLogo = (choice?: ILogoChoice): [string, string] => {
  switch (choice) {
    case ILogoChoice.Controller2020:
      return [controllerLogo2020, "logo-2020"];
    case ILogoChoice.Dice2021:
      return [diceLogo2021, "logo-dice-2021"];
    case ILogoChoice.Wings2021:
    default:
      return [wingsLogo2021, "logo-wings-2021"];
  }
};

@customElement("extra-life-logo")
export class ExtraLifeLogo extends LitElement {
  @property()
  choice: ILogoChoice = ILogoChoice.Wings2021;

  render() {
    const [logo, className] = chooseLogo(this.choice);

    return html`<div class="${"logo " + className}" data-testid="logo-element">
      <img src="${logo}" alt="Extra Life" />
    </div>`;
  }

  static styles = css`
    .logo {
      height: 100px;
      width: 100px;
      background: rgb(26, 76, 109);
      background: linear-gradient(0, rgba(26, 76, 109, 1) 0%, rgba(64, 116, 194, 1) 100%);
      border: solid 0.5rem #7fd836;
      border-radius: 50%;
      display: flex;
      justify-content: center;
      align-items: center;
    }

    .logo-2020 img {
      width: 90%;
      height: 90%;
      padding: 0.25rem 0.25rem 0 0;
    }

    .logo-wings-2021 img {
      width: 80%;
      height: 80%;
      padding: 0.25rem 0.75rem 0 0;
    }

    .logo-dice-2021 img {
      width: 80%;
      height: 80%;
      padding: 0.25rem 0.25rem 0 0;
    }
  `;
}

declare global {
  interface HTMLElementTagNameMap {
    "extra-life-logo": ExtraLifeLogo;
  }
}
