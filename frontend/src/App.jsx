import React, { useState } from 'react';
import AppRoutes from './Routes';
import NavBar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';

const App = () => {
  const [showSearch, setShowSearch] = useState(false);

  const toggleSearchBar = () => {
    setShowSearch(prev => !prev);
  };
  return (
    <div className="flex flex-col min-h-screen  bg-cover bg-center bg-no-repeat" style={{ backgroundImage: "url('/Gradient.webp')" }}>
      <NavBar onSearchIconClick={toggleSearchBar} />
      <main className="flex-grow">
        <AppRoutes showSearch={showSearch} />
      </main>
      <Footer />
    </div>
  );
};

export default App;
