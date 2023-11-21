import React, { useEffect } from 'react'
import PictoMenu from './PictoMenu';

function FotovoltaickeElektrarny() {
  
  useEffect(() => {
    document.title = 'Technický management fotovoltaické elektrárny | Drone Soft'
  }, []);

  return (
    <>
    <section className='offpage container mx-auto'>
      <h1 className='relative z-[2] my-4'>Technický management fotovoltaické elektrárny</h1>
      <div className='content-box mb-[-4rem] p-8 pb-20 sm:p-16 sm:pt-12 sm:pb-20 lg:px-24 text-justify rounded-[40px] after:rounded-[40px] inset-line line-orange'>
        <h2>Pomocí pokročilých technologií provádíme kompletní inspekce fotovoltaických elektráren.</h2>
        <p>Drony jsou vybaveny špičkovými kamerami a senzory, které umožňují důkladné vyhodnocení stavu solárních panelů.</p>
        <p>Díky termografickým kamerám jsme schopni detekovat přehřívání - hotspoty, nefunkční clustery, nečistoty a jiné poruchy FV modulů, které by mohly negativně ovlivnit výkon a bezpečný provoz vaší fotovoltaické elektrárny.</p>
        <p>Nashromážděná data z letecké inspekce vám poskytneme v naší aplikaci DroneSoft.cz, kde můžete informace detailně analyzovat, porovnávat, filtrovat a třídit, sdílet. Na základě těchto dat můžete efektivně naplánovat údržbu a opravy. Případně kontrolovat, zda k opravě došlo.</p>
        <p>Inspekce s použitím dronů, následné zpracování a management oprav a servisů v aplikaci DroneSoft.cz je rychlá, přesná, efektivní a v neposlední řadě bezpečná (nevystavujete techniky zbytečnému riziku pádu z výšky např. při kontrole střešních instalací)</p>
      </div>

      <div className='relative mb-12 px-8 sm:px-16 z-[3] lg:px-24'>
        <video width="100%" className="rounded-[40px] shadow-xl" controls>
          <source src="/video/fve.mp4#t=10" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
    </section>

    <PictoMenu />
    </>
  )
}

export default FotovoltaickeElektrarny