import picture from "../assets/ali-moradi-y8e2n6eCXmo-unsplash (3).jpg" 
const CardList = () => {
    let arr = [3,4,5,6,7,8,9,0,0,0,0,0,0,0,0,0,0,0,0]
  return (
    <div className='CardList headerContainer'>
        <div className="CardListSearch"></div>
        {arr.map((index,item) => (
            <div className='CardListCard' key={index}>
                <img src={picture} className="CardListImg"></img>
                <div className="CardListContent">
                    <h1 className="CardListHeating fontFamily">Heating</h1>
                    <p className="CardListPara fontFamily">Lorem ipsum dolor sit amet, consectetur adipiscing eli  ;lmklkm kji  i</p>
                    <button className='CardListBtn  btnCetnre'>View Details</button>
                </div>
            </div>
        ))}
    </div>
  )
}

export default CardList