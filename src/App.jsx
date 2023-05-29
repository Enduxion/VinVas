import { Route, Routes } from 'react-router-dom';
import './css/App.css';
import News from './pages/News';

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<News />}/>
      </Routes>
    </>
  );
}

export default App;
