import React from 'react'
import '../styles/main.css';


function Header() {
  return (
    <div className="">
      <header className={headerStyles}>
          <i className={'fas fa-search text-xl' + iconStyles}  ></i>
          <h1 href="https://salmane.me" className={logoStyles} >My Duty  </h1>
          <i className={'fas fa-plus  text-xl' + iconStyles} ></i>
      </header>
    </div>
  );
}

//tailwind css styling classes variables
const iconStyles= ' my-auto cursor-pointer mx-2 text-gray-400 hover:text-white transition duration-300 ease-in-out'
const logoStyles= ' text-3xl font-extrabold cursor-pointer '
const headerStyles= ' flex p-2 bg-gradient-to-r from-teal-400 to-blue-500 justify-between '

export default Header;
