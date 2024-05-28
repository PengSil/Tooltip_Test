import React from "react";
import ReactDOM from "react-dom";
import styles from "./tooltip.module.scss";

interface TooltipProps {
  tooltipInfo: {
    name: string;
    position?: "topLeft" | "topRight" | "bottomLeft" | "bottomRight" | "leftTop" | "leftBottom" | "rightTop" | "rightBottom" | "top" | "left" | "right" | "bottom";
    direction?: string;
    option?: "delay" | "leaveDelay" | "hoverNotHidden";
    color?: string;
  };
  color?: string;
  detail?: string | number;
}

const Tooltip: React.FC<TooltipProps> = ({ tooltipInfo, color, detail }) => {
  return (
    <>
      {tooltipInfo.color && detail ? (
        <>
          <div className={`${styles.tooltipContainer} ${styles[tooltipInfo.direction ?? ""]} ${styles[tooltipInfo.position ?? ""]}  ${styles[tooltipInfo.color]} ${styles["detail" ?? ""]}`}>
            <div className={`${styles.tooltipText} ${styles[tooltipInfo.position ?? ""]}`}>
              <span>{detail}</span>
            </div>
          </div>
        </>
      ) : tooltipInfo.color ? (
        <>
          <div className={`${styles.tooltipContainer} ${styles[tooltipInfo.direction ?? ""]} ${styles[tooltipInfo.position ?? ""]}  ${styles[tooltipInfo.color]}`}>
            <div className={`${styles.tooltipText} ${styles[tooltipInfo.position ?? ""]}`}>
              <span>{tooltipInfo.color}</span>
            </div>
          </div>
        </>
      ) : (
        <>
          <div className={`${styles.tooltipContainer} ${styles[tooltipInfo.direction ?? ""]} ${styles[tooltipInfo.position ?? ""]}`}>
            <div className={`${styles.tooltipText} ${styles[tooltipInfo.position ?? ""]}`}>
              <span>prompt text</span>
              <span>prompt text</span>
              <span>prompt text</span>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default Tooltip;
