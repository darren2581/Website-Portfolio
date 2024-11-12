// import logo from './images/DTTE.png';
import './App.css';

function App() {
  return (
    <div className="container">
      <div className="header">
        <div className="logo">
          <h1>Portfolio</h1>
        </div>
        <div>
          <ul className="navbar">
            <li className='nav-item'><a href="#">Home</a></li>
            <li className='nav-item'><a href="#">About</a></li>
            <li className='nav-item'><a href="#">Skills</a></li>
            <li className='nav-item'><a href="#">Project</a></li>
            <li className='nav-item'><a href="#">Contact</a></li>
          </ul>
        </div>
        <div className='menu'>
          <button className='menu-btn'>
            <span class="material-symbols-outlined">menu</span>
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
