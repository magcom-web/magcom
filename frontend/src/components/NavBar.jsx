import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import SideBar from './Sidebar';

const navLinks = [
  { label: 'HOME', href: '/' },
  { label: 'ARTICLES', href: '/articles' },
  { label: 'TEAM', href: '/team' },
  { label: 'PREVIOUS EDITIONS', href: '/previous-editions' },
  { label: 'SGB RECORDS', href: '/sgb-records' },
  { label: 'EVENT GALLERY', href: '/event-gallery' },
  { label: 'DARK MODE', href: '/dark-mode' },
];

const NavBar = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <>
      <SideBar isOpen={sidebarOpen} onClose={() => setSidebarOpen(false)} navLinks={navLinks} />
      
      <div className='px-4 md:px-20'>
        <div className="relative flex items-center justify-center mt-8 px-3 pt-5">
          <button
            className="absolute top-7 left-4 focus:outline-none"
            aria-label="Toggle menu"
            onClick={() => setSidebarOpen(!sidebarOpen)}
          >
            <img
              src="/hamburger.svg"
              alt="Hamburger Menu"
              width={30}
              height={30}
              className="w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10"
            />
          </button>

          <h1 className="text-black text-4xl sm:text-6xl md:text-8xl text-center custom-imfell">
            MAG
            <img
              src="/logo.svg"
              alt="logo"
              width={50}
              height={50}
              className="inline pb-3 md:w-20 md:h-20 lg:w-30 lg:h-30"
            />
            COM
          </h1>
        </div>

        <p className="text-[#413E3E] text-base sm:text-xl md:text-2xl custom-inria mb-5 text-center">
          Lorem ipsum nibh dictumst iaculis kljsdk lskjflk k ksjd
        </p>

        <nav className="relative border-t border-b border-black custom-inria">
          <div className="hidden md:flex w-full justify-between items-center text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl h-12">
            {navLinks.map((link, index) => (
              <Link
                key={index}
                to={link.href}
                className="text-black transition-all duration-100 hover:border-t-4 hover:border-b-3 hover:border-black p-1.5"
                style={{ margin: 0 }}
              >
                {link.label}
              </Link>
            ))}
          </div>
        </nav>
      </div>
    </>
  );
};

export default NavBar;
