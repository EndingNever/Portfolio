import logo from './logo.svg';
import './App.css';
import './Routes/routes.js'
import { Link } from 'react-router-dom'
import Circle from './Components/Circle/Circle';
import About from './Components/AboutMe/About';
import Projects from './Components/Projects/Projects';
import Navbar from './Components/Navbar/Navbar';

function App() {
  return (
    <div className="App" style={{ cursor: 'url(images/Hello_Kitty_Cursor.png),auto' }}>
      <div className="navbar-component-container">
        <Navbar />
      </div>
      <div className="about-row">
        <div className="about-component-container">
          <About />
        </div>
      </div>
      <div className="portfolio-row">
        <Projects />
      </div>
    </div>
  );
}

export default App;
