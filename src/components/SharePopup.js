import React from 'react'
import { useSelector } from "react-redux";
import closeIcon from "../assets/Close.svg";
import fbShareIcon from "../assets/fbShare.svg"
import whShareIcon from "../assets/whShare.svg"
import instaShareIcon from "../assets/instaShare.svg"



const SharePopup = () => {

    const {formActive, url} = useSelector((state) => state.shareFormSlice);



  return (
    <div>
        {/* Share form popup */}
      {formActive && 
        <div className="fromActive">
            <div className='formBox shareBox'> 
            {/* close icon*/}
            <img src={closeIcon} className="closeIcon"  alt="closeIcon"></img>
            <p className=' shareHeading serviceHeading fontFamily'>Share Link</p>
            {/* share icons  */}
            <div className='shrePopUpIcons'>
                <img src={fbShareIcon}  alt='fbShareIcon'></img>
                <img src={whShareIcon} alt='whShareIcon'></img>
                <img src={instaShareIcon} alt='instaShareIcon'></img>
            </div>
            <p className='copyLing fontFamily'>or copy link</p>
            <div className='shareLingBox'>
                <p className='lingText fontFamily'>planMYspaces/plan/123257478215265256451456j</p>
                <button className='HeaderDownloadBtn'>Copy</button>
            </div>
            </div>
        </div>
        }
    </div>
  )
}

export default SharePopup