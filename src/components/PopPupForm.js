import React, {  useState } from 'react'
import poppupicon from '../assets/popupicon.svg'

const PopPupForm = () => {
    const [fromActive,setFromActive] = useState(false)

    
  return (
    <div>
        {/* poppupicon */}
        <img src={poppupicon} className='popupicon' onClick={()=>setFromActive(true)} alt='im'></img>
        {/* form popup */}
        { fromActive && 
        <div className='fromActive' >
            <div className='formBox' >
              <p className="serviceHeading fontFamily">Contact Now !</p>
                <input className='formInpit' placeholder='Name'></input>
                <input className='formInpit' placeholder='Phone Number'></input>
                <input className='formInpit' placeholder='Email'></input>
                <textarea className='formInpit' placeholder='Description'></textarea>
                <button className="HeaderDownloadBtn">Submit</button>
            </div>
        </div>}
        
    </div>
  )
}

export default PopPupForm