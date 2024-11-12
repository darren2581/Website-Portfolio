import profilePic from './images/Study.jpg';
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
            <li className='menu'>
              <span class="material-symbols-outlined">menu</span>
            </li>
          </ul>
        </div>
        {/* <div className='menu'>
          <button className='menu-btn'>
            <span class="material-symbols-outlined">menu</span>
          </button>
        </div> */}
      </div>
      <div className="content">
        <div className='main-photo'>
          <img src={profilePic} alt="Profile Picture" className='profilePic'/>
          <div className='profile-details'>
            <h3>Darren Tan Thong En</h3>
            <p>Software Engineer</p>
            <p>Curtin University Malaysia</p>
          </div>
        </div>
        <div className='introduction'>
          <h3>Introduction</h3>
            <p className='intro'>
              Hello, I'm Darren Tan Thong En from Miri Sarawak Malaysia, a student taking Bachelor's of Software Engineeringt at Curtin University Malaysia. I am passionate about exploring new technologies and applying them to solve real-world problems. As I continue my journey in the field of computing, I'm eager to learn, grow, and embrace new challenges. Through this portfolio, I hope to showcase my skills, capabilities, and the progress I've made in my learning and projects.
            </p>
            <p className='intro'>
              As a dedicated Software Engineering student at Curtin University Malaysia, I have developed a solid foundation in programming through both academic coursework and hands-on projects with technical skills in C++, C, Java, MySQL, Git, Github.
            </p>
            <p className='intro'>
              During my semester break, I dedicated my time to learning new skills such as HTML, CSS, JavaScript, Dart, Flutter, and React.js. I applied these skills to various personal projects, including creating my own website portfolio and developing mobile apps. Additionally, my experience with Git and collaborative software development projects has equipped me to work effectively in team environments.
            </p>
            <p className='intro'>
              Beyond my technical skills, I am passionate about designing user-friendly and visually appealing websites. My role as a Website Helper with the IEEE Website Team has deepened my understanding of web development best practices and the importance of optimizing user experiences. Currently, I am working on a project with my team to develop a STEM Playground app for an upcoming event. This app will provide attendees with information on various showcase projects and allow them to vote for their favorite groups.
            </p>
        </div>
      </div>

    </div>
  );
}

export default App;
