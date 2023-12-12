import styles from "./hero.module.css";
import background from "../../assets/images/bgImage.png";
import olonjephonemob from "../../assets/images/olonjephonemobile.png";

function Hero() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.heroImage}>
        <img className={styles.backGr} src={background} alt="" />
      </div>
      <div className={styles.heroText}>
        <p>Food app</p>
        <h1>Why stay hungry when <br /> you can order form Bella Onojie</h1>
        <p>Download the bella onoje's food app now on</p>
        <div className={styles.btnGroup}>
          <button className={styles.playstore}>Playstore</button>
          <button className={styles.appstore}>App store</button>
        </div>
      </div>
      <div className={styles.prototype}>
        <img className={styles.prototypephonemob} src={olonjephonemob} alt="" />
        <div className={styles.line}></div>
      </div>
    </div>
  );
}

export default Hero;
