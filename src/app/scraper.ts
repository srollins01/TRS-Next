import puppeteer from "puppeteer"

export default async function Scraper() {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto('https://www.meetup.com/rpgtokyo/');

  await page.waitForSelector('#event-card-e-1');

  const evTitle1 = await page.evaluate(() => {
    return document.querySelector('#event-card-e-1 .ds-font-title-3')?.textContent
  });

  const img1 = await page.evaluate(() => {
    return document.querySelector('#image-e-1')?.getAttribute('src')
  });

  const time1 = await page.evaluate(() => {
    return document.querySelector('#event-card-e-1 time')?.textContent
  });

  const loc1 = await page.evaluate(() => {
    return document.querySelector('#event-card-e-1 span.text-gray6')?.textContent
  });

  const link1 = await page.evaluate(() => {
    return document.querySelector('#event-card-e-1')?.getAttribute('href')
  });

  let desc1 = await page.evaluate(() => {
    const descgr1 = document.querySelectorAll('#event-card-e-1 p')
    return Array.from(descgr1).map(p => p?.textContent).join(' ')
  });

  await browser.close();

  if (desc1.length > 300) {
    desc1 = desc1.substring(0, 300).trimEnd() + '...'
  }

  return ({
    title: evTitle1,
    img: img1,
    time: time1,
    loc: loc1,
    link: link1,
    desc: desc1
  });
}
