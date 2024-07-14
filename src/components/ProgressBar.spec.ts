import { describe, beforeEach, it, afterEach, expect } from "vitest";
import { waitFor } from "@testing-library/dom";
import { screen } from "shadow-dom-testing-library";
import "./ProgressBar";

describe("Main Component Tests", () => {
  let el: HTMLElement;

  beforeEach(() => {
    el = document.createElement("progress-bar");
  });

  it("should render component", async () => {
    document.body.appendChild(el);
    await waitFor(() => expect(screen.findByShadowTestId("progress-element")).toBeDefined());
  });

  afterEach(() => {
    el.remove();
  });
});
