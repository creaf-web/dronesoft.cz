import React, { useEffect } from 'react'
import PictoMenu from './PictoMenu';

function InspekceVyskovychStaveb() {
  
  useEffect(() => {
    document.title = 'Inspekce technického stavu výškových staveb | Drone Soft'
  }, []);

  return (
    <>
    <section className='offpage container mx-auto'>
      <h1 className='relative z-[2] my-4'>Sledování a inspekce technického stavu výškových a těžko přístupných staveb</h1>
      <div className='content-box mb-[-4rem] p-8 pb-20 sm:p-16 sm:pt-12 sm:pb-20 lg:px-24 text-justify rounded-[40px] after:rounded-[40px] inset-line line-orange'>
        <h2>Nabízíme metodu inspekce mostů, komínů a jiných výškových špatně přístupných staveb s využitím fotoplánů pořízených dronem.</h2>
        <p>Naše technologie vám umožní důkladně monitorovat technický stav těchto staveb a sledovat vývoj potenciálních poruch, prasklin a degradace materiálu v průběhu času. Porovnáváme dva, případně více (není omezeno) fotoplánů sledované oblasti, stavby a pomocí naší aplikace sledujeme progres poruchy.</p>
        <h2>V naší aplikaci si sami rozhodnete, která místa chcete sledovat, měřit, porovnávat.</h2>
        <p>Metoda je dostatečně přesná na to, aby odhalila praskliny a jejich progres o velikosti několika málo milimetrů. Ke sledovanému místu můžete exportovat protokol s popisem a fotografií. Kompletní nebo pouze část dokumentace můžete sdílet s vašimi kolegy, techniky, zákazníky jednoduše pomocí vygenerovaného odkazu.</p>
        <p>Drony bezpečně, bez toho, aniž bychom vystavovali zaměstnance zvýšenému riziku úrazu, dosáhnou do míst, která by jinak byla obtížně dosažitelná a často by vyžadovala drahé, časově náročné a rizikové postupy.</p>
      </div>

      <div className='relative mb-12 px-8 sm:px-16 z-[3] lg:px-24'>
        <video width="100%" className="rounded-[40px] shadow-xl" controls>
          <source src="/video/komin_v2.mp4#t=10" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
    </section>

    <PictoMenu />
    </>
  )
}

export default InspekceVyskovychStaveb