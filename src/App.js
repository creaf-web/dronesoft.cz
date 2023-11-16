import React, { useEffect } from 'react'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import logo from './assets/logo.svg';
import foot from './assets/foot.svg';
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

function App() {

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
          <div className='menu container mx-auto px-16 py-4 rounded-[40px] after:rounded-[40px] inset-line flex'>
            <div className='w-1/4'>
              <Link to="/"><img src={logo} width={140} alt='Logo dronesoft.cz' title='dronesoft.cz' /></Link>
            </div>
            <div className='w-3/4 flex items-center justify-end'>
              <nav>
                <ul className='flex'>
                  <li><a href="/#vyzkousej-zdarma">Vyzkoušej zdarma</a></li>
                  <li><a href="/#produkty">Produkty</a></li>
                  <li><a href="#kontakt">Kontakt</a></li>
                </ul>
              </nav>
            </div>
          </div>
        </div>
        
        <main className='pt-[160px]'>
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
          <div className='foot'>
            <div className='container mx-auto flex justify-center space-x-8 pb-[200px]'>
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
