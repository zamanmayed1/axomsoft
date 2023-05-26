import React, { useState } from 'react';
import logo from "../assets/logo.png"
const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const items = [
    {
      label: 'Home',
      url: '#',
    },
    
    {
      label: 'Services',
      url: 'services',
    },
    {
        label: 'About',
        url: '#',
      },
    {
      label: 'Contact',
      url: '#',
    },
  ];



  return (
  <nav className='w-full relative z-50'>
        <div className='max-w-[1440px] fixed  top-0 left-0 right-0 w-full mx-auto  p-3 bg-glass  rounded-xl flex justify-between items-center'>
              {/* logo */}
              <div>
                <img className='w-5/12' src={logo} alt="" />
              </div>
              {/* Menus */}
              <div className='flex gap-14 text-xl'>
                {
                  items.map((val,i) => <a href={val.url}>{val.label}</a>)
                }
              
              </div>
        </div>
  </nav>
  );
};

export default Navbar;
