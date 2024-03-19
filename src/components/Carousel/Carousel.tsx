import React from "react";
import styles from './Carousel.module.css';
import { CarouselPhoto } from "../CarouselPhoto";
import { Photo } from "../PhotoAlbum/PhotoAlbum";
interface CarouselProps {
  handlePrev: () => void;
  handleNext: () => void;
  currentAlbumId: number;
  photos: Photo[]
}

const Carousel: React.FC<React.PropsWithChildren<CarouselProps>> = ({ handlePrev, handleNext, currentAlbumId, photos }) => {
  const nextAlbumId = currentAlbumId + 1 > 10 ? 1 : currentAlbumId + 1;
  const prevAlbumId = currentAlbumId - 1 < 1 ? 10 : currentAlbumId - 1;
  const prevPhoto = photos.find((photo) => photo.albumId === prevAlbumId);
  const nextPhoto = photos.find((photo) => photo.albumId === nextAlbumId);
  const currentPhoto = photos.find((photo) => photo.albumId === currentAlbumId);
  if(prevPhoto === undefined || nextPhoto === undefined || currentPhoto === undefined) return null;

  return (
    <div className={styles.carouselContainer}>
      <ul className={styles.carousel2}>
        <li>
          <CarouselPhoto albumId={prevAlbumId} imageUrl={prevPhoto?.thumbnailUrl} description={prevPhoto.title} currentAlbumId={currentAlbumId}/>
        </li>
        <li>
          <CarouselPhoto albumId={currentAlbumId} imageUrl={currentPhoto?.thumbnailUrl} description={currentPhoto.title} currentAlbumId={currentAlbumId}/>
        </li>
        <li>
          <CarouselPhoto albumId={nextAlbumId} imageUrl={nextPhoto?.thumbnailUrl} description={nextPhoto.title} currentAlbumId={currentAlbumId}/>
        </li>
        <p className={styles.counter}>{`${currentAlbumId} of ${photos.length}`}</p>
      </ul>
      <button onClick={handlePrev} className={styles.prevButton}>←</button>
      <button onClick={handleNext} className={styles.nextButton}>→</button>
    </div>
  )
}

export default Carousel;
