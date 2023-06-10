import background from '../assets/Group 304.png'

function Header() {
  return (
   <header>
   
   <div className='HeaderBoxOne'>
        <p className="headerPara fontFamily">Plan My Spaces.com</p>
        <h1 className="HeaderHeading fontFamily">Perfect Plan for your</h1>
        <h2 className="HeaderHeadingTwo fontFamily">Dream Home</h2>
        <h3 className="HeaderHeadingThree ">Get your model plan Rs 1</h3>
        <div className="HeadarBtns">
        <button className="HeaderDownloadBtn">Download Free Plan</button>
        <button className="HeaderEnquriryBtn">Make Enquriry</button>
        </div>
    </div>

    <div className='HeaderBoxTwo'>
        <img src={background}></img>
    </div>

   </header>
  );
}

export default Header;
