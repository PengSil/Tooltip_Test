import React, { useState } from "react";
import styles from "./disableBtn.module.scss";
import Button from "./Button";
import Tooltip from "./Tooltip";

interface TooltipInfo {
  name: string;
  position?: "topLeft" | "topRight" | "bottomLeft" | "bottomRight" | "leftTop" | "leftBottom" | "rightTop" | "rightBottom" | "top" | "left" | "right" | "bottom";
  direction?: string;
  option?: "delay" | "leaveDelay" | "hoverNotHidden";
  color?: string;
}

const DisableBtnWrap: React.FC = () => {
  const [topInfos, setTopInfos] = useState<TooltipInfo>({ name: "Disable", color: "black", position: "top" });
  const [tooltipToggle, setTooltipToggle] = useState(false);
  const [timer, setTimer] = useState<number | null>(null);
  const [showTooltip, setShowTooltip] = useState(false);

  const handleButtonClick = () => {
    if (topInfos.name === "Disable") {
      setTopInfos({ ...topInfos, name: "Enable" });
      setTooltipToggle(true);
    } else {
      setTopInfos({ ...topInfos, name: "Disable" });
      setTooltipToggle(false);
    }
  };

  const handleMouse = () => {
    if (timer) {
      clearTimeout(timer);
    }
    if (tooltipToggle) {
      setShowTooltip(true);
    }
    setTimer(window.setTimeout(() => {}, 1000));
  };

  const handleMouseLeave = () => {
    if (timer) {
      clearTimeout(timer);
    }
    setShowTooltip(false);
  };

  return (
    <div className={styles["top-wrap"]}>
      <Button tooltipInfos={topInfos} onClick={handleButtonClick} tooltipToggle={tooltipToggle} />
      {tooltipToggle ? (
        <>
          <div className={styles.writing} onMouseEnter={handleMouse} onMouseLeave={handleMouseLeave}>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci asperiores atque
            {showTooltip && <Tooltip tooltipInfo={topInfos} detail={"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci asperiores atque"} />}
          </div>
        </>
      ) : (
        <>
          <div className={styles.writing}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci asperiores atque</div>
        </>
      )}
    </div>
  );
};

export default DisableBtnWrap;
