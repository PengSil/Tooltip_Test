import React, { useState, useEffect } from "react";
import styles from "./button.module.scss";
import Tooltip from "./Tooltip";
import AnyTooltip from "./AnyTooltip";

interface TooltipProps {
  tooltipInfos: {
    name: string;
    position?: "topLeft" | "topRight" | "bottomLeft" | "bottomRight" | "leftTop" | "leftBottom" | "rightTop" | "rightBottom" | "top" | "left" | "right" | "bottom";
    direction?: string;
    tooltipToggle?: boolean;
    option?: "delay" | "leaveDelay" | "hoverNotHidden";
    color?: string;
  };
  delay?: number;
  noticeTooltip?: boolean;
  color?: string;
  onClick?: () => void;
}

const Button: React.FC<TooltipProps> = ({ tooltipInfos, delay = 1, noticeTooltip, color, onClick }) => {
  const [showTooltip, setShowTooltip] = useState(false);
  const [timer, setTimer] = useState<number | null>(null);
  const [buttonColor, setButtonColor] = useState(color || "");

  useEffect(() => {
    if (tooltipInfos.color) {
      setButtonColor(tooltipInfos.color);
    }
  }, [tooltipInfos.color]);

  const handleMouse = () => {
    if (timer) {
      clearTimeout(timer);
    }
    setTimer(
      window.setTimeout(() => {
        setShowTooltip(true);
      }, delay * 1000)
    );
  };

  const handleMouseLeave = () => {
    if (timer) {
      clearTimeout(timer);
    }
    setShowTooltip(false);
  };

  const leaveDelay = () => {
    if (timer) {
      clearTimeout(timer);
    }
    setShowTooltip(true);
  };

  const leaveDelayLeave = () => {
    if (timer) {
      clearTimeout(timer);
    }
    setTimer(
      window.setTimeout(() => {
        setShowTooltip(false);
      }, delay * 1000)
    );
  };

  const hoverDelay = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (timer) {
      clearTimeout(timer);
    }
    setShowTooltip(true);
  };

  const hoverDelayLeave = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (tooltipInfos.option === "hoverNotHidden") {
      if (timer) {
        clearTimeout(timer);
      }
      setTimer(
        window.setTimeout(() => {
          setShowTooltip(false);
        }, delay * 1000)
      );
    } else {
      setShowTooltip(false);
    }
  };

  const hoverNotice = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (timer) {
      clearTimeout(timer);
    }
    setShowTooltip(true);
  };

  const hoverNoticeLeave = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (tooltipInfos.option === "hoverNotHidden") {
      if (timer) {
        clearTimeout(timer);
      }
      setTimer(
        window.setTimeout(() => {
          setShowTooltip(false);
        }, 100)
      );
    } else {
      setShowTooltip(false);
    }
  };

  const buttonStyle = {
    backgroundColor: buttonColor,
  };

  return (
    <>
      {tooltipInfos.option === "delay" && tooltipInfos.direction === "top" ? (
        <button className={styles["test-button"]} style={buttonStyle} onMouseEnter={handleMouse} onMouseLeave={handleMouseLeave}>
          <div>{tooltipInfos.name}</div>
          {showTooltip && <Tooltip tooltipInfo={tooltipInfos} />}
        </button>
      ) : tooltipInfos.option === "leaveDelay" ? (
        <button className={styles["test-button"]} style={buttonStyle} onMouseEnter={leaveDelay} onMouseLeave={leaveDelayLeave}>
          <div>{tooltipInfos.name}</div>
          {showTooltip && <Tooltip tooltipInfo={tooltipInfos} />}
        </button>
      ) : noticeTooltip ? (
        <button className={styles["test-button"]} style={buttonStyle} onMouseEnter={hoverNotice} onMouseLeave={hoverNoticeLeave}>
          <div>{tooltipInfos.name}</div>
          {showTooltip && <AnyTooltip tooltipInfo={tooltipInfos} />}
        </button>
      ) : tooltipInfos.option === "hoverNotHidden" ? (
        <button className={styles["test-button"]} style={buttonStyle} onMouseEnter={hoverDelay} onMouseLeave={hoverDelayLeave}>
          <div>{tooltipInfos.name}</div>
          {showTooltip && <Tooltip tooltipInfo={tooltipInfos} />}
        </button>
      ) : tooltipInfos.color && tooltipInfos.direction ? (
        <button className={`${styles["test-button"]} ${styles[tooltipInfos.color]}`} style={buttonStyle} onMouseEnter={hoverDelay} onMouseLeave={hoverDelayLeave}>
          <div>{tooltipInfos.name}</div>
          {showTooltip && <Tooltip tooltipInfo={tooltipInfos} />}
        </button>
      ) : tooltipInfos.color ? (
        <button className={`${styles["test-button"]} ${styles[tooltipInfos.color]}`} style={buttonStyle} onClick={onClick}>
          <div>{tooltipInfos.name}</div>
        </button>
      ) : tooltipInfos.tooltipToggle ? (
        <button className={styles["test-button"]} style={buttonStyle} onMouseEnter={() => setShowTooltip(true)} onMouseLeave={() => setShowTooltip(false)}>
          <div>{tooltipInfos.name}</div>
          {showTooltip && <Tooltip tooltipInfo={tooltipInfos} />}
        </button>
      ) : (
        <>
          <button className={styles["test-button"]}>
            <div>{tooltipInfos.name}</div>
          </button>
        </>
      )}
    </>
  );
};

export default Button;
