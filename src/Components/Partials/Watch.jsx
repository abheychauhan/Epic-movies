import React from 'react'
import ReactPlayer from "react-player";
import {  useLocation  } from 'react-router-dom';
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import Notavailable from './Notavailable';




function Watch() {
  const navigate = useNavigate();

   const {pathname} = useLocation();
   const category = pathname.includes("movie") ? "movie" : "tv"
   const ytvideo =  useSelector((state)=>state[category].info.videos);
   console.log(category)
  return (
    <div className='watch z-[100] absolute   w-full h-[200%] flex justify-center items-center'>
      <h1 className='trend text-5xl absolute right-[5%] top-[30%] '>
              <i onClick={()=>(navigate(-1))} className=" hover:text-[#2BA9FE] cursor-pointer ri-close-fill mr-2"></i>
               
            </h1>
      
          {ytvideo.key ? <ReactPlayer height={'47vw'}  width={'70vw'}  url={`https://www.youtube.com/watch?v=${ytvideo.key}`}/> : <Notavailable/>}
    </div>
  )
}

export default Watch