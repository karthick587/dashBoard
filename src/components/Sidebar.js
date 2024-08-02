import React from 'react';
import { Nav } from 'react-bootstrap';
import { AiFillHome } from "react-icons/ai";
import { BiBarChartSquare } from "react-icons/bi";
import { LuClipboardCheck } from "react-icons/lu";
import { CiWallet } from "react-icons/ci";
import { IoBagCheckOutline } from "react-icons/io5";
import { BiSolidDashboard } from "react-icons/bi";
const Sidebar = () => {
  return (
    <div className="sidebar d-flex flex-column  nav-bg-dark text-white">
      <div className="logo mb-4"><BiSolidDashboard /></div>
      <Nav defaultActiveKey="/dashboard" className="flex-column">
        <Nav.Link href="#" active={true}  className="text-white" ><AiFillHome /></Nav.Link>
        <Nav.Link href="#" active={false}  className="text-white"><BiBarChartSquare /></Nav.Link>
        <Nav.Link href="#" active={false}  className="text-white"><LuClipboardCheck /></Nav.Link>
        <Nav.Link href="#" active={false}  className="text-white"><CiWallet /></Nav.Link>
        <Nav.Link href="#" active={false} className="text-white"><IoBagCheckOutline /></Nav.Link>
      </Nav>
    </div>
  );
};

export default Sidebar;
