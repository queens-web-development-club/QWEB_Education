import '../css/about.css'

function AboutUs() {
  return (
    <>
      <div className="about-us">
        <div className="about-us-title">
          <h1>WHO ARE WE?</h1>
          <h2>WHO ARE YOU? THAT'S WHAT WE WANNA KNOW</h2>
        </div>
        <div className="about-us-info">
          <p>
            Queen's People Watching Club is a non-profit organization that
            watches targetted individuals for meticulous reasons that are
            confidential to only the watcher themselves.
          </p>
          <br />
          <p>
            Our mission is to enhance our observation senses by following the
            routines of handpicked individuals that catches our eye. As you join
            us in our rituals, you shall open your mind more to more than one
            world, through the lives of other fellow human beings that are
            minding their own business.
          </p>
          <a href="/">
            <button className="register-button">Register Now!</button>
          </a>
        </div>
      </div>
    </>
  )
}

export default AboutUs