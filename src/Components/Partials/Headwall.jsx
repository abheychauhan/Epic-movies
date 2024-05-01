import React from 'react'
import { Link } from 'react-router-dom'


function Headwall({data}) {
  return (
    <Link to={`/${data.media_type }/details/${data.id}`}>
    <div 
    style={
        {
            background:`linear-gradient(rgba(0,0,0,.2),rgba(0,0,0,.5),rgba(0,0,0,.8)), url(https://image.tmdb.org/t/p/original/${data.backdrop_path || data.profile_path})`,
            backgroundPosition:'top',
            backgroundSize: 'cover'
        }
    }
    className='wall w-[100vw] h-[60vh] shadow-[0px_5px_6px_5px_#0F172A_inset] p-10 pt-20 flex flex-col justify flex-end items-start'>
        
        <h1 className='name text-4xl font-bold text-white leading-tight mb-[2%] mt-[2%]'>{data.name || data.title || data.original_title}</h1>
        <p className='overview w-[75%] text-zinc-300  leading-tight text-m'>{data.overview.slice(0,200)} <span to={`/${data.media_type }/details/${data.id}`} className='text-blue-500'>more</span> </p>
        <div className='wallinfo flex gap-[2%] w-full items-center mt-3'>
            <h5 className='text-white uppercase'> <i  className="ri-play-circle-line text-blue-400 text-xl mr-1"></i>{data.media_type}</h5>
            <h5 className='text-white uppercase'><i  className="ri-translate-2 text-blue-400 text-xl mr-1"></i>{data.original_language}</h5>
            <h5 className='text-white '><i  className="ri-star-s-line text-yellow-400 text-xl mr-1"></i>{data.vote_average}</h5>
            <h5 className='text-white '><i  className="ri-megaphone-line text-green-400 text-xl mr-1"></i>{data.release_date || data.first_air_date || "release not available"}</h5>
        </div>
        
        <Link to={`/${data.media_type }/details/${data.id}/trailer`} className='tl bg-[#2BA9FE] px-5 py-1 rounded-lg mt-[1%] font-semibold' >Trailer</Link>
        
        
    </div>
    </Link>
  )
}

export default Headwall