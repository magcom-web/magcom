import React from 'react';
import AppRoutes from './Routes';
import NavBar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';

const App = () => {
  return (
    <div className="flex flex-col min-h-screen  bg-cover bg-center bg-no-repeat" style={{ backgroundImage: "url('/Gradient.webp')" }}>
      <NavBar />
      <main className="flex-grow">
        <AppRoutes />
      </main>
      <Footer />
    </div>
  );
};

export default App;
