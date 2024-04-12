import React, { useEffect, useState } from 'react'
import axios from '../utils/axios';
import { useNavigate } from 'react-router-dom'
import Topnav from './Partials/Topnav';
import Dropdown from './Partials/Dropdown';
import DataCards from './Partials/DataCards';
import Loading from './Partials/Loading';
import InfiniteScroll from 'react-infinite-scroll-component'

function Popular()  {
  const navigate = useNavigate();
  const [popular, setpopular] = useState([])
  const [category, setcategory] = useState("movie");
  const [page, setpage] = useState(1)
  const [hasMore, sethasMore] = useState(true)
  
  document.title = "Epic Movies | Popular " + category;
    
   
   const Getpopular = async () => {

    try {
      
    const {data} = await axios.get(`/${category}/popular?page=${page}`); 
  
    if(data.results.length > 0){
      setpage(page +1)
      setpopular((prevState)=>[...prevState , ...data.results]);
    }
    else{
      sethasMore(false)
      
    }
    
  } catch (error) {
    
    console.log("Error: ", error);
    
  }
};
const refresh =()=>{
  if(popular.length === 0){
    Getpopular();
  }else{
    setpage(1)
    setpopular([]);
          Getpopular();
        }
      }
      

      useEffect(()=>{
        refresh();
      },[category ]);
      
      
      
      
      
      
  return popular.length>0 ? (
    <div className= 'trending w-screen h-screen  flex flex-col gap-10 pb-10 '>
        <div className='fixedd fixed pt-5 w-full bg-[#0F172A] z-[99] text-zinc-400  px-[3%] flex items-center  '>
            <h1 className='trend text-2xl'>
              <i onClick={()=>(navigate(-1))} className=" hover:text-[#2BA9FE] cursor-pointer ri-arrow-left-line mr-2"></i>
               Poupulars
            </h1>

            <Topnav/>
            <Dropdown title={"category"} options={[ "movie" , "tv"]} func={(e)=>setcategory(e.target.value)}  />
            <div className='w-[2%]'></div>


        </div>
        <div className='cards flex pt-[5%] items-center justify-center '>
        <InfiniteScroll className='infinite mt-10 pt-2 w-full h-screen bg-[#0F172A] px-10'
            dataLength={popular.length}
            next={Getpopular}
            hasMore={hasMore}
              loader={<h1 className='text-white text-2xl mt-4 w-full text-center' >loading..</h1>}
            >
            <DataCards data={popular}  title={category} />
                
            </InfiniteScroll>
            </div>

    </div>
  ):
  <Loading/>
}

export default Popular;