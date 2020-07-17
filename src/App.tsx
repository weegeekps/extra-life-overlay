import React from "react";
import "./App.css";
import Logo from "./components/Logo";
import Progress from "./components/Progress";

const checkQueryStringBoolean = (queryString: string) => {
  return (
    new URLSearchParams(window.location.search).get(queryString) === "true"
  );
};

const prepareClassString = (...classes: string[]) => {
  return classes.reduce((acc, val) => (acc += " " + val));
};

const App: React.FC = (props) => {
  const isLeftOriented = checkQueryStringBoolean("isLeftOriented");
  const debuggingMode = checkQueryStringBoolean("debugging");
  const topLevelClasses = prepareClassString(
    "app",
    isLeftOriented ? "left" : "right",
    debuggingMode ? "debugging" : ""
  );

  return (
    <div className={topLevelClasses}>
      <Logo />
      <Progress className={isLeftOriented ? "left" : "right"} />
    </div>
  );
};

export default App;
