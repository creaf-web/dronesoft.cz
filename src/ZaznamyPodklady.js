import React, { useEffect } from 'react'
import PictoMenu from './PictoMenu';

function ZaznamyPodklady() {
  
  useEffect(() => {
    document.title = 'Záznamy do stavebního deníku, podklady pro výběrová řízení | Drone Soft'
  }, []);

  return (
    <>
    <section className='offpage container mx-auto'>
      <h1 className='relative z-[2] my-4'>Záznamy do stavebního deníku, podklady pro výběrová řízení</h1>
      <div className='content-box mb-[-4rem] p-8 pb-20 sm:p-16 sm:pt-12 sm:pb-20 lg:px-24 text-justify rounded-[40px] after:rounded-[40px] inset-line line-orange'>
        <h2>Využití Fotoplánů a 3D Modelů pro Archivaci ve Stavebním Deníku</h2>
        <p>V dnešní době dynamického rozvoje stavebního průmyslu přinášíme řešení pro efektivní správu a archivaci stavebních projektů – integraci fotoplánů a 3D modelů do stavebního deníku prostřednictvím naší webové aplikace DroneSoft.cz.</p>
        
        <h2>Přehledné Ukládání a Přístup k Datům</h2>
        <p>Naše platforma DroneSoft.cz umožňuje uživatelům snadno nahrávat a spravovat velké množství dat, včetně fotoplánů a detailních 3D modelů. Všechna data jsou uložena v chronologickém pořadí, což zajišťuje snadný a rychlý přístup k potřebným informacím.</p>

        <h2>Bezpečnost a Přizpůsobitelná Přístupová Práva</h2>
        <p>Bezpečnost vašich dat je naší prioritou. DroneSoft.cz nabízí pokročilé možnosti nastavení přístupových práv, díky čemuž můžete ovládat, kdo má přístup, k jakým informacím. Tato funkce je ideální pro správu týmů a koordinaci mezi různými odděleními.</p>

        <h2>Výhody pro Stavební Deník</h2>
        
        <ul className='list-disc ml-4 mb-4'>
          <li><b>Dokumentace Průběhu Stavby:</b> Fotoplány a 3D modely poskytují vizuální doklady o průběhu stavby, což je klíčové pro efektivní monitorování a archivaci.</li>
          <li><b>Zvýšení Efektivity:</b> Digitální archivace umožňuje rychlý přístup k informacím, čímž se výrazně snižuje čas strávený hledáním v papírových záznamech.</li>
          <li><b>Podpora Rozhodování:</b> Vizualizace stavu projektu prostřednictvím fotoplánů a 3D modelů umožňuje lepší rozhodování a plánování.</li>
        </ul>
        
      </div>

      <div className='relative mb-12 px-8 sm:px-16 z-[3] lg:px-24'>
        <video width="100%" className="rounded-[40px] shadow-xl" controls>
          <source src="/video/stavebni-denik.mp4#t=10" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
    </section>
    
    <PictoMenu />
    </>
  )
}

export default ZaznamyPodklady