import background from '../assets/Group 304.png'

function Header() {
  return (
    <div className='headerContainer'>
   <header>
    
   <div className='HeaderBoxOne'>
   <nav>
        <ul className='navBar'>
            <li><a href="default.asp" className='fontFamily'>Home</a></li>
            <li><a href="news.asp" className='fontFamily'>Services</a></li>
            <li><a href="contact.asp" className='fontFamily'>Galary</a></li>
            <li><a href="about.asp" className='fontFamily'>About</a></li>
        </ul>   
    </nav>
        <div className='HeaderTexBox'>
            <p className="headerPara fontFamily">Plan My Spaces.com</p>
            <h1 className="HeaderHeading fontFamily">Perfect Plan for your</h1>
            <h2 className="HeaderHeadingTwo fontFamily">Dream Home</h2>
            <h3 className="HeaderHeadingThree ">Get your model plan Rs 1</h3>
            <div className="HeadarBtns">
            <button className="HeaderDownloadBtn">Download Free Plan</button>
            <button className="HeaderEnquriryBtn">Make Enquriry</button>
            </div>
        </div>
    </div>

    <div className='HeaderBoxTwo'>
        <img src={background} className='HeaderImg' alt=''></img>
    </div>

   </header></div>
  );
}

export default Header;
