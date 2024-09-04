import styles from './Card.module.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

interface Props {
  evTitle: any,
  img: any,
  time: any,
  loc: any,
  desc: any,
  evLink: any
}

function Card({evTitle, img, time, loc, desc, evLink} : Props) {
  return (
    <a href={evLink} target="_blank">
      <div className={styles.card}>
        <h2>{evTitle}</h2>
        <div className={styles['cd-row']}>
          <img src={img || "/game-day-card.png"} alt="event image"/>
          <div className={styles['cd-col']}>
            <div className={styles['txt-row']}>
              <FontAwesomeIcon icon={["far", "calendar"]} />
              <p><strong>{time}</strong></p>
            </div>
            <div className={styles['txt-row']}>
              <FontAwesomeIcon icon={["fas", "location-dot"]}/>
              <p>{loc}</p>
            </div>
            <p className={styles.desc}>{desc}</p>
          </div>
        </div>
      </div>
    </a>
  )
}

export default Card
