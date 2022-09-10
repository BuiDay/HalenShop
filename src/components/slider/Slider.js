
import { useEffect, useState } from "react";
import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai";
import {sliderData} from "./Slider-data.js"
import styles from "./SliderStyle.module.scss"

const Slider = () => {
    const [currentSlide, setCurrentSlide] = useState(0);
    const slideLength = sliderData.length;
    let slideInterval;
    
    const nextSlide = () => {
        setCurrentSlide(currentSlide === slideLength - 1 ? 0 : currentSlide + 1);
      };
    
      const prevSlide = () => {
        setCurrentSlide(currentSlide === 0 ? slideLength - 1 : currentSlide - 1);
      };

    useEffect(()=>{
        slideInterval = setInterval(nextSlide, 5000);
        return () => clearInterval(slideInterval)
    },[currentSlide, slideInterval])

  return (
    <div className={styles.slider}>
      <AiOutlineArrowLeft className={`${styles.arrow} ${styles.prev}`} onClick={prevSlide} />
      <AiOutlineArrowRight className={`${styles.arrow} ${styles.next}`} onClick={nextSlide}/>

      {sliderData.map((slide, index) => {
        const { image, heading, desc } = slide;
        return (
          <div key={index} className={index === currentSlide ? `${styles.slide} ${styles.current}` : `${styles.slide}`} >
              <>
                <img src={image} alt="slide" />
                {index === currentSlide && (
                <div className={ styles.content}>
                  <h2>{heading}</h2>
                  <p>{desc}</p>
                  <hr />
                  <a href="#product" className="--btn --btn-primary">
                    Shop Now
                  </a>
                </div>)}
              </>
          </div>
        );
      })}
    </div>
  );
};

export default Slider;
