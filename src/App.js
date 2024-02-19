import React, { useState, useEffect } from 'react'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import logo from './assets/logo.svg';
import vyzkouset from './assets/vyzkouset-zdarma_v2.svg';
import arrow from './assets/menu-arrow.svg';
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
import Dotace from './Dotace';
import { HiBars3BottomRight } from "react-icons/hi2";

function App() {

  const [menuOpen, setMenuOpen] = useState(false);
  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  }
  const closeMenu = () => {
    setMenuOpen(false);
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
      document.getElementById('content-overlay').classList.add('show');
    }
    
    window.onscroll = function(){
      if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 20){
        document.getElementById('menu-wrapper').classList.add('to-front');
        document.getElementById('content-overlay').classList.add('show');
      }else{ 
        document.getElementById('menu-wrapper').classList.remove('to-front');
        document.getElementById('content-overlay').classList.remove('show');
      }
    };
  }, []);

  return (
    <Router>
        <div id="content-overlay" className='content-overlay'></div>
        <div id='menu-wrapper' className='fixed w-full flex justify-center'>
          <div id='menu' className='relative menu container mx-auto py-4 rounded-[40px] after:rounded-[40px] inset-line flex flex-wrap'>
            <div className='w-full sm:w-1/4'>
              <Link to="/"><img className='logo' src={logo} width={140} alt='Logo dronesoft.cz' title='dronesoft.cz' /></Link>
            </div>
            
              <nav className='w-full md:w-3/4 md:flex items-center justify-end'>
                <ul className='md:flex items-center mt-4 md:mt-0'>
                  <li className='relative'>
                    <a href="/#vyzkousej-zdarma" onClick={closeMenu} className='inline-block rounded-xl bg-[#051f1f] !text-[#f2ab87] hover:!text-white !py-1'>Vyzkoušej zdarma</a>
                    <img src={arrow} width={70} className='hidden md:block absolute bottom-[-45px] left-[25%] z-[1] pointer-events-none select-none' />
                  </li>
                  <li><a href="#produkty" onClick={closeMenu}>Produkty</a></li>
                  <li><a href="#kontakt" onClick={closeMenu}>Kontakt</a></li>
                </ul>
              </nav>
              <HiBars3BottomRight 
                size={36} 
                className='burger md:hidden absolute right-8 top-4 sm:top-6 cursor-pointer'
                onClick={toggleMenu}
              />
          </div>
        </div>
        
        <main className='pt-[90px] sm:pt-[110px] md:pt-[160px]'>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/facility-management" element={<FacilityManagement />} />
          <Route path="/zajmove-uzemi" element={<ZajmoveUzemi />} />
          <Route path="/vypocet-kubatury" element={<VypocetKubatury />} />
          <Route path="/inspekce-vyskovych-staveb" element={<InspekceVyskovychStaveb />} />
          <Route path="/pasportizace" element={<Pasportizace />} />
          <Route path="/fotovoltaicke-elektrarny" element={<FotovoltaickeElektrarny />} />
          <Route path="/zaznamy-podklady" element={<ZaznamyPodklady />} />
          <Route path="/nejsme-prijemci-dotaci" element={<Dotace />} />
        </Routes>
        <Contact />
        </main>
        <footer>
          <div className='foot'>
            <div className='container mx-auto flex flex-wrap justify-center sm:space-x-8 space-y-8 sm:space-y-0 pb-[75px] sm:pb-[120px] md:pb-[200px]'>
              <a href='#vyzkouset-zdarma'><img src={vyzkouset} width={200} className='w-[150px] translate-x-[-10%] sm:translate-x-0' /></a>
              <a href='/nejsme-prijemci-dotaci'><img src={dotace} width={300} /></a>
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
