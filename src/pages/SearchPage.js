import React, { useEffect, useState } from 'react'
import CardList from "../components/CardList"
import FooterSection from "../components/FooterSection";
import MobileNavBar from '../components/MobileNavBar';
import PcNavBar from '../components/PcNavBar';
import SharePopup from '../components/SharePopup';
import PopPupForm from '../components/PopPupForm';
import { useSearchParams } from 'react-router-dom';
import axios from 'axios';

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
  },[searchParams])

  return (
    <div>
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