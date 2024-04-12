import React, { useEffect, useState } from 'react'
import axios from '../utils/axios';
import { useNavigate } from 'react-router-dom'
import Topnav from './Partials/Topnav';
import Dropdown from './Partials/Dropdown';
import DataCards from './Partials/DataCards';
import Loading from './Partials/Loading';
import InfiniteScroll from 'react-infinite-scroll-component'

function Tv() {
  const navigate = useNavigate();
  const [tv, settv] = useState([])
  const [category, setcategory] = useState("airing_today");
  const [page, setpage] = useState(1)
  const [hasMore, sethasMore] = useState(true)
  
  document.title = "Epic Movies | Tv shows " + category;

  const GetTv = async () => {

    try {
      
    const {data} = await axios.get(`/tv/${category}?page=${page}`); 
  
    if(data.results.length > 0){
      setpage(page +1)
      settv((prevState)=>[...prevState , ...data.results]);
    }
    else{
      sethasMore(false)
      
    }
    
  } catch (error) {
    
    console.log("Error: ", error);
    
  }
};

const refresh =()=>{
  if(tv.length === 0){
    GetTv();
  }else{
    setpage(1)
    settv([]);
          GetTv();
        }
      }
      

      useEffect(()=>{
        refresh();
      },[category ]);
      
  
    
   

  return (tv.length>0 ? (
    <div className= 'trending w-screen h-screen  flex flex-col gap-8 pb-10 '>
        <div className='fixed w-full  text-zinc-400 bg-[#0F172A] z-[99] pt-5  px-[2%] flex items-center  '>
            <h1 className='trend flex text-xl'>
              <i onClick={()=>(navigate(-1))} className=" hover:text-[#2BA9FE] cursor-pointer ri-arrow-left-line mr-2"></i>
               <h2 className='flex whitespace-nowrap ' > Tv shows <small className='text-[10px] ml-2 text-[#2BA9FE] '>{category}</small></h2>
            </h1>

            <Topnav/>
            <Dropdown title={"category"} options={[ "on_the_air","popular" , "top_rated" ,"airing_today"]} func={(e)=>setcategory(e.target.value)}  />
            <div className='w-[2%]'></div>


        </div>
        <div className='cards pt-[10%] flex items-center justify-center '>
        <InfiniteScroll className='infinite  pt-2  w-full h-screen bg-[#0F172A] px-10'
            dataLength={tv.length}
            next={GetTv}
            hasMore={hasMore}
              loader={<h1 className='text-white text-2xl mt-4 w-full text-center' >loading..</h1>}
            >
            <DataCards data={tv} title="tv"/>
                
            </InfiniteScroll>
            </div>

    </div>
  ):
  <Loading/>
  )
}

export default Tv