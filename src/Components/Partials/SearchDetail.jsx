import React from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import DataCards from './DataCards';

function SearchDetail() {
  const location = useLocation();
  const {data} = location.state;
  const navigate = useNavigate();
    console.log(data)
    
  return (
    <div className=' w-full h-fit bg-[#0F172A] lg:p-10 md:p-5  sm:p-10 '>
        <h1 className='trend w-fit text-2xl  hover:text-[#2BA9FE] text-white mb-2 '>
              <i onClick={()=>(navigate(-1))} className="navigate cursor-pointer ri-arrow-left-line mr-2  ">Back</i>

        </h1>

   <DataCards data={data}/>
    </div>
  )
}

export default SearchDetail