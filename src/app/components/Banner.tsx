import styles from './Banner.module.css'
import { Kaushan_Script } from 'next/font/google'

const kaushanscript = Kaushan_Script({
  weight: "400",
  style: "normal",
  subsets: ["latin"],
  display: 'swap',
})

function Banner() {
  return (
    <div className={styles.banner}>
      <h1 className={kaushanscript.className}>Tokyo RPG Society</h1>
      <h2>#1 Community for Tabletop RPGs in Tokyo</h2>
      <div>
        <a href="https://tavern.tokyorpgsociety.com/" target="_blank">
          <button>Check out our community hub &gt;&gt;</button>
        </a>
        <a href="https://www.meetup.com/rpgtokyo/" target="_blank">
          <button className={styles['btn-red']}>Join us on Meetup &gt;&gt;</button>
        </a>
      </div>
    </div>
  )
}

export default Banner
