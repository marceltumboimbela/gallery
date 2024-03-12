import React, { useEffect, useState, useMemo } from 'react';
import styles from './PhotoAlbum.module.css'
import { CarouselPhoto } from '@/components/CarouselPhoto';
import Add from '@/assets/Add.png';
import { Carousel } from '@/components/Carousel';
import { Album } from '@/components/Album';

export interface Photo {
  albumId: number;
  id: number;
  title: string;
  url: string;
  thumbnailUrl: string;
}

export default function PhotoAlbum() {
  const [photos, setPhotos] = useState<Photo[]>([]);
  const [currentAlbumId, setCurrentAlbumId] = useState(1);

  useEffect(() => {
    async function fetchPhotos() {
      try {
        const response = await fetch('https://jsonplaceholder.typicode.com/photos');
        const data = await response.json();
        setPhotos(data);
      } catch (error) {
        console.error('Error fetching photos:', error);
      }
    }

    fetchPhotos();
  }, []);

  const firstPhotosFromEachAlbum = useMemo(() => {
    const firstPhotos: Photo[] = [];
    const albumIds = new Set();

    for (const photo of photos) {
      if (!albumIds.has(photo.albumId)) {
        albumIds.add(photo.albumId);
        firstPhotos.push(photo);
      }
    }

    return firstPhotos.slice(0, 10);
  }, [photos]);

  const albumPhotos = useMemo(() => {
    return photos.filter((photo) => photo.albumId === currentAlbumId)
  }, [photos, currentAlbumId]);

  function handleAlbumChange (newAlbumId: number) {
    setCurrentAlbumId(newAlbumId);
  }

  function handleNext() {
    setCurrentAlbumId((prevAlbumId) => (prevAlbumId === 10 ? 1 : prevAlbumId + 1));
  }

  function handlePrev(){
    setCurrentAlbumId((prevAlbumId) => (prevAlbumId === 1 ? 10 : prevAlbumId - 1));
  }

  return (
    <>
      <Carousel handlePrev={handlePrev} handleNext={handleNext} currentAlbumId={currentAlbumId}>
        {firstPhotosFromEachAlbum.map((photo) => (
          <li key={photo.id} className={styles.carouselItem}>
            <CarouselPhoto currentAlbumId={currentAlbumId} albumId={photo.albumId} imageUrl={photo.thumbnailUrl} description={photo.title} handleAlbumChange={handleAlbumChange} />
          </li>
        ))}
      </Carousel>
      <Album albumPhotos={albumPhotos} />
      <img src={Add} className={styles.add}/>
    </>
  );
}
