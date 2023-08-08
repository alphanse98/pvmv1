import floorPLan1 from '../assets/floorplan1.jpeg'
import floorPLan2 from '../assets/floorplan2.jpeg'
import floorPLan3 from '../assets/floorplan3.jpeg'
import floorPLan4 from '../assets/floorplan4.jpeg'
import { useNavigate } from "react-router-dom";



function FloorPlan() {
  const navigation = useNavigate()

  return (
    <div className="headerContainer">
      <section className="serviceFieldsFlex">
        <div className="serviceFields">
        <h1 className="serviceFieldsHeading fontFamily" id="3Dplan">3D Floor Plan</h1>

          <p className="serviceFieldsParagraph">
          Welcome to our exceptional 3D floor plan service! We take pride in offering expertly crafted floor plans that bring your vision to life with creativity and precision. Our team ensures accurate and detailed representations of your space, allowing you to visualize the design effectively.  Contact us now to transform your ideas into stunning 3D floor plans and elevate your project to new heights of excellence and innovation. Prices start from $1999.         </p>
          <button className='HeaderDownloadBtn btnCetnre' onClick={()=>navigation("/gallery")}>View More</button>
        </div>
        <div className="serviceFieldsImgBOx">
            <div className='serviceFieldsImgFlexOne'>
                <img src={floorPLan1} className='serviceFieldsImgs' alt=''></img>
                <img src={floorPLan2} className='serviceFieldsImgs' alt=''></img>
            </div>
            <div className='serviceFieldsImgFlexTwo'>
                <img src={floorPLan3} className='serviceFieldsImgs' alt=''></img>
                <img src={floorPLan4} className='serviceFieldsImgs' alt=''></img>
            </div>
        </div>
      </section>
    </div>
  );
}

export default FloorPlan;
