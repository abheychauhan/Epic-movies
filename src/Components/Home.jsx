import React, { useEffect, useState } from 'react'
import Sidenav from './Partials/Sidenav'
import Topnav from './Partials/Topnav'
import Headwall from './Partials/Headwall'
import axios from '../utils/axios'
import Cards from './Partials/Cards'
import Dropdown from './Partials/Dropdown'
import Loading from './Partials/Loading'
import AnimeLoader from './Partials/AnimeLoader'
import Cursor from './Partials/Cursor'


function Home() {

    const [wallpaper, setwallpaper] = useState(null);
    const [trending, settrending] = useState([]);
    const [category, setcategory] = useState("all")




    const Getwallpaper = async () => {

        try {
        
        const {data} = await axios.get(`/trending/all/day`); 
        let randData = data.results[(Math.random()*data.results.length).toFixed()];
        setwallpaper(randData);
        
        } catch (error) {
        
        console.log("Error: ", error);
        
        }
    };

    const Gettrending = async () => {

      try {
      
      const {data} = await axios.get(`/trending/${category}/day`); 
    
      settrending(data.results);
      
      } catch (error) {
      
      console.log("Error: ", error);
      
      }
  };
    
    useEffect(() =>{
         Gettrending();

       !wallpaper && Getwallpaper();
         
    
    },[category])

     

  return wallpaper && trending ? (
    <>
    
      <AnimeLoader/>
      <Cursor/>
      <Sidenav/>
      <div className='responsive w-[85%] h-full overflow-auto overflow-x-hidden '>
      <Topnav/>
      <Headwall data = {wallpaper} title ={category} />
      <div className='flex justify-between pt-5 pl-5 pr-5'>
          <h1 className='trend text-2xl text-zinc-400  '>Trending</h1>
          <Dropdown title={"Filter"} options={ ["all" , "movie" , "tv"]} func={(e)=>setcategory(e.target.value)}/>
          
      </div>
      

      <Cards data ={trending} title ={category}/>
      </div>
      
    </>
  ) :
    <Loading/>
  
  
 
}

export default Home