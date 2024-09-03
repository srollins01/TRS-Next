import Card from "./Card"
import Scraper from "../scraper"

export default async function Events() {
  let events;
  events = await Scraper();

  return (
    <>
    <Card evTitle={events.title} img={events.img} time={events.time} loc={events.loc} desc={events.desc} evLink={events.link} />
    </>
  );
}
