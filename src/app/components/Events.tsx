import Card from "./Card"
import Scraper from "../scraper"

export default async function Events() {
  let events;
  events = await Scraper();

  if (!events) {
    return (
      <section id="events">
        <h1><strong><em>Upcoming Events</em></strong></h1>
        <div className="col cardspacing">
          <div className="card inactive-card">
            <h2>No events to display</h2>
          </div>
        </div>
      </section>
    )
  }

  return (
    <section id="events">
      <h1><strong><em>Upcoming Events</em></strong></h1>
      <div className="cd-col cardspacing">
        <Card evTitle={events.title} img={events.img} time={events.time} loc={events.loc} desc={events.desc} evLink={events.link} />
        {events.title2 && <Card evTitle={events.title2} img={events.img2} time={events.time2} loc={events.loc2} desc={events.desc2} evLink={events.link2} />}
        {events.title3 && <Card evTitle={events.title3} img={events.img3} time={events.time3} loc={events.loc3} desc={events.desc3} evLink={events.link3} />}
        {events.title4 && <a href="https://www.meetup.com/rpgtokyo/" target="_blank"><div className="card"><h2>See More</h2></div></a>}
      </div>
    </section>
  );
}
