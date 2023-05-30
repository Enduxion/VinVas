import { Route, Routes } from 'react-router-dom';
import './css/App.css';
import News from './pages/News';
import About from './pages/About';
import { useState } from 'react';
import { gsap } from 'gsap';

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const tl = new gsap.timeline( {duration: "0.1" });
  function toggleDarkMode() {
    setDarkMode((prevValue) => !prevValue);
    tl.fromTo(document.getElementById("darkModeButton"), {opacity: 0}, {opacity: 1});
    tl.fromTo(document.getElementById("darkModeButton"), {scale: 0}, {scale: 1});
  
    if (darkMode) {
      document.documentElement.style.setProperty("--primary--color", "35, 39, 47");
      document.documentElement.style.setProperty("--secondary--color", "51, 58, 69");
      document.documentElement.style.setProperty("--text--color", "#eee");
      document.documentElement.style.setProperty("--text--color-focused", "#ccc");
    } else {
      document.documentElement.style.setProperty("--primary--color", "234, 234, 234");
      document.documentElement.style.setProperty("--secondary--color", "211, 211, 211");
      document.documentElement.style.setProperty("--text--color", "#111");
      document.documentElement.style.setProperty("--text--color-focused", "#333");
    }
  }
  return (
    <>
      <Routes>
        <Route path='/' element={<News darkMode={darkMode} toggleDarkMode={toggleDarkMode}/>}/>
        <Route path='/about' element={<About darkMode={darkMode} toggleDarkMode={toggleDarkMode}/>}/>
      </Routes>
    </>
  );
}

export default App;
