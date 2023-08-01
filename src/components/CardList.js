// import picture from "../assets/ali-moradi-y8e2n6eCXmo-unsplash (3).jpg" 
import ShareIcon from "../assets/ShareIcon.svg"
import DownloadIcon from "../assets/DownloadIcon.svg"
import { useNavigate, useLocation  } from "react-router-dom";




const CardList = ({cardsData}) => {
    const nav = useNavigate()
    const  {pathname}  = useLocation();
     const urlPath = pathname.split("/")[2]

    const navigation = (cardId)=>{
        if(urlPath){
            window.location.replace(cardId);
        }else{
            nav(pathname+"/detail/"+cardId)
        }
    }

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
                            <img src={ShareIcon} alt="ShareIcon"></img>
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