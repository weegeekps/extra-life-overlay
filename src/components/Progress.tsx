import { connect } from "react-redux";
import { useSpring, animated } from "react-spring";
import "./Progress.css";
import { IAppState } from "../models/IAppState";
import { IParticipant } from "../models/IParticipant";
import { ITeam } from "../models/ITeam";

export interface IProgressOptions {
  showTeamName: boolean;
  showGoal: boolean;
}

export interface IProgressOwnProps {
  className?: string;
  options?: IProgressOptions;
}

export interface IProgressProps {
  className?: string;
  sumDonations: number;
  fundraisingGoal: number;
  teamName?: string;
  showGoal: boolean;
}

const createDefaultOptions = (): IProgressOptions => ({
  showTeamName: false,
  showGoal: false,
});

const clamp = (value: number, min: number, max: number) => {
  if (value > min && value < max) return value;
  if (value < min) return min;
  if (value > max) return max;
};

const calculateCompletedWidth = (current: number, goal: number) =>
  clamp((current / goal) * 100, 0, 100);

const Progress: React.FC<IProgressProps> = (props) => {
  const {
    className: classes,
    sumDonations,
    fundraisingGoal,
    teamName,
    showGoal,
  } = props;

  const hasValues = fundraisingGoal !== 0 && sumDonations >= 0;

  const springWidth = useSpring({
    width:
      (hasValues ? calculateCompletedWidth(sumDonations, fundraisingGoal) : 0) +
      "%",
  });

  if (!hasValues) return null;

  return (
    <div className={"progress-region"}>
      {teamName && (
        <div className={"progress-team-name " + classes}>
          <p>{teamName}</p>
        </div>
      )}
      <div className="progress-container" data-testid="progress">
        <div className={"progress-bar " + classes}>
          <animated.div
            className="completed"
            style={springWidth}
          ></animated.div>
        </div>
        <div className={"progress-text " + classes}>
          <p>${sumDonations.toFixed(2)}</p>
        </div>
      </div>
      {showGoal && (
        <div className={"progress-goal " + classes}>
          <p>${fundraisingGoal.toFixed(2)}</p>
        </div>
      )}
    </div>
  );
};

const mapStateToProps = (state: IAppState, ownProps: IProgressOwnProps) => {
  const {
    participant: { value: participant },
    team: { value: team },
  } = state;
  const { className, options } = ownProps;

  const sumDonations = participant
    ? participant.sumDonations
    : team
    ? team.sumDonations
    : 0;
  const fundraisingGoal = participant
    ? participant.fundraisingGoal
    : team
    ? team.fundraisingGoal
    : 0;

  const safeOptions = options || createDefaultOptions();

  return {
    className,
    sumDonations,
    fundraisingGoal,
    teamName: safeOptions.showTeamName ? team?.name : undefined,
    showGoal: safeOptions.showGoal,
  };
};

export default connect(mapStateToProps)(Progress);
