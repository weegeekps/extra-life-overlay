import React from "react";
import "./App.css";
import Logo from "./components/Logo";
import Progress from "./components/Progress";

const checkQueryStringBoolean = (queryString: string) => {
  return (
    new URLSearchParams(window.location.search).get(queryString) === "true"
  );
};

const App: React.FC = (props) => {
  const isLeftOriented = checkQueryStringBoolean("isLeftOriented");
  const debuggingMode = checkQueryStringBoolean("debugging");

  return (
    <div
      className={
        "app " +
        (isLeftOriented ? "left" : "right") +
        " " +
        (debuggingMode ? "debugging" : "")
      }
    >
      <Logo />
      <Progress className={isLeftOriented ? "left" : "right"} />
    </div>
  );
};

export default App;
