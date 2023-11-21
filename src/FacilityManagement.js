import React, { useEffect } from 'react'
import video from './assets/video/facility-management.mp4'
import PictoMenu from './PictoMenu';

function FacilityManagement() {
  
  useEffect(() => {
    document.title = 'Facility Management | Drone Soft'
  }, []);

  return (
    <>
    <section className='offpage container mx-auto'>
      <h1 className='relative z-[2] my-4'>Facility Management</h1>
      <div className='content-box mb-[-4rem] p-8 pb-20 sm:p-16 sm:pt-12 sm:pb-20 lg:px-24 text-justify rounded-[40px] after:rounded-[40px] inset-line line-orange'>
        <h2>Nebuďte pozadu a využijte moderní technologie pro správu venkovních prostor vašeho areálu. </h2>
        <p>S ortofoto mapami z dronů dosáhnete vyšší efektivity, přesnosti a úspor.  Zabýváme se využitím ortofoto map a 3D modelů získaných pomocí dronů pro facility management venkovních prostor. Naše služby, které zahrnují snímání dat, jejich zpracování a zpřístupnění v online platformě, zásadním způsobem zlepšují efektivitu a přesnost správy průmyslových, obchodních, logistických areálů, což přináší mnoho výhod a úspor.</p>
        
        <h2>Plánování údržby a oprav díky ortofoto mapám můžete přesně identifikovat místa, kde je potřeba provádět údržbu a opravy</h2>
        <p>Snadno zjistíte stav povrchů, střech, chodníků, zeleně atp. Podklady mohou také sloužit pro management výběrových řízení a poptávek. </p>

        <h2>Kontrola vegetace a zelených ploch</h2>
        <p>Ortofoto mapy jsou skvělým nástrojem pro sledování zdraví stromů, trávníků a další vegetace. Přesným stanovením ploch a dojezdem můžete lépe organizovat práci a alokaci pracovní síly.</p>

        <h2>Dokumentace změn</h2>
        <p>Ortofoto mapy vytvářejí historický záznam vývoje areálu nebo lze jejich pomocí zaznamenat trasy vedení inženýrských sítí v době jejich pokládky a vyhnout se tak v budoucnu kolizím.</p>

        <p>Společně můžeme zlepšit správu vašich areálů a přinést vám konkurenční výhodu na trhu facility managementu.</p>
      </div>

      <div className='relative mb-12 px-8 sm:px-16 z-[3] lg:px-24'>
        <video width="100%" className="rounded-[40px] shadow-xl" controls>
          <source src="/video/facility-management.mp4#t=10" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
    </section>

    <PictoMenu />
    </>
  )
}

export default FacilityManagement