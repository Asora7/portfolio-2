import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import ProjectOne from './pages/ProjectOne';
import ProjectTwo from './pages/ProjectTwo';
import ProjectThree from './pages/ProjectThree';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

import './App.css';
import './index.css';

/**
 * Main application component containing route definitions
 * and shared layout elements like Navbar and Footer.
 *
 * @component
 * @returns {JSX.Element} Root component with routing and layout.
 */
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
