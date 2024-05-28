import React from "react";
import styles from "./anyTooltip.module.scss";
import CheckIcon from "@mui/icons-material/Check";

interface TooltipProps {
  tooltipInfo: {
    name: string;
    position?: "topLeft" | "topRight" | "bottomLeft" | "bottomRight" | "leftTop" | "leftBottom" | "rightTop" | "rightBottom" | "top" | "left" | "right" | "bottom";
    direction?: string;
    option?: "delay" | "leaveDelay" | "hoverNotHidden";
  };
}

const AnyTooltip: React.FC<TooltipProps> = ({ tooltipInfo }) => {
  return (
    <div className={`${styles.tooltipContainer} ${styles[tooltipInfo.direction ?? ""]} ${styles[tooltipInfo.position ?? ""]}`}>
      <div className={`${styles.tooltipText} ${styles[tooltipInfo.position ?? ""]}`}>
        <div className={styles.wrap}>
          <CheckIcon className={styles.icon} />
          <span>Are you sure to delete this task?</span>
        </div>
        <div className={styles.btnWrap}>
          <button className={styles.toogleBtn}>Yes</button>
        </div>
      </div>
    </div>
  );
};

export default AnyTooltip;
