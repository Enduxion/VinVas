import { Route, Routes } from "react-router-dom";
import "./css/App.css";
import News from "./pages/News";
import About from "./pages/About";
import { useEffect, useState } from "react";
import { gsap } from "gsap";

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const tl = new gsap.timeline({ duration: "1" });

  function toggleDarkMode() {
    // This function sets the value of "darkMode" to false if the value is true and vice versa
    setDarkMode((prevValue) => !prevValue);
  }
  // Use Effect Hook for changing the dark mode to light mode when the "darkMode" var changes
  useEffect(() => {
    // only animations using gsap
    tl.fromTo(
      document.getElementById("darkModeButton"),
      { rotation: 0 },
      { rotation: 180 }, "-=1"
    );
    tl.fromTo(
      document.getElementById("darkModeButton"),
      { rotation: 180 },
      { rotation: 0 }
    );
    gsap.to(':root', {
      '--primary--color': darkMode ? '35, 39, 47' : '234, 234, 234',
      '--secondary--color': darkMode ? '26, 29, 35' : '211, 211, 211',
      '--text--color': darkMode ? '#eee' : '#111',
      '--text--color-focused': darkMode ? '#ccc' : '#333'
    });
  }, [darkMode]);
  return (
    <>
      <Routes>
        <Route
          path="/"
          element={<News darkMode={darkMode} toggleDarkMode={toggleDarkMode} />}
        />
        <Route
          path="/about"
          element={
            <About darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
          }
        />
      </Routes>
    </>
  );
}

export default App;
