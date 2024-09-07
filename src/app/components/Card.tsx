import styles from './Card.module.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

interface Props {
  evTitle: any,
  img: any,
  time: any,
  loc: any,
  evLink: any,
  desc: any
}

function Card({evTitle, img, time, loc, evLink, desc} : Props) {
  return (
    <a href={evLink} target="_blank" className={styles['outer-card']}>
      <div className={styles.card}>
        <h2>{evTitle}</h2>
        <div className={styles['cd-row']}>
          <img src={img || "/game-day-card.png"} alt="event image"/>
          <div className={styles['cd-col']}>
            <div className={styles['txt-row']}>
              <p>
                <FontAwesomeIcon icon={["far", "calendar"]}/> &nbsp;<strong>{time}</strong>
              </p>
            </div>
            <div className={styles['txt-row']}>
              <p>
                <FontAwesomeIcon icon={["fas", "location-dot"]}/> &nbsp;{loc}
              </p>
            </div>
            <div className={styles['txt-row']}>
              <p>{desc}</p>
            </div>
          </div>
        </div>
      </div>
    </a>
  )
}

export default Card
