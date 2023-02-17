import React, {useState} from 'react'
import styles from './Project.module.css';
import ImageSlider from './ImageSlider';

function Project({title, description,right,slides}) {    
  return (
    <div>
      {right ? (
        <div className={styles.projectInfo}>
          <div>
            <h2>{title}</h2>
            <div className={styles.projectDescription}>
              {description}
            </div>
          </div>
          <div>
            <ImageSlider slides={slides} title={title} />
          </div>
        </div>
      ) : (
        <div className={styles.projectInfo}>
          <div>
            <ImageSlider slides={slides} title={title} />
          </div>
          <div className={styles.projectDescriptionfield}>
            <h2>{title}</h2>
            <div className={styles.projectDescription}>
              {description}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Project