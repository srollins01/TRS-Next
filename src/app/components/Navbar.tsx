import styles from './Navbar.module.css'

function Navbar() {
  return (
    <div className={styles.topnav}>
      <a href="#">
        <img src="/trs-icon.png" className="trs-icon" alt="trs home icon"/>
      </a>
      <div className={styles['nav-text']}>
        <a href="#about-us">About Us</a>
        <a href="#events">Events</a>
        <a href="#footer">Contact</a>
      </div>
    </div>
  )
}

export default Navbar
