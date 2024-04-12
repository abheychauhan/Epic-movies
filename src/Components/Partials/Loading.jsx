import React from 'react'
import loading from '/loading.webp'


function Loading() {
  return (
    <div className='w-[100vw] h-[100vh] flex items-center justify-center bg-[#000]  overflow-hidden'>
     <img className='load  object-cover' src={`${loading}`} alt="" />
  </div>
  )
}

export default Loading