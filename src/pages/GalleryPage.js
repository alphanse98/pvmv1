import React from 'react'
import CardList from '../components/CardList'
import MobileNavBar from '../components/MobileNavBar'
import PopPupForm from "../components/PopPupForm";

const GalleryPage = () => {
  return (
    <div>
      <CardList/>
      <MobileNavBar/>
      <PopPupForm/>
    </div>
  )
}

export default GalleryPage