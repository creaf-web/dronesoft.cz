import React, { useEffect } from 'react'
import PictoMenu from './PictoMenu';

function VypocetKubatury() {
  
  useEffect(() => {
    document.title = 'Výpočet kubatury | Drone Soft'
  }, []);

  return (
    <>
    <section className='offpage container mx-auto'>
      <h1 className='relative z-[2] my-4'>Výpočet kubatury</h1>
      <div className='content-box mb-[-4rem] p-8 pb-20 sm:p-16 sm:pt-12 sm:pb-20 lg:px-24 text-justify rounded-[40px] after:rounded-[40px] inset-line line-orange'>
        <h2>Služba se zaměřuje na vytvoření digitálního modelu terénu DMT.</h2>
        <p>Tato metoda zahrnuje snímání zájmového území bezpilotním leteckým prostředkem – dronem, vytvoření sítě vlícovacích bodů pro usazení modelu do souřadnic S-JTSK a vytvoření samotného 3D modelu.</p>
        <p>Pokud budeme aplikovat etapové měření zájmového území, můžeme následně velice jednoduše porovnávat jednotlivé stavy mezi sebou a tímto způsobem získat informace o změně stavu objemu. Tyto informace mohou sloužit jako fakturační podklady, podklady pro alokaci techniky a pracovní síly, tvorby výkazů výměr a v neposlední řadě i jako archivní dokument vložený například do elektronického stavebního deníku formou odkazu.</p>
        <p>V projektové fázi dokážeme z vektorových dat (AutoCAD) vytvořit DMT finální podoby stavby a poté ho porovnat s aktuálním DMT zájmového území. Tyto informace vám opět mohou pomoci s plánováním, poptávkou a výkaznictvím.</p>
        <p>Tato metoda je velice přesná, spolehlivá a rychlá. Data můžete sdílet s kolegy, projektanty, zákazníky, dodavateli apod. </p>
      </div>

      <div className='relative mb-12 px-8 sm:px-16 z-[3] lg:px-24'>
        <video width="100%" className="rounded-[40px] shadow-xl" controls>
          <source src="/video/kubatura_v2.mp4#t=10" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
    </section>

    <PictoMenu />
    </>
  )
}

export default VypocetKubatury