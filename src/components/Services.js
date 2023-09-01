
function Services() {
    return (
      <div className="headerContainer">
        <section className="serviceSection">
            <hi className="serviceHeading fontFamily" id="Services">Services</hi> 
            <div className="serviceBoxs">
                <a className="serviceBox" href="#plan">
                    <img src= {require("../assets/floor plan1.png")} className='serviceBoxIcon' alt=''></img>
                    <p className='sevixeBoxP '>2D Plan</p>
                    <p className='priceBox'><s className='fontFamily priceBox'>Rs.3000</s><span className='fontFamily priceBox'>Rs.999</span></p>
                </a>
                <a className="serviceBox" href="#Elevation">
                    <img src= {require("../assets/GalleryImgs/elevation2.jpeg")} className='serviceBoxIcon' alt=''></img>
                    <p className='sevixeBoxP ' >Elevation</p>
                    <p className='priceBox'><s className='fontFamily priceBox'>Rs.5000</s><span className='fontFamily priceBox'>Rs.1999</span></p>

                </a>
                <a className="serviceBox" href="#Interior">
                    <img src= {require("../assets/interior1.jpeg")} className='serviceBoxIcon' alt=''></img>
                    <p className='sevixeBoxP '>Interior</p>
                    <p className='priceBox'><s className='fontFamily priceBox'>Rs.5000</s><span className='fontFamily priceBox'>Rs.1999</span></p>

                </a>
                <a className="serviceBox" href="#3Dplan">
                    <img src= {require("../assets/floorplan2.jpeg")} className='serviceBoxIcon' alt=''></img>
                    <p className='sevixeBoxP '>3D Plan</p>
                    <p className='priceBox'><s className='fontFamily priceBox'>Rs.3000</s><span className='fontFamily priceBox'>Rs.1500</span></p>

                </a>
                <a className="serviceBox" href='#WalkTrough'>
                    <img src= {require("../assets/elevation2.jpeg")} className='serviceBoxIcon' alt=''></img>
                    <p className='sevixeBoxP '>Walk Trough</p>
                    <p className='priceBox'><s className='fontFamily priceBox'>Rs.4000</s><span className='fontFamily priceBox'>Rs.1999</span></p>
                </a>
            </div>
        </section>
      </div>
    );
}
  
export default Services;
  