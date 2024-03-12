import React from "react";
import styles from './Carousel.module.css';

interface CarouselProps {
  handlePrev: () => void;
  handleNext: () => void;
  currentAlbumId: number;
  children: React.ReactNode;
}

const Carousel: React.FC<CarouselProps> = ({ children, handlePrev, handleNext, currentAlbumId }) => {
  return (
    <div className={styles.carouselContainer}>
      <button onClick={handlePrev} className={styles.prevButton}>←</button>
      <ul className={styles.carousel}>
        {children}
      </ul>
      <button onClick={handleNext} className={styles.nextButton}>→</button>
      <p className={styles.counter}>{`${currentAlbumId} of 10`}</p>
    </div>
  )
}

export default Carousel;
