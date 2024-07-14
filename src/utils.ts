import xss from "xss";
import { ILogoChoice } from "./models/ILogoChoice";

type EnumTypes = ILogoChoice;

export const getQueryStringValue = (queryString: string) => {
  const sanitized = xss(queryString);

  return (
    new URLSearchParams(window.location.search).get(sanitized) || undefined
  );
};

export function getQueryStringEnumValue<T extends EnumTypes>(
  queryString: string
): T | undefined {
  const safeQueryString = getQueryStringValue(queryString);
  if (safeQueryString) {
    return safeQueryString as T;
  }

  return undefined;
}

export const checkQueryStringBoolean = (queryString: string) => {
  return getQueryStringValue(queryString) === "true";
};

export const prepareClassString = (...classes: string[]) => {
  return classes.reduce((acc, val) => (acc += " " + val));
};

export const clamp = (value: number, min: number, max: number) => {
  if (value > min && value < max) return value;
  if (value < min) return min;
  if (value > max) return max;
};
