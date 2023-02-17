import React, {useState} from 'react'
import styles from './App.module.css';
import Competency from './component/Competency';
import Experience from './component/Experience';
import Header from './component/Header';
import Home from './component/Home';
import Project from './component/Project';
import { SliderData } from './component/SliderData';

function App() {
  const [projects, setProjects] = useState([
    {
      Title: 'music player',
      description: "My music player web application showcases my proficiency in both frontend and backend development. I utilized ReactJS for the frontend and Laravel for the backend, creating a seamless user experience. The database, which was built using MySQL, includes two tables (songs and playlist) and a many-to-many relationship between them. On the backend, I created endpoints to allow for the transfer of all songs and playlists to the frontend and to save new music to the database. The frontend is designed to be responsive, providing an optimal experience on both browsers and mobile devices.",
    },{
      Title: 'Raw Food Restaurants',
      description: "This is a web application built with React.js and Laravel, backed by a MySQL database. The app allows users to browse and order raw food from various restaurants across different cities. Although it serves as a prototype, it demonstrates how users can easily find and order food from a range of restaurants. Please note that this is not a live app and there are no payment options available. However, I have previously worked on a separate project that integrates with Stripe for online payments.",
    },{
      Title: 'Weather Forcast',
      description: "At the moment, there are no images that can be displayed due to the API being used no longer functional.This was a weather forecast website that I built using a pre-existing API. The API provided weather forecast information for various cities around the world. Users could search for a city and see the weather for today and the next week. The website was built using HTML, CSS, and JavaScript, with a focus on how to interact with APIs. The API was written in XML.",
    },
  ]);
  return (
    <div className={styles.portfolio}>
      <Header />
      <div className={styles.portfolioContainer}>
        <Home />
        <h1>Projects</h1>
        {projects.map((project, index) => (
          <Project
            key={index}
            title={project.Title}
            description={project.description}
            right={index % 2 === 1}
            slides={SliderData[index]}
          />
        ))}
        <Experience />
        <h1>Competencies</h1>
        <Competency />
      </div>

    </div>
  );
}

export default App;
