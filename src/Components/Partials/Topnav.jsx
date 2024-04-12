import axios from '../../utils/axios';
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import noimage from "/noimage.webp";



function Topnav() {


    const [query, setquery] = useState("")
    const [searches, setsearches] = useState([])

    const GetSearches = async () => {

        try {
        
        const {data} = await axios.get(`/search/multi?query=${query}`); 
        setsearches(data.results);
        
        } catch (error) {
        
        console.log("Error: ", error);
        
        }
    };
    
    useEffect(() =>{
        GetSearches();
    
    },[query])
        
    
    
        
        
       
  return (

    <div className='topnav w-full text-zinc-400 p-5 '>

        <div className='search w-fit-content  flex items-center  gap-2 m-auto relative'>
          <i className="ri-search-eye-line text-2xl"></i>

          <input onChange={(e)=>setquery(e.target.value)} value={query} className='rounded-lg w-[90%] h-[12%] bg-transparent outline-none border-2 border-zinc-400 px-2 py-[4px]' type="text" placeholder='Search ' />
           
          
           {query.length > 0 && <i onClick={()=>setquery("")} className="ri-close-circle-line text-2xl"></i>}

          <div className='suggestion w-[90%] top-[100%] left-[2.8%] max-h-[70vh] overflow-y-auto  absolute  rounded '>
           {searches.map((s,i)=>(<Link to={`/${s.media_type}/details/${s.id}`} key={i} className='sl flex p-5 border-b-[1px] border-zinc-500 flex items-center gap-5'>
                <img className='h-[5vw] rounded-lg opacity-[.8]' src={s.backdrop_path || s.profile_path || s.poster_path ? `https://image.tmdb.org/t/p/original/${s.backdrop_path || s.profile_path || s.poster_path}` : noimage} alt="" />
                <span>{s.name || s.original_name || s.title || s.original_title} </span>
                
              </Link>))}
          
           
          </div>
         
        </div>
        

     
        

    </div>
  )
}

export default Topnav;