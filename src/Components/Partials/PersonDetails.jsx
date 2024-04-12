import React, { useEffect} from 'react'
import { useDispatch  } from 'react-redux'
import { useSelector } from 'react-redux'

import { asyncloadperson, removeperson } from '../../store/actions/personActions';
import { Link, useParams , useLocation , Outlet } from 'react-router-dom';
import { useNavigate } from 'react-router-dom'
import Loading from './Loading';
import Cards from './Cards';


function PersonDetails() {
  const {pathname} = useLocation();

  const navigate = useNavigate();
  const {id} = useParams();
  const { info } = useSelector((state) => state.person); 
  console.log(info)
  const dispatch = useDispatch();

       useEffect(()=>{
              dispatch(asyncloadperson(id));
              return()=>{dispatch(removeperson())}
       },[id])
       
  return  info ? (
    <div  
    style={
      {
          background:`linear-gradient(rgba(0,0,0,.3),rgba(0,0,0,.6),rgba(0,0,0,.8)), url(https://image.tmdb.org/t/p/original/${info.detail.profile_path})`,
          backgroundPosition:'center',
          backgroundSize: 'cover'
      }
      }
 
     className='relative text-white w-[100vw] h-fit-content overflow-auto px-[10%] pt-[2vw] ' >
          

        <nav className='nav fixed z-[99]  w-full h-[30px] text-2xl  flex items-center gap-5 text-zinc-200'>

        <h1 className='trend '>
              <i onClick={()=>(navigate(-1))} className=" hover:text-[#2BA9FE] cursor-pointer ri-arrow-left-line mr-2"></i>
        </h1>
       
        </nav>



        <div className='part_2 relative w-full h-fit-content pt-[6%] flex flex-wrap gap-9'>
            <div>
            <img className='w-[250px] h-[350px] rounded-lg' src={`https://image.tmdb.org/t/p/original/${info.detail.profile_path }`} alt="" />
            <h1 className='flex gap-6 mt-5 text-xl'>
                 <a target='_blank' href={`https://www.instagram.com/${info.externalid.instagram_id}`}><i className="text-pink-600 hover:text-[#2BA9FE] ri-instagram-line"></i></a>
                 <a target='_blank' href={`https://twitter.com/${info.externalid.twitter_id}`} className='text-yellow-300 hover:text-[#2BA9FE]' ><i class="ri-twitter-line"></i></a>
                 <a target='_blank' href={`https://www.wikidata.org/wiki/${info.externalid.wikidata_id}`} ><i className="hover:text-[#2BA9FE] ri-earth-line"></i></a>

            </h1>

            <h1 className='text-zinc-300 mt-2'>
              Date of birth:
              <h2 className='text-sm'>{info.detail.birthday}</h2>
            </h1>
            <h1 className='text-zinc-300 mt-2'>
              Known for:
              <h2 className='text-sm'>{ info.detail.known_for_department}</h2>
              <h1 className='text-zinc-300 mt-2'>
              Born Place:
              <h2 className='text-sm'>{ info.detail. place_of_birth}</h2>
            </h1>
            </h1>
            </div>
          
           
           <div className='w-[75%]'>
          
            <span className=' text-3xl font-semibold mb-5'>{info.detail.name}</span>
            <span className='rate mrate text-white text-[20px] p-2 ml-3 rounded-lg bg-[#34A1EC]'><span className='text-[15px] text-zinc-100 mr-2 '>Popularity:</span><i  className="ri-star-s-line text-yellow-400 text-l mr-1"></i>{info.detail.popularity}</span>



            <p className='text-zinc-200 mt-[2%] mb-[5%]'>Biography :
              <br />
              <div className='text-sm text-zinc-300'> 
              {info.detail.biography}
              </div>
            </p>
            <Link to={`${pathname}/trailer`} className='tl bg-[#2BA9FE] p-2 rounded-lg' ><i className="ri-play-circle-line mr-2"></i>Watch</Link>


           </div>
        </div>

       
      

      <hr className='h-[1px] mt-[3%] bg-zinc-300'/>



          </div>

  ):<Loading/>
}

export default PersonDetails