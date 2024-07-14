import { afterEach, beforeEach, describe, expect, it } from "vitest";
import { waitFor } from "@testing-library/dom";
import { screen } from "shadow-dom-testing-library";
import { ILogoChoice } from "../models/ILogoChoice";
import "./ExtraLifeLogo";

describe("Logo Component Tests", () => {
  let el: HTMLElement;

  beforeEach(() => {
    el = document.createElement("extra-life-logo");
  });

  it("should render component", async () => {
    document.body.appendChild(el);
    await waitFor(() => expect(screen.findByShadowTestId("logo-element")).toBeDefined());
  });

  it("should render with the 2021 wings logo by default", async () => {
    document.body.appendChild(el);
    await waitFor(async () => {
      const logoEl = await screen.findByShadowTestId("logo-element");

      // Make sure it has the correct styles.
      expect(logoEl.classList.contains("logo")).toBeTruthy();
      expect(logoEl.classList.contains("logo-wings-2021")).toBeTruthy();

      // Make sure the correct logo is in the src.
      const imgEl = logoEl.querySelector("img");
      expect(imgEl?.src).toContain("2021_wings_white.svg");
    });
  });

  it("should render with the 2020 controller logo when asked", async () => {
    el.setAttribute("choice", ILogoChoice.Controller2020);
    document.body.appendChild(el);
    await waitFor(async () => {
      const logoEl = await screen.findByShadowTestId("logo-element");

      // Make sure it has the correct styles.
      expect(logoEl.classList.contains("logo")).toBeTruthy();
      expect(logoEl.classList.contains("logo-2020")).toBeTruthy();

      // Make sure the correct logo is in the src.
      const imgEl = logoEl.querySelector("img");
      expect(imgEl?.src).toContain("2020_controller_white.svg");
    })
  });

  it("should render with the 2021 wings logo when asked", async () => {
    el.setAttribute("choice", ILogoChoice.Wings2021);
    document.body.appendChild(el);
    await waitFor(async () => {
      const logoEl = await screen.findByShadowTestId("logo-element");

      // Make sure it has the correct styles.
      expect(logoEl.classList.contains("logo")).toBeTruthy();
      expect(logoEl.classList.contains("logo-wings-2021")).toBeTruthy();

      // Make sure the correct logo is in the src.
      const imgEl = logoEl.querySelector("img");
      expect(imgEl?.src).toContain("2021_wings_white.svg");
    });
  });

  it("should render with the 2021 dice logo when asked", async () => {
    el.setAttribute("choice", ILogoChoice.Dice2021);
    document.body.appendChild(el);
    await waitFor(async () => {
      const logoEl = await screen.findByShadowTestId("logo-element");

      // Make sure it has the correct styles.
      expect(logoEl.classList.contains("logo")).toBeTruthy();
      expect(logoEl.classList.contains("logo-dice-2021")).toBeTruthy();

      // Make sure the correct logo is in the src.
      const imgEl = logoEl.querySelector("img");
      expect(imgEl?.src).toContain("2021_dice_white.svg");
    });
  });

  afterEach(() => {
    el.remove();
  });
});
