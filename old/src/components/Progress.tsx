import { connect } from "react-redux";
import { useSpring, animated } from "react-spring";
import "./Progress.css";
import { IAppState } from "../models/IAppState";
import { IParticipantMilestone } from "../models/IParticipant";
import { clamp } from "../utils";

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
  milestones: IParticipantMilestone[];
}

const createDefaultOptions = (): IProgressOptions => ({
  showTeamName: false,
  showGoal: false,
});

const calculateCompletedWidth = (current: number, goal: number) =>
  clamp((current / goal) * 100, 0, 100);

const Progress: React.FC<IProgressProps> = (props) => {
  const {
    className: classes,
    sumDonations,
    fundraisingGoal,
    teamName,
    showGoal,
    milestones,
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
        {milestones.map((milestone) => (
          <div
            className={"progress-milestone " + classes}
            style={{ width: milestone.position + "%" }}
            key={milestone.milestoneId}
          >
            <div className="progress-milestone-indicator"></div>
          </div>
        ))}
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

  const milestones = participant ? participant.milestones : [];

  return {
    className,
    sumDonations,
    fundraisingGoal,
    teamName: safeOptions.showTeamName ? team?.name : undefined,
    showGoal: safeOptions.showGoal,
    milestones,
  };
};

export default connect(mapStateToProps)(Progress);
