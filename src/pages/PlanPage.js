import CardList from '../components/CardList';
import MobileNavBar from '../components/MobileNavBar';
import PopPupForm from "../components/PopPupForm";
import FooterSection from "../components/FooterSection"
import PcNavBar from '../components/PcNavBar';
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import SharePopup from '../components/SharePopup';
import {Helmet} from "react-helmet";





export const PlanPage = () => {

  const [planData, setPlanData]= useState([])

  const getGalleryData = async ()=>{
    try {
      const res = await axios.get("http://localhost:4000/api/plan")
      // const res = await axios.get("https://plantest.onrender.com/api/plan")
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
      <Helmet>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#000000" />
        <meta name="description" content="Download free plans for architecture visualization, including home plans, elevation designs, interior designs, and 3D floor plans. Bring your dream project to life with our professional services." />
        <meta name="keywords" content="free plans, architecture visualization, home plans, elevation designs, interior designs, 3D floor plans" />
        <meta property="og:title" content="Download Free Plans for Architecture Visualization" />
        <meta property="og:description" content="Download free plans for architecture visualization, including home plans, elevation designs, interior designs, and 3D floor plans. Bring your dream project to life with our professional services." />
        <title>plans free download</title>
      </Helmet>
      <PcNavBar/>
      <CardList cardsData = {planData}/>
      <PopPupForm/>
      <SharePopup/>
      <MobileNavBar/>
      <FooterSection/>
    </div>
  )
}
