import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import React from 'react'

function AnimeLoader() {

  useGSAP(()=>{
    const isDesktop = window.matchMedia("(min-width: 1100px)").matches;

    const tl = gsap.timeline()
    tl.from('.load h1',{
        y:50,
        duration:1,
        stagger:.2,
      })
      if(isDesktop){
      tl.to('.load .a1',{
      x: '-42vw',
      y:'-44vh', 
      duration: .4,
      ease: 'power2.in',
    })
    tl.to('.load .a2',{
        x: '-42vw',
        y:'-44vh', 
        duration: .4,
        ease: 'power2.in',
      })
    tl.to('.load .a3',{
        x: '-42vw',
        y:'-44vh', 
        duration: .4,
        ease: 'power2.in',
        
      })
    

}

tl.to('.load',{
    duration:.2,
    display:'none'
    

  })

  })


   




  
  return (
    <div className='load fixed top-0 left-0 z-[9999] w-screen h-screen bg-[#0F172A]'>
      <div className="content flex items-center text-white font-bold w-full justify-center p-10 h-full gap-2">
         <span className='h-fit a1 overflow-hidden block'><h1 className='text-2xl'> <i className=" text-[#2BA9FE] ri-movie-2-fill"></i> </h1></span>
         <span className='h-fit a2 block overflow-hidden'><h1 className='text-2xl'>Epic</h1></span>
         <span className='h-fit a3 block overflow-hidden'><h1 className='text-2xl'>Movies</h1></span>
      </div>
      
    </div>
  )
}

export default AnimeLoader