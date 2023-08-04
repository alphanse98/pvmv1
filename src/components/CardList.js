// import picture from "../assets/ali-moradi-y8e2n6eCXmo-unsplash (3).jpg" 
import ShareIcon from "../assets/ShareIcon.svg"
import DownloadIcon from "../assets/DownloadIcon.svg"
import { useNavigate, useLocation  } from "react-router-dom";
import {useDispatch,  } from "react-redux";
import { shareFormAction } from "../Redux/shareFormSlice";
import { detailAction } from "../Redux/DetailsDataSlice";


const CardList = ({cardsData}) => {

    const nav = useNavigate()
    const dispatch = useDispatch();
    const origin = window.location.origin
    const  {pathname}  = useLocation();
    const urlPathOne = pathname.split("/")[1]
    const urlPathTwo = pathname.split("/")[2]
    // example 
    // http://localhost:3000/gallery/detail/64c8d21e23643e65ca974369
    //  pathname =/gallery/detail/64c8d21e23643e65ca974369
    // origin = http://localhost:3000
    // urlPathOne = gallery
    // urlPathTwo = detail

    // (line 31) if use in detail page replace the id only
    // (line 33) if use in search page replace replace 
    // full url like search to detail for switch the page searchPage to detailPage
    // (line 35) if use in plan page or plan gallery  update url like detail path and id 

    const navigation =  (cardId,)=>{
        if(urlPathTwo === "detail"){
            window.location.replace(cardId);
        } else if(urlPathTwo === "search") {
            window.location.replace(origin+"/"+urlPathOne+"/detail/"+cardId)
        } else{
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
                        <button className='CardListBtn  btnCetnre'onClick={()=>navigation(item?._id, )}>View Details</button>
                    </div>
                </div>
            ))}
        </div>
    </div>
  ) 
}

export default CardList