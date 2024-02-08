import React, { useEffect } from 'react'
import PictoMenu from './PictoMenu';

function Dotace() {
  
  useEffect(() => {
    document.title = 'Naše filozofie a postoj k dotacím  | Drone Soft'
  }, []);

  return (
    <>
    <section className='offpage container mx-auto'>
      <h1 className='relative z-[2] my-4'>Naše filozofie a postoj k dotacím</h1>
      <div className='content-box mb-[-4rem] p-8 pb-20 sm:p-16 sm:pt-12 sm:pb-20 lg:px-24 text-justify rounded-[40px] after:rounded-[40px] inset-line line-orange'>
        <h2>Nepřijímáme dotace: Stojíme si za svým</h2>
        <ol className='list-decimal pl-4 mb-12'>
          <li className='mb-4'><b>Věříme ve férovou soutěž.</b> Dotace výrazně zkreslují tržní prostředí a vytváří nespravedlivé výhody. My se snažíme podnikat bez umělé podpory, která narušuje rovnováhu na trhu.</li>
          <li className='mb-4'><b>Znechuceni mírou dotačních programů.</b> Sledujeme, jak se dotační systém stává předmětem zneužívání a plýtvání. Místo aby dotace pomáhaly ekonomice a inovacím, často dochází k nesprávnému rozdělení prostředků a podporování neefektivních projektů.</li>
          <li className='mb-4'><b>Nechceme se podílet na deformaci trhu.</b> Dotační politiky vedou k deformaci trhu a ovlivňují rozhodování podniků tak, že prioritou není inovace nebo kvalita služeb, ale schopnost získat a čerpat dotace.</li>
          <li className='mb-4'><b>Boj proti plýtvání.</b> Příliš často jsme byli svědky, jak dotační prostředky nejsou využívány efektivně, dochází k bezprecedentnímu plýtvání zdroji – a to nejen finančními, ale také lidskými. Chceme naším přístupem ukázat, že úspěch je možné i bez zbytečného mrhání.</li>
        </ol>
      </div>

    </section>

    <PictoMenu />
    </>
  )
}

export default Dotace