import React, { useState } from 'react'
import poppupicon from '../assets/popupicon.svg'

const PopPupForm = () => {
    const [fromActive,setFromActive] = useState(false)
  return (
    <div>
        {/* poppupicon */}
        <img src={poppupicon} className='popupicon' onClick={()=>setFromActive(true)}></img>
        {/* form popup */}
        { fromActive && 
        <div className='fromActive'  onClick={()=>setFromActive(false)}>
            <div className='formBox'>
                
            </div>
        </div>}
    </div>
  )
}

export default PopPupForm