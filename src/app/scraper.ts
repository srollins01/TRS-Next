import puppeteer from "puppeteer"
import { TimeoutError } from 'puppeteer'

export default async function Scraper() {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto('https://www.meetup.com/rpgtokyo/');

  try {
    await page.waitForSelector('#event-card-e-1', {timeout: 5000});
  } catch (e) {
    if (e instanceof TimeoutError) {
      return null
    }
  }

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

  if (desc1.length > 300) {
    desc1 = desc1.substring(0, 300).trimEnd() + '...'
  }

  try {
    await page.waitForSelector('#event-card-e-2', {timeout: 5000});
  } catch (e) {
    if (e instanceof TimeoutError) {
      return ({
        title: evTitle1,
        title2: null,
        title3: null,
        title4: null,
        img: img1,
        img2: null,
        img3: null,
        time: time1,
        time2: null,
        time3: null,
        loc: loc1,
        loc2: null,
        loc3: null,
        link: link1,
        link2: null,
        link3: null,
        desc: desc1,
        desc2: null,
        desc3: null,
      });
    }
  }

  const evTitle2 = await page.evaluate(() => {
    return document.querySelector('#event-card-e-2 .ds-font-title-3')?.textContent
  });

  const img2 = await page.evaluate(() => {
    return document.querySelector('#image-e-2')?.getAttribute('src')
  });

  const time2 = await page.evaluate(() => {
    return document.querySelector('#event-card-e-2 time')?.textContent
  });

  const loc2 = await page.evaluate(() => {
    return document.querySelector('#event-card-e-2 span.text-gray6')?.textContent
  });

  const link2 = await page.evaluate(() => {
    return document.querySelector('#event-card-e-2')?.getAttribute('href')
  });

  let desc2 = await page.evaluate(() => {
    const descgr2 = document.querySelectorAll('#event-card-e-2 p')
    return Array.from(descgr2).map(p => p?.textContent).join(' ')
  });

  if (desc2.length > 300) {
    desc2 = desc2.substring(0, 300).trimEnd() + '...'
  }

  try {
    await page.waitForSelector('#event-card-e-3', {timeout: 5000});
  } catch (e) {
    if (e instanceof TimeoutError) {
      return ({
        title: evTitle1,
        title2: evTitle2,
        title3: null,
        title4: null,
        img: img1,
        img2: img2,
        img3: null,
        time: time1,
        time2: time2,
        time3: null,
        loc: loc1,
        loc2: loc2,
        loc3: null,
        link: link1,
        link2: link2,
        link3: null,
        desc: desc1,
        desc2: desc2,
        desc3: null,
      });
    }
  }

  const evTitle3 = await page.evaluate(() => {
    return document.querySelector('#event-card-e-3 .ds-font-title-3')?.textContent
  });

  const img3 = await page.evaluate(() => {
    return document.querySelector('#image-e-3')?.getAttribute('src')
  });

  const time3 = await page.evaluate(() => {
    return document.querySelector('#event-card-e-3 time')?.textContent
  });

  const loc3 = await page.evaluate(() => {
    return document.querySelector('#event-card-e-3 span.text-gray6')?.textContent
  });

  const link3 = await page.evaluate(() => {
    return document.querySelector('#event-card-e-3')?.getAttribute('href')
  });

  let desc3 = await page.evaluate(() => {
    const descgr3 = document.querySelectorAll('#event-card-e-3 p')
    return Array.from(descgr3).map(p => p?.textContent).join(' ')
  });

  if (desc3.length > 300) {
    desc3 = desc3.substring(0, 300).trimEnd() + '...'
  }

  try {
    await page.waitForSelector('#event-card-e-4', {timeout: 5000});
  } catch (e) {
    if (e instanceof TimeoutError) {
      return ({
        title: evTitle1,
        title2: evTitle2,
        title3: evTitle3,
        title4: null,
        img: img1,
        img2: img2,
        img3: img3,
        time: time1,
        time2: time2,
        time3: time3,
        loc: loc1,
        loc2: loc2,
        loc3: loc3,
        link: link1,
        link2: link2,
        link3: link3,
        desc: desc1,
        desc2: desc2,
        desc3: desc3,
      });
    }
  }

  const evTitle4 = await page.evaluate(() => {
    return document.querySelector('#event-card-e-4 .ds-font-title-3')?.textContent
  });

  await browser.close();

  return ({
    title: evTitle1,
    title2: evTitle2,
    title3: evTitle3,
    title4: evTitle4,
    img: img1,
    img2: img2,
    img3: img3,
    time: time1,
    time2: time2,
    time3: time3,
    loc: loc1,
    loc2: loc2,
    loc3: loc3,
    link: link1,
    link2: link2,
    link3: link3,
    desc: desc1,
    desc2: desc2,
    desc3: desc3,
  });
}
