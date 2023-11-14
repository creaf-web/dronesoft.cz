import React, { useEffect } from 'react'

function Homepage() {
  
  useEffect(() => {
    document.title = 'Facility Management'
  }, []);

  return (
    <div>Homepage</div>
  )
}

export default Homepage