import "./App.css";
import Logo from "./components/Logo";
import Progress from "./components/Progress";
import {
  getQueryStringValue,
  checkQueryStringBoolean,
  prepareClassString,
} from "./utils";
import { Orientation } from "./models/Orientation";

const App: React.FC = (props) => {
  const orientation = getQueryStringValue("orientation");
  const debuggingMode = checkQueryStringBoolean("debugging");
  const showTeamName = checkQueryStringBoolean("showTeamName");
  const showGoal = checkQueryStringBoolean("showGoal");
  const topLevelClasses = prepareClassString(
    "app",
    orientation || Orientation.Left,
    debuggingMode ? "debugging" : ""
  );

  return (
    <div className={topLevelClasses} data-testid="app">
      <Logo />
      <Progress
        className={orientation || Orientation.Left}
        options={{
          showTeamName,
          showGoal,
        }}
      />
    </div>
  );
};

export default App;
