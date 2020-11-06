import React from "react";
import { connect } from "react-redux";
import { useSpring, animated } from "react-spring";
import "./Progress.css";
import { IAppState } from "../models/IAppState";

export interface IProgressOwnProps {
  className?: string;
}

export interface IProgressProps {
  className?: string;
  sumDonations: number;
  fundraisingGoal: number;
}

const clamp = (value: number, min: number, max: number) => {
  if (value > min && value < max) return value;
  if (value < min) return min;
  if (value > max) return max;
};

const calculateCompletedWidth = (current: number, goal: number) =>
  clamp((current / goal) * 100, 0, 100);

const Progress: React.FC<IProgressProps> = (props) => {
  const { className: classes, sumDonations, fundraisingGoal } = props;

  const hasValues = fundraisingGoal !== 0 && sumDonations >= 0;

  const springWidth = useSpring({
    width:
      (hasValues ? calculateCompletedWidth(sumDonations, fundraisingGoal) : 0) +
      "%",
  });

  if (!hasValues) return null;

  return (
    <div className="progress-container" data-testid="progress">
      <div className={"progress-bar " + classes}>
        <animated.div className="completed" style={springWidth}></animated.div>
      </div>
      <div className={"progress-text " + classes}>
        <p>${sumDonations.toFixed(2)}</p>
      </div>
    </div>
  );
};

const mapStateToProps = (state: IAppState, ownProps: IProgressOwnProps) => {
  const {
    participant: { value: participant },
    team: { value: team },
  } = state;
  const { className } = ownProps;

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

  return {
    className,
    sumDonations,
    fundraisingGoal,
  };
};

export default connect(mapStateToProps)(Progress);
