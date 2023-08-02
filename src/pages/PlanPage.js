import CardList from '../components/CardList';
import MobileNavBar from '../components/MobileNavBar';
import PopPupForm from "../components/PopPupForm";
import FooterSection from "../components/FooterSection"
import PcNavBar from '../components/PcNavBar';
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import SharePopup from '../components/SharePopup';




export const PlanPage = () => {

  const [planData, setPlanData]= useState([])

  const getGalleryData = async ()=>{
    try {
      const res = await axios.get("http://localhost:4000/api/plan")
      // const res = await axios.get("https://plantest.onrender.com/api/gallery")
      setPlanData(res?.data) 
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
      <CardList cardsData = {planData}/>
      <PopPupForm/>
      <SharePopup/>
      <MobileNavBar/>
      <FooterSection/>
    </div>
  )
}
