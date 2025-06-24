import React from 'react';
import { Link, NavLink } from 'react-router-dom';

const SideBar = ({ isOpen, onClose, navLinks }) => {
  return (
    <div
      className={`fixed top-0 left-0 h-full w-64 bg-white shadow-md z-50 transform transition-transform duration-300 ease-in-out ${
        isOpen ? 'translate-x-0' : '-translate-x-full'
      }`}
    >
      <div className="p-4 border-b border-gray-200 flex justify-end">
        {/* <h2 className="text-xl font-bold">Menu</h2> */}
        <button onClick={onClose} className="text-gray-600 hover:text-black text-xl">×</button>
      </div>
      <nav className="flex flex-col p-4 space-y-4">
        {navLinks.map((link, idx) => (
          <NavLink
            key={idx}
            to={link.href}
            className={({isActive})=>`not-only:text-black hover:underline custom-inria`+
            (isActive ? ' border-t-2 border-b-2 border-black ' : '')}
            onClick={onClose}
          >
            {link.label}
          </NavLink>
        ))}
      </nav>
    </div>
  );
};

export default SideBar;
