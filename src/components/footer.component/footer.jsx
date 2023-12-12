import styles from "./footer.module.css";
import background from "../../assets/images/footerbg.png";
import logo from "../../assets/images/footerlogo.png";
import facebook from "../../assets/images/facebook.png";
import instagram from "../../assets/images/instagram.png";
import twitter from "../../assets/images/twitter.png";

function Footer() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.heroImage}>
        <img className={styles.backGr} src={background} alt="" />
      </div>
      <div className={styles.heroText}>
        <h1>Download the app now.</h1>
        <p>Available on your favorite store. Start your premium experience now</p>
        <div className={styles.btnGroup}>
          <button className={styles.playstore}>Playstore</button>
          <button className={styles.appstore}>App store</button>
        </div>
      </div>
      <div className={styles.footersocials}>
        <img className={styles.logo} src={logo} alt="" />
        <div className={styles.socials}>
          <img src={facebook} alt="" /><img src={twitter} alt="" /><img src={instagram} alt="" />
        </div>
        <p>Copywright 2020 Bella Onojie.com</p>
      </div>
    </div>
  )
}

export default Footer
