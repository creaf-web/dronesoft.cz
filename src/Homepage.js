import React, { useEffect } from 'react'
import { Link } from 'react-router-dom';
import laptop from './assets/laptop_v2.webp';
import banner from './assets/no-borders_v2.webp';
import PictoMenu from './PictoMenu';

function Homepage() {
  
  useEffect(() => {
    document.title = 'Drone Soft - Inovativní webová platforma 2D a 3D modelů'
  }, []);

  return (
    <>
      {/*** HERO ***/}
      <section className='hero relative container mx-auto flex flex-wrap z-[3]'>
        <div className='w-full md:w-1/2 lg:w-5/12 flex justify-center'>
          <div className='color-green mt-2 md:mb-20 lg:mt-12 lg:mb-0'>
            <span className='font-bold'>Dronesoft nabízí</span>
            <h1 className='my-2 lg:my-4'>
              On-line<br/>
              přístup k 3D<br/>
              a 2D datům
            </h1>
            <p>Zajistěte si přístp k vašim datům odkudkoliv</p>
          </div>
        </div>
        <div className='md:w-1/2 lg:w-7/12'>
          <a href='#vyzkousej-zdarma'><img src={laptop} className='w-[90%] mx-auto md:mx-0 mb-4 sm:mb-0' /></a>
        </div>
      </section>

      {/*** WELCOME ***/}
      <section className='welcome container mx-auto mt-[-5rem]'>
        <div className='content-box mb-[-4rem] p-8 pb-20 sm:p-16 sm:pt-12 sm:pb-20 lg:px-24 text-justify rounded-[40px] after:rounded-[40px] inset-line line-orange'>
          <h2 className='mt-8'>Vítejte na naší inovativní webové platformě, která vám otevírá široké možnosti využití ortofoto plánů, foto plánů a 3D modelů ve vašich projektech! Naše platforma vám umožní intuitivně provádět měření a označování přímo v plánech, a to v prostředí, které nabízí maximální kontrolu a efektivitu. Získaná data můžete následně třídit v databázi, která je přímo propojena s obrazovými daty.</h2>
          <p>Navíc budete mít možnost provádět základní výpočetní operace (měření plochy, měření objemu a jeho porovnání mezi různými stavy) přesně dle vašich potřeb, a to přímo v aplikaci v rámci zájmového území, které si sami stanovíte.</p>
          <p>S naší aplikací budete navrhovat a pracovat na svých projektech bez nutnosti častých terénních výjezdů. Říkáme, že si „zájmové území si přenesete do kanceláře“ Podklady mohou také sloužit k archivaci skutečného stavu k požadovaným datům tak, že se k nim můžete kdykoliv vrátit a mít i zpětně přesný přehled o vývoji vašich projektů.</p>
          <p>Věříme v sílu spolupráce a sdílení. Proto naše platforma umožňuje snadné sdílení dat, pomocí jednoduše vygenerovaného odkazu, s obchodními partnery, projektanty a projektovými manažery. </p>
          <p>Připojte se k nám a otevřete si brány k novým dimenzím efektivity, přesnosti a spolupráce ve vašich projekčních úkolech. Vaše projekty zaslouží nejlepší nástroje a my vám je rádi poskytneme. Nechte se inspirovat a těšte se na inovativní způsoby, jak vytvářet, upravovat a analyzovat své projekty. S naším nástrojem se stane váš projekční proces rychlejším, přesnějším a zábavnějším. Připojte se k nám ještě dnes a objevte budoucnost projekční práce!</p>
        </div>
      </section>

      {/*** PRODUCTS ***/}
      <PictoMenu />
      
      {/*** BANNER ***/}
      <section className='banner container mt-12 mx-auto'>
        <img className='px-4 sm:px-8 md:px-16 lg:px-24' src={banner} width='100%' alt='Nemáme hranice' />
      </section>

    </>
  )
}

export default Homepage