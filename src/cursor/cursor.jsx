import React, {useEffect, useState} from "react";
import "./cursor.scss"

function Cursor (){
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [cursor, setCursor] = useState(true)
  
  
  
 
    useEffect(()=>{
      if (window.innerWidth <= 992){
        setCursor(false)
      }
    }, [])
    
    
    
  
  useEffect(()=>{
    const updatePosition = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
    
    
    };
    window.addEventListener('mousemove', updatePosition);
  
    return()=>{
      window.addEventListener('mousemove', updatePosition);
  
    }
  })
  
  
    
  
  
  return (
     <div className={`circle-cursor `} style={{ left: `${position.x}px`, top: `${position.y}px`, display: `${cursor ? "flex" : "none"}` }}>
        <p>
        </p>
     </div>
  );
}

export default Cursor