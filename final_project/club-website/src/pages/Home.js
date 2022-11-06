import "../css/carousel.css";
import "../css/Homepage.css";
import Carousel from "../components/Carousel";
import carouselImg1 from "../img/carousel/carousel1.png";
import carouselImg2 from "../img/carousel/carousel2.png";
import carouselImg3 from "../img/carousel/carousel3.png";

import graphic from "../img/peopleGraphic.png";

import HomeShopCard from "../components/HomeShopCard";
import binocularsImg1 from "../img/shop/shopping 1.png";
import binocularsImg2 from "../img/shop/shopping 2.png";
import Socials from "../components/Socials";

function Home() {
  const carouselImages = [
    {
      id: 1,
      src: carouselImg1,
      alt: "carousel image 1",
      subtitle: "Have a seat and watch the world go by...",
    },
    {
      id: 2,
      src: carouselImg2,
      alt: "carousel image 2",
      subtitle: "It's a good day, let's see...",
    },
    {
      id: 3,
      src: carouselImg3,
      alt: "carousel image 3",
      subtitle: "Perfect sunny day to watch people...",
    },
  ];

  const shopitems = [
    {
      img: binocularsImg1,
      price: 24.95,
      name: "Premium Binoculars",
      description: "Nice soft grip for a long day of people watching!",
    },
    {
      img: binocularsImg2,
      price: 29.99,
      name: "Zooming Binoculars",
      description: "Powerful zoom-in-out lens perfect for scoping out ...",
    },
  ];

  return (
    <>
      <section className="carousel">
        <Carousel images={carouselImages} />
        {/* <Socials/> */}
      </section>
      <section className="about-section">
        <div className="info-card">
          <div>
            <span className="section-header">About QPWC</span>
            <p>
              At QPWC, our mission is to turn everyone into first class
              stalkers. When you first join our squad we provide you with free
              binocolurs to get started! Not hooked yet, well see our upcoming
              events below!
            </p>
          </div>
          <div>
            <img className="graphic1" src={graphic}></img>
          </div>
        </div>
      </section>
      <section className="upcoming-events-section">
        <h3>Upcoming Events</h3>
        <h4>Bench Lookout</h4>
        <p>
          Sunday, November 13 2022 <br></br>
          5pm EST @ Breakwater Park
        </p>
        <p>
          Come join us at Breakwater Park for a contest to see how many runners
          you can spot! Contest winner get a $15 Amazon giftcard! Don’t forget
          your binocolurs!
        </p>
        <button>Register Now!</button>
        <a href="/upcoming-events">View all events &rarr;</a>
      </section>
      <section className="shop">
        <div>
          <span>The QPWC Shop</span>
          <div className="home-shop-items">
            <HomeShopCard info={shopitems[0]}></HomeShopCard>
            <HomeShopCard info={shopitems[1]}></HomeShopCard>
            <div className="shop-container">
              <button>Shop Now!</button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Home;
