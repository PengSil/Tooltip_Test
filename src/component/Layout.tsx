import React from "react";

import styles from "./layout.module.scss";
import ButtonWrap from "./ButtonWrap";
import DelayBtnWrap from "./DelayBtnWrap";
import DirectionBtnWrap from "./DirectionBtnWrap";
import ColorBtnWrap from "./ColorBtnWrap";
import DisableBtnWrap from "./DisableBtnWrap";

const Layout: React.FC = () => {
  return (
    <div className={styles.container}>
      <div className={styles["container-layout"]}>
        <section style={{ height: "100vh", padding: "0px 200px" }}>
          <div className={styles.demo}>
            <div className={styles.wrapContainer}>
              <ButtonWrap />
            </div>
            <div className={styles["parent-overflow"]}>
              <ButtonWrap />
            </div>
          </div>
          <div className={styles.demo2}>
            <DelayBtnWrap />
          </div>
          <div className={styles.demo3}>
            <DirectionBtnWrap />
          </div>
          <div className={styles.demo3}>
            <ColorBtnWrap />
          </div>
          <div className={styles.demo3}>
            <DisableBtnWrap />
          </div>
        </section>
      </div>
    </div>
  );
};

export default Layout;
