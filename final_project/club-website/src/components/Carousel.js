import "../css/carousel.css"
import { useState } from "react";

const Carousel = ({images}) => {
    const [currentIndex, setCurrentImg] = useState(0);

    const slideStyles = {
        width: '100%',
        height: '100%',
        backgroundPosition: 'center',
        backgroundSize: "cover",
        backgroundImage: images[currentIndex].src
    }

    return(
        <div className="slider-styles">
            {/* <div style={slideStyles}></div> */}
            <div className="carouseInner"
                 style={{backgroundImage: `url(${images[currentIndex].src})`}}
            >
                <div className="left" onClick={()=> {
                        currentIndex > 0 && setCurrentImg(currentIndex - 1)
                    }
                }>&#60;</div>
                <div className="center">
                    <div className="text">
                        <h1>QUEEN'S UNIVERSITY<br/>PEOPLE WATCHING CLUB</h1>
                        <p>{images[currentIndex].subtitle}</p>
                    </div>
                </div>
                <div className="right" onClick={()=> {
                        currentIndex < images.length - 1 && setCurrentImg(currentIndex + 1)
                    }
                }>&#62;</div>
            </div>
            {/* <img style={slideStyles} src={images[currentIndex].src} ></img> */}

        </div>
    )
};

export default Carousel;