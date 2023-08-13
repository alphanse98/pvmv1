import galleryIcon from "../assets/solar_gallery-bold.svg"
import HomeIcon from "../assets/homeicon.svg"
import planIcon from "../assets/planIcon.svg"
import aboutIcon from "../assets/aboutIcon.svg"
import { useNavigate, useLocation } from "react-router-dom";

const MobileNavBar = () => {
    const navigation = useNavigate()
    const  {pathname}  = useLocation();
    const urlPathOne = pathname.split("/")[1]

  return (
    <div className='MobileNavBar'>
        <img src={HomeIcon} className={urlPathOne==="" ?  "navActive MobileNavBarIcons" : "MobileNavBarIcons"} onClick={()=>navigation("/")} alt="m"></img>
        <img src={galleryIcon} className={urlPathOne==="gallery" ?  "navActive MobileNavBarIcons" : "MobileNavBarIcons"} onClick={()=>navigation("/gallery")}  alt="m"></img>
        <img src={planIcon} className={urlPathOne==="plans" ?  "navActive MobileNavBarIcons" : "MobileNavBarIcons"} onClick={()=>navigation("/plans")}  alt="m"></img>
        <img src={aboutIcon} className={urlPathOne==="about" ?  "navActive MobileNavBarIcons" : "MobileNavBarIcons"} onClick={()=>navigation("/about")}  alt="m"></img>
    </div>
  )
}
export default MobileNavBar