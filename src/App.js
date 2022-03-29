import logo from './logo.svg';
import './App.css';
import './Routes/routes.js'
import { Link } from 'react-router-dom'
import Circle from './Components/Circle/Circle';
import About from './Components/AboutMe/About';
import Project from './Components/Project/Project';
import Navbar from './Components/Navbar/Navbar';

function App() {
  return (
    <div className="App">
      <div className="navbar-component-container">
        <Navbar />
      </div>
      <div className="middle-row">
        <div className="about-component-container">
          <About />
        </div>
      </div>
    </div>
  );
}

export default App;
