import { useState } from 'react'
import '../css/carousel.css'

const Carousel = (props) => {
  const [currentIndex, setCurrentImg] = useState(1)
  console.log(props.images)
  return (
    <div className="slider-styles">
      <div
        className="carouseInner"
        style={{ backgroundImage: `url(${props.images[currentIndex].src})` }}
      >
        <div
          className="left"
          onClick={() => {
            currentIndex > 0 && setCurrentImg(currentIndex - 1)
          }}
        >
          &#60;
        </div>
        <div className="center">
          <div className="text">
            <h1>
              QUEEN'S UNIVERSITY
              <br />
              PEOPLE WATCHING CLUB
            </h1>
            <p>{props.images[currentIndex].subtitle}</p>
          </div>
        </div>
        <div
          className="right"
          onClick={() => {
            currentIndex < props.images.length - 1 &&
              setCurrentImg(currentIndex + 1)
          }}
        >
          &#62;
        </div>
      </div>
    </div>
  )
}
export default Carousel
