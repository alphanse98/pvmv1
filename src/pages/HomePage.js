import Header from "../components/Header";
import Services from "../components/Services";
import Plan from "../components/Plan";
import Elevation from "../components/Elevation";
import Interior from "../components/Interior";
import FloorPlan from "../components/FoorPlan";
import FooterSection from "../components/FooterSection";
import WalkThrough from "../components/WalkThrough";
import Gallery from "../components/Gallery" 
import PopPupForm from "../components/PopPupForm";
import MobileNavBar from "../components/MobileNavBar";
import {Helmet} from "react-helmet";

// import FileUploadComponent from "../components/FileUploadComponent";
// import Upload from "../components/Upload";
// import FileUploader from "../components/FileUploader";

function HomePage() {
    return (
      <div>
        <Helmet>
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <meta name="theme-color" content="#000000" />
          <meta name="description" content="Download free plans for architecture visualization, including home plans, elevation designs, interior designs, and 3D floor plans. Bring your dream project to life with our professional services." />
          <meta name="keywords" content="free plans, architecture visualization, home plans, elevation designs, interior designs, 3D floor plans" />
          <meta property="og:title" content="Download Free Plans for Architecture Visualization" />
          <meta property="og:description" content="Download free plans for architecture visualization, including home plans, elevation designs, interior designs, and 3D floor plans. Bring your dream project to life with our professional services." />
          <title>plan my spaces.com</title>
      </Helmet>
        {/* <Upload/> */}
        <Header/>
        <Gallery/>
        <Services/> 
        <Plan/>
        <Elevation/>
        <FloorPlan/>
        <Interior/>
        <WalkThrough/>
        <FooterSection/>
        {/* comman componetns */}
        <PopPupForm/>
        <MobileNavBar/>
      </div>
    );
  }
  
  export default HomePage;
  