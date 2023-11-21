import React from 'react'
import zajmoveUzemi from './assets/picto/zajmove-uzemi.svg';
import vypocetKubatury from './assets/picto/vypocet-kubatury.svg';
import inspekceStaveb from './assets/picto/inspekce-vyskovych-staveb.svg';
import facilityManagement from './assets/picto/facility-management.svg';
import pasportizace from './assets/picto/pasportizace.svg';
import fotovoltaickeElektrarny from './assets/picto/fotovoltaicke-elektrarny.svg';
import zaznamy from './assets/picto/zaznamy.svg';

function PictoMenu() {
  return (
    <section className='products relative container mx-auto z-[3]'>
        <a id='produkty' className='relative top-[-140px] invisible'></a>
        <div className='flex flex-wrap gap-6 justify-center'>
          <a href='/zajmove-uzemi/' className='product w-[250px] h-[250px] rounded-[30px] after:rounded-[30px] inset-line'>
            <div className='text-center'>
              <img src={zajmoveUzemi} width='60%' height={0} className='mb-4' />
              <h3>Skutečný stav zájmového území</h3>
            </div>
          </a>
          <a href='/vypocet-kubatury' className='product w-[250px] h-[250px] rounded-[30px] after:rounded-[30px] inset-line'>
            <div className='text-center'>
              <img src={vypocetKubatury} width='90%' height={0} className='mb-4' />
              <h3>Výpočet<br/>kubatury</h3>
            </div>
          </a>
          <a href='/inspekce-vyskovych-staveb' className='product w-[250px] h-[250px] rounded-[30px] after:rounded-[30px] inset-line'>
            <div className='text-center'>
              <img src={inspekceStaveb} width='75%' height={0} className='mb-4' />
              <h3>Inspekce technického stavu výškových staveb</h3>
            </div>
          </a>
          <a href='/facility-management/' className='product w-[250px] h-[250px] rounded-[30px] after:rounded-[30px] inset-line'>
            <div className='text-center'>
              <img src={facilityManagement} width='100%' height={0} className='translate-x-[15%] mb-6' />
              <h3>Facility<br />management</h3>
            </div>
          </a>
          <a href='/pasportizace' className='product w-[250px] h-[250px] rounded-[30px] after:rounded-[30px] inset-line'>
            <div className='text-center'>
              <img src={pasportizace} width='70%' height={0} className='mb-4' />
              <h3>Pasportizace s použitím ortofoto mapy</h3>
            </div>
          </a>
          <a href='/fotovoltaicke-elektrarny' className='product w-[250px] h-[250px] rounded-[30px] after:rounded-[30px] inset-line'>
            <div className='text-center'>
              <img src={fotovoltaickeElektrarny} width='70%' height={0} className='mb-8 mt-[-1rem]' />
              <h3>Technický management fotovoltaické elektrárny</h3>
            </div>
          </a>
          <a href='/zaznamy-podklady' className='product w-[250px] h-[250px] rounded-[30px] after:rounded-[30px] inset-line'>
            <div className='text-center'>
              <img src={zaznamy} width='45%' height={0} className='mb-4 mt-[-1rem]' />
              <h3>Záznamy do stavebního deníku, podklady pro výběrová řízení</h3>
            </div>
          </a>
        </div>
      </section>
  )
}

export default PictoMenu