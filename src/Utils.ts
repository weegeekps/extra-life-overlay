export const getQueryStringValue = (queryString: string) => {
  return (
    new URLSearchParams(window.location.search).get(queryString) || undefined
  );
};

export const checkQueryStringBoolean = (queryString: string) => {
  return getQueryStringValue(queryString) === "true";
};

export const prepareClassString = (...classes: string[]) => {
  return classes.reduce((acc, val) => (acc += " " + val));
};
