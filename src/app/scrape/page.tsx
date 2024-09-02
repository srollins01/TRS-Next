export default async function Scrape() {
  const res = await fetch('https://www.meetup.com/rpgtokyo/')
  const html = await res.text()
  console.log('html', html)

  return (
    <>
    <p>Hi</p>
    </>
  );
}
