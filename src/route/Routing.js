import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from '../pages/HomePage';

const Routing = () => {
  
  return (
   <BrowserRouter>
      <Routes>
      <Route path="/" element={<HomePage />}></Route>
      </Routes>
   </BrowserRouter>
  )
}

export default Routing