import React, { useState } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import SideBar from '../Sidebar/Sidebar';

const navLinks = [
  { label: 'HOME', href: '/' },
  { label: 'ARTICLES', href: '/articles' },
  { label: 'TEAM', href: '/team' },
  { label: 'PREVIOUS EDITIONS', href: '/previous-editions' },
  { label: 'SGB RECORDS', href: '/sgb-records' },
  { label: 'EVENT GALLERY', href: '/event-gallery' },
  { label: 'YEARBOOK', href: '/year_book' },
];

const NavBar = ({ onSearchIconClick }) => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const location = useLocation();

  // Show search icon only on /articles page
  const isArticlesPage = location.pathname === '/articles';

  return (
    <>
      <SideBar isOpen={sidebarOpen} onClose={() => setSidebarOpen(false)} navLinks={navLinks} />

      <div className="px-4 md:px-20">
        <div className="relative flex items-center justify-center mt-1 pt-3">
          <button
            className="absolute top-5 left-3 sm:top-5 sm:left-5 md:top-7 md:left-1 focus:outline-none"
            aria-label="Toggle menu"
            onClick={() => setSidebarOpen(!sidebarOpen)}
          >
            <img
              src="/src/assets/hamburger.svg"
              alt="Hamburger Menu"
              width={30}
              height={30}
              className="w-4 h-4 sm:w-8 sm:h-8 md:w-10 md:h-10"
            />
          </button>

          <h1 className="text-black text-3xl sm:text-6xl md:text-8xl text-center custom-imfell">
            MAG
            <img
              src="/src/assets/logo.svg"
              alt="logo"
              width={50}
              height={50}
              className="inline pb-3 w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20 lg:w-30 lg:h-30"
            />
            COM
          </h1>

          {/* Search Icon only on Articles page */}
          {isArticlesPage && (
            <button
              aria-label="Search Articles"
              onClick={onSearchIconClick}
              className="absolute top-5 right-5 md:top-7 md:right-7 focus:outline-none"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 sm:w-8 sm:h-8 md:w-10 md:h-10 text-black hover:text-gray-600"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M21 21l-4.35-4.35M16.65 16.65a7.5 7.5 0 10-10.6-10.6 7.5 7.5 0 0010.6 10.6z"
                />
              </svg>
            </button>
          )}
        </div>

        <p className="text-[#413E3E] text-xs sm:text-xl md:text-2xl custom-inria md:mb-5 mb-2 -mt-2 text-center">
          Lorem ipsum nibh dictumst iaculis kljsdk lskjflk k ksjd
        </p>

        <nav className="relative border-t border-b border-black custom-inria overflow-x-auto whitespace-nowrap">
          <div className="hidden md:flex w-full justify-between items-center text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl ">
            {navLinks.map((link, index) => (
              <NavLink
                key={index}
                to={link.href}
                className={({ isActive }) =>
                  `text-black transition-all duration-100 p-1.5 hover:border-t-4 hover:border-b-3 hover:border-black` +
                  (isActive ? ' border-t-4 border-b-3 border-black ' : '')
                }
                style={{ margin: 0 }}
              >
                {link.label}
              </NavLink>
            ))}
          </div>
        </nav>
      </div>
    </>
  );
};

export default NavBar;
