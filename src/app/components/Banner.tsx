function Banner() {
  return (
    <div className="banner">
      <h1>Tokyo RPG Society</h1>
      <h2>#1 Community for Tabletop RPGs in Tokyo</h2>
      <div>
        <a href="https://tavern.tokyorpgsociety.com/" target="_blank">
          <button>Check out our community hub &gt;&gt;</button>
        </a>
        <a href="https://www.meetup.com/rpgtokyo/" target="_blank">
          <button className="btn-red">Join us on Meetup &gt;&gt;</button>
        </a>
      </div>
    </div>
  )
}

export default Banner
