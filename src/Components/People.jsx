import React, { useEffect, useState } from 'react'
import axios from '../utils/axios';
import { Link, useNavigate } from 'react-router-dom'
import Topnav from './Partials/Topnav';

import Loading from './Partials/Loading';
import InfiniteScroll from 'react-infinite-scroll-component'

function People() {
    const navigate = useNavigate();
    const [person, setperson] = useState([])
    const [page, setpage] = useState(1)
    const [hasMore, sethasMore] = useState(true)
    
      
     const GetPerson= async()=>{
        try {

            const {data} = await axios.get(`https://api.themoviedb.org/3/person/popular?page=${page}`);
            
       if(data.results.length > 0){
         setperson((prevState)=>[...prevState , ...data.results]);
         setpage(page + 1)
        }
        else{
         sethasMore(false)
        
        }
            
        } catch (error) {
            console.log(error)
            
        }
     };


     const refresh =()=>{
        if(person.length === 0){
          GetPerson();
        }else{
          setpage(1)
          setperson([]);
                GetPerson();
              }
            }
      

     useEffect(()=>{
        refresh();
     },[])

  return (person.length>0 ? (
    <div className= 'trending w-screen h-screen  flex flex-col gap-8 pb-10 '>
        <div className='fixedd fixed z-[99] w-full  text-zinc-400 bg-[#0F172A] z-[99] pt-5  px-[2%] flex items-center  '>
            <h1 className='trend flex text-xl'>
              <i onClick={()=>(navigate(-1))} className=" hover:text-[#2BA9FE] cursor-pointer ri-arrow-left-line mr-2"></i>
               <span className='flex whitespace-nowrap ' > People <small className='text-[10px] ml-2 text-[#2BA9FE] '>{}</small></span>
            </h1>

            <Topnav/>
            <div className='w-[2%]'></div>


        </div>
        <div className='cards flex pt-[7%] items-center justify-center '>
        <InfiniteScroll className='infinite  pt-2  w-full h-screen bg-[#0F172A] px-10'
            dataLength={person.length}
            next={GetPerson}
            hasMore={hasMore}
              loader={<h1 className='text-white text-2xl mt-4 w-full text-center' >loading..</h1>}
            >
        <div className='cards_container w-full flex-wrap flex p-2 gap-[3vw]'>
           {person.map((d,i)=>(
             <Link to={`/person/details/${d.id}`} key={i} className="cards card text-sm w-[250px] h-[50vh] bg-[#17274e] rounded-lg p-2 flex flex-col relative   ">
             <img className='poster w-full rounded-lg h-[80%] object-cover object-center' src={d.backdrop_path || d.profile_path || d.poster_path ? `https://image.tmdb.org/t/p/original/${d.backdrop_path || d.profile_path || d.poster_path }`: noimage} alt="" />
             <h1 className='name text-l font-bold text-white leading-tight mb-[2%] mt-[2%]'>{d.name || d.title || d.original_title}</h1>
             {/*<video className='w-full h-[100px] autoplay controls' src={`https://api.themoviedb.org/3/movie/${d.id}/videos`}></video>*/}
             <p className='overview w-[75%] text-zinc-300 mt-[10px]  leading-tight text-m'>Role:   {d.known_for_department}</p>
           
              <h5 className='rate text-zinc-300 text-[12px] '><i  className="ri-star-s-line text-yellow-400 text-l mr-1"></i>{d.popularity}</h5>
          
           
       

      </Link>
      
     ))}

    </div>
                
            </InfiniteScroll>
            </div>

    </div>
  ):
  <Loading/>
  )
}

export default People