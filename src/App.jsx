// src/App.jsx
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import ProjectOne from './pages/ProjectOne';
import ProjectTwo from './pages/ProjectTwo';
import ProjectThree from './pages/ProjectThree';
import './App.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/project-one" element={<ProjectOne />} />
        <Route path="/project-two" element={<ProjectTwo />} />
        <Route path="/project-three" element={<ProjectThree />} />
      </Routes>
    </Router>
  );
}

export default App;
