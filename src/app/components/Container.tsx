import Events from "./Events"
import Slideshow from "./Slideshow"

function Container() {
  return (
    <div className="container">

      <section id="about-us">
        <div>
          <div className="slideshow" data-aos="fade-up">
            <Slideshow />
          </div>
          <div>
            <h1>About<strong><em> Tokyo RPG Society</em></strong></h1>
            <p>
              <em>Tokyo RPG Society</em> is an inclusive community in Tokyo of 100+
              members dedicated to tabletop role-playing games.
              We explore a variety of RPGs, including Dungeons & Dragons,
              13th Age, Shadowrun, Star Wars, and Warhammer. Our society
              is open to everyone, from seasoned gamers to newcomers
              looking to dive into the world of RPGs. We host regular
              meetups in Otsuka, Asakusa, Koenji and occasionally
              other areas around the city.
            </p>
          </div>
        </div>
        <div>
          <div>
            <h1><strong><em>Otsuka Game Day:</em></strong> A Monthly Conclave of Dice and Valor</h1>
            <p>
              Once a month, the Tokyo RPG Society organizes Otsuka Game Day,
              an event that gathers RPG enthusiasts for sessions of adventure
              and storytelling. This is an ideal opportunity for players of all
              levels to participate in one-shots, explore new game systems, or
              continue epic campaigns. Hosted in venues that provide ample space
              and refreshments, Otsuka Game Day embodies the spirit of communal gaming.
            </p>
          </div>
          <img src="/quest-group-clear.png" alt="dnd team" data-aos="fade-up"/>
        </div>
      </section>
      <Events />
    </div>
  )
}

export default Container
