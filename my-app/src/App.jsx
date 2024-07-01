/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react'
import Game from './component/Game'

const App = () => {
  const [cells,setcells]=useState(["","","","","","","","",""])
  const [round,setround]=useState("cross")
  let winnigcombo=[
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [2,5,8],
    [1,4,7],
    [0,3,6],
    [0,4,8],
    [2,4,6]
  ]
  const [win,setwin]=useState(null)
  useEffect(()=>{
    winnigcombo.map((data)=>{
      const crooswin=data.every((cell)=>cells[cell]==="cross")
      const circlewin=data.every((cell)=>cells[cell]==="circle")
      if (crooswin) {
        setwin("cross win")
       
        
      }if (circlewin) {
        setwin("circle win")
       
        
      }

   

      
    })
  },[cells])
 

 
  return (
   <>
   <div className="main-container">
   <h1>game play</h1>
   <div className="game-boord">
    {cells.map((Data,index)=>
    (<Game id={index} key={index} round={round} setround={setround} setcell={setcells} cell={cells} setwin={setwin} win={win} /> )
    
    
    )}

   </div>
   <p>{win}</p>
   {!win &&
   
   <p>{`its ${round} turn to play`} !!</p>
   
   }

   </div>

   
   </>
  )
}

export default App

