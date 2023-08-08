import React, { useEffect, useState } from 'react';
import CardList from '../components/CardList';
import MobileNavBar from '../components/MobileNavBar';
import PopPupForm from "../components/PopPupForm";
import FooterSection from "../components/FooterSection"
import SharePopup from '../components/SharePopup';
import PcNavBar from "../components/PcNavBar"
import axios from 'axios';
import {Helmet} from "react-helmet";



const GalleryPage = () => {

  const [galleryData, setGalleryData]= useState([])

  

  const getGalleryData = async ()=>{
    try {
      // const res = await axios.get("http://localhost:4000/api/gallery")
      const res = await axios.get("http://www.planmydesign.com:4000/api/gallery")
      setGalleryData(res?.data) 
    } catch (error) {
      console.log("error",error)
    }
  }

  useEffect(()=>{
    getGalleryData()
  },[])

  return (
    <div>
      <Helmet>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#000000" />
        <meta name="description" content="Free Home designs download for architecture visualization, including home plans, elevation designs, interior designs, and 3D floor plans. Bring your dream project to life with our professional services and download the designs for free." />
        <meta name="keywords" content="free plans, architecture visualization, home plans, elevation designs,house designs, interior designs, 3D floor plans" />
        <meta property="og:title" content="Free Home designs download| Plan My Spaces" />
        <meta property="og:description" content="Home designs free download for architecture visualization, including home plans, elevation designs, interior designs, and 3D floor plans. Bring your dream project to life with our professional services and download the designs for free." />
        <title>Free Home designs download | Plan My Spaces.com</title>
      </Helmet>
      <PcNavBar/>
      <CardList  cardsData = {galleryData} />
      <PopPupForm/>
      <MobileNavBar/>
      <FooterSection/>
      <SharePopup/>
    </div>
  )
}

export default GalleryPage