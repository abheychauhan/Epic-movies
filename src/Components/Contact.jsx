import React from 'react'
import { Navigate, useNavigate } from 'react-router-dom'

function Contact() {
    const navigate = useNavigate();
  return (
    <div className='w-fit-content sm:p-20 p-10'>
           <h1 className='trend flex text-2xl text-zinc-400'>
              <i onClick={()=>(navigate(-1))} className=" hover:text-[#2BA9FE] cursor-pointer ri-arrow-left-line mr-2"></i>
              <h1 className='text-2xl '>Contact us </h1>
              
            </h1>
    <div className='w-full pt-20 flex gap-10 flex-wrap items-center'>
         <a className='hover:scale-125  transition ease-in-out delay-150' href="https://www.instagram.com/_abhey_chauhan_" target='_blank'><span><i className="ri-instagram-line hover:text-pink-500  text-9xl hover:scale-50 sm:text-9xl text-pink-400"></i></span></a>
         <a className='hover:scale-125  transition ease-in-out delay-150' href="mailto:abheys17@gmail.com"><i className="ri-mail-star-line text-9xl hover:text-yellow-500  sm:text-9xl text-yellow-300"></i></a>
         <h1 className='sm:text-6xl text-5xl  text-zinc-400'><i class="ri-phone-line sm:text-9xl text-6xl "></i>-9306634564</h1>

    </div>
    </div>
  )
}

export default Contact