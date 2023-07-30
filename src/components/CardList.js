import picture from "../assets/ali-moradi-y8e2n6eCXmo-unsplash (3).jpg" 
import ShareIcon from "../assets/ShareIcon.svg"
import DownloadIcon from "../assets/DownloadIcon.svg"
import { useNavigate } from "react-router-dom";

const CardList = () => {
    let arr = [3,4,5,6,7,8,9,0,0,0,0,0,0,0,0,0,0,0,0]
    const navigation = useNavigate()


  return (
    <div className="headerContainer">
        {/* /plans/detail */}
        {/* <div className="CardListSearch">
            <nav className="CardListSearch-custom">
                <ul className='navBar '>
                    <li><a href="/" className='fontFamily'>Home</a></li>
                    <li><a href="/gallery" className='fontFamily'>Gallery</a></li>
                    <li><a href="/plan" className='fontFamily'>Plan</a></li>
                    <li><a href="/About" className='fontFamily'>About</a></li>
                </ul>   
            </nav>
            search input */}
            {/* <div className="CardListSearch-position">
                <input className='CardListSearchInput' placeholder="search"></input>
                <div className="searchIcon">
                    <img src={searchIcon} className="searchIconImg"></img>
                </div>
                <button className="CardListBtn CardListSearch-btn">Search</button>
            </div>  
        </div> */}

        <div className='CardList '>
            {arr.map((index) => (
                <div className='CardListCard' key={index}>
                    <div className="CardListImg">
                        <img src={picture} ></img>
                        <div className="ShareIcon">
                            <img src={DownloadIcon} ></img>
                            <img src={ShareIcon} ></img>
                        </div>
                    </div>
                    <div className="CardListContent">
                        <h1 className="CardListHeating fontFamily">Heating</h1>
                        <p className="CardListPara fontFamily">Lorem ipsum dolor sit amet, consectetur adipiscing eli  ;lmklkm kji  i</p>
                        <button className='CardListBtn  btnCetnre'onClick={()=>navigation("/plans/detail")}>View Details</button>
                    </div>
                </div>
            ))}
        </div>
    </div>
  ) 
}

export default CardList