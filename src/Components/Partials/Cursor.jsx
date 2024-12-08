import React, { useEffect, useState } from 'react'

function Cursor() {
       
    const [Position, setPosition] = useState({x:0,y:0})

   
  useEffect(() => {
    const updatePosition = (event) => {
      setPosition({ x: event.clientX, y: event.clientY });
    console.log(event)

    };

    window.addEventListener('mousemove', updatePosition);

    return () => {
      window.removeEventListener('mousemove', updatePosition);
    };
  }, []);
  console.log(Position.x)

  return (
    <div className= {`fixed h-[25px] w-[25px] bg-white rounded-full border-[#0d67e4] border-[7px] z-[999] `} style={{
      left: `${Position.x}px`,
      top: `${Position.y}px`,
    }} ></div>
  )
}

export default Cursor