import styles from './App.module.css';
import Competency from './component/Competency';
import Experience from './component/Experience';
import Header from './component/Header';
import Home from './component/Home';
import Project from './component/Project';

function App() {
  return (
    <div className={styles.portfolio}>
      <Header />
      <div className={styles.portfolioContainer}>
        <Home />
        <h1>Projects</h1>
        <Project right={true} />
        <Project right={false} />
        <Project right={true} />
        <Project right={false} />
        <Experience />
        <h1>Competencies</h1>
        <Competency />
      </div>

    </div>
  );
}

export default App;
