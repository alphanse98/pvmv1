import React from 'react'
import CardList from "../components/CardList"
import FooterSection from "../components/FooterSection";
import MobileNavBar from '../components/MobileNavBar';
import PcNavBar from '../components/PcNavBar';
import SharePopup from '../components/SharePopup';
import PopPupForm from '../components/PopPupForm';
// import axios from 'axios';


const SearchPage = () => {
  return (
    <div>
        <CardList />
        <SharePopup/>
        <PopPupForm/>
        <MobileNavBar/>
        <PcNavBar/>
        <FooterSection/>
    </div>
  )
}

export default SearchPage