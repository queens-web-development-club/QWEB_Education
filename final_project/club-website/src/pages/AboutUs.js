import "../css/about.css";

function AboutUs() {
  return (
    <>
      <div className="about-us-heading">
        <h1>WHO ARE WE?</h1>
        <h5>
          WHO ARE YOU? THAT’S WHAT WE WANNA KNOW
        </h5>
      </div>
        <div className="about-us-blurb">
            <p>
                Queen’s People Watching Club is a non-profit organization that watches targeted individuals for meticulous reasons that are confidential to only the watcher themselves.
            </p>
            <p>
                Our mission is to enhance our observation senses by following the routines of handpicked individuals that catches our eye. As you join us in our rituals, you shall open your mind more to more than one world, through the lives of other fellow human beings that are minding their own business.
            </p>

            <div className={"about-us-button-container"}>
                <button className={"about-us-button"}>Register Now!</button>
            </div>

        </div>
    </>
  );
}

export default AboutUs;
