import puppeteer from "puppeteer";
import { TimeoutError } from 'puppeteer';

export default async function Scraper() {
  const browser = await puppeteer.launch({
  args: ['--no-sandbox', '--disable-setuid-sandbox'],
});
  const page = await browser.newPage();
  await page.goto('https://www.meetup.com/rpgtokyo/');

  async function getEventDetails(eventIndex : number) {
    const eventCardSelector = `#event-card-e-${eventIndex}`;

    try {
      await page.waitForSelector(eventCardSelector, { timeout: 8000 });
    } catch (e) {
      if (e instanceof TimeoutError) return null;
      throw e;
    }

    const evTitle = await page.evaluate((sel) => document.querySelector(`${sel} .ds-font-title-3`)?.textContent, eventCardSelector);
    const img = await page.evaluate((sel) => document.querySelector(`${sel.replace('#event-card', '#image')}`)?.getAttribute('src'), eventCardSelector);
    const time = await page.evaluate((sel) => document.querySelector(`${sel} time`)?.textContent, eventCardSelector);
    const loc = await page.evaluate((sel) => document.querySelector(`${sel} span.text-gray6`)?.textContent, eventCardSelector);
    const link = await page.evaluate((sel) => document.querySelector(sel)?.getAttribute('href'), eventCardSelector);

    let desc = await page.evaluate((sel) => {
      const descgr = document.querySelectorAll(`${sel} p`);
      return Array.from(descgr).map(p => p?.textContent).join(' ');
    }, eventCardSelector);

    if (desc.length > 300) {
      desc = desc.substring(0, 300).trimEnd() + '...';
    }

    return { title: evTitle, img, time, loc, link, desc };
  }

  const events = [];
  for (let i = 1; i <= 4; i++) {
    const eventDetails = await getEventDetails(i);
    if (!eventDetails) break;
    events.push(eventDetails);
  }

  await browser.close();

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
    desc3: events[2]?.desc,
  };
}
