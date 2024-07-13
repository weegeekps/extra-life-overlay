import { describe, beforeEach, it, afterEach, expect } from "vitest";
import { waitFor } from "@testing-library/dom";
import { screen } from "shadow-dom-testing-library";
import "./ExtraLifeOverlay";

describe("Main Component Tests", () => {
  let elem: HTMLElement;

  beforeEach(() => {
    elem = document.createElement("extra-life-overlay");
  });

  it("should render component", async () => {
    document.body.appendChild(elem);
    await waitFor(() => expect(screen.findByShadowTestId("root-element")).toBeDefined());
  });

  afterEach(() => {
    elem.remove();
  })
});
