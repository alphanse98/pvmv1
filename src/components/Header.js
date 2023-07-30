import background from '../assets/Group 304.png'
import { useDispatch, } from "react-redux";
import { fromActiveAction } from "../Redux/Slice";
import { useNavigate } from "react-router-dom";



function Header() {

    const dispatch = useDispatch()
    const navigation = useNavigate()
 
  return (
    <div className='headerContainer'>
   <header>
    
   <div className='HeaderBoxOne'>
   <nav>
        <ul className='navBar'>
            <li><a href="/" className='fontFamily'>Home</a></li>
            <li><a href="/plans" className='fontFamily'>Plan</a></li>
            <li><a href="#Gallery" className='fontFamily'>Gallery</a></li>
            <li><a href="#Services" className='fontFamily'>Services</a></li>
            <li><a href="/About" className='fontFamily'>About</a></li>
        </ul>   
    </nav>
        <div className='HeaderTexBox'>
            <p className="headerPara fontFamily">Plan My Spaces.com</p>
            <h1 className="HeaderHeading fontFamily">Perfect Plan for your</h1>
            <h2 className="HeaderHeadingTwo fontFamily">Dream Home</h2>
            <h3 className="HeaderHeadingThree ">Get your model plan Rs 1</h3>
            <div className="HeadarBtns">
            <button className="HeaderDownloadBtn" onClick={()=>navigation('/plans')}>Download Free Plan</button>
            <button className="HeaderEnquriryBtn" onClick={()=>dispatch(fromActiveAction(true))}>Make Enquriry</button>
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
