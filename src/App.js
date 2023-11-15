import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import logo from './assets/logo.svg';
import Homepage from './Homepage';
import FacilityManagement from './FacilityManagement';

function App() {
  return (
    <Router>
        <div className='fixed top-12 w-full flex justify-center'>
          <div className='menu container mx-auto px-16 py-4 rounded-[40px] after:rounded-[40px] inset-line flex'>
            <div className='w-1/4'>
              <Link to="/"><img src={logo} width={140} alt='Logo dronesoft.cz' title='dronesoft.cz' /></Link>
            </div>
            <div className='w-3/4 flex items-center justify-end'>
              <nav>
                <ul className='flex'>
                  {/*<li><Link to="/facility-management">Facility Management</Link></li>*/}
                  <li><Link to="/#vyzkousej-zdarma">Vyzkoušej zdarma</Link></li>
                  <li><Link to="/#produkty">Produkty</Link></li>
                  <li><Link to="/#kontakt">Kontakt</Link></li>
                </ul>
              </nav>
            </div>
          </div>
        </div>
        

        <main className='pt-[160px]'>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/facility-management" element={<FacilityManagement />} />
        </Routes>
        </main>

    </Router>
  );
}

export default App;
