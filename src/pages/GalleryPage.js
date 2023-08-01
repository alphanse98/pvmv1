import React, { useEffect, useState } from 'react';
import CardList from '../components/CardList';
import MobileNavBar from '../components/MobileNavBar';
import PopPupForm from "../components/PopPupForm";
import FooterSection from "../components/FooterSection"
import SharePopup from '../components/SharePopup';
import PcNavBar from "../components/PcNavBar"
import axios from 'axios';


const GalleryPage = () => {

  const [galleryData, setGalleryData]= useState([])

  

  const getGalleryData = async ()=>{
    try {
      const res = await axios.get("http://localhost:4000/api/gallery")
      // const res = await axios.get("https://plantest.onrender.com/api/gallery")
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