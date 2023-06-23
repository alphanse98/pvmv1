import Header from "../components/Header";
import Services from "../components/Services";
import Plan from "../components/Plan";
import Elevation from "../components/Elevation";
import Interior from "../components/Interior";
import FloorPlan from "../components/FoorPlan";
import FooterSection from "../components/FooterSection";
import WalkThrough from "../components/WalkThrough";
import Gallery from "../components/Gallery" 
import FileUploadComponent from "../components/FileUploadComponent";
import Upload from "../components/Upload";
// import FileUploader from "../components/FileUploader";
function HomePage() {
    return (
      <div>
        <Upload/>
        <Header/>
        <Gallery/>
        <Services/> 
        <Plan/>
        <Elevation/>
        <FloorPlan/>
        <Interior/>
        <WalkThrough/>
        <FooterSection/>
      </div>
    );
  }
  
  export default HomePage;
  