import { JSDOM } from "jsdom"

export default async function EventList() {
  let res = await fetch('https://www.meetup.com/rpgtokyo/', { cache: 'no-store' });
  let html = await res.text();

  const dom = new JSDOM(html);
  const document = dom.window.document;

  const paragraphs = document.querySelectorAll('#e-1 p');
  console.log(paragraphs.length);
  paragraphs.forEach((p) => {
    console.log(p.textContent);
  });

  async function getEventDetails(eventIndex : number) {
    const eventSel = `#event-card-e-${eventIndex}`;

    const evTitle = document.querySelector(`${eventSel} .ds-font-title-3`)?.textContent
    const img = document.querySelector(`${eventSel.replace('#event-card', '#image')}`)?.getAttribute('src')
    const time = document.querySelector(`${eventSel} time`)?.textContent
    const loc = document.querySelector(`${eventSel} span.text-gray6`)?.textContent
    const link = document.querySelector(eventSel)?.getAttribute('href')
    const paragraphs = document.querySelectorAll('#e-1 p');
    let desc = Array.from(paragraphs).map(p => p?.textContent).join(' ');

    if (desc.length > 250) {
      desc = desc.substring(0, 250).trimEnd() + '...';
    }

    return { title: evTitle, img, time, loc, link, desc };
  }

  const events = [];
  for (let i = 1; i <= 4; i++) {
    const eventDetails = await getEventDetails(i);
    if (!eventDetails) break;
    events.push(eventDetails);
  }

  return {
    title: events[0]?.title,
    title2: events[1]?.title,
    title3: events[2]?.title,
    title4: events[3]?.title,
    img: events[0]?.img,
    img2: events[1]?.img,
    img3: events[2]?.img,
    time: events[0]?.time,
    time2: events[1]?.time,
    time3: events[2]?.time,
    loc: events[0]?.loc,
    loc2: events[1]?.loc,
    loc3: events[2]?.loc,
    link: events[0]?.link,
    link2: events[1]?.link,
    link3: events[2]?.link,
    desc: events[0]?.desc,
    desc2: events[1]?.desc,
    desc3: events[2]?.desc
  };
}
