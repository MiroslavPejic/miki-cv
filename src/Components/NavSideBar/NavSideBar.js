import React from 'react';
import { 
    useRef, 
    useState, 
    useEffect } from 'react';

import PropTypes from 'prop-types';

import './NavSideBar.css';

import {
    BiBook, 
    BiUserCircle,
    BiLogOut,
    BiSearch
} from 'react-icons/bi';

import {
    MdOutlineSubject, 
    MdOutlineDashboard
} from 'react-icons/md';

export const NavSideBar =({  }) => {

    //let sidebar = document.querySelector(".sidebar");
    //let closeBtn = document.querySelector("#btn");
    const sidebarRef = useRef(null);
    const closeBtnRef = useRef(null);
    //let searchBtn = document.querySelector(".bx-search");

    React.useEffect(() => {
    }, [])

    const menuBtnChange = () => {
        if(sidebarRef.current.classList.contains("open")){
            console.log('hiding sidebar');
            sidebarRef.current.classList.remove("open");
          closeBtnRef.current.classList.replace("bx-menu", "bx-menu-alt-right");//replacing the iocns className
        }else {
            console.log('showing sidebar');
            sidebarRef.current.classList.add("open");
          closeBtnRef.current.classList.replace("bx-menu-alt-right","bx-menu");//replacing the iocns className
        }
    }
    
    return (
        <>
        <div className="sidebar" ref={sidebarRef}>
    <div className="logo-details">
      <i className='bx bxl-c-plus-plus icon'><MdOutlineSubject/></i>
        <div className="logo_name">Menu</div>
        <i className='bx bx-menu' 
            id="btn" 
            ref={closeBtnRef}
            onClick={() => {
                console.log('clicked btn')
                menuBtnChange();
            }}>
                <MdOutlineSubject/>
        </i>
    </div>
    <ul className="nav-list">
      <li>
          <i className='bx bx-search' ><BiSearch/></i>
         <input type="text" placeholder="Search..."/>
         <span className="tooltip">Search</span>
      </li>
      <li>
        <a href="#">
          <i className='bx bx-grid-alt'><MdOutlineDashboard/></i>
          <span className="links_name">Dashboard</span>
        </a>
         <span className="tooltip">Dashboard</span>
      </li>
      <li>
       <a href="#">
         <i className='bx bx-user' ><BiUserCircle/></i>
         <span className="links_name">User</span>
       </a>
       <span className="tooltip">User</span>
     </li>
     <li className="profile">
         <div className="profile-details">
           <div className="name_job">
             <div className="name">Miki Pejic</div>
             <div className="job">Software developer</div>
           </div>
         </div>
         <i className='bx bx-log-out' id="log_out" ><BiLogOut/></i>
     </li>
    </ul>
  </div>
  </>
    )
}

NavSideBar.propTypes = {

}