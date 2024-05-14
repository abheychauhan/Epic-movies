import React from 'react'
import { useNavigate } from 'react-router-dom'

function About() {
    const navigate = useNavigate();
  return (
    <>
    <div className='w-[100%] p-10 sm:p-20'>
    <h1 className='trend flex text-2xl text-zinc-400'>
              <i onClick={()=>(navigate(-1))} className=" hover:text-[#2BA9FE] cursor-pointer ri-arrow-left-line mr-2"></i>
              <h1 className='text-2xl '>About us </h1>
              
            </h1>
        <hr className='m-2 h-[1px] border-zinc-500' />
        
            <ul className='list-disc text-zinc-400 sm:p-10 pt-2 text-lg sm:text-xl '>
                <li className='leading-10'>Epic-Movies Is Best Website/Platform to get latest Bollywood And Hollywood first Movies.</li>
                <li className='leading-10'>Designed to get all type of latest Movies and Tv shows </li>
                <li className='leading-10'><span className='text-red-500'>Disclaimer:</span>All My Post Are Free Available On Internet Posted By Somebody Else <br />I’m Not VIOLATING Any COPYRIGHTED LAW. If Anything Is Against LAW, Please Notify Me At <span className='text-yellow-300'>(abheys172@gmail.com)</span> </li>
            </ul>
           
        
    </div>

    </>
  )
}

export default About