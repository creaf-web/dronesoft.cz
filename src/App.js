import React, { useState, useEffect } from 'react'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import logo from './assets/logo.svg';
import vyzkouset from './assets/vyzkouset-zdarma.svg';
import dotace from './assets/dotace.svg';
import Homepage from './Homepage';
import FacilityManagement from './FacilityManagement';
import Contact from './Contact';
import ZajmoveUzemi from './ZajmoveUzemi';
import VypocetKubatury from './VypocetKubatury';
import InspekceVyskovychStaveb from './InspekceVyskovychStaveb';
import Pasportizace from './Pasportizace';
import FotovoltaickeElektrarny from './FotovoltaickeElektrarny';
import ZaznamyPodklady from './ZaznamyPodklady';
import { HiBars3BottomRight } from "react-icons/hi2";

function App() {

  const [menuOpen, setMenuOpen] = useState(false);
  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  }

  useEffect(() => {
    if(menuOpen){
      document.getElementById('menu').classList.add('open');
    }else{
      document.getElementById('menu').classList.remove('open');
    }
  }, [menuOpen]);

  useEffect(() => {
    if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
      document.getElementById('menu-wrapper').classList.add('to-front');
    }
    
    window.onscroll = function(){
      if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 20) document.getElementById('menu-wrapper').classList.add('to-front');
      else document.getElementById('menu-wrapper').classList.remove('to-front');
    };
  }, []);

  return (
    <Router>
        <div id='menu-wrapper' className='fixed w-full flex justify-center'>
          <div id='menu' className='relative menu container mx-auto py-4 rounded-[40px] after:rounded-[40px] inset-line flex flex-wrap'>
            <div className='w-full sm:w-1/4'>
              <Link to="/"><img className='logo' src={logo} width={140} alt='Logo dronesoft.cz' title='dronesoft.cz' /></Link>
            </div>
            
              <nav className='w-full md:w-3/4 md:flex items-center justify-end'>
                <ul className='md:flex mt-4 md:mt-0'>
                  <li><a href="/#vyzkousej-zdarma">Vyzkoušej zdarma</a></li>
                  <li><a href="#produkty">Produkty</a></li>
                  <li><a href="#kontakt">Kontakt</a></li>
                </ul>
              </nav>
              <HiBars3BottomRight 
                size={36} 
                className='burger md:hidden absolute right-8 top-4 sm:top-6 cursor-pointer'
                onClick={toggleMenu}
              />
          </div>
        </div>
        
        <main className='pt-[100px] sm:pt-[120px] md:pt-[160px]'>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/facility-management" element={<FacilityManagement />} />
          <Route path="/zajmove-uzemi" element={<ZajmoveUzemi />} />
          <Route path="/vypocet-kubatury" element={<VypocetKubatury />} />
          <Route path="/inspekce-vyskovych-staveb" element={<InspekceVyskovychStaveb />} />
          <Route path="/pasportizace" element={<Pasportizace />} />
          <Route path="/fotovoltaicke-elektrarny" element={<FotovoltaickeElektrarny />} />
          <Route path="/zaznamy-podklady" element={<ZaznamyPodklady />} />
        </Routes>
        <Contact />
        </main>
        <footer>
          <div className='foot mt-[-2rem] sm:mt-0'>
            <div className='container mx-auto flex flex-wrap justify-center sm:space-x-8 space-y-8 sm:space-y-0 pb-[75px] sm:pb-[120px] md:pb-[200px]'>
              <a href='#vyzkouset-zdarma'><img src={vyzkouset} width={200} /></a>
              <img src={dotace} width={300} />
            </div>
          </div>
          <div className='powered-by'>
            POWERED BY <a className='font-extrabold' href='https://www.drone-vision.cz/' target='_blank'>DRONE-VISION.CZ</a>
          </div>
        </footer>

    </Router>
  );
}

export default App;
