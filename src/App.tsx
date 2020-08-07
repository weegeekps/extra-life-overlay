import React from "react";
import "./App.css";
import Logo from "./components/Logo";
import Progress from "./components/Progress";
import { checkQueryStringBoolean, prepareClassString } from "./Utils";

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
