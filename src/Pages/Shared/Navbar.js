import React from 'react';
import { Link } from "react-router-dom";

const Navbar = () => {
  const menuItems= <>
    <li className='border rounded-lg mr-5'><Link to="/">To Do</Link></li>
    <li className='border rounded-lg mr-5'><Link to="/completed">Completed Tasks</Link></li>
    {/* <li><Link to="/todo">To-Do</Link></li> */}
    <li className='border rounded-lg'><Link to="/calendar">Calendar</Link></li>
  </>
  return (
    <div class="navbar bg-base-100">
  <div class="navbar-start">
    
    
  </div>
  <div class="navbar-center ">
    <ul class="menu menu-horizontal p-0">
      {menuItems}
    </ul>
  </div>
  <div class="navbar-end">
    
    
  </div>
</div>
  );
};

export default Navbar;