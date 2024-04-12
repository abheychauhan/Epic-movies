import React, { useEffect } from 'react'
import { useDispatch  } from 'react-redux'
import { useSelector } from 'react-redux'
import { asyncloadtv, removetv } from '../../store/actions/tvActions';
import { Link, useParams , useLocation , Outlet } from 'react-router-dom';
import { useNavigate } from 'react-router-dom'
import Loading from './Loading';
import Cards from './Cards';
import noimage from '/noimage.webp'




function TvDetails() {
 const {pathname} = useLocation();

  const navigate = useNavigate();
  const {id} = useParams();
  const { info } = useSelector((state) => state.tv); 
  console.log(info)
  const dispatch = useDispatch();

       useEffect(()=>{
              dispatch(asyncloadtv(id));
              return()=>{dispatch(removetv())}
       },[id])
  return  info ? (
    <div  
    style={
      {
          background:`linear-gradient(rgba(0,0,0,.2),rgba(0,0,0,.5),rgba(0,0,0,.8)), url(https://image.tmdb.org/t/p/original/${info.detail.backdrop_path})`,
          backgroundPosition:'center',
          backgroundSize: 'cover'
      }
      }
 
     className='text-white w-[100vw] h-[150vh] overflow-auto px-[10%] pt-[2vw] ' >
          

        <nav className='fixed nav w-full z-[99] text-2xl  flex items-center gap-5 text-zinc-200'>
       
        <h1 className=' '>
              <i onClick={()=>(navigate(-1))} className=" hover:text-[#2BA9FE] cursor-pointer ri-arrow-left-line mr-2"></i>
        </h1>
        <a target='_blank' href={`${info.detail.homepage}`}><i className="hover:text-[#2BA9FE] ri-external-link-line"></i></a>
        <a target='_blank' href={`https://www.imdb.com/title/${info.externalid.imdb_id}/`} className='text-yellow-300'>imdb</a>
        <a target='_blank' href={`https://www.wikidata.org/wiki/${info.externalid.wikidata_id}`} ><i className="hover:text-[#2BA9FE] ri-earth-line"></i></a>

        </nav>



        <div className='part_2 relative w-full h-fit-content pt-[6%] flex gap-10'>
           <img className='w-[250px] h-[350px] rounded-lg' src={`https://image.tmdb.org/t/p/original/${info.detail.poster_path || info.detail.backdrop_path}`} alt="" />
           
           <div className=''>
          
            <h1 className=' text-3xl font-semibold mb-5'>{info.detail.title ||info.detail.name || info.detail.original_title}
            <small className='text-sm ml-[2%] text-zinc-200'>({info.detail.first_air_date.slice(0,4)})</small>
            </h1>

            <span className='text-[15px] text-zinc-200 mr-5'>Release Date : <span> {info.detail.release_date}</span></span>
            <span className='rate mrate text-white text-[20px] p-2 rounded-lg bg-[#34A1EC]'><span className='text-[15px] text-zinc-300 mr-2 '>Rating:</span><i  className="ri-star-s-line text-yellow-400 text-l mr-1"></i>{info.detail.vote_average}</span>
            
            <h1 className='text-zinc-200 mt-[2%]'>Total Seasons: {info.detail.number_of_seasons}</h1>
            <h1 className='text-zinc-200 mt-[1%]'>Total Episodes: {info.detail.number_of_episodes}</h1>
            
            {info.detail.networks.next_episode_to_air ? <h1 className='text-zinc-200 mt-[1%]'>Next Episode will release on : {info.detail.networks.next_episode_to_air}</h1> : <h1 className='text-zinc-200 mt-[1%]'>Next Episode will release on : Not available now</h1>}
            <h1 className='text-zinc-200 mt-[1%]'>Available in Languages : {info.detail.spoken_languages.map((m,i)=>(<span className='text-sm' key={i}>{m.english_name} , </span>))}</h1>




            <p className='text-zinc-200 mt-[2%] mb-[5%]'>Overview :
              <br />
              <div className='text-sm text-zinc-300'> 
              {info.detail.overview}
              </div>
            </p>

            <Link to={`${pathname}/trailer`} className='tl bg-[#2BA9FE] p-2 rounded-lg' ><i className="ri-play-circle-line mr-2"></i>Watch</Link>


           </div>
        </div>

       
      <div className='watchprovider pt-10 text-s text-zinc-300 flex flex-col gap-2'>

        
         {info.watchproviders && info.watchproviders.flatrate && <div className='flex gap-5 items-center'>
          <h1>Available on Platform :</h1>
          {info.watchproviders.flatrate.map((m,i)=>(
          <img key={i} title = {m.provider_name} className="h-[30px] w-[30px] rounded " src={`https://image.tmdb.org/t/p/original/${m.logo_path}`} alt="" />

        ))}
         </div> }

         {info.watchproviders && info.watchproviders.buy && <div className='flex gap-5 items-center'>
          <h1>Available on Platform to buy :</h1>
          {info.watchproviders.buy.map((m,i)=>(
          <img key={i} title = {m.provider_name} className="h-[30px] w-[30px] rounded " src={`https://image.tmdb.org/t/p/original/${m.logo_path}`} alt="" />

        ))}
         </div> }

         {info.watchproviders && info.watchproviders.rent && <div className='flex gap-5 items-center'>
          <h1>Available on rent :</h1>
          {info.watchproviders.rent.map((m,i)=>(
          <img key={i} title = {m.provider_name} className="h-[30px] w-[30px] rounded " src={`https://image.tmdb.org/t/p/original/${m.logo_path}`} alt="" />

        ))}
         </div> }
      </div> 
         

       <hr className='h-[1px] mt-[3%] bg-zinc-300'/>
      <div>
        <h1 className='text-xl  '>Seasons :</h1>
        <div className='w-full  min-h-[45vh] overflow-x-auto p-10 '>
       
    
       <div className=' w-full flex gap-3'>
        {info.detail.seasons.map((d,i)=>(
            <div to={`/${d.media_type }/details/${d.id}`}  key={i} className="card text-sm min-w-[200px] h-fit-content p-1 bg-[#17274e] rounded-lg  flex flex-col relative   ">
                <img className=' w-full rounded-lg h-[25vh] object-cover' src={d.poster_path ? `https://image.tmdb.org/t/p/original/${d.poster_path}` : noimage} alt="" />
                <h1 className='  text-l font-bold text-white leading-tight mb-[2%] mt-[2%]'>{d.name || d.title || d.original_title}</h1>
               <div className='wallinfo flex gap-[2%] w-full items-center mt-3'>
                 <h5 className='text-white text-[12px] uppercase'> <i  className="ri-play-circle-line text-blue-400 text-l mr-1"></i>{d.media_type}</h5>
                 <h5 className='text-white text-[12px] uppercase'><i  className="ri-translate-2 text-blue-400 text-l mr-1"></i>{d.original_language}</h5>
               </div>
                 <h5 className= 'rate text-white text-[12px] '><i  className="ri-star-s-line text-yellow-400 text-l mr-1"></i>{d.vote_average}</h5>
                 <h5 className='text-white text-[12px] '><i  className="ri-megaphone-line text-green-400 text-l mr-1"></i>{d.air_date || d.first_air_date || "release not available"}</h5>
             
             
         </div>
         
        ))}
   
       </div>
       
     </div>
      </div>

      <hr className='h-[1px] mt-[3%] bg-zinc-300'/>


      <div>
        <h1 className='text-xl  '>Recommendations :</h1>
        { info.recommendations ? <Cards data ={  info.recommendations  }/> : <h1 className='text-white'>not available</h1>}
      
      </div>

    <Outlet/>
           
    </div>

  ):<Loading/>
}

export default TvDetails