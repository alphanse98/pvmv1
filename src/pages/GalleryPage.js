import React from 'react';
import CardList from '../components/CardList';
import MobileNavBar from '../components/MobileNavBar';
import PopPupForm from "../components/PopPupForm";
import FooterSection from "../components/FooterSection"

const GalleryPage = () => {
  return (
    <div>
      <CardList/>
      <PopPupForm/>
      <MobileNavBar/>
      <FooterSection/>
    </div>
  )
}

export default GalleryPage