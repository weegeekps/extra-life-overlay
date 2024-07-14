import { html, LitElement } from "lit";
import { customElement, property } from "lit/decorators.js";
import { IParticipantMilestone } from "../models/IParticipant";

export interface IProgressBarOptions {
  showTeamName: boolean;
  showGoal: boolean;
}

@customElement("progress-bar")
export class ProgressBar extends LitElement {
  @property()
  classes: String = "";

  @property({ type: Number })
  sumDonations: number = 0;

  @property({ type: Number })
  fundraisingGoal: number = 0;

  @property()
  teamName: string = "";

  @property({ type: Array })
  milestones: IParticipantMilestone[] = [];

  @property({ type: Object })
  options?: IProgressBarOptions = undefined;

  render() {
    return html`<div data-testid="progress-element">Progress Bar goes here.</div>`;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "progress-bar": ProgressBar;
  }
}
