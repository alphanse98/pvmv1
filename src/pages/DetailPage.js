import React, { useEffect, useState } from 'react'
import Details from "../components/Details"
import CardList from "../components/CardList"
import FooterSection from "../components/FooterSection"
import MobileNavBar from '../components/MobileNavBar'
// import { useSelector } from "react-redux";
import { useLocation, useParams } from 'react-router-dom';
import axios from 'axios'



export const DetailPage = () => {

  const { id } = useParams();
  const {pathname} = useLocation()
  const urlPath = pathname.split("/")[1]
  const [detailsData, setDetailsData] = useState();
  const [cardsData, setCardsData] = useState([])

 
  const getdetailsData =  async (apiById,) => {
        try {
          const res = await axios.get(apiById+id)
          setDetailsData(res?.data)
          const resCards = await axios.get(apiById)
          setCardsData(resCards?.data)
        } catch (error) {
          console.log(error)
        }
  }

  useEffect(()=>{
    if(urlPath === "gallery"){
      getdetailsData("http://localhost:4000/api/gallery/", )
    }else{
      console.log(" api call")
    }
  },[])

  if(!detailsData) return <div>Loading</div>

  return (
    <div>
        <Details detailsData ={detailsData} />
        <CardList cardsData ={cardsData}/>
        <MobileNavBar/>
        <FooterSection/>
    </div>
  )
}
