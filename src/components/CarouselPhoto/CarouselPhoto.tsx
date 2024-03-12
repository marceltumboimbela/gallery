import React from 'react';
import styles from './CarouselPhoto.module.css';

interface CarouselPhotoProps {
  imageUrl: string;
  description: string;
  handleAlbumChange: (albumId: number) => void;
  albumId: number;
  currentAlbumId: number;
}

const CarouselPhoto : React.FC<CarouselPhotoProps> = ({ imageUrl, description, handleAlbumChange, albumId, currentAlbumId}) => {
  const active = albumId === currentAlbumId

  function capitalizeFirstLetter(str: string) {
    return str.charAt(0).toUpperCase() + str.slice(1);
  }

  return (
    <div className={`${styles.carouselPhoto} ${active ? styles.active : ''}`}>
      <img src={imageUrl} alt="Carousel Photo" onClick={() => handleAlbumChange(albumId)} className={`${styles.photo} ${active ? styles.photoActive : ''}`}/>
      {active && <p className={styles.description}>{capitalizeFirstLetter(description)}</p>}
    </div>
  );
}

export default CarouselPhoto;
