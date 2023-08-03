import React, { useEffect, useState } from 'react'
import searchIcon from "../assets/SearchIcon.svg"
import { useSearchParams, useNavigate,  } from 'react-router-dom';

const PcNavBar = () => {

    const [searchParams, ] = useSearchParams();
    const [searchData, setSearchData] = useState("");
    const nav = useNavigate()
    const pathname = window.location.pathname
    const urlPathOne = pathname.split("/")[1]

    // https://www.youtube.com/watch?v=CZP1iQFQjEY
    useEffect(()=>{
         setSearchData(searchParams.get("search") || "") 
    },[searchParams])


    const searchFuction = ()=>{
        if(searchData)nav("/"+urlPathOne+"/search?search="+searchData) 
    } 

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
                <input className='CardListSearchInput' placeholder="search" value={searchData} onChange={(e)=>setSearchData(e.target.value)}></input>
                <div className="searchIcon">
                    <img src={searchIcon} className="searchIconImg" alt='searchIcon'></img>
                </div>
                <button className="CardListBtn CardListSearch-btn" onClick={()=>searchFuction()}>Search</button>
            </div>  
        </div>
    </div>
  )
}

export default PcNavBar