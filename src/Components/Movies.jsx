import React, { useEffect, useState } from 'react'
import axios from '../utils/axios';
import { useNavigate } from 'react-router-dom'
import Topnav from './Partials/Topnav';
import Dropdown from './Partials/Dropdown';
import DataCards from './Partials/DataCards';
import Loading from './Partials/Loading';
import InfiniteScroll from 'react-infinite-scroll-component'

function Movies() {
  const navigate = useNavigate();
  const [movie, setmovie] = useState([])
  const [category, setcategory] = useState("now_playing");
  const [page, setpage] = useState(1)
  const [hasMore, sethasMore] = useState(true)
  
  document.title = "Epic Movies | Movies " + category;

  const GetMovie = async () => {

    try {
      
    const {data} = await axios.get(`/movie/${category}?page=${page}`); 
           console.log(data)
    if(data.results.length > 0){
      setpage(page +1)
      setmovie((prevState)=>[...prevState , ...data.results]);
    }
    else{
      sethasMore(false)
      
    }
    
  } catch (error) {
    
    console.log("Error: ", error);
    
  }
};
const refresh =()=>{
  if(movie.length === 0){
    GetMovie();
  }else{
    setpage(1)
    setmovie([]);
          GetMovie();
        }
      }
      

      useEffect(()=>{
        refresh();
      },[category ]);
      
  
    
   

  return (movie.length>0 ? (
    <div className= 'trending w-screen h-screen  flex flex-col gap-8 pb-10  '>
        <div className='fixedd fixed w-full  text-zinc-400 bg-[#0F172A] z-[99] pt-5 px-[2%] flex items-center  '>
            <h1 className='trend flex text-2xl'>
              <i onClick={()=>(navigate(-1))} className=" hover:text-[#2BA9FE] cursor-pointer ri-arrow-left-line mr-2"></i>
               <h2 className='flex ' > Movies <small className='text-[10px] ml-2 text-[#2BA9FE] '>{category}</small></h2>
            </h1>

            <Topnav/>
            <Dropdown title={"category"} options={[ "popular" , "top_rated" , "upcoming" , "now_playing"]} func={(e)=>setcategory(e.target.value)}  />
            <div className='w-[2%]'></div>


        </div>
        <div className='cards flex items-center justify-center '>
        <InfiniteScroll className='infinite  pt-2  w-full h-screen bg-[#0F172A] px-10'
            dataLength={movie.length}
            next={GetMovie}
            hasMore={hasMore}
              loader={<h1 className='text-white text-2xl mt-4 w-full text-center' >loading..</h1>}
            >
            <DataCards data={movie} title="movie"/>
                
            </InfiniteScroll>
            </div>
            

    </div>
  ):
  <Loading/>
  )
}

export default Movies