import { JSDOM } from "jsdom"
import Card from "./components/Card"

export default async function Events() {
  const res = await fetch('https://www.meetup.com/rpgtokyo/')
  const html = await res.text()

  const dom = new JSDOM(html)
  const document = dom.window.document

  const eventTitle1 = document.querySelector('#event-card-e-1 .ds-font-title-3')?.textContent
  const eventTitle2 = document.querySelector('#event-card-e-2 .ds-font-title-3')?.textContent
  const eventTitle3 = document.querySelector('#event-card-e-3 .ds-font-title-3')?.textContent

  const img1 = document.querySelector('#image-e-1')?.getAttribute('src')
  const img2 = document.querySelector('#image-e-2')?.getAttribute('src')
  const img3 = document.querySelector('#image-e-3')?.getAttribute('src')

  const time1 = document.querySelector('#event-card-e-1 time')?.textContent
  const time2 = document.querySelector('#event-card-e-2 time')?.textContent
  const time3 = document.querySelector('#event-card-e-3 time')?.textContent

  const loc1 = document.querySelector('#event-card-e-1 .text-gray6')?.textContent
  const loc2 = document.querySelector('#event-card-e-2 .text-gray6')?.textContent
  const loc3 = document.querySelector('#event-card-e-3 .text-gray6')?.textContent

  const descgr1 = document.querySelectorAll('#event-card-e-1 p')
  const descgr2 = document.querySelectorAll('#event-card-e-2 p')
  let descgr3 = document.querySelectorAll('#event-card-e-3 p')
  let desc1 = ""
  descgr1.forEach((p) => {
    desc1 += p.textContent + " "
  })

  if (desc1.length > 300) {
    desc1 = desc1.substring(0, 300).trimEnd() + '...'
  }

  console.log(descgr1.length)
  console.log(desc1)

  const link1 = document.querySelector('#event-card-e-1')?.getAttribute('href')

  return (
    <>
    <p>Hi</p>
    <Card evTitle={eventTitle1} img={img1} time={time1} loc={loc1} desc={desc1} evLink={link1} />
    </>
  );
}
