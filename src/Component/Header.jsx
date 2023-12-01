import React from "react";

const Header = () => {
  return (
    <div className="navbar bg-base-100 px-10">
    <div className="navbar-start">
      <div className="dropdown">
        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
        </div>
        <ul className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
        <li><a>Statistics</a></li>
        <li>
          <a href="">Applied Jobs</a>
        </li>
        <li><a>Blogs</a></li>
        </ul>
      </div>
      <a className="btn btn-ghost text-xl">daisyUI</a>
    </div>
    <div className="navbar-center hidden lg:flex">
      <ul className="menu menu-horizontal px-1">
        <li><a>Statistics</a></li>
        <li>
          <a>Applied Jobs</a>
        </li>
        <li><a>Blogs</a></li>
      </ul>
    </div>
    <div className="navbar-end">
      <a className="btn bg-custom-color">Start Applying</a>
    </div>
  </div>
  );
};

export default Header;
