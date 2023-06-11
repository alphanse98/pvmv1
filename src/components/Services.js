import plan from '../assets/plan.png'


function Services() {
    return (
      <div className="headerContainer">
        <section className="serviceSection">
            <hi className="serviceHeading fontFamily">Services</hi> 
            <div className="serviceBoxs">
                <div className="serviceBox">
                    <img src={plan} className='serviceBoxIcon'></img>
                    <p className='sevixeBoxP '>2D Plan</p>
                </div>
                <div className="serviceBox">
                    <img src={plan} className='serviceBoxIcon'></img>
                    <p className='sevixeBoxP '>Elevation</p>
                </div>
                <div className="serviceBox">
                    <img src={plan} className='serviceBoxIcon'></img>
                    <p className='sevixeBoxP '>3D floor PLan</p>
                </div>
                <div className="serviceBox">
                    <img src={plan} className='serviceBoxIcon'></img>
                    <p className='sevixeBoxP '>2D Plan</p>
                </div>
                <div className="serviceBox">
                    <img src={plan} className='serviceBoxIcon'></img>
                    <p className='sevixeBoxP '>2D Plan</p>
                </div>
            </div>

        </section>
      </div>
    );
  }
  
  export default Services;
  