import React, { useEffect } from 'react'
import PictoMenu from './PictoMenu';

function Pasportizace() {
  
  useEffect(() => {
    document.title = 'Pasportizace s použitím ortofoto mapy  | Drone Soft'
  }, []);

  return (
    <>
    <section className='offpage container mx-auto'>
      <h1 className='relative z-[2] my-4'>Pasportizace s použitím ortofoto mapy </h1>
      <div className='content-box mb-[-4rem] p-8 pb-20 sm:p-16 sm:pt-12 sm:pb-20 lg:px-24 text-justify rounded-[40px] after:rounded-[40px] inset-line line-orange'>
        <h2>Pasportizace zahrady, arboreta, hřbitova, parků či městského mobiliáře</h2>
        <p>S použitím ortofoto map pořízených dronem a zpřístupněných online v naší aplikaci dronesoft.cz vám umožní efektivně dokumentovat, řídit a sdílet informace.</p>
        <p>Každý popisovaný prvek (rostlina, městský mobiliář – lavička, odpadkový koš, hrob atp.) lze popsat základními parametry, přiložit fotografii nebo jiný dokument a určit jeho přesnou GPS polohu. Záznamy je možno třídit, exportovat, sdílet nebo formou odkazu zpřístupnit na webových stránkách úřadu či organizace.</p>
        <p>Exportovaný formulář ve formátu PDF obsahuje základní informace, přílohu a QR kód se souřadnicemi použitelný například v mobilní aplikaci mapy.cz</p>
      </div>

      <div className='relative mb-12 px-8 sm:px-16 z-[3] lg:px-24'>
        <video width="100%" className="rounded-[40px] shadow-xl" controls>
          <source src="/video/zahrada.mp4#t=10" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
    </section>

    <PictoMenu />
    </>
  )
}

export default Pasportizace