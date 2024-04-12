import React, { useEffect, useState } from 'react'
import axios from '../utils/axios';
import { useNavigate } from 'react-router-dom'
import Topnav from './Partials/Topnav';
import Dropdown from './Partials/Dropdown';
import DataCards from './Partials/DataCards';
import Loading from './Partials/Loading';
import InfiniteScroll from 'react-infinite-scroll-component';



function Trending()  {


   const navigate = useNavigate();
    const [trending, settrending] = useState([])
    const [category, setcategory] = useState("all");
    const [duration, setduration] = useState("day")
    const [page, setpage] = useState(1)
    const [hasMore, sethasMore] = useState(true);
  document.title = "Epic Movies | Trendings " + category;


   
   const Gettrending = async () => {

    try {
    
    const {data} = await axios.get(`/trending/${category}/${duration}?page=${page}`); 
            if(data.results.length > 0){
              setpage(page +1)
              settrending((prevState)=>[...prevState , ...data.results]);
            }
            else{
              sethasMore(false)

            }
    
    } catch (error) {
    
    console.log("Error: ", error);
    
    }
};

const refresh =()=>{
  if(trending.length === 0){
    Gettrending();
  }else{
          setpage(1)
          settrending([]);
          Gettrending();
          }
}

useEffect(()=>{
    refresh();
},[category,duration]);






  return trending.length > 0 ? (
    <div className='trending  h-screen w-screen bg-[#0F172A]  flex flex-col gap-10 pb-10 pt-5 relative  '>
        <div className='fixedd w-full text-zinc-400 justify-between px-[3%] flex items-center '>
            <h1 className='trend text-2xl'>
              <i onClick={()=>(navigate(-1))} className=" hover:text-[#2BA9FE] cursor-pointer ri-arrow-left-line mr-2"></i>
               Trendings
            </h1>

            <Topnav/>
            <div className='flex gap-5'>

            <Dropdown title={"category"} options={["all", "movie" , "tv"]} func={(e)=>setcategory(e.target.value)}  />
            <Dropdown title={"duration"} options={["day", "week"]} func={(e)=>setduration(e.target.value)} />
            </div>


        </div>
        

        <div className='cards flex items-center justify-center '>
            <InfiniteScroll className='infinite pt-2 w-full h-screen bg-[#0F172A] px-10'
            dataLength={trending.length}
            next={Gettrending}
            hasMore={hasMore}
              loader={<h1 className='text-white'>loading..</h1>}
            >
            <DataCards data={trending} title={category}/>
                
            </InfiniteScroll>

          
            

        </div>


    </div>
  ):
    <Loading/>
}

export default Trending