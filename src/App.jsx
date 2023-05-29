import { Route, Routes } from 'react-router-dom';
import './css/App.css';
import News from './pages/News';
import About from './pages/About';

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<News />}/>
        <Route path='/about' element={<About />}/>
      </Routes>
    </>
  );
}

export default App;
