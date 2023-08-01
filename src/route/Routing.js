import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from '../pages/HomePage';
import GalleryPage from '../pages/GalleryPage';
import { PlanPage } from '../pages/PlanPage';
import AboutPage from '../pages/AboutPage';
import { DetailPage } from '../pages/DetailPage';

const Routing = () => {
//   { 
      
//     heading:"Elevation", 
//     content:"Elevation drawings are orthographic elevations, which means they are flat 2d drawings. Orthographic projection according to Merriam Webster is the ‘projection of a single view of an object (such as a view of the front) onto a drawing surface in which the lines of projection are perpendicular to the drawing surface. This is not to be confused with the concept of 3d elevation. 3d elevation is real-time elevation generation based on cad drafting. As one changes elements in the floor plans, changes reflect in the elevation. Coming back to the elevation definition.", 
//     dimension:"25 x 45", 
//     area:"1500 Sqft", 
//     facing:"North", 
//     vasthu:"No", 
//     details :["2BHk", "2 Floor", "Morden","2BHk", "2 Floor", "Morden", ],
//     filter :'plan',
//     isActive :false,
//     premium :false,
//     imgLocations: [
//         {
//           img:"https://planmyspace2dplans.s3.ap-south-1.amazonaws.com/22.jpeg",
//           alt:"elevation",
//         },
//         {
//           img:"https://planmyspace2dplans.s3.ap-south-1.amazonaws.com/23.jpeg",
//           alt:"elevation",
//         },
//         {
//           img:"https://planmyspace2dplans.s3.ap-south-1.amazonaws.com/12.jpeg",
//           alt:"elevation",
//         },
//     ],
//     pdfLocation:"https://planmyspace2dplans.s3.ap-south-1.amazonaws.com/34.jpeg",
//     // seo
//     imgAlt : "img content",
//     seoTitle : "lorump",
//     seoKeyWords : "lorump",
//     seoDiscription : "lorump",
// }
  return (
   <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />}></Route>
        <Route path="/gallery" element={<GalleryPage />}></Route>
        <Route path="/plans" element={<PlanPage />}></Route>
        <Route path="/gallery/detail/:id" element={<DetailPage />}></Route>
        <Route path="/plans/detail/:id" element={<DetailPage />}></Route>
        <Route path="/about" element={<AboutPage />}></Route>
      </Routes>
   </BrowserRouter>
  )
}

export default Routing