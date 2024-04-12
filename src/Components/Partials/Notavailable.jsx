import React from 'react'
import notAvailable from '/notAvailable.gif'

function Notavailable() {
  return (
    <div>
        <img className='h-[40vw] w-[70vw] object-cover ' src={notAvailable} alt="" />
    </div>
  )
}

export default Notavailable