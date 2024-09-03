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
          <div className="card">
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
      </div>
    </section>
  );
}
