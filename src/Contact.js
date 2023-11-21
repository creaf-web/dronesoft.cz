import React, { useState } from 'react'
import { FaPhone, FaEnvelope } from "react-icons/fa6";

function Contact() {
  
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [message, setMessage] = useState('');

  const submitForm = (e) => {
    e.preventDefault();
    
    /* TODO API CALL SEND MAIL */
  }

  return (
    <section className='contact-us container mx-auto my-16'>
        <a id='kontakt' className='relative top-[-140px] invisible'></a>
        <h3 className='text-center uppercase color-green text-lg mb-8'>Napište nám</h3>
        
        <form className='px-4 sm:px-24' method='post' onSubmit={submitForm}>
            <div className='grid lg:grid-cols-2 gap-x-12 gap-y-2'>
                <div className='order-1'>
                    <input type='text' name='name' placeholder='jméno' value={name} onChange={(e) => setName(e.target.value)} />  
                    <input type='email' name='email' placeholder='e-mail' value={email} onChange={(e) => setEmail(e.target.value)} />
                    <input type='tel' name='phone' placeholder='telefon' value={phone} onChange={(e) => setPhone(e.target.value)} style={{ marginBottom: 0 }} />
                </div>
                <div className='order-2'>
                    <textarea name='message' placeholder='zpráva' rows='4' className='h-full' value={message} onChange={(e) => setMessage(e.target.value)}></textarea>
                </div>
                <div className='order-4 lg:order-3'>
                  <p className='text-sm italic hidden lg:block'>* Odesláním formuláře souhlasím se zpracováním osobních údajů.</p>

                  <div className='grid sm:grid-cols-2 font-[500] mt-8'>
                    <p>
                      <b>DRONE VISION, s.r.o.</b><br/>
                      Revoluční 658/8<br/>
                      415 01 Teplice
                    </p>
                    <p>
                      <FaPhone /><a href='tel:+420603445089' className='underline'>+420 603 445 089</a><br/>
                      <FaEnvelope /><a href='mailto:info@drone-vision.cz' className='underline'>info@drone&#8209;vision.cz</a>
                    </p>
                  </div>
                </div>
                <div className='text-right order-3 lg:order-4'>
                  <p className='text-sm italic text-left lg:hidden'>* Odesláním formuláře souhlasím se zpracováním osobních údajů.</p>
                  <button type='submit'>Odeslat</button>
                </div>
            </div>
        </form>



    </section>
  )
}

export default Contact