import React from 'react'
import searchIcon from "../assets/SearchIcon.svg"


const PcNavBar = () => {

  return (
    <div>
        <div className="CardListSearch">
            <nav className="CardListSearch-custom">
                <ul className='navBar '>
                    <li><a href="/" className='fontFamily'>Home</a></li>
                    <li><a href="/gallery" className='fontFamily'>Gallery</a></li>
                    <li><a href="/plans" className='fontFamily'>Plan</a></li>
                    <li><a href="/About" className='fontFamily'>About</a></li>
                </ul>   
            </nav>
            {/* search input  */}
            <div className="CardListSearch-position">
                <input className='CardListSearchInput' placeholder="search"></input>
                <div className="searchIcon">
                    <img src={searchIcon} className="searchIconImg"></img>
                </div>
                <button className="CardListBtn CardListSearch-btn">Search</button>
            </div>  
        </div>
    </div>
  )
}

export default PcNavBar