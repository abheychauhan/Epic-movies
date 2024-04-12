import React from 'react'

export default function Dropdown({title , options , func}) {
  return (
    <>
      <div className='text-sm'>
      <select onChange={func} defaultValue={0} id="dropdown" className='rounded-lg w-fit-content uppercase'>
        <option value="0" disabled>
            {title}
        </option>
        

        {options.map((o,i)=>(
          
           <option key={i} value={o} >{o}</option> 
        ))}
      </select>
      
      </div>
    </>
    
    
  )
}
