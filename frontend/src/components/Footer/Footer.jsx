import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="custom-newsreader px-4 md:px-20 py-10 mt-10 relative">
      <div className="border-t border-black text-[#a4a4a4] flex flex-col md:flex-row justify-between items-center gap-4 pt-10 pb-6 text-center md:text-left">
        <p className="text-sm">HOME</p>
        <div
          className="text-sm cursor-pointer hover:underline"
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        >
          BACK TO TOP
        </div>
        <p className="text-sm">TEAM</p>
      </div>

      <div className="mt-6 grid grid-cols-1 md:grid-cols-3 items-center text-sm gap-y-4 text-center md:text-left">
        <p className="md:justify-self-start">
          &copy; {new Date().getFullYear()} MAGCOM. All rights reserved.
        </p>

        <div className="flex justify-center gap-3 items-center">
          <Link to="/">
            <img
              src="/src/assets/Instagram_black.svg"
              alt="Instagram"
              width={28}
              height={28}
              className="inline"
            />
          </Link>
          <Link to="/">
            <img
              src="/src/assets/Geo_black.svg"
              alt="Location"
              width={28}
              height={28}
              className="inline"
            />
          </Link>
          {['#04b5e5', '#fa4ebb', '#fad84e', '#000000'].map((color, index) => (
            <div
              key={index}
              className="rounded-full h-6 w-6"
              style={{ backgroundColor: color }}
            ></div>
          ))}
          <Link to="/">
            <img
              src="/src/assets/Mail_black.svg"
              alt="Mail"
              width={28}
              height={28}
              className="inline"
            />
          </Link>
        </div>

        <p className="md:justify-self-end whitespace-nowrap">
          Terms & Conditions, Privacy
        </p>
      </div>
    </footer>
  );
};

export default Footer;
