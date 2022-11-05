import "../css/carousel.css"
import { useState } from "react";

const Carousel = ({images}) => {
    const [currentIndex, setCurrentUser] = useState(0);

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
            <img style={slideStyles} src={images[currentIndex].src} ></img>
        </div>
    )
};

export default Carousel;