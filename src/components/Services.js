import plan from '../assets/mdi_floor-plan.svg'
import elevation from '../assets/ElevationIcon.svg'
import Interior from '../assets/interiorIcon.svg'
import WalkTrough from '../assets/ph_video.svg'


function Services() {
    return (
      <div className="headerContainer">
        <section className="serviceSection">
            <hi className="serviceHeading fontFamily" id="Services">Services</hi> 
            <div className="serviceBoxs">
                <a className="serviceBox" href="#plan">
                    <img src= {require("../assets/elevation1.jpeg")} className='serviceBoxIcon' alt=''></img>
                    <p className='sevixeBoxP '>2D Plan</p>
                </a>
                <a className="serviceBox" href="#Elevation">
                    <img src={elevation} className='serviceBoxIcon' alt=''></img>
                    <p className='sevixeBoxP ' >Elevation</p>
                </a>
                <a className="serviceBox" href="#Interior">
                    <img src={Interior} className='serviceBoxIcon' alt=''></img>
                    <p className='sevixeBoxP '>Interior</p>
                </a>
                <a className="serviceBox" href="#3Dplan">
                    <img src={plan} className='serviceBoxIcon' alt=''></img>
                    <p className='sevixeBoxP '>3D Plan</p>
                </a>
                <a className="serviceBox" href='#WalkTrough'>
                    <img src={WalkTrough} className='serviceBoxIcon' alt=''></img>
                    <p className='sevixeBoxP '>Walk Trough</p>
                </a>
            </div>
        </section>
      </div>
    );
  }
  
  export default Services;
  