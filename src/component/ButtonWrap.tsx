import styles from "./buttonWrap.module.scss";
import Button from "./Button";

interface TooltipInfo {
  name: string;
  position?: "topLeft" | "topRight" | "bottomLeft" | "bottomRight" | "leftTop" | "leftBottom" | "rightTop" | "rightBottom";
  direction: string;
  tooltipToggle: boolean;
}

const topInfos: TooltipInfo[] = [
  { name: "TLTLTL", position: "topLeft", direction: "top", tooltipToggle: true },
  { name: "Top", direction: "top", tooltipToggle: true },
  { name: "TR", position: "topRight", direction: "top", tooltipToggle: true },
];

const leftInfos: TooltipInfo[] = [
  { name: "LT", position: "leftTop", direction: "left", tooltipToggle: true },
  { name: "Left", direction: "left", tooltipToggle: true },
  { name: "LB", position: "leftBottom", direction: "left", tooltipToggle: true },
];

const rightInfos: TooltipInfo[] = [
  { name: "RT", position: "rightTop", direction: "right", tooltipToggle: true },
  { name: "Right", direction: "right", tooltipToggle: true },
  { name: "RB", position: "rightBottom", direction: "right", tooltipToggle: true },
];

const bottomInfos: TooltipInfo[] = [
  { name: "BL", position: "bottomLeft", direction: "bottom", tooltipToggle: true },
  { name: "Bottom", direction: "bottom", tooltipToggle: true },
  { name: "BR", position: "bottomRight", direction: "bottom", tooltipToggle: true },
];

const ButtonWrap: React.FC = () => {
  return (
    <div>
      <div className={styles["top-wrap"]}>
        {topInfos.map((info, i) => (
          <Button key={i} tooltipInfos={info} />
        ))}
      </div>
      <div className={styles["left-wrap"]}>
        {leftInfos.map((info, i) => (
          <Button key={i} tooltipInfos={info} />
        ))}
      </div>
      <div className={styles["right-wrap"]}>
        {rightInfos.map((info, i) => (
          <Button key={i} tooltipInfos={info} />
        ))}
      </div>
      <div className={styles["bottom-wrap"]}>
        {bottomInfos.map((info, i) => (
          <Button key={i} tooltipInfos={info} />
        ))}
      </div>
    </div>
  );
};

export default ButtonWrap;
