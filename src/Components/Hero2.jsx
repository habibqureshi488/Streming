import React , {useEffect , useState} from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import './Hero2.css'; 
import image1 from '../assets/Hero/1.webp'
import image2 from '../assets/Hero/2.webp'
import image3 from '../assets/Hero/3.webp'
import image4 from '../assets/Hero/4.webp'
import image5 from '../assets/Hero/5.webp'
import image6 from '../assets/Hero/6.webp'
import image7 from '../assets/Hero/7.webp'

const HeroCarousel = () => {



  return (
    <>
    <div className="hero-carousel">
      <Carousel 
        showArrows={true} 
        autoPlay={true} 
        infiniteLoop={true} 
        showThumbs={false}
        showStatus={false}
        interval={3000}
      >
        <div>
          <img src= {image1} alt="Movie 1" />
        </div>
        <div>
          <img src= {image2} alt="Movie 2" />
        </div>
        <div>
          <img src= {image3} alt="Movie 3" />
        </div>
        <div>
          <img src= {image4} alt="Movie 4" />
        </div>
        <div>
          <img src= {image5} alt="Movie 5" />
        </div>
        <div>
          <img src= {image6} alt="Movie 6" />
        </div>
        <div>
          <img src= {image7} alt="Movie 7" />
        </div>
      </Carousel>
    </div>

    
    
    </>
  );
};

export default HeroCarousel;
