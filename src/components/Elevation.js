import elevation1 from '../assets/elevation1.jpeg'
import elevation2 from '../assets/elevation2.jpeg'
import elevation3 from '../assets/elevation3.jpeg'
import elevation4 from '../assets/elevation4.jpeg'
import { useNavigate } from "react-router-dom";



function Elevation() {
  const navigation = useNavigate()
  return (
    <div className="headerContainer">
      <section className="serviceFieldsFlex serviceFieldsOdd">
        <div className="serviceFields">
        <h1 className="serviceFieldsHeading fontFamily" id="Elevation">Elevation</h1>
          <p className="serviceFieldsParagraph oddParagraph">
          Welcome to our house elevation service! We specialize in creating captivating and functional exterior designs that reflect your preferred style while harmonizing with the surroundings. Our expert team ensures personalized solutions, compliance with regulations, and meticulous planning for a seamless construction process. Elevate the value and appeal of your property with our thoughtful and aesthetically pleasing elevation designs. Prices start from 1999 .
          </p>
          <button className='HeaderDownloadBtn btnCetnre' onClick={()=>navigation("/gallery")}>View More</button>
        </div>
        <div className="serviceFieldsImgBOx">
            <div className='serviceFieldsImgFlexOne'>
                <img src={elevation1} className='serviceFieldsImgs' alt=''></img>
                <img src={elevation2} className='serviceFieldsImgs' alt=''></img>
            </div>
            <div className='serviceFieldsImgFlexTwo'>
                <img src={elevation3} className='serviceFieldsImgs' alt=''></img>
                <img src={elevation4} className='serviceFieldsImgs' alt=''></img>
            </div>
        </div>
      </section>
    </div>
  );
}

export default Elevation;
