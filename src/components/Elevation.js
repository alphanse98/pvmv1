import elevation1 from '../assets/elevation1.jpeg'
import elevation2 from '../assets/elevation2.jpeg'
import elevation3 from '../assets/elevation3.jpeg'
import elevation4 from '../assets/elevation4.jpeg'


function Elevation() {
  return (
    <div className="headerContainer">
      <section className="serviceFieldsFlex serviceFieldsOdd">
        <div className="serviceFields">
        <h1 className="serviceFieldsHeading fontFamily">Elevation</h1>
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
          <button className='HeaderDownloadBtn btnCetnre'>Viwe More</button>
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
