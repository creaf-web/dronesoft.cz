import React, { useEffect } from 'react'
import { Link } from 'react-router-dom';
import laptop from './assets/laptop.webp';
import banner from './assets/no-borders.webp';
import zajmoveUzemi from './assets/picto/zajmove-uzemi.svg';
import vypocetKubatury from './assets/picto/vypocet-kubatury.svg';
import inspekceStaveb from './assets/picto/inspekce-vyskovych-staveb.svg';
import facilityManagement from './assets/picto/facility-management.svg';
import pasportizace from './assets/picto/pasportizace.svg';
import fotovoltaickeElektrarny from './assets/picto/fotovoltaicke-elektrarny.svg';
import zaznamy from './assets/picto/zaznamy.svg';

function Homepage() {
  
  useEffect(() => {
    document.title = 'Inovativní webová platforma 2D a 3D modelů | Drone Soft'
  }, []);

  return (
    <>
      {/*** HERO ***/}
      <section className='hero relative container mx-auto flex flex-wrap z-[3]'>
        <div className='w-5/12 flex justify-center'>
          <div className='color-green mt-12'>
            <span className='font-bold'>Dronesoft nabízí</span>
            <h1 className='my-4'>
              On-line<br/>
              přístup k 3D<br/>
              a 2D datům
            </h1>
            <p>Zajistěte si přístp k vašim datům odkudkoliv</p>
          </div>
        </div>
        <div className='w-7/12'>
          <img src={laptop} className='w-[90%]' />
        </div>
      </section>

      {/*** WELCOME ***/}
      <section className='welcome mt-[-5rem]'>
        <div className='content-box container mx-auto p-24 pt-16 pb-28 rounded-[40px] after:rounded-[40px] inset-line line-orange'>
          <h2 className='mt-8'>Vítejte na naší inovativní webové platformě, která vám otevírá široké možnosti využití ortofoto plánů, foto plánů a 3D modelů ve vašich projektech! Naše platforma vám umožní intuitivně provádět měření a označování přímo v plánech, a to v prostředí, které nabízí maximální kontrolu a efektivitu. Získaná data můžete následně třídit v databázi, která je přímo propojena s obrazovými daty.</h2>
          <p>Navíc budete mít možnost provádět základní výpočetní operace (měření plochy, měření objemu a jeho porovnání mezi různými stavy) přesně dle vašich potřeb, a to přímo v aplikaci v rámci zájmového území, které si sami stanovíte.</p>
          <p>S naší aplikací budete navrhovat a pracovat na svých projektech bez nutnosti častých terénních výjezdů. Říkáme, že si „zájmové území si přenesete do kanceláře“ Podklady mohou také sloužit k archivaci skutečného stavu k požadovaným datům tak, že se k nim můžete kdykoliv vrátit a mít i zpětně přesný přehled o vývoji vašich projektů.</p>
          <p>Věříme v sílu spolupráce a sdílení. Proto naše platforma umožňuje snadné sdílení dat, pomocí jednoduše vygenerovaného odkazu, s obchodními partnery, projektanty a projektovými manažery. </p>
          <p style={{ marginBottom: 0 }}>Připojte se k nám a otevřete si brány k novým dimenzím efektivity, přesnosti a spolupráce ve vašich projekčních úkolech. Vaše projekty zaslouží nejlepší nástroje a my vám je rádi poskytneme. Nechte se inspirovat a těšte se na inovativní způsoby, jak vytvářet, upravovat a analyzovat své projekty. S naším nástrojem se stane váš projekční proces rychlejším, přesnějším a zábavnějším. Připojte se k nám ještě dnes a objevte budoucnost projekční práce!</p>
        </div>
      </section>

      {/*** PRODUCTS ***/}
      <section className='products relative container mx-auto translate-y-[-4rem] z-[3]'>
        <a id='produkty'></a>
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
              <h3>Pasportizace zahrad, parků, městského mobiliáře</h3>
            </div>
          </a>
          <a href='/fotovoltaicke-elektrarny' className='product w-[250px] h-[250px] rounded-[30px] after:rounded-[30px] inset-line'>
            <div className='text-center'>
              <img src={fotovoltaickeElektrarny} width='70%' height={0} className='mb-4 mt-[-1rem]' />
              <h3>Inspekce a technický management fotovoltaické elektrárny</h3>
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
      
      {/*** BANNER ***/}
      <section className='banner container mx-auto px-24'>
        <img src={banner} width='100%' alt='Nemáme hranice' />
      </section>

    </>
  )
}

export default Homepage