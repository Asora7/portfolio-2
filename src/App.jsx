// src/App.jsx
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import ProjectOne from './pages/ProjectOne';
import ProjectTwo from './pages/ProjectTwo';
import ProjectThree from './pages/ProjectThree';
import Navbar from './components/Navbar';
import './App.css';    // any additional styles
import './index.css';  // your theme variables, etc.

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

    </Router>
  );
}

export default App;
