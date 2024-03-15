import React, { useEffect } from 'react'
import PictoMenu from './PictoMenu';

function ZajmoveUzemi() {
  
  useEffect(() => {
    document.title = 'Skutečný stav zájmového území | Drone Soft'
  }, []);

  return (
    <>
    <section className='offpage container mx-auto'>
      <h1 className='relative z-[2] my-4'>Skutečný stav zájmového území</h1>
      <div className='content-box mb-[-4rem] p-8 pb-20 sm:p-16 sm:pt-12 sm:pb-20 lg:px-24 text-justify rounded-[40px] after:rounded-[40px] inset-line line-orange'>
        <h2>Je všeobecně známo, že po několika letech dochází ke ztrátě přesných údajů o stavu, rozmístění, případně montáží nových nebo demontáží starých technologických prvků na střechách objektů. </h2>
        <p>Právě z tohoto důvodu nabízíme naši specializovanou službu. S našim produktem si můžete být jistí, že máte vždy k dispozici aktuální data, která vám pomohou v tom, jak nejlépe využít potenciál plochy střech například při návrhu fotovoltaické elektrárny nebo získat aktuální a přesné informace o stavu střechy, což je klíčové pro efektivní plánování údržby</p>
        <p>Naše služba se zaměřuje na vytvoření skutečného stavu např. střechy pomocí moderní metody, která zahrnuje snímání z dronu a následnou tvorbu ortofoto plánu v přesném měřítku. Tento plán je poté pečlivě překreslen do formátu DWG, což umožňuje jeho snadné využití v běžném projekčním softwaru.</p>
        <p>Do jednotlivých vrstev DWG souboru překreslíme půdorys stavební části, jímací soustavu (hromosvody), klimatizaci a vzduchotechniku, kanalizační vpusti, pochozí lávky atp. Z 3D modelu vygenerujeme příčné řezy reliéfu střechy budovy.</p>
      </div>

      <div className='relative mb-12 px-8 sm:px-16 z-[3] lg:px-24'>
        <video width="100%" className="rounded-[40px] shadow-xl" controls>
          <source src="/video/strecha_v2.mp4#t=10" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
    </section>

    <PictoMenu />
    </>
  )
}

export default ZajmoveUzemi