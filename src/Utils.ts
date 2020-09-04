import xss from "xss";

export const getQueryStringValue = (queryString: string) => {
  const sanitized = xss(queryString)

  return (
    new URLSearchParams(window.location.search).get(sanitized) || undefined
  );
};

export const checkQueryStringBoolean = (queryString: string) => {
  return getQueryStringValue(queryString) === "true";
};

export const prepareClassString = (...classes: string[]) => {
  return classes.reduce((acc, val) => (acc += " " + val));
};
