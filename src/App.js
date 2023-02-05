import React, {useState} from 'react'
import styles from './App.module.css';
import Competency from './component/Competency';
import Experience from './component/Experience';
import Header from './component/Header';
import Home from './component/Home';
import Project from './component/Project';

function App() {
  const [projects, setProjects] = useState([
    {
      Title: 'music player',
      description: "My music player web application showcases my proficiency in both frontend and backend development. I utilized ReactJS for the frontend and Laravel for the backend, creating a seamless user experience. The database, which was built using MySQL, includes two tables (songs and playlist) and a many-to-many relationship between them. On the backend, I created endpoints to allow for the transfer of all songs and playlists to the frontend and to save new music to the database. The frontend is designed to be responsive, providing an optimal experience on both browsers and mobile devices.",
    },{
      Title: 'Weather Forcast',
      description: "As a student on the brink of completing my Bachelor's degree in Philosophy of Information Technology.",
    },{
      Title: 'But Coffee',
      description: "As a student on the brink of completing my Bachelor's degree in Philosophy of Information Technology.",
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
