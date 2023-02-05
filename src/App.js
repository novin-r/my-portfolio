import styles from './App.module.css';
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
        <Experience />
        <Project right={true} />
        <Project right={false} />
        <Project right={true} />
        <Project right={false} />
      </div>

    </div>
  );
}

export default App;
