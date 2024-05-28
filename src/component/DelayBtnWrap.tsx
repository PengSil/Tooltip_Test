import styles from "./delayBtnWrap.module.scss";
import Button from "./Button";

interface TooltipInfo {
  name: string;
  position?: "topLeft" | "topRight" | "bottomLeft" | "bottomRight" | "leftTop" | "leftBottom" | "rightTop" | "rightBottom";
  direction: string;
  option?: "delay" | "leaveDelay" | "hoverNotHidden";
}

const topInfos: TooltipInfo[] = [
  { name: "enter-delay 1s", position: "topLeft", direction: "top", option: "delay" },
  { name: "leave-delay 1s", direction: "top", option: "leaveDelay" },
  { name: "hover not hidden", position: "topRight", direction: "top", option: "hoverNotHidden" },
];

const DelayBtnWrap: React.FC = () => {
  return (
    <div className={styles["top-wrap"]}>
      {topInfos.map((info, i) => (
        <Button key={i} tooltipInfos={info} delay={1} />
      ))}
    </div>
  );
};

export default DelayBtnWrap;
