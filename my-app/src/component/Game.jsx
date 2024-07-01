/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useEffect } from 'react'

const Game = ({round,setround,setcell,id,cell,setwin,win}) => {
  
    
    const handleclick=(e)=>{
        if (win) {
            return
            
        }
        

      const nottaken=!cell[id]
      if (nottaken) {
        if(round=="cross"){
            handlechange("cross")
            setround("circle")
            
        
           }else if(round=="circle"){
            handlechange("circle")
            setround("cross")
        
        
           }
        
      }
      console.log(id);
     
 
  
    }
    const handlechange=(cellchange)=>{
        let copy=[...cell]
        copy[id]=cellchange
        setcell(copy)

    }

    
        
      


  return (
   <>
   <div className="peice" onClick={()=>handleclick()}>
    <div className={cell[id]} >{cell ? (cell[id]=="cross"? "x":""|| cell[id]=="circle"?"o":""):""}

    </div>



   </div>
  
 
   
   </>
  )
}

export default Game