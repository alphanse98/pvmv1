import plan from '../assets/floor plan1.jpeg'


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
                <img src={plan} className='serviceFieldsImgs' alt=''></img>
                <img src={plan} className='serviceFieldsImgs' alt=''></img>
            </div>
            <div className='serviceFieldsImgFlexTwo'>
                <img src={plan} className='serviceFieldsImgs' alt=''></img>
                <img src={plan} className='serviceFieldsImgs' alt=''></img>
            </div>
        </div>
      </section>
    </div>
  );
}

export default FloorPlan;
