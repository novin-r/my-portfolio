import React from 'react'
import styles from './Home.module.css';
import img from '../assets/novin.png';

function Home() {
  return (
    <div className={styles.home}>
        <div className={styles.developerInformation}>
            <div className={styles.a}>
                <div className={styles.h}  />
                <img
                    src={img}
                    alt="developer image"
                />
            </div>
            <div className={styles.developerPNR}>
                <span>Novin Ramzi</span>
                <span>21 years old</span>
                <span>Novinramzi1@gmail.com</span>
            </div>
        </div>
        <div className={styles.developerDescription}>As a student on the brink of completing my Bachelor's degree in Philosophy of Information Technology, I have developed a range of skills and gained valuable experiences that have equipped me for a career in the tech industry. Working at McDonald's helped me learn how to manage stress, and serving as a football referee taught me how to lead people. My degree has emphasized web development, and I've already demonstrated my technical proficiency through several personal projects, including a music player, a coffee buying platform, and a weather forecasting website. I built these projects using various technologies like ReactJS, Laravel, PHP, Commerce JS, and Stripe, and I'm always eager to continue learning and expanding my skillset. During my university years, I also served as a school ambassador and mentor, supporting and guiding other students. In my free time, I enjoy working on new projects and exploring new technologies.</div>
    </div>
  )
}

export default Home