import React from "react";
import "./Spinner.css";

const Spinner = ({ animationDuration, size, color }) => {
  return (
    <div
      className="half-circle-spinner"
      style={{
        height: `${size}px`,
        width: `${size}px`,
        alignItems: `center`,
      }}
    >
      <div
        className="circle circle-1"
        style={{
          borderWidth: `${size / 10}px`,
          animationDuration: `${animationDuration}ms`,
          borderTopColor: color,
        }}
      />
      <div
        className="circle circle-2"
        style={{
          borderWidth: `${size / 10}px`,
          animationDuration: `${animationDuration}ms`,
          borderBottomColor: color,
        }}
      />
    </div>
  );
};

Spinner.defaultProps = {
  animationDuration: 1000,
  size: 50,
  color: "#fff",
};

export default Spinner;
