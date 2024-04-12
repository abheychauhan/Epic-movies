import React, { useEffect} from 'react'
import { useDispatch  } from 'react-redux'
import { useSelector } from 'react-redux'

import { asyncloadmovie, removemovie } from '../../store/actions/movieActions';
import { Link, useParams , useLocation , Outlet } from 'react-router-dom';
import { useNavigate } from 'react-router-dom'
import Loading from './Loading';
import Cards from './Cards';



function MoviesDetails() {
 const {pathname} = useLocation();

  const navigate = useNavigate();
  const {id} = useParams();
  const { info } = useSelector((state) => state.movie); 
  console.log(info)
  const dispatch = useDispatch();

       useEffect(()=>{
              dispatch(asyncloadmovie(id));
              return()=>{dispatch(removemovie())}
       },[id])
       
  return  info ? (
    <div  
    style={
      {
          background:`linear-gradient(rgba(0,0,0,.3),rgba(0,0,0,.6),rgba(0,0,0,.8)), url(https://image.tmdb.org/t/p/original/${info.detail.backdrop_path})`,
          backgroundPosition:'center',
          backgroundSize: 'cover'
      }
      }
 
     className='relative text-white w-[100vw] h-fit-content overflow-auto px-[10%] pt-[2vw] ' >
          

        <nav className='nav fixed  w-full h-[30px] z-[99] text-2xl  flex items-center gap-5 text-zinc-200'>

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
          
            <h1 className=' text-3xl font-semibold mb-5'>{info.detail.title || info.detail.original_title}
            <small className='text-sm ml-[2%] text-zinc-200'>({info.detail.release_date.slice(0,4)})</small>
            </h1>

            <span className='text-[15px] text-zinc-200 mr-5'>Release Date : <span> {info.detail.release_date}</span></span>
            <span className='rate mrate text-white text-[20px] p-2 rounded-lg bg-[#34A1EC]'><span className='text-[15px] text-zinc-100 mr-2 '>Rating:</span><i  className="ri-star-s-line text-yellow-400 text-l mr-1"></i>{info.detail.vote_average}</span>
            
            <h1 className='text-zinc-200'>Duration: {info.detail.runtime}mins</h1>
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



      {info.recommendations.length > 0 ? 
       <div>
         <h1 className='text-xl  '>Recommendations :</h1>
         <Cards data ={info.recommendations }/>
         </div>
    :  
    <div>
    <h1 className='text-xl  '>Recommendations :</h1>
    <h1 className='text-xl text-white text-center text-zinc-400'> Not Available</h1>
     </div>
    }
      

    <Outlet/>
    </div>

  ):<Loading/>
}

export default MoviesDetails