import React from 'react';
import { GoHome } from 'react-icons/go';
import { RiTimeLine } from 'react-icons/ri';
import { TfiStatsUp } from 'react-icons/tfi';
import { NavLink } from 'react-router';

const NavBar = () => {
const links = <>
<li><NavLink to={"/"} className={({isActive})=> `flex justify-center items-center gap-1 p-2  rounded-[5px] ${isActive ?"bg-[#244D3F] text-white " : "" }` }><GoHome />Home</NavLink></li>
<li><NavLink to={'/Timeline'} className={({isActive})=> `flex justify-center items-center gap-1 p-2  rounded-[5px] ${isActive ?"bg-[#244D3F] text-white " : "" }` } > <RiTimeLine />Timeline</NavLink></li>
    <li><NavLink to={'/Stats'} className={({isActive})=> `flex justify-center items-center gap-1 p-2  rounded-[5px] ${isActive ?"bg-[#244D3F] text-white " : "" }` } > <TfiStatsUp />Stats</NavLink>
</li>
</>


    return (

        
      <div className=' bg-base-100 shadow-sm'>
 <div className="navbar container mx-auto ">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
      </div>
      <ul
        tabIndex="-1"
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
        {links}
      </ul>
    </div>
   <NavLink to={'/'} className=" text-[#1F2937] text-xl font-bold">Keen<span className=' text-[#244D3F]'>Keeper</span></NavLink>
  </div>
  
  <div className="navbar-end hidden lg:flex  ">
    <NavLink to={"/"} className={({isActive})=> `flex justify-center items-center gap-1 p-2  rounded-[5px] ${isActive ?"bg-[#244D3F] text-white " : "" }` }><GoHome />Home</NavLink>
<NavLink to={'/Timeline'} className={({isActive})=> `flex justify-center items-center gap-1 p-2  rounded-[5px] ${isActive ?"bg-[#244D3F] text-white " : "" }` } > <RiTimeLine />Timeline</NavLink>
    <NavLink to={'/Stats'} className={({isActive})=> `flex justify-center items-center gap-1 p-2  rounded-[5px] ${isActive ?"bg-[#244D3F] text-white " : "" }` } > <TfiStatsUp />Stats</NavLink>


  </div>
</div> 

      </div>
    );
};

export default NavBar;