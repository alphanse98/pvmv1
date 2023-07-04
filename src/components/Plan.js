import plan from '../assets/floor plan1.jpeg'


function Plan() {
  return (
    <div className="headerContainer">
      <section className="serviceFieldsFlex">
        <div className="serviceFields">
        <h1 className="serviceFieldsHeading fontFamily">2D plan</h1>

          <p className="serviceFieldsParagraph">
          The 2D plan depicts the fundamental layout of a property, facilitating efficient space planning to maximize functionality and make the best use of the available space. Our team will meticulously design a 2D plan, meticulously aligning all relevant structures, adhering to Vastu principles, and incorporating elements from nature. Ensuring precise representation of proportions and sizes is crucial, particularly in areas where congestion may be a concern.
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
      {/* <button className='HeaderDownloadBtn btnCetnre'>Viwe More</button> */}
    </div>
  );
}

export default Plan;
