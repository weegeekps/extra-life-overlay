import { LitElement, css, html } from "lit";
import { customElement } from "lit/decorators.js";
import { ifDefined } from "lit/directives/if-defined.js";
import {
  checkQueryStringBoolean,
  getQueryStringEnumValue,
  getQueryStringValue,
  prepareClassString,
} from "./utils";
import { ILogoChoice } from "./models/ILogoChoice";
import { Orientation } from "./models/Orientation";
import "./components/ExtraLifeLogo";
import "./components/ProgressBar";

@customElement("extra-life-overlay")
export class ExtraLifeOverlay extends LitElement {
  render() {
    const orientation = getQueryStringValue("orientation");
    const debuggingMode = checkQueryStringBoolean("debugging");
    const showTeamName = checkQueryStringBoolean("showTeamName");
    const showGoal = checkQueryStringBoolean("showGoal");
    const logoChoice = getQueryStringEnumValue<ILogoChoice>("logo");
    const topLevelClasses = prepareClassString(
      "app",
      orientation || Orientation.Left,
      debuggingMode ? "debugging" : "",
    );

    return html`
      <div class="${topLevelClasses}" data-testid="root-element">
        <extra-life-logo choice="${ifDefined(logoChoice)}"></extra-life-logo>
        <progress-bar
          classes="${orientation || Orientation.Left}"
          .options="${{ showTeamName, showGoal }}"
        ></progress-bar>
      </div>
    `;
  }

  // TODO: @imports don't work, but for some reason the font I get from
  // Google fonts is not Cantarell if I include it in the template. I've
  // got an @import in the index.css file but that will prevent this from
  // having the correct font if embedded elsewhere. Needs to be fixed.
  static styles = css`
    .app {
      display: flex;
      align-items: center;
      font-family: "Cantarell", sans-serif;
    }

    .app.left {
      flex-direction: row;
    }

    .app.right {
      flex-direction: row-reverse;
    }

    .app.debugging {
      background-color: black;
    }

    extra-life-logo {
      z-index: 2;
    }
  `;
}

declare global {
  interface HTMLElementTagNameMap {
    "extra-life-overlay": ExtraLifeOverlay;
  }
}
