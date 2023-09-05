import React from "react";
import Timer from "@amplication/react-compound-timer";
const RewardCountDown = ({ initialTime }) => {

  const timeDifference =initialTime * 1000 - Date.now() > 0 ? initialTime * 1000 - Date.now() : 0;

  return (
    <>
      <Timer initialTime={timeDifference} direction="backward">
        {() => (
          <div className="space-x-4 ">
            <span className="font-bold">
              <Timer.Days /> :
            </span>
            <span className="font-bold">
              <Timer.Hours /> :
            </span>
            <span className="font-bold">
              <Timer.Minutes /> :
            </span>
            <span className="font-bold">
              <Timer.Seconds />
            </span>
          </div>
        )}
      </Timer>
    </>
  );
};

export default RewardCountDown;
