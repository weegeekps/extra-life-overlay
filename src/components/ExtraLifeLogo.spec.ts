import { afterEach, beforeEach, describe, expect, it } from "vitest";
import { screen } from "shadow-dom-testing-library";
import "./ExtraLifeLogo";
import { waitFor } from "@testing-library/dom";

describe("Logo Component Tests", () => {
  let el: HTMLElement;

  beforeEach(() => {
    el = document.createElement("extra-life-logo");
  });

  it("should render component", async () => {
    document.body.appendChild(el);
    await waitFor(() => expect(screen.findByShadowTestId("logo-element")).toBeDefined());
  });

  afterEach(() => {
    el.remove();
  });
});
