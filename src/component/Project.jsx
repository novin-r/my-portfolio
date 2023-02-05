import React, {useState} from 'react'
import styles from './Project.module.css';
import { SliderData } from './SliderData';
import ImageSlider from './ImageSlider';

function Project({right}) {    
  return (
    <div>
      {right ? (
        <div className={styles.projectInfo}>
          <div>
            <h2>Music Player</h2>
            <div className={styles.projectDescription}>
              A web app for visualizing personalized Spotify data. View your
              top artists, top tracks, recently played tracks, and detailed audio
              information about each track. Create and save new playlists of
              recommended tracks based on your existing playlists and more.
            </div>
          </div>
          <div>
            <ImageSlider slides={SliderData} />
          </div>
        </div>
      ) : (
        <div className={styles.projectInfo}>
          <div>
            <ImageSlider slides={SliderData} />
          </div>
          <div className={styles.projectDescriptionfield}>
            <h2>Music Player</h2>
            <div className={styles.projectDescription}>
              A web app for visualizing personalized Spotify data. View your
              top artists, top tracks, recently played tracks, and detailed audio
              information about each track. Create and save new playlists of
              recommended tracks based on your existing playlists and more.
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Project