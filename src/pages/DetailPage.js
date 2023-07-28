import React, { useState } from 'react'
import Details from "../components/Details"
import CardList from "../components/CardList"
import FooterSection from "../components/FooterSection"

export const DetailPage = () => {
const [detailsData, setDetailsData] = useState({ 
    id:12345, 
    Heating:"Elevation", 
    content:"Elevation drawings are orthographic elevations, which means they are flat 2d drawings. Orthographic projection according to Merriam Webster is the ‘projection of a single view of an object (such as a view of the front) onto a drawing surface in which the lines of projection are perpendicular to the drawing surface. This is not to be confused with the concept of 3d elevation. 3d elevation is real-time elevation generation based on cad drafting. As one changes elements in the floor plans, changes reflect in the elevation. Coming back to the elevation definition.", 
    Dimension:"25 x 45", 
    area:"1500 Sqft", 
    facing:"North", 
    vasthu:"No", 
    details :["2BHk", "2 Floor", "Morden","2BHk", "2 Floor", "Morden", ],
    filterBy :'plan',
    isActive :false,
    premium :false,
    imgLocations:["https://planmyspace2dplans.s3.ap-south-1.amazonaws.com/23.jpeg", "https://planmyspace2dplans.s3.ap-south-1.amazonaws.com/22.jpeg", "https://planmyspace2dplans.s3.ap-south-1.amazonaws.com/12.jpeg"],
    pdfLocation:"https://planmyspace2dplans.s3.ap-south-1.amazonaws.com/34.jpeg",
    // seo
    imgAlt : "img content",
    seoTitle : "lorump",
    seoKeyWords : "lorump",
    seoDiscription : "lorump",
})
  return (
    <div>
        <Details detailsData ={detailsData} />
        <CardList/>
        <FooterSection/>
    </div>
  )
}
