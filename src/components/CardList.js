// import picture from "../assets/ali-moradi-y8e2n6eCXmo-unsplash (3).jpg" 
import ShareIcon from "../assets/ShareIcon.svg"
import DownloadIcon from "../assets/DownloadIcon.svg"
import { useNavigate, useLocation  } from "react-router-dom";
import {useDispatch,  } from "react-redux";
import { shareFormAction } from "../Redux/shareFormSlice";


const CardList = ({cardsData}) => {

    const nav = useNavigate()
    const dispatch = useDispatch();
    const origin = window.location.origin
    const  {pathname}  = useLocation();
    const urlPathOne = pathname.split("/")[1]
    const urlPathTwo = pathname.split("/")[2]

    // example 
    // http://localhost:3000/gallery/detail/64c8d21e23643e65ca974369
    //pathname =/gallery/detail/64c8d21e23643e65ca974369
    // origin = http://localhost:3000
    // urlPathOne = gallery
    // urlPathTwo = detail

    // if url have id replace the id or if id dont have update the url 
    // like  http://localhost:3000/Gallery/detail/(id)

    const navigation = (cardId)=>{
        if(urlPathTwo){
            // replace url id only
            window.location.replace(cardId);
            // window.location.replace("https://www.amazon.in/");
        }else{
            // update url like detail path and id
            nav(pathname+"/detail/"+cardId)
        }
    }

    // active the sahre popup and update the url to redux
    const sharePopup = (id) => {
        const shareUrl = origin+"/"+urlPathOne+"/detail/"+id
        dispatch(shareFormAction({formActive:true, url:shareUrl}));
    };

  return (
    <div className="headerContainer">
        <div className='CardList'>
            {cardsData?.map((item, index) => (
                <div className='CardListCard' key={index}>
                    <div className="CardListImg">
                        <img src={item?.imgLocations[0]?.img} alt={item?.imgLocations[0]?.alt}></img>
                        <div className="ShareIcon">
                        {/* <a href="https://planmyspace2dplans.s3-ap-south-1.amazonaws.com/Alphanse-developer-resume.pdf" download>
                            aaaa
                        </a> */}
                            <img src={DownloadIcon} alt="DownloadIcon"></img>
                            <img src={ShareIcon} alt="ShareIcon" onClick={()=>sharePopup(item?._id)}></img>
                        </div>
                    </div>
                    <div className="CardListContent">
                        <h1 className="CardListHeating fontFamily">{item?.heading}</h1>
                        <p className="CardListPara fontFamily">{item?.content}</p>
                        <button className='CardListBtn  btnCetnre'onClick={()=>navigation(item?._id)}>View Details</button>
                    </div>
                </div>
            ))}
        </div>
    </div>
  ) 
}

export default CardList