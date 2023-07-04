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
          The house elevation reflects the desired architectural style and lifestyle, be it modern, traditional, or contemporary.
Incorporating landscaping elements, such as trees, gardens, and pathways, enhances the overall integration with the surroundings.
Thoughtful selection of colors adds to the aesthetic appeal and cohesiveness of the house design.
A well-designed elevation prevents the risk of an unappealing appearance after construction.
By striving for visual harmony and considering the intended lifestyle, the house elevation plays a crucial role in achieving an attractive and inviting final outcome.
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
