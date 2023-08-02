import React from 'react'
import {useDispatch, useSelector } from "react-redux";
import closeIcon from "../assets/Close.svg";
import fbShareIcon from "../assets/fbShare.svg"
import whShareIcon from "../assets/whShare.svg"
// import instaShareIcon from "../assets/instaShare.svg"
import { FacebookShareButton, WhatsappShareButton, } from 'react-share';
import { shareFormAction } from "../Redux/shareFormSlice";



const SharePopup = () => {

    const {formActive, url} = useSelector((state) => state.shareFormSlice.formActive);
    const dispatch = useDispatch();

    const handlePopupClose = () => {
      dispatch(shareFormAction({formActive:false, url:''}));
    };
  
    const copyUrl = ()=>{
      // Copy the text inside the text field
       navigator.clipboard.writeText(url);
    }

  return (
    <div>
        {/* Share form popup */}
      {formActive && 
        <div className="fromActive">
            <div className='formBox shareBox'> 
            {/* close icon*/}
            <img src={closeIcon} className="closeIcon"  onClick={handlePopupClose} alt="closeIcon"></img>
            <p className=' shareHeading serviceHeading fontFamily'>Share Link</p>
            {/* share icons  */}
            <div className='shrePopUpIcons'>
                <FacebookShareButton url={url}>
                  <img src={fbShareIcon}  alt='fbShareIcon'></img>
                </FacebookShareButton>  
                <WhatsappShareButton url={url}>
                  <img src={whShareIcon} alt='whShareIcon'></img>
                </WhatsappShareButton>
            </div>
            <p className='copyLing fontFamily'>or copy link</p>
            <div className='shareLingBox'>
                <p className='lingText fontFamily'>{url}</p>
                <button className='HeaderDownloadBtn' onClick={()=>copyUrl()}>Copy</button>
            </div>
            </div>
        </div>
        }
    </div>
  )
}

export default SharePopup