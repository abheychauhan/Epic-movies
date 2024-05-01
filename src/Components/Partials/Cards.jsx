import React from 'react'
import { Link } from 'react-router-dom'

function Cards({data , title}) {
  return (
    <div className='w-full  min-h-[45vh] overflow-x-auto p-10'>
       
    
    <div className=' w-full flex gap-3'>
     {data.map((d,i)=>(
         <Link to={`/${d.media_type }/details/${d.id}`}  key={i} className="card text-sm min-w-[200px] h-[360px] p-1 bg-[#17274e] rounded-lg  flex flex-col relative   ">
             <img className=' w-full rounded-lg h-[25vh] object-cover' src={`https://image.tmdb.org/t/p/original/${d.backdrop_path || d.poster_path}`} alt="" />
             <h1 className='  text-l font-bold text-white leading-tight mb-[2%] mt-[2%]'>{d.name || d.title || d.original_title}</h1>
             <p className='overview w-[75%] text-zinc-300  leading-tight text-m'>{d.overview.slice(0,50)} <span to={`/${d.media_type }/details/${d.id}`} className='text-blue-500 text-blue-300'>more</span> </p>
            <div className='wallinfo flex gap-[2%] w-full items-center mt-3'>
              <h5 className='text-white text-[12px] uppercase'> <i  className="ri-play-circle-line text-blue-400 text-l mr-1"></i>{d.media_type}</h5>
              <h5 className='text-white text-[12px] uppercase'><i  className="ri-translate-2 text-blue-400 text-l mr-1"></i>{d.original_language}</h5>
            </div>
              <h5 className= 'rate text-white text-[12px] '><i  className="ri-star-s-line text-yellow-400 text-l mr-1"></i>{d.vote_average}</h5>
              <h5 className='text-white text-[12px] '><i  className="ri-megaphone-line text-green-400 text-l mr-1 "></i>{d.release_date || d.first_air_date || "release not available"}</h5>
      </Link>
      
     ))}

    </div>
    
  </div>
  )
}

export default Cards
