import logo from './logo.svg';
import './App.css';
import Login from './Login';
import Home from './components/Home'
import {Routes, Route} from 'react-router-dom';
import Navbar from './components/Navbar';

function App() {
  return (
      <>
          <Navbar />
          <Routes>
              <Route path="/login" element={<Login />} />
              <Route path="/" element={<Home />} />
              <Route path="*" element={<Home />} />

          </Routes>
      </>
  );
}

export default App;
