import { describe, beforeEach, it, afterEach, expect } from "vitest";
import { waitFor } from "@testing-library/dom";
import { screen } from "shadow-dom-testing-library";
import { ProgressBar } from "./ProgressBar";
import "./ProgressBar";

describe("Main Component Tests", () => {
  let el: HTMLElement;

  beforeEach(() => {
    el = document.createElement("progress-bar");
  });

  it("should render component", async () => {
    document.body.appendChild(el);
    await waitFor(() => expect(screen.findByShadowTestId("progress")).toBeDefined());
  });

  it("should update the progress bar when donations are updated", async () => {
    const goal = 200;
    el.setAttribute("fundraisingGoal", `${goal}`);
    document.body.appendChild(el);
    const progressBarEl = el as ProgressBar;
    progressBarEl.sumDonations = goal / 2;
    await waitFor(async () => {
      // This is likely needed because of the spring effect. Precision isn't super important here.
      const completedEl = await screen.findByShadowTestId("progress-completed");
      const completedElComputedWidth = completedEl.computedStyleMap().get("width") as any;
      expect(Math.abs(50 - completedElComputedWidth?.value)).toBeLessThan(0.3);
    });
  })

  afterEach(() => {
    el.remove();
  });
});
