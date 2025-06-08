import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import ProjectOne from './pages/ProjectOne';
import ProjectTwo from './pages/ProjectTwo';
import ProjectThree from './pages/ProjectThree';
import Navbar from './components/Navbar';
import Footer from './components/Footer'; // 🔹 legg til denne

import './App.css';
import './index.css';

function App() {
  return (
    <Router>
      <Navbar />

      <div style={{ paddingTop: '4rem' }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/project-one" element={<ProjectOne />} />
          <Route path="/project-two" element={<ProjectTwo />} />
          <Route path="/project-three" element={<ProjectThree />} />
        </Routes>
      </div>

      <Footer /> 
    </Router>
  );
}

export default App;
