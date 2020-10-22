import React, { useState, useEffect, useCallback } from "react";
import DropdownMenu from "../Navs/DropdownMenu";
import SearchOverlay from "../../elements/SearchOverlay";
import AttributeNav from "../Navs/AttributeNav";
import MainLogo from "../MainLogo";
import CartSearchTop from "../Navs/CartSearchTop";
import Icofont from "react-icofont"
const HeaderOne = ({ type }) => {
  const [show, setShow] = useState(false);
  const [fixed, setFixed] = useState(false);
  const [collapse, setCollapse] = useState(false);
  const [search,showSearch] = useState(false);
  const showMenu = () => {
    setCollapse(!collapse);
    const menu = document.getElementById("navbar-menu");
    collapse ? menu.classList.remove("in") : menu.classList.add("in");
  };

  const handleScroll = useCallback(() => {
    if (window.pageYOffset > 34) {
      setFixed(true);
    } else {
      setFixed(false);
    }
  }, []);

  const resizeForm = useCallback(() => {
    var wHeight = window.innerHeight;
    const searchForm = document.getElementById("fullscreen-searchform");
    searchForm.style.top = wHeight / 2 + "px";
  }, []);

  const showSearchForm = (e) => {
    e.preventDefault();
    setShow(true);
    resizeForm();
  };
  const showSearchnNav = (e) =>{
     e.preventDefault();
     if(search === true){
      showSearch(false)
     }
     else{
        showSearch(true)
     }
     //alert(search)
  }
  const hideSearchForm = (e) => {
    e.preventDefault();
    setShow(false);
  };

  useEffect(() => {
    window.addEventListener("resize", resizeForm);
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("resize", resizeForm);
      window.removeEventListener("scroll", handleScroll);
    };
  }, [resizeForm, handleScroll]);

  return (
    <>
      <nav
        className={
          "navbar navbar-default navbar-fixed white bootsnav on no-full " 
          +(fixed || type==="white" ? "" : "navbar-transparent")
        }
   
      >
       {
        <SearchOverlay show={show} onClick={hideSearchForm} />
       } 
       <div className={"divNav " +(fixed || type==="white" ? "navWhite":"")}>
        <div className="container navigation" >
          <AttributeNav>
           
           <ul>
             <li className="search">
              <a  href = "#" id="search-button" onClick={showSearchnNav}>
                <Icofont icon="search-1" />
              </a>
            </li>
                   </ul>
          </AttributeNav>
          <MainLogo showMenu={showMenu} />
          <DropdownMenu />
        </div> 
        <div style ={{borderTop: "1px solid rgba(255, 255, 255, 0.15)",height:"1px"}}></div>
        </div>
       
        <div className = {search == true ? "search-nav show" : "search-nav hide"} >
           <div className="input-group">
                <input placeholder="Search" type="search"  style={{ height: '48px' }} className="form-control"/>
                <span className="input-group-btn">
                <button className="btn btn-yellow btn-square" type="button">   <Icofont icon="search-1" /></button>
                </span>
                </div>
        </div>
      </nav>
    </>
  );
};

export default HeaderOne;
