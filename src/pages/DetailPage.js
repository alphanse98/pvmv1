import React, { useEffect, useState, useCallback  } from 'react'
import Details from "../components/Details"
import CardList from "../components/CardList"
import FooterSection from "../components/FooterSection"
import MobileNavBar from '../components/MobileNavBar'
import { useLocation, useParams } from 'react-router-dom';
import axios from 'axios';
import SharePopup from '../components/SharePopup';
import PopPupForm from '../components/PopPupForm';
import {Helmet} from "react-helmet";


export const DetailPage = () => {

  const { id } = useParams();
  const {pathname} = useLocation()
  const urlPath = pathname.split("/")[1]
  const [detailsData, setDetailsData] = useState();
  const [cardsData, setCardsData] = useState([]);

  const getdetailsData = useCallback(async (apiById) => {
    try {
      const res = await axios.get(apiById + id);
      setDetailsData(res?.data);
      const resCards = await axios.get(apiById);
      setCardsData(resCards?.data);
    } catch (error) {
      console.log(error);
    }
  }, [id]);


  useEffect(()=>{
      if(urlPath === "gallery"){
        getdetailsData("http://localhost:4000/api/gallery/",)
      }else if(urlPath === "plans"){
        getdetailsData("http://localhost:4000/api/plan/",)
      }  
  },[getdetailsData, urlPath])

  if(!detailsData) return <div>Loading</div>

  return (
    <div>
        <Helmet>
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <meta name="theme-color" content="#000000" />
          <meta name="description" content= {detailsData?.seoDiscription} />
          <meta name="keywords" content= {detailsData?.seoKeyWords} />
          <meta property="og:title" content="Download Free Plans for Architecture Visualization" />
          <meta property="og:description" content="Download free plans for architecture visualization, including home plans, elevation designs, interior designs, and 3D floor plans. Bring your dream project to life with our professional services." />
          <title>{detailsData?.seoTitle} </title>
      </Helmet>
      <Details detailsData ={detailsData} />
      <CardList cardsData ={cardsData}/>
      <SharePopup/>
      <PopPupForm/>
      <MobileNavBar/>
      <FooterSection/>
    </div>
  )
}
