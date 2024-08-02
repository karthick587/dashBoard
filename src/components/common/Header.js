import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { FiSearch } from "react-icons/fi";
import { CiMail } from "react-icons/ci";
import { IoSettingsOutline } from "react-icons/io5";
import { FaRegBell } from "react-icons/fa";
import img from "../../assert/img/IMG_20200201_125937_513.jpg"
const Header = () => {
  return (
    <Navbar variant="dark" className=" nav-bg-dark">
      <div className='search-bar'>
        <div className='search-bar-input'>
          <FiSearch />
          <input
            placeholder="Search..."
          />
        </div>
      </div>
      <Nav className="ml-auto">
        <div >
          <div className='circle'>
            <CiMail />
          </div>
        </div>
        <div >
          <div className='circle'>
            <IoSettingsOutline />
          </div>
        </div>
        <div >
          <div className='circle'>
            <FaRegBell />
          </div>
        </div>
        <div >
          <div className='circle'>
            <img src={img} alt='Profile'  />
          </div>
        </div>
      </Nav>
    </Navbar>
  );
};

export default Header;
