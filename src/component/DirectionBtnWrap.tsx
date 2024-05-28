import styles from "./directionBtnWrap.module.scss";
import Button from "./Button";

interface TooltipInfo {
  name: string;
  position?: "topLeft" | "topRight" | "bottomLeft" | "bottomRight" | "leftTop" | "leftBottom" | "rightTop" | "rightBottom";
  direction: string;
  option?: "delay" | "leaveDelay" | "hoverNotHidden";
  noticeTooltip?: boolean;
}

const topInfos: TooltipInfo[] = [
  { name: "Top", direction: "top" },
  { name: "Left", direction: "left" },
  { name: "Right", direction: "right" },
  { name: "Bottom", direction: "bottom" },
];

const DirectionBtnWrap: React.FC = () => {
  return (
    <div>
      <div className={styles["top-wrap"]}>
        <Button tooltipInfos={topInfos[0]} delay={1} noticeTooltip={true} />
      </div>
      <div className={styles["left-wrap"]}>
        <Button tooltipInfos={topInfos[1]} delay={1} noticeTooltip={true} />
      </div>
      <div className={styles["right-wrap"]}>
        <Button tooltipInfos={topInfos[2]} delay={1} noticeTooltip={true} />
      </div>
      <div className={styles["bottom-wrap"]}>
        <Button tooltipInfos={topInfos[3]} delay={1} noticeTooltip={true} />
      </div>
    </div>
  );
};

export default DirectionBtnWrap;
