import { useNavigate } from "react-router-dom";


function WalkThrough() {
  const navigation = useNavigate()

  return (
    <div className="headerContainer">
      <section className="WalkThroughSection">
          <h1 className="serviceFieldsHeading fontFamily" id="WalkTrough">Walk Trough</h1>
          <p className="serviceFieldsParagraph WalkThroughParagrap">    
            Welcome to our Walk Through (animation) service! We excel in creating captivating 3D animations that bring your spaces to life with creativity and precision. Our expert team ensures personalized solutions, attention to detail, and meticulous planning for a seamless visual experience. Prices start from 1999, making it an affordable choice for elevating your projects. Contact us now to add immersive animation to your designs and impress your clients or audience.
          </p>
          <button className='HeaderDownloadBtn btnCetnre' onClick={()=>navigation("/gallery")}>View More</button>
          <div className="WalkThroughVedio">
          <iframe width="100%" height="100%" src="https://www.youtube.com/embed/QR2I1tSbWc0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
          </div>
      </section>
    </div>
  );
}

export default WalkThrough;