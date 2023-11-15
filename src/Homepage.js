import React, { useEffect } from 'react'

function Homepage() {
  
  useEffect(() => {
    document.title = 'Inovativní webová platforma 2D a 3D modelů | Drone Soft'
  }, []);

  return (
    <section className='welcome'>
      <div className='content-box container mx-auto rounded-[40px] after:rounded-[40px] inset-line line-orange h-[40vh]'>

      </div>
    </section>
  )
}

export default Homepage