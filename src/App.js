import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import logo from './assets/logo.png';
import Homepage from './Homepage';
import FacilityManagement from './FacilityManagement';

function App() {
  return (
    <Router basename='/dronesoft.cz'>
      
        <nav>
          <ul>
            <li>
              <Link to="/">Domů</Link>
            </li>
            <li>
              <Link to="/facility-management">Facility Management</Link>
            </li>
          </ul>
        </nav>

        <main>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/facility-management" element={<FacilityManagement />} />
        </Routes>
        </main>

    </Router>
  );
}

export default App;
