import React, { useEffect, useState } from 'react'
import ShareIcon from "../assets/share2.svg"
import DownloadIcon from "../assets/dowload2.svg"

const Details = ({detailsData}) => {
    
    const [mainImg, setMainImg]= useState()

    useEffect(()=>{
        setMainImg(detailsData?.imgLocations[1])
    },[])

  return (
    <div className='detailsCom'>
        <div className='details'>

            {/* flex box one */}
            <div className='detailsBoxOne'>
                <div className='mainImgBox'>
                    <img className='mainImg' src={mainImg}></img>
                </div>
                <div>
                    {detailsData?.imgLocations?.map((item, index)=>(
                        <img className='subImgs' src={item} onClick={()=>setMainImg(item)} key={index}></img>
                    ))}
                </div>
            </div>

            {/* flex box two */}
            <div className='detailsBoxTwo'>
                <div className='detailIcons'>
                    <img src={ShareIcon} className='detailIcon' alt='ShareIcon'></img>
                    <img src={DownloadIcon} className='detailIcon'  alt='DownloadIcon'></img>
                    <button className='detailBtn HeaderDownloadBtn fontFamily'>Contact</button>
                </div>
                <p className='detailHeading serviceHeading fontFamily'>{detailsData?.Heating}</p>
                {/* table */}
                <table className='deailTable'>
                    <tr>
                        <th>Description</th>
                        <th></th>
                    </tr>
                    <tr>
                        <td>Demension</td>
                        <td>{detailsData?.Dimension}</td>
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
