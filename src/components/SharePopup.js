import React from 'react'
import { useSelector } from "react-redux";
import closeIcon from "../assets/Close.svg";
import fbShareIcon from "../assets/fbShare.svg"
import whShareIcon from "../assets/whShare.svg"
import instaShareIcon from "../assets/instaShare.svg"
import { FacebookShareButton, WhatsappShareButton } from 'react-share';


const SharePopup = () => {
    const {formActive, } = useSelector((state) => state.shareFormSlice);
    let tedturl = "amazom.com"

    let caption="caption"
    const InstagramShare = () => {
      // Replace 'your-text-here' with the text you want to pre-fill in the Instagram caption (optional).
      const shareUrl = `https://www.instagram.com/?url=${encodeURIComponent(tedturl)}&caption=${encodeURIComponent(caption)}`;
    window.open(shareUrl, '_blank', 'height=600,width=800,resizable=1');
    };

    const copyUrl = ()=>{
      // Copy the text inside the text field
       navigator.clipboard.writeText(tedturl);
    }

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
                <FacebookShareButton url={tedturl}>
                  <img src={fbShareIcon}  alt='fbShareIcon'></img>
                </FacebookShareButton>  
                <WhatsappShareButton url={tedturl}>
                  <img src={whShareIcon} alt='whShareIcon'></img>
                </WhatsappShareButton>
                  <img src={instaShareIcon} onClick={()=>InstagramShare()} alt='instaShareIcon'></img>
            </div>
            <p className='copyLing fontFamily'>or copy link</p>
            <div className='shareLingBox'>
                <p className='lingText fontFamily'>{tedturl}</p>
                <button className='HeaderDownloadBtn' onClick={()=>copyUrl()}>Copy</button>
            </div>
            </div>
        </div>
        }
    </div>
  )
}

export default SharePopup