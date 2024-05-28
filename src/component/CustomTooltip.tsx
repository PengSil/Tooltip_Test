import React from "react";
import styles from "./tooltip.module.scss";

interface TooltipProps {
  tooltipInfo: {
    name: string;
    position?: "topLeft" | "topRight" | "bottomLeft" | "bottomRight" | "leftTop" | "leftBottom" | "rightTop" | "rightBottom" | "top" | "left" | "right" | "bottom";
    direction: string;
    option?: "delay" | "leaveDelay" | "hoverNotHidden";
  };
}

const CustomTooltip: React.FC<TooltipProps> = ({ tooltipInfo }) => {
  return (
    <div className={`${styles.tooltipContainer} ${styles[tooltipInfo.direction ?? ""]} ${styles[tooltipInfo.position ?? ""]}`}>
      <div className={`${styles.tooltipText} ${styles[tooltipInfo.position ?? ""]}`}>
        <span>prompt text</span>
        <span>prompt text</span>
        <span>prompt text</span>
      </div>
    </div>
  );
};

export default CustomTooltip;
