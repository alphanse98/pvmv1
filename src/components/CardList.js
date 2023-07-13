import picture from "../assets/ali-moradi-y8e2n6eCXmo-unsplash (3).jpg" 
const CardList = () => {
    let arr = [3,4,5,6,7,8,9,0]
  return (
    <div className='CardList'>
        <div className="CardListSearch"></div>
        {arr.map((index,item) => (
            <div className='CardListCard' key={index}>
                <img src={picture} className="CardListImg"></img>
                <div className="CardListContent">
                    <h1>Heating</h1>
                    <p className="CardListPara">Lorem ipsum dolor sit amet, consectetur adipiscing eli</p>
                    <button className='HeaderDownloadBtn btnCetnre'>View Details</button>
                </div>
            </div>
        ))}
    </div>
  )
}

export default CardList