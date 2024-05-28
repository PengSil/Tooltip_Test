import React, { useState } from "react";
import styles from "./colorBtnWrap.module.scss";
import Button from "./Button";

interface TooltipInfo {
  name: string;
  position?: "topLeft" | "topRight" | "bottomLeft" | "bottomRight" | "leftTop" | "leftBottom" | "rightTop" | "rightBottom";
  direction: string;
  option?: "delay" | "leaveDelay" | "hoverNotHidden";
  color?: string;
}

const topInfos: TooltipInfo[] = [
  { name: "Pink", direction: "top", color: "pink" },
  { name: "Yellow", direction: "top", color: "yellow" },
];

const ColorBtnWrap: React.FC = () => {
  return (
    <>
      <div className={styles["top-wrap"]}>
        {topInfos.map((info, i) => (
          <Button key={i} tooltipInfos={info} />
        ))}
      </div>
    </>
  );
};

export default ColorBtnWrap;
