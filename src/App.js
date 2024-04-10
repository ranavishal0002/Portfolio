
import Intro from './components/Intro/intro';
import Navbar from './components/NavBar/navbar';
import Skills from './components/Skills/skills';
import Education from './components/Education/education';
import Contact from './components/Contact/contact';

function App() {
  return (
    <div className="App">
    <Navbar/>
    <Intro/>
    <Skills/>
    <Education/>
    <Contact/>
    </div>
  );
}

export default App;
