import floorPLan1 from '../assets/floorplan1.jpeg'
import floorPLan2 from '../assets/floorplan2.jpeg'
import floorPLan3 from '../assets/floorplan3.jpeg'
import floorPLan4 from '../assets/floorplan4.jpeg'


function FloorPlan() {
  return (
    <div className="headerContainer">
      <section className="serviceFieldsFlex">
        <div className="serviceFields">
        <h1 className="serviceFieldsHeading fontFamily">3D Floor Plan</h1>

          <p className="serviceFieldsParagraph">
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
