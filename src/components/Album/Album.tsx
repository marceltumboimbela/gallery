import React from "react";
import styles from './Album.module.css';
import { Photo } from "../PhotoAlbum/PhotoAlbum";

interface AlbumProps {
  albumPhotos: Photo[];
}

function chunkArray<T>(array: T[], chunkSize: number) {
  const result = [];
  for (let i = 0; i < array.length; i += chunkSize) {
    result.push(array.slice(i, i + chunkSize));
  }
  return result;
}

const Album: React.FC<AlbumProps> = ({ albumPhotos }) => {
  const photos = chunkArray(albumPhotos, 4);

  if(photos.length === 0) {
    return(
      <></>
    )
  }

  return(
    <div className={styles.albumContainer}>
      <ul className={styles.album}>
        {albumPhotos.map((photo: Photo, index: number) => {
          let klass = ''
            if(index % 4 === 0) {
            klass = 'first'
            } else if(index % 4 === 1) {
            klass = 'second'
            } else if(index % 4 === 2) {
            klass = 'third'
            } else if(index % 4 === 3) {
            klass = 'fourth'
            }
          return (
            <img key={photo.id} src={photo.thumbnailUrl} alt={photo.title} className={`${styles.photo} ${styles[klass]}`}/>
          )
        })}
      </ul>
      {/* {photos.map((photoChunk) =>
        (
          <ul className={styles.album}>
            {photoChunk.map((photo: Photo, index: number) => {
              let klass = ''
              if(index === 0) {
                klass = 'first'
              } else if(index === 1) {
                klass = 'second'
              } else if(index === 2) {
                klass = 'third'
              } else if(index === 3) {
                klass = 'fourth'
              }
              return (
                <img key={photo.id} src={photo.thumbnailUrl} alt={photo.title} className={`${styles.photo} ${styles[klass]}`}/>
              )
            })}
          </ul>
        )
      )} */}
    </div>
  )
}

export default Album;