import Header from "../components/Header";
import Services from "../components/Services";
import Plan from "../components/Plan";
import Elevation from "../components/Elevation";
import Interior from "../components/Interior";
import FloorPlan from "../components/FoorPlan";
import FooterSection from "../components/FooterSection";
// import FileUploader from "../components/FileUploader";
function HomePage() {
    return (
      <div className="App">
        <Header/>
        <Services/> 
        <Plan/>
        <Elevation/>
        <FloorPlan/>
        <Interior/>
        <FooterSection/>
      </div>
    );
  }
  
  export default HomePage;
  