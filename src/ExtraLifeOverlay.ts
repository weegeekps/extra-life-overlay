import { LitElement, css, html } from "lit";
import { customElement } from "lit/decorators.js";
import {
  checkQueryStringBoolean,
  getQueryStringEnumValue,
  getQueryStringValue,
  prepareClassString,
} from "./utils";
import { ILogoChoice } from "./models/ILogoChoice";
import { Orientation } from "./models/Orientation";

@customElement("extra-life-overlay")
export class ExtraLifeOverlay extends LitElement {
  static styles = css`
    @import url("https://fonts.googleapis.com/css2?family=Cantarell:wght@700&display=swap");

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

    .app .logo {
      z-index: 2;
    }

    .app .progress-bar.left {
      margin-left: -3rem;
      z-index: 1;
    }

    .app .progress-bar.right {
      margin-right: -3rem;
      z-index: 1;
    }
  `;

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

    return html` <div data-testid="root-element"></div> `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "extra-life-overlay": ExtraLifeOverlay;
  }
}
