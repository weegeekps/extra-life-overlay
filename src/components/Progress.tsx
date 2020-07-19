import React from "react";
import { connect } from "react-redux";
import { useSpring, animated } from "react-spring";
import "./Progress.css";
import { IParticipant } from "../models/IParticipant";
import { IAppState } from "../models/IAppState";

export interface IProgressOwnProps {
  className?: string;
}

export interface IProgressProps {
  className?: string;
  participant?: IParticipant;
}

const clamp = (value: number, min: number, max: number) => {
  if (value > min && value < max) return value;
  if (value < min) return min;
  if (value > max) return max;
};

const calculateCompletedWidth = (current: number, goal: number) =>
  clamp((current / goal) * 100, 0, 100);

const Progress: React.FC<IProgressProps> = (props) => {
  const { className: classes, participant } = props;

  const springWidth = useSpring({
    width:
      (participant
        ? calculateCompletedWidth(
            participant.sumDonations,
            participant.fundraisingGoal
          )
        : 0) + "%",
  });

  if (!participant) return null;

  return (
    <div className="progress-container">
      <div className={"progress-bar " + classes}>
        <animated.div className="completed" style={springWidth}></animated.div>
      </div>
      <div className={"progress-text " + classes}>
        <p>${participant.sumDonations.toFixed(2)}</p>
      </div>
    </div>
  );
};

const mapStateToProps = (state: IAppState, ownProps: IProgressOwnProps) => {
  const {
    participant: { value: participant },
  } = state;
  const { className } = ownProps;

  return {
    className,
    participant,
  };
};

export default connect(mapStateToProps)(Progress);
