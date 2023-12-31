import styles from "./howitworks.module.css";
import phonelogindemo from "../../assets/images/logindemo.png";
import phonelogindemoMobile from "../../assets/images/signindemo.png";
import dashboarddemo from "../../assets/images/dashboarddemo.png";
import dashboarddemoMobile from "../../assets/images/delicious.png";
import checkoutdemo from "../../assets/images/checkoutdemo.png";
import checkoutdemoMobile from "../../assets/images/paymentdemo.png";

function Howitworks() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <h1 className={styles.title}>How the app works</h1>
        <div className={styles.logindemo}>
          <div className={styles.logindemoimage}>
            <img className={styles.demo} src={phonelogindemo} alt="" />
            <img className={styles.demoMobile} src={phonelogindemoMobile} alt="" />
          </div>
          <div className={styles.logindemotext}>
            <h4>Create an account</h4>
            <h2>
              Create/login to an existing
              <br /> account to get started
            </h2>
            <p>An account is created with your email and a desired password</p>
          </div>
        </div>
        <div className={styles.logindemoreverse}>
          <div className={styles.logindemotext}>
            <h4>Explore varieties</h4>
            <h2>
              Shop for your favorites
              <br />
              meal as e dey hot.
            </h2>
            <p>
              Shop for your favorite meals or drinks
              <br /> and enjoy while doing it.
            </p>
          </div>
          <div className={styles.logindemoimage}>
            <img className={styles.demo} src={dashboarddemo} alt="" />
            <img className={styles.demoMobile} src={dashboarddemoMobile} alt="" />
          </div>
        </div>
        <div className={styles.logindemo}>
          <div className={styles.logindemoimage}>
            <img className={styles.demo} src={checkoutdemo} alt="" />
            <img className={styles.demoMobile} src={checkoutdemoMobile} alt="" />
          </div>
          <div className={styles.logindemotext}>
            <h4>Checkout</h4>
            <h2>
              When you done check out
              <br />
              and get it delivered.
            </h2>
            <p>When you done check out and get it <br /> delivered with ease.</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Howitworks;
