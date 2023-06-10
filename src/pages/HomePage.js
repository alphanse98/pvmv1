import Header from "../components/Header";
import Services from "../components/Services";
import FileUploader from "../components/FileUploader";
function HomePage() {
    return (
      <div className="App">
        <Header/>
        <Services/>
        {/* <FileUploader/> */}
      </div>
    );
  }
  
  export default HomePage;
  