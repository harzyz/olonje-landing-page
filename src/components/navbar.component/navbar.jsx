import styles from './navbar.module.css'
import logo from '../../assets/images/navlogo.png'
import logomobile from '../../assets/images/navlogoMobile.png'
import hamburger from '../../assets/images/hamburger.png'
import { useState } from 'react'

function Navbar() {
  const [dropdown, setDropdown] = useState(true)

  return (
    <nav className={styles.wrapper}>
      <img className={styles.logo} src={logo} alt="" />
      <img className={styles.logomobile} src={logomobile} alt="" />
      <ul className={styles.navlist}>
        <li className={styles.navlistitem}>Home</li>
        <li className={styles.navlistitem}>Product</li>
        <li className={styles.navlistitem}>Faq</li>
        <li className={styles.navlistitem}>Contact</li>
      </ul>
      <img onClick={()=> setDropdown((prev)=> !prev)} className={styles.hamburger} src={hamburger} alt="" />
      <ul className={dropdown? styles.navitemsmob : styles.close}>
        <li>Home</li>
        <li>About Us</li>
        <li>Features</li>
        <li>Solution</li>
      </ul>
    </nav>
  )
}

export default Navbar
