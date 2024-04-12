import React from 'react'
import { Link } from 'react-router-dom'
import noimage from '/noimage.webp'

function DataCards({data ,title}) {
  return (
    
       
    
    <div className='cards_container w-full flex-wrap flex p-2 gap-[3vw]'>
     {data.map((d,i)=>(
         <Link to={`/${d.media_type || title}/details/${d.id}`} key={i} className="cards card text-sm w-[250px] h-[50vh] bg-[#17274e] rounded-lg p-1 flex flex-col relative   ">
             <img className='poster w-full rounded-lg h-[80%] object-cover object-center' src={d.backdrop_path || d.profile_path || d.poster_path ? `https://image.tmdb.org/t/p/original/${d.backdrop_path || d.profile_path || d.poster_path }`: noimage} alt="" />
             <h1 className='name text-l font-bold text-white leading-tight mb-[2%] mt-[2%]'>{d.name || d.title || d.original_title}</h1>
             {/*<video className='w-full h-[100px] autoplay controls' src={`https://api.themoviedb.org/3/movie/${d.id}/videos`}></video>*/}
            <div className='wallinfo flex gap-[2%] w-full items-center mt-3'>
              <h5 className='lang text-white text-[12px] uppercase'><i  className="ri-translate-2 text-blue-400 text-l mr-1"></i>{d.original_language}</h5>
            </div>
              <h5 className='rate text-white text-[12px] '><i  className="ri-star-s-line text-yellow-400 text-l mr-1"></i>{d.vote_average}</h5>
              <h5 className='date text-white text-[12px] '><i  className=" ri-megaphone-line text-green-400 text-l mr-1"></i>{d.release_date || d.first_air_date || "release not available"}</h5>
          
           
       

      </Link>
      
     ))}

    </div>
    
  )
}

export default DataCards