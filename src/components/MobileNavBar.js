import galleryIcon from "../assets/solar_gallery-bold.svg"
import HomeIcon from "../assets/homeicon.svg"
import planIcon from "../assets/planIcon.svg"
import aboutIcon from "../assets/aboutIcon.svg"
import { useNavigate } from "react-router-dom";

const MobileNavBar = () => {
    const navigation = useNavigate()
  return (
    <div className='MobileNavBar'>
        <img src={HomeIcon} className="MobileNavBarIcons" onClick={()=>navigation("/")} alt="m"></img>
        <img src={galleryIcon} className="MobileNavBarIcons" onClick={()=>navigation("/gallery")}  alt="m"></img>
        <img src={planIcon} className="MobileNavBarIcons" onClick={()=>navigation("/plan")}  alt="m"></img>
        <img src={aboutIcon} className="MobileNavBarIcons" onClick={()=>navigation("/about")}  alt="m"></img>
    </div>
  )
}
export default MobileNavBar