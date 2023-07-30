import React from 'react';
import CardList from '../components/CardList';
import MobileNavBar from '../components/MobileNavBar';
import PopPupForm from "../components/PopPupForm";
import FooterSection from "../components/FooterSection"
import SharePopup from '../components/SharePopup';
import PcNavBar from "../components/PcNavBar"

const GalleryPage = () => {
  return (
    <div>
      <PcNavBar/>
      <CardList/>
      <PopPupForm/>
      <MobileNavBar/>
      <FooterSection/>
      <SharePopup/>
    </div>
  )
}

export default GalleryPage