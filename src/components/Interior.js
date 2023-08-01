import interior1 from '../assets/interior1.jpeg'
import interior2 from '../assets/interior2.jpeg'
import interior3 from '../assets/interior3.jpeg'
import interior4 from '../assets/interior4.jpg'
import { useNavigate } from "react-router-dom";

function Interior() {
  const navigation = useNavigate()
    return (
      <div className="headerContainer">
        <section className="serviceFieldsFlex serviceFieldsOdd">
          <div className="serviceFields">
          <h1 className="serviceFieldsHeading fontFamily" id="Interior">Interior</h1>
            <p className="serviceFieldsParagraph oddParagraph">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
              libero ante, semper a lacus non, vulputate cursus mauris. Lorem
              ipsum dolor sit amet Lorem ipsum dolor sit amet, consectetur
              adipiscing elit. Aliquam libero ante, semper a lacus non, vulputate
              cursus mauris. Lorem ipsum dolor sit amet Lorem ipsum dolor sit
              amet, consectetur adipiscing elit. Aliquam libero ante, semper a
              lacus non, vulputate cursus mauris. Lorem ipsum dolor sit amet Lorem
              ipsum dolor sit amet, consectetur adipiscing elit. Aliquam libero
              ante, semper a lacus non, vulputate cursus mauris. Lorem ipsum dolor
              sit amet
            </p>
            <button className='HeaderDownloadBtn btnCetnre' onClick={()=>navigation("/gallery")}>View More</button>
          </div>
          <div className="serviceFieldsImgBOx">
              <div className='serviceFieldsImgFlexOne'>
                  <img src={interior1} className='serviceFieldsImgs' alt='interior'></img>
                  <img src={interior2} className='serviceFieldsImgs' alt='interior1'></img>
              </div>
              <div className='serviceFieldsImgFlexTwo'>
                  <img src={interior3} className='serviceFieldsImgs' alt='interior1'></img>
                  <img src={interior4} className='serviceFieldsImgs' alt='interior1'></img>
              </div>
          </div>
        </section>
      </div>
    );
  }
  
  export default Interior;
  


