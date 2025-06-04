import React from 'react';
import NavBar from '../components/NavBar'; // Adjust path as needed

const Home = () => {
  return (
    <div className="bg-[#fdfcfb] text-black min-h-screen">
      <NavBar />

      {/* Grid Layout for Articles */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 px-6 md:px-20 py-10">

        {/* Left Side - SGB RECORDS */}
        <div className="space-y-4">
          <img
            src="/im"
            alt="SGB"
            className="w-full h-52 object-cover rounded"
          />
          <div>
            <p className="text-xs text-gray-600 font-semibold uppercase">SGB Records</p>
            <h3 className="text-lg font-bold">Lorem ipsum sed</h3>
            <p className="text-xs text-gray-500 mb-2">April 25</p>
            <p className="text-sm text-gray-700">
              Usu tantas omittantur ut, per te modo appetere senserit. Ei ius aperiam tincidunt,
              ea sit natum iisque repudiandae. Ea nec wisi facete.
              <br />Ex hinc rebum omittam his. Enim dolore meliore ea mea. Ius ei minim possit
              intellegat, an sea ornatus.
            </p>
            <p className="text-gray-500 mt-2 underline">Read More....</p>
          </div>
        </div>

        {/* Center - Featured Article */}
        <div className="space-y-4">
          <img
            src="/images/feature.jpg"
            alt="Featured Article"
            className="w-full h-64 object-cover rounded"
          />
          <div className="text-center">
            <p className="text-xs text-gray-600 font-semibold uppercase">Articles</p>
            <h2 className="text-2xl font-bold mb-1">
              Lorem ipsum sed id mauris in fusce.
            </h2>
            <p className="text-xs text-gray-500 mb-2">April 25</p>
            <p className="text-sm text-gray-700 px-4">
              Faucibus id sed. Vel bibendum malesuada augue at sed lectus tincidunt.
              Eget elementum ultrices feugiat et proin lorem.
            </p>
            <p className="text-gray-500 mt-2 underline">Read More Articles....</p>
          </div>
        </div>

        {/* Right Side - PREVIOUS EDITIONS */}
        <div className="space-y-4">
          <div>
            <p className="text-xs text-gray-600 font-semibold uppercase">Previous Editions</p>
            <h3 className="text-lg font-bold">Lorem ipsum fgg fglk sed</h3>
            <p className="text-xs text-gray-500 mb-2">April 25</p>
            <p className="text-sm text-gray-700">
              Usu tantas omittantur ut, per te modo appetere senserit. Ei ius aperiam tincidunt,
              ea sit natum iisque repudiandae. Ea nec wisi facete. Ex hinc rebum omittam his.
              Enim dolore meliore ea mea. Ius ei minim possit intellegat, an sea ornatus.
            </p>
          </div>
          <img
            src="/images/sgb.jpg"
            alt="Previous"
            className="w-full h-40 object-cover rounded"
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
