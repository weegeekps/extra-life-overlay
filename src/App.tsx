import React from "react";
import "./App.css";
import Logo from "./components/Logo";
import Progress from "./components/Progress";
import { getQueryStringValue, checkQueryStringBoolean, prepareClassString } from "./Utils";
import { Orientation } from "./models/Orientation";

const App: React.FC = (props) => {
  const orientation = getQueryStringValue("orientation");
  const debuggingMode = checkQueryStringBoolean("debugging");
  const topLevelClasses = prepareClassString(
    "app",
    orientation || Orientation.Left,
    debuggingMode ? "debugging" : ""
  );

  return (
    <div className={topLevelClasses}>
      <Logo />
      <Progress className={orientation || Orientation.Left} />
    </div>
  );
};

export default App;
