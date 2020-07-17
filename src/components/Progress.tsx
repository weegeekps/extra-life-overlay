import React from "react";
import "./Progress.css";

export interface IProgressProps {
  className?: string;
}

const Progress: React.FC<IProgressProps> = (props) => {
  const { className: classes } = props;
  const completedWidth = {
    width: "75%",
  };

  return (
    <div className="progress-container">
      <div className={"progress-bar " + classes}>
        <div className="completed" style={completedWidth}></div>
      </div>
      <div className={"progress-text " + classes}>
        <p>{completedWidth.width}</p>
      </div>
    </div>
  );
};

export default Progress;
