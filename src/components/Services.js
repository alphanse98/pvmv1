import plan from '../assets/plan.png'


function Services() {
    return (
      <div className="headerContainer">
        <section className="serviceSection">
            <hi className="serviceHeading fontFamily">Services</hi> 
            <div className="serviceBoxs">
                <div className="serviceBox">
                    <img src={plan}></img>
                    <p>2d PLan</p>
                </div>
            </div>

        </section>
      </div>
    );
  }
  
  export default Services;
  