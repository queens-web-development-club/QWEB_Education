import '../css/Homepage.css'
import Carousel from '../components/Carousel'
import carouselImg1 from '../img/carousel/carousel1.png'
import carouselImg2 from '../img/carousel/carousel2.png'
import carouselImg3 from '../img/carousel/carousel3.png'

function Home() {
  const carouselImages = [
    {
      id: 1,
      src: carouselImg1,
      alt: 'carousel image 1',
      subtitle: 'Have a seat and watch the world go by...',
    },
    {
      id: 2,
      src: carouselImg2,
      alt: 'carousel image 2',
      subtitle: "It's a good day, let's see...",
    },
    {
      id: 3,
      src: carouselImg3,
      alt: 'carousel image 3',
      subtitle: 'Perfect sunny day to watch people...',
    },
  ]

  return (
    <>
      <section className="carousel">
        <Carousel images={carouselImages} />
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
        </div>
      </section>
    </>
  )
}
export default Home
