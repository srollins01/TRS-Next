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
      <div className="card">
        <h2>{evTitle}</h2>
        <div className="cd-row">
        <img src={img || "/game-day-card.png"} alt="event image"/>
        <div className="cd-col">
          <div className="cd-row">
            <div className="txt-row">
              <FontAwesomeIcon icon={["far", "calendar"]} />
              <p><strong>{time}</strong></p>
            </div>
          </div>
            <div className="cd-col desc">
              <div className="txt-row">
                <FontAwesomeIcon icon={["fas", "location-dot"]}/>
                <p>{loc}</p>
              </div>
              <p></p>
              <p>{desc}</p>
            </div>
          </div>
        </div>
      </div>
    </a>
  )
}

export default Card
