import styles from './Events.module.css'
import Card from "./Card"
import EventList from "./EventList"

export default async function Events() {
  const events = await EventList();

  if (!events.title) {
    return (
      <section id="events" className={styles.events}>
        <h1><strong><em>Upcoming Events</em></strong></h1>
        <div className={styles.cardspacing}>
          <div className={`${styles.card} ${styles['inactive-card']}`}>
            <h2>No events to display</h2>
          </div>
        </div>
      </section>
    )
  }

  return (
    <section id="events" className={styles.events}>
      <h1><strong><em>Tokyo RPG Society Events</em></strong></h1>
      <div className={styles.cardspacing}>
        <Card evTitle={events.title} img={events.img} time={events.time} loc={events.loc} evLink={events.link} desc={events.desc} />
        {events.title2 && <Card evTitle={events.title2} img={events.img2} time={events.time2} loc={events.loc2} evLink={events.link2} desc={events.desc2} />}
        {events.title3 && <Card evTitle={events.title3} img={events.img3} time={events.time3} loc={events.loc3} evLink={events.link3} desc={events.desc3} />}
        {events.title4 && <a href="https://www.meetup.com/rpgtokyo/" target="_blank"><div className={styles.card}><h2>See More</h2></div></a>}
      </div>
    </section>
  );
}
