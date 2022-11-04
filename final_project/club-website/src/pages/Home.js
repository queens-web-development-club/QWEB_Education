import Carousel from "../components/Carousel";
import carouselImg1 from '../img/carousel/carousel1.png';
import carouselImg2 from '../img/carousel/carousel2.png';
import carouselImg3 from '../img/carousel/carousel3.png';

function Home(){
    const carouselImages = [{
        id: 1,
        src: carouselImg1,
        alt: 'carousel image 1'
    }, {
        id: 2,
        src: carouselImg2,
        alt: 'carousel image 2'
    }, {
        id: 3,
        src: carouselImg3,
        alt: 'carousel image 3'
    }]

    return (
        <>
            <div className="carousel">
                <Carousel images={carouselImages}/>
            </div>
        </>
        
    )
}

export default Home;