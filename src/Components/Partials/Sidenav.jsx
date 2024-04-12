import React from 'react'
import { Link } from 'react-router-dom'

function  Sidenav() {
  return (
    <div className='sidenav  h-full border-r-[1px] border-zinc-400 p-[2vw]'>

        <h1 className='logo text-2xl w-fit-content  font-semibold whitespace-nowrap'>
          <i className=" text-[#2BA9FE] text-2xl ri-movie-2-fill"></i>
          <span className=' text-white ml-2'>Epic Movies</span>
        </h1>

        <nav className='list flex flex-col text-l text-zinc-400'>
            <h1 className='new_feeds text-zinc-300 text-xl font-semibold mt-10 mb-5'>
                New Feeds
            </h1>
            
            
            <Link to="/trendings" className='l tr'>
                <i className="ri-fire-line"></i>
                Trending
            </Link>
            <Link to="/populars" className='l'>
               <i className="ri-bard-line"></i>
                Popular
            </Link>
            <Link to="/movie" className='l'>
                <i className="ri-movie-2-line"></i>
                Movies
            </Link>
            <Link to="/tv" className='l'>
                <i className="ri-tv-line"></i>
                Tv Shows
            </Link>
            <Link to="/person" className='l'>
                <i className="ri-team-line"></i>
                People
            </Link>

            <hr className='hr mt-9 mb-9 '/>

            <nav className='list2 flex flex-col text-l text-zinc-400'>
              <h1 className='info text-zinc-300 text-xl font-semibold  mb-5'>
                
                Info
              </h1>
            
             <Link to='/about' className='l'>
               <i className="ri-information-line"></i>
                About
             </Link>
             <Link className='l'>
               <i className="ri-phone-line"></i>
                Contact
             </Link>
            </nav>


        </nav>
    </div>
  )
}

export default  Sidenav