import React, { useEffect, useState } from 'react'
import CardList from "../components/CardList"
import FooterSection from "../components/FooterSection";
import MobileNavBar from '../components/MobileNavBar';
import PcNavBar from '../components/PcNavBar';
import SharePopup from '../components/SharePopup';
import PopPupForm from '../components/PopPupForm';
import { useSearchParams } from 'react-router-dom';
import axios from 'axios';
import {Helmet} from "react-helmet";


const SearchPage = () => {
  const [searchParams, ] = useSearchParams();
  const [cardData, setCardData] = useState([]);
  const pathname = window.location.pathname
  const urlPathOne = pathname.split("/")[1]

  const getSeachData = async(apiUrl)=>{
    try{
        const res = await axios.get(apiUrl)
        setCardData(res.data)
        }catch(error){
        console.log("error",error)
      }
  }

  // if user in plan page pass plan search url and search data to getSeachData for api call
  //                               (or)
  // if gallery in plan gallery pass plan search url and search data to getSeachData for api call

  useEffect(()=>{
    let searchData = searchParams.get("search") 
    if(urlPathOne === "plans"){
      getSeachData("http://localhost:4000/api/plan/search/"+searchData)
    }else if(urlPathOne ==="gallery"){
      getSeachData("http://localhost:4000/api/gallery/search/"+searchData)
    }
  },[searchParams, urlPathOne])

  return (
    <div>
        <Helmet>
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <meta name="theme-color" content="#000000" />
          <meta name="description" content="Discover your perfect architectural design with our powerful search tool. Browse through a vast collection of home plans, elevation designs, interior designs, and 3D floor plans. Find the ideal plan that suits your requirements and bring your dream project to life with our professional services." />
          <meta name="keywords" content="architectural design search, home plans, elevation designs, interior designs, 3D floor plans, find the perfect plan, professional services" />
          <meta property="og:title" content="Architectural Design Search | Find Your Perfect Plan" />
          <meta property="og:description" content="Discover your perfect architectural design with our powerful search tool. Browse through a vast collection of home plans, elevation designs, interior designs, and 3D floor plans. Find the ideal plan that suits your requirements and bring your dream project to life with our professional services." />
          <title>Search Architectural Designs | Plan My Spaces</title>
        </Helmet>
        <PcNavBar/>
        <CardList cardsData = {cardData}/>
        <SharePopup/>
        <PopPupForm/>
        <MobileNavBar/>
        <FooterSection/>
    </div>
  )
}

export default SearchPage