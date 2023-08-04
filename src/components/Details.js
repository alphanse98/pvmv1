import React, { useEffect, useState } from 'react'
import ShareIcon from "../assets/share2.svg"
import DownloadIcon from "../assets/dowload2.svg"
import {useDispatch,  } from "react-redux";
import { shareFormAction } from "../Redux/shareFormSlice";
import {  useLocation  } from "react-router-dom";

const Details = ({detailsData}) => {
    
    const [mainImg, setMainImg]= useState()
    // uptade the main img from detailsData imgLocations (array) 
    useEffect(()=>{
        setMainImg(detailsData?.imgLocations[0])
    },[detailsData])

    const dispatch = useDispatch();
    const origin = window.location.origin
    const  {pathname}  = useLocation();
    const urlPathOne = pathname.split("/")[1]

     // example 
    // http://localhost:3000/gallery/detail/64c8d21e23643e65ca974369
    //pathname =/gallery/detail/64c8d21e23643e65ca974369
    // origin = http://localhost:3000
    // urlPathOne = gallery
    // urlPathTwo = detail

    // active the sahre popup and update the url to redux
    const sharePopup = (id) => {
        const shareUrl = origin+"/"+urlPathOne+"/detail/"+id
        dispatch(shareFormAction({formActive:true, url:shareUrl}));
    };

  return (
    <div className='detailsCom'>
        <div className='details'>
            {/* flex box one */}
            <div className='detailsBoxOne'>
                <div className='mainImgBox'>
                    <img className='mainImg' src={mainImg?.img} alt={mainImg?.alt} ></img>
                </div>
                <div>
                    {detailsData?.imgLocations?.map((item, index)=>(
                        <img className='subImgs' src={item?.img} alt={item?.alt}  onClick={()=>setMainImg(item)} key={index}></img>
                    ))}
                </div>
            </div>

            {/* flex box two */}
            <div className='detailsBoxTwo'>
                <div className='detailIcons'>
                    <img src={ShareIcon} className='detailIcon' alt='ShareIcon' onClick={()=>sharePopup(detailsData?._id)}></img>
                    <img src={DownloadIcon} className='detailIcon'  alt='DownloadIcon'></img>
                    <button className='detailBtn HeaderDownloadBtn fontFamily'>Contact</button>
                </div>
                <p className='detailHeading serviceHeading fontFamily'>{detailsData?.heading}</p>
                {/* table */}
                <table className='deailTable'>
                    <tr>
                        <th>Description</th>
                        <th></th>
                    </tr>
                    <tr>
                        <td>Demension</td>
                        <td>{detailsData?.dimension}</td>
                    </tr>
                    <tr>
                        <td>Area</td>
                        <td>{detailsData?.area}</td>
                    </tr>
                    <tr>
                        <td>Facing</td>
                        <td>{detailsData?.facing}</td>
                    </tr>
                    <tr>
                        <td>Vasthu</td>
                        <td>{detailsData?.vasthu}</td>
                    </tr>
                </table>
                {/* more option design */}
                <div className='moreDetailBox'>
                    {detailsData?.details.map((item, index)=>(
                        <div className='moreDetail fontFamily' key={index}>{item}</div>
                    ))}
                </div>
                <p className='detailContent '>{detailsData?.content}</p>
            </div>
                            
        </div>
    </div>
  )
}

export default Details
