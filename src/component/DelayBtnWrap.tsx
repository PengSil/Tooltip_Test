import React, { useState } from "react";
import styles from "./delayBtnWrap.module.scss";
import Button from "./Button";

interface TooltipInfo {
  name: string;
  position?: "topLeft" | "topRight" | "bottomLeft" | "bottomRight" | "leftTop" | "leftBottom" | "rightTop" | "rightBottom";
  direction: string;
  option?: "delay" | "leaveDelay" | "hoverNotHidden";
}

const topInfos: TooltipInfo[] = [
  { name: "enter-delay ", position: "topLeft", direction: "top", option: "delay" },
  { name: "leave-delay ", direction: "top", option: "leaveDelay" },
  { name: "hover not hidden", position: "topRight", direction: "top", option: "hoverNotHidden" },
];

const DelayBtnWrap: React.FC = () => {
  const [delay, setDelay] = useState<number | string>(1);

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    const numericValue = parseFloat(value);
    if (!isNaN(numericValue)) {
      setDelay(numericValue);
    } else {
      setDelay(value);
    }
  };

  return (
    <div className={styles["top-wrap"]}>
      <div className={styles["delay-wrap"]}>
        <span>delay</span>
        <input type="text" className={styles["delay"]} value={delay} onChange={handleInputChange} />
      </div>
      {topInfos.map((info, i) => (
        <Button key={i} tooltipInfos={info} delay={typeof delay === "number" ? delay : 1} />
      ))}
    </div>
  );
};

export default DelayBtnWrap;
