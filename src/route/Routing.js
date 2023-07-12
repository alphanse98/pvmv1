import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from '../pages/HomePage';
import GalleryPage from '../pages/GalleryPage';
import { PlanPage } from '../pages/PlanPage';
import AboutPage from '../pages/AboutPage';

const Routing = () => {
  
  return (
   <BrowserRouter>
      <Routes>
      <Route path="/" element={<HomePage />}></Route>
      <Route path="/gallery" element={<GalleryPage />}></Route>
      <Route path="/plan" element={<PlanPage />}></Route>
      <Route path="/about" element={<AboutPage />}></Route>
      </Routes>
   </BrowserRouter>
  )
}

export default Routing